package main 

/*************************************************************************
    Copyright 2020 Frost Candy
    Author: Frost Candy
    Description:

    * This is the software program people can use to collect receipts from the vote server.
    * We can afford to import a few third party tools like crypto/tls here, since anyone can compile the code and validate against other builds

    Start the webserver 
    ./frostcandy_vote

    Start webserver with specified port and encryption password
    Ex: ./frostcandy_vote 9008 MyPassWord

    The certs directory
    - To Create new certificates ( frostcandy_vote.crt frostcandy_vote.key )
    - This will let you connect securely to this frostcandy_vote client server. After running the next line, copy and paste the files to your certs folder.

    - General Security without trusted authority (more compatibility) You'll see the warning for some browsers even if you install the cert.
   	openssl req -x509 -nodes -newkey rsa:2048 -keyout frostcandy_vote.key -out frostcandy_vote.crt -days 3650

   	- OpenSSL ≥ 1.1.1 | if you install this version of the certificat you wont see the TLS handshake error | need to edit IP to your ip, Common Name (CN) and altname if you have one.
    openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout frostcandy_vote.key -out frostcandy_vote.crt -subj "/CN=example.com" -addext "subjectAltName=DNS:www.example.com,IP:192.168.10.19"

   	- Copy the data you recieved on the frostcandy_vote server and past it in the fc_api_key.pub file. 
   	- When you run the software it will automatically create the fc_api_key.bin file to hold your data securly.

   	The conf.json file
   	- Use this file to store important connection information
    "Frostcandy_server": "https://MySite.com/vote/",   ( This is the web address people will use to place their vote )
    "This_server_port":  "9008",                       ( This is the port you want to use for this webserver to connect with )
    "This_server_pass":  "MyPassword"                  ( This is the password used for this webserver to encrypt and decrypt your secure file information )

	This_server_port - defualt is 443 the generic browser ssl port (You are self signing the cert, so you might get a warning about not being trusted, but it is secure)
	This_server_pass - You can leave this blank for greater security, but then you need to start your server with the password: ./frostcandy_vote MyPassword




    Secure Trustworthy Online Voting for All
*************************************************************************/


import (
    "os"
    "log"
    "net/http"
	"net/url"
    "fmt"
    "bytes"
    "strings"
    "strconv"
    "io"
    "io/ioutil"
    "path/filepath"
    "encoding/json"
    "time"
    "math"
    m "math/rand"
    "crypto/tls"
	"crypto/aes"
	"crypto/md5"
    "crypto/sha256"
    "crypto/cipher"
    "crypto/rand"
    "encoding/hex"
	//"bufio"
	// b64 "encoding/base64"
)


type Configuration struct {
    Frostcandy_server	string // conf.json file - server location: https://myserver.com , 192.168.1.22, https://vote.MyServer.co:777
    This_server_port   	string // conf.json file - This servers listening port Default 443
    This_server_pass   	string // conf.json file - Only use this if you don't want the extra security of holding your password in your head with a startup argument.
    Refresh_seconds     string // conf.json file - This dictates the number of seconds until the next pull of voters. Default every 10 seconds.
    Nperpage            int    // conf.json file - This tells us how many archives to show at once. Default 100
    Allow_remove        int    // conf.json file - When you start the server, this will allow the software to remove voters in your voters file if no voter.end file is found.
}

type Voters struct {
    Voter               []Voter `json:"a"`   // Voters 
}
type Voter struct {
    Vkey                string  `json:"k"`   // Voter Key 
    Vl                  int     `json:"l"`   // Voter Last Modified
    Vval                string  `json:"j"`   // Voter JSON data 
}

type Oldvoterdata struct {
    Pages               int        `json:"p"`
    Data                []string   `json:"d"`
}

type Archivevotes struct {
    Key                 int                 `json:"k"`    // Voter Key
    C                   int                 `json:"c"`    // Voter Creation time
    L                   int                 `json:"l"`    // Voter Last Modified time
    Ip                  string              `json:"ip"`   // Voter IP address
    Apl                 [][]interface{}       `json:"apl"`  // APList moderators
    Ap                  int                 `json:"ap"`   // 1 Approved 0 Not approved
    U                   Vusers              `json:"u"`    // Vote user information 
    B                   string              `json:"b"`    // Ballot information - we dont store this here
    P                   string              `json:"p"`    // Voter Photo 
}
type Vusers struct {
    Fn                 string              `json:"fn"`    // Voter First Name 
    Ln                 string              `json:"ln"`    // Voter Last Name 
    Mn                 string              `json:"mn"`    // Voter Middle Name 
    Co                 string              `json:"co"`    // Voter Country  
    St                 string              `json:"st"`    // Voter State 
    Ci                 string              `json:"Ci"`    // Voter City 
    Zi                 string              `json:"zi"`    // Voter Postal Code 
    Str                string              `json:"str"`   // Voter Street Address 
    Str2               string              `json:"str2"`  // Voter Street Address 2
    Bm                 string              `json:"bm"`    // Voter Birth Month MM
    Bd                 string              `json:"bd"`    // Voter Birth Day   DD
    By                 string              `json:"by"`    // Voter Birth Year  YYYY
    P                  string              `json:"p"`     // Voter Phone Number 
    E                  string              `json:"e"`     // Voter Email Address 
    T                  string              `json:"t"`     // Voter tag (Used as a second way of matching voter to a list for eligability )
    V                  string              `json:"v"`     // Voter Identification (Primary ID for voter to match for elegability ) 
    Ex                 string              `json:"ex"`    // Voter Extra ( Third option for user verification and eligability checking. Admin can define this field ie: social security number)
}
// Posibly extend func (APlist *APlist) UnmarshalJSON(data []byte) error{ unmarshal and assign slice to struct parts }
//type APList struct {
//    Akey               string                             // Administrator Key 
//    Aname              string                             // Administrator Name 
//    Aparty             string                             // Administrator Party 
//    Atype              string                             // approved / denied / ip blocked 
//    Areason            string                             // reason for blocking or denying voter
//}


/* A few global variables */
var apipub 		string // API Public Key
var apikey      string // API Key
var seckey      string // Secret Key
var useserver   string // The FrostCandy Vote Server
var usePort     string // This servers listening port 
var usePass     string // This servers encrypt/decrypt password for the fc_api_key.pub file 
var refsec      string // Seconds until refreshing voter list
var nperpage    int    // Number per page

var   activeserverkey string   // This will be the key passed between the browser and the server to verify 
var   lastmodified    int      // The last modified time of a voter
const letterBytes     = "abcdefghijklmnopqrstuvwxyz567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234"

//func init(){
//    There is an annoying remote error from browsers, but the best way to cure is to leave it or tell the browser to trust the certificate. 
//    log.SetOutput(ioutil.Discard)
//}


/* Webserver startup */
func main() {
    usePort = "443"
    usePass = ""
    refsec  = "60"
    nperpage = 100
 
	m.Seed(time.Now().UnixNano())

    // Read any config variables
	file, _    := os.Open("conf.json")
		defer file.Close()
	decoder    := json.NewDecoder(file)
	conf       := Configuration{}
	err        := decoder.Decode(&conf)
		if err != nil {log.Fatal("JsonDecodeErr: ", err)}
	if conf.This_server_port  != ""  { usePort    = conf.This_server_port  }
    if conf.This_server_pass  != ""  { usePass    = conf.This_server_pass  }
    if conf.Refresh_seconds   != ""  { refsec     = conf.Refresh_seconds   }
    if conf.Nperpage          != 0   { nperpage   = conf.Nperpage   }

	if conf.Frostcandy_server != "" { useserver  = conf.Frostcandy_server } else { log.Fatal("\n\nYou must edit your config file (conf.json) to tell me the location of your FrostCandy Vote Server.\nEx: 192.168.1.104 or https://MySite.com\n\n") }
	useserver = strings.TrimRight(useserver, "/") + "/"

    // Handle incoming port and password options in any order - Pass can not be numeric. 
    p1 := true 
    if len(os.Args) > 1 { if _, err := strconv.ParseInt(os.Args[1], 10, 0); err != nil { p1 = false } }
    if len(os.Args) == 2{
        if p1 { usePort = os.Args[1] } else { usePass = os.Args[1] }
    } else if len(os.Args) == 3{
        if p1{
            usePort = os.Args[1]            
            usePass = os.Args[2] 
        } else {
            usePort = os.Args[2]            
            usePass = os.Args[1] 
        }
    }


    // On server start up, assuming there is no voter.end file to tell us the vote is complete, and our config Allow_remove is set to 1, then reset voter.vtr files.
    if _, err := os.Stat("voters/voter.end"); os.IsNotExist(err) { if conf.Allow_remove == 1 { deleteFilesWithExtention(".vtr"); deleteFilesWithExtention(".cht");  } }


    if( usePass == "" ){ log.Fatal("You must provide a password for encryption and decryption. Either in your config.ini file or as an argument when running the program. Ex: ./frostcandy_vote MyPassword") }

    fmt.Print("\n*************** FROSTCANDY VOTE ADMINISTRATION ***************\n")
    fmt.Print("--- The frostcandy_vote software will accept two arguments\n")
    fmt.Print("--- 1) The port you wish to serve this administration software on:\n")
    fmt.Print("---    ./frostcandy_vote 443 (default 443)\n")
    fmt.Print("--- 2) The password you want to use to store your FrostCandy Vote \n")
    fmt.Print("---    passcode you copied to certs/fc_api_key.pub\n")
    fmt.Print("---    ./frostcandy_vote MyPassword 443\n")
    fmt.Print("--- 3) Both arguments are optional and can be used in any order, your \n")
    fmt.Print("---    password must contain at least one letter\n")
    fmt.Print("---\n")
    fmt.Print("--- Serving on Address:Port > "+usePort+"\n")
    fmt.Print("****************\n\n")

    // Read Plaintext API Key file 
    plaintext, err := ioutil.ReadFile("certs/fc_api_key.pub")
    if err != nil { log.Fatal(err) }
    plaintext = bytes.TrimSpace( plaintext )
    if len(plaintext) > 0 {
        ciphertext := asmgcm_encrypt( []byte(plaintext) )
        err = ioutil.WriteFile("certs/fc_api_key.bin", ciphertext, 0775)
            if err != nil { log.Fatal(err) }
        err = ioutil.WriteFile("certs/fc_api_key.pub", []byte(""), 0777)
            if err != nil { log.Fatal(err) }
    }
    // Get the API Key and API Public Key data
    ciphertext, err := ioutil.ReadFile("certs/fc_api_key.bin")
    if err == nil {
        plaintext = asmgcm_decrypt( []byte(ciphertext) ) 
        apipub    = string(plaintext[0:len(plaintext)-130])
        seckey    = string(plaintext[len(plaintext)-129:len(plaintext)-65])
        apikey    = string(plaintext[len(plaintext)-64:])
    }else{
        fmt.Print( "\n\n*********** IMPORTANT ***********\n\nYou need to copy your API Passcode found in the administration section of the FrostCandy Vote server software into the file certs/fc_api_key.pub found in the directory of this software.\n\n***************************\n\n " )
    }


    // Check if the live webserver is running
    postBody, _  := json.Marshal(map[string]string{ "a": "1"          })
	resp         := getpage( postBody )
	if( resp["d"] == "vote_server_connected" ){ fmt.Println( "\nVote Server is running and we can connect.\n" ) } else { fmt.Println( "\nWe can not connect to the Vote Server.\n" ) }

    mux := http.NewServeMux()
    mux.HandleFunc("/js/"          , getjs           )
    mux.HandleFunc("/"             , getvote         )
    mux.HandleFunc("/ajax/"        , doajax          )
    mux.HandleFunc("/voters/"      , votedata        )
    mux.HandleFunc("/favicon.ico"  , faviconHandler  )

    cfg := &tls.Config{
        MinVersion:               tls.VersionTLS12,
        CurvePreferences:         []tls.CurveID{tls.CurveP521, tls.CurveP384, tls.CurveP256},
        PreferServerCipherSuites: true,
        CipherSuites: []uint16{
            tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
            tls.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,
            tls.TLS_RSA_WITH_AES_256_GCM_SHA384,
            tls.TLS_RSA_WITH_AES_256_CBC_SHA,
        },
    }
    if(!strings.Contains(usePort, ":")){usePort = ":" + usePort}
    srv := &http.Server{
        Addr:         usePort,
        Handler:      mux,
        TLSConfig:    cfg,
        TLSNextProto: make(map[string]func(*http.Server, *tls.Conn, http.Handler), 0),
    }

    // Syncronize our local record of voters every 60 seconds. 
    go startUpdateVoters()

    err = srv.ListenAndServeTLS("certs/frostcandy_vote.crt", "certs/frostcandy_vote.key")
        if err != nil { log.Fatal("HTTPS SERVER: ", err) }

}

func getvote( w http.ResponseWriter, req *http.Request ){
    // fmt.Println( req.URL.Path )
    w.Header().Add("Strict-Transport-Security", "max-age=63072000; includeSubDomains")
	b := loadfilestring("html/index.html");

	vote_ended := "1"
    if _, err := os.Stat("voters/voter.end"); os.IsNotExist(err) { vote_ended = "0" }

    js := []byte(`
    	var passvar = {"refsec":`+refsec+`, "vote_ended":`+vote_ended+`};
    `)
    b = bytes.Replace(b, []byte("<js>"), js, 1)
	w.Write( b )
}
func getjs( w http.ResponseWriter, req *http.Request ){
    w.Header().Add("Strict-Transport-Security", "max-age=63072000; includeSubDomains")
	b := loadfilestring("js/vote.js");
	w.Write( b )
}
func votedata( w http.ResponseWriter, req *http.Request ){
    // I don't currently see a reason to hide anything in this directory, so if someone calls for it lets show it.
    http.ServeFile(w, req, req.URL.Path[1:])
}

func faviconHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "favicon.ico")
}

func doajax( w http.ResponseWriter, req *http.Request ){
    //fmt.Println( req.URL.RequestURI() )
	var o = "" 

	resBody, err := ioutil.ReadAll(req.Body)
	    if err != nil { w.Write( []byte( `{"e":"data read failure","f":"","ask":"","o":""}` ) ); return }

	var res map[string]interface{}
	err = json.Unmarshal( resBody, &res)
	    if err != nil { w.Write( []byte( `{"e":"json unmarshal error","f":"","ask":"","o":""}` ) ); return }

    // Password Verification
	if req.URL.RequestURI() == "/ajax/check_pass" {
		if res["pkey"] != usePass{ w.Write( []byte( `{"e":"Password Verification Error","f":"","ask":"","o":""}` ) ); return }
		activeserverkey = RandStringBytesRmndr(128)
		w.Write( []byte( `{"e":"","f":"","ask":"`+activeserverkey+`","o":""}` ) ); return
    }
	if res["pkey"] != activeserverkey{ w.Write( []byte( `{"e":"Permission Error","f":"","ask":"","o":""}` ) ); return }
	activeserverkey = RandStringBytesRmndr(128)

    // Do Server Handshake and run action
	if req.URL.RequestURI() == "/ajax/call_new" && res["a"] != "" {
        postBody, _ := json.Marshal(res)
		resp := getpage( postBody )

        if lastmodified == -1 {
            o = `{"e":"","f":"","ask":"`+activeserverkey+`","o":{"a":[],"c":0,"e":"vote_ended"} }` 
        } else {
	        if resp != nil && resp["d"] != nil && resp["d"] != "" {
	            jstring, _ := json.Marshal( resp["d"] )
	            o = `{"e":"","f":"","ask":"`+activeserverkey+`","o":` + string(jstring) + `}` 
	        }
        }
    }
    // This will pull the archived voter data
    if req.URL.RequestURI() == "/ajax/call_old" && res["a"] != "" {
        page, _ := strconv.Atoi( res["page"].(string) )
        oo := readArchivedVoters( page )
        jstring, _ := json.Marshal( oo )
        o = `{"e":"","f":"","ask":"`+activeserverkey+`","o":` + string(jstring) + `}` 
    }

    // Check Voter Code
    if req.URL.RequestURI() == "/ajax/vote_check" && res["a"] != "" {
    	check_secret  := res["s"].(string)
    	check_public  := res["p"].(string)
    	check_random  := res["r"].(string)
    	check_keypass := res["k"].(string)
    	temp_md5      := md5.New()
    	temp_md5.Write( []byte(check_secret + check_public) )
    	check_md5     := strings.ToUpper( hex.EncodeToString( temp_md5.Sum(nil) ) + check_random ) + "000000000000000000000000000000000000000000"
    	check_return  := check_md5[0:6] + "-" + check_md5[6:12] + "-" + check_md5[12:18] + "-" + check_md5[18:24] + "-" + check_md5[24:30] + "-" + check_md5[30:36] + "-" + check_md5[36:42]
        o = `{"e":"","f":"","ask":"`+activeserverkey+`","o":"` + check_return + `","k":"`+check_keypass+`"}` 
    }




    if o == "" { o= `{"e":"Server Response Failed","f":"","ask":"","o":""}`}

	w.Write( []byte(o) )
}

func getpage( p []byte ) map[string]interface{} {

    // No longer pull data if end vote file exists.
    if _, err := os.Stat("voters/voter.end"); !os.IsNotExist(err) {
        fmt.Println("\n--------Server Connection Issue--------\n")
        fmt.Println( "Vote has ended. No more calls to server will be made." )
        fmt.Println("\n--------Server Connection Issue--------\n")
        lastmodified = -1
        return nil
    }

	v := url.Values{}
	v.Set( "apikey", apikey )
	v.Add( "o"     , php_asmgcm_encrypt(string(p)) )
	resp, err      := http.PostForm(useserver + "ajax/admin_live_vote.php", v)
	   	if err != nil { log.Fatalf("An Error Occured %v", err) }
	defer resp.Body.Close()

   	resBody, err   := ioutil.ReadAll(resp.Body)
	   	if err != nil { log.Fatalln("Could not send post" + err.Error()) }

	//fmt.Println( string(p) )
   	//if len(resBody) > 100{ fmt.Println( "RBody: " + string(resBody)[:100] ) }else{ fmt.Println( "RBody: " + string(resBody) ) }
    //fmt.Println( "RBody: " + string(resBody) )


	var res map[string]interface{}
	err = json.Unmarshal( resBody, &res)
	    if err != nil { 
            // fmt.Println("Could not read post response: " + "\n" + string(resBody) + "\n" + err.Error()); 
            return nil  
        }

	if res["e"] != "" {
		fmt.Println("\n--------Server Connection Issue--------\n")
		if res["e"] == "login_not_allowed"  { fmt.Println( "Login problem on main frostcandy vote server." ) }
		if res["e"] == "post_failure"       { fmt.Println( "Failure with post data being sent." ) }
		if res["e"] == "apikey_failure"     { fmt.Println( "API Key did not match." ) }
		fmt.Println("\n--------Server Connection Issue--------\n")
		return nil
	}

    if res["ev"] == "1" {
        // The vote is ended: Call for and write vote ballot data 
        resp := getpage( []byte(`{"a":"5010"}`) )
        if resp != nil && resp["d"] != nil && resp["d"] != "" && resp["g"] != nil && resp["g"] != "" {
 
            r1, _ := json.Marshal( resp["d"] )
            err := ioutil.WriteFile("voters/ballots.blt" , []byte( r1 ), 0644)
                if err != nil { fmt.Println("Unable to write ballot file."); }
 
            r2, _ := json.Marshal( resp["g"] )
            err = ioutil.WriteFile("voters/ballots.bld" , []byte( r2 ), 0644)
                if err != nil { fmt.Println("Unable to write ballot meta data file."); }
 
            lastmodified = -1
            // Write the End Vote File
            err = ioutil.WriteFile("voters/voter.end" , []byte( res["ev"].(string) ), 0644)
                if err != nil { fmt.Println("Unable to write voter end vote file."); }

        }else{ fmt.Println("Unable to read ballot info."); }
    }


	if res["o"] == nil {
		fmt.Println( "The response object was nil." )
		return nil
	}

    //fmt.Println( "RBodyD: " + php_asmgcm_decrypt( res["o"].(string) ) )
	var res2 map[string]interface{}
	err = json.Unmarshal(  []byte( php_asmgcm_decrypt( res["o"].(string) ) ) , &res2)
	    if err != nil { log.Fatalln("Could not read response object " + err.Error()) }

    // fmt.Println( res2 )

	if res2["apikey"] == apikey { return res2 } 
	fmt.Println("We could not verify some incoming data, so we junked it.")
	return nil
}

func startUpdateVoters(){
    if( lastmodified == -1 ){ return }

	// Call every 20 seconds and pull updated voter informatoin
	modcount     := 0 // Slows database calls to manage ballot queue
    lastmodified  = 0
    lm, _ := ioutil.ReadFile("voters/lastmodified.cht")
    if lm != nil { lastmodified, _ = strconv.Atoi(string( lm )); }
    for _ = range time.Tick(time.Second * 20) {
        if( lastmodified == -1 ){ break; }
        if modcount == 5 { modcount = 0 }
        modcount++
        resp := getpage( []byte(`{"a":"5000", "t":"`+strconv.Itoa(lastmodified)+`", "m":"`+strconv.Itoa(modcount)+`"}`) )

        if resp != nil && resp["d"] != nil && resp["d"] != "" {
        var vtr Voters
        r1, _ := json.Marshal( resp["d"] )
        err   := json.Unmarshal( r1, &vtr)
            if err != nil { fmt.Println("Could not read new voter information." + err.Error()); continue; }
            // Write the voter file 
            for _, s := range vtr.Voter {
                if lastmodified < s.Vl {
                    lastmodified = s.Vl
                    err := ioutil.WriteFile("voters/lastmodified.cht" , []byte( strconv.Itoa(lastmodified) ), 0644)
                        if err != nil { fmt.Println("Unable to write time file."); continue; }
                }
                err := ioutil.WriteFile("voters/" + s.Vkey + ".vtr" , []byte(s.Vval), 0644)
                    if err != nil { fmt.Println("Unable to write voter file."); continue; }
            }
        }
        if lastmodified == -1 {
            // Vote has ended, and we have all the voter files, so let's create the full archive index.
            buildArchiveVoterList()
        }
    }
}


func buildArchiveVoterList(){
    files, err := ioutil.ReadDir("voters/")
        if err != nil { fmt.Println( "No files. " + err.Error()) }
    flen := len(files)
    vcount := 0
    var av []Archivevotes
    for i := 0; i<flen; i++{
        if strings.HasSuffix(files[i].Name(), ".vtr"){
            dat, err := ioutil.ReadFile("voters/" + files[i].Name())
                if err != nil { fmt.Println( "Read file error: " + err.Error()) }
            vcount++

            var tav Archivevotes
            err = json.Unmarshal( dat, &tav )
                if err != nil { log.Fatalln("Could not read archived object " + err.Error()) }
            tav.P = "" // No need to index the picture data
            av = append( av, tav )
        }
    }
    // Write the voter index file 
    avm, _ := json.Marshal( av )
    err = ioutil.WriteFile("voters/voter.vti" , []byte( avm ), 0644)
        if err != nil { fmt.Println("Unable to write voter index file."); }
}
func readArchivedIndividual(voter string) []byte{
    // Read a single voter information file
    dat, err := ioutil.ReadFile("voters/" + voter + ".vtr")
        if err != nil { fmt.Println( "Read voter individual file (" + voter + ") error: " + err.Error()) }
    return dat 
}
func readArchivedIndex() []byte{
    // Read the entire index file and hand it to javascript
    // At some point we may want to save memory by making sure we're under x bytes
    dat, err := ioutil.ReadFile("voters/voter.vti")
        if err != nil { fmt.Println( "Couldn not read the voter index file: " + err.Error()) }
    return dat
}
func readArchivedVoters(page int) Oldvoterdata{
    // Read from the list of archived votes from page # 
    files, err := ioutil.ReadDir("voters/")
        if err != nil { fmt.Println( "No files. " + err.Error()) }
    flen := len(files)
    var oo Oldvoterdata
    oo.Pages = int( math.Ceil( float64(flen) / float64(nperpage) ) )
    for i := (page * nperpage); i < ((page*nperpage) + nperpage); i++{
        if i >= flen{ break }
        if strings.HasSuffix(files[i].Name(), ".vtr"){
            dat, err := ioutil.ReadFile("voters/" + files[i].Name())
                if err != nil { fmt.Println( "Read file error: " + err.Error()) }
            oo.Data = append(oo.Data, string(dat) )
        }
    }
    return oo 
}



func php_asmgcm_encrypt(msg string) string { return hex.EncodeToString( asmgcm_encrypt( []byte(msg) ) ) }
func asmgcm_encrypt(msg []byte) []byte {
	key := [32]byte{} 
	if len(apikey)>2 {
		key = sha256.Sum256( []byte( seckey ) )
	}else{
		key = sha256.Sum256( []byte(usePass) )
	}
    block, err := aes.NewCipher(key[0:32])
        if err != nil { log.Fatal(err) }
    gcm, err := cipher.NewGCM(block)
        if err != nil { log.Fatal(err) }
    nonce := make([]byte, gcm.NonceSize())
	    if _, err := io.ReadFull(rand.Reader, nonce); err != nil { log.Fatal(err) }
    ciphertext := gcm.Seal(nonce, nonce, msg, nil)
    return ciphertext
}
func php_asmgcm_decrypt(msg string) string { c, _ := hex.DecodeString( msg ); return string(asmgcm_decrypt( c )) }
func asmgcm_decrypt(msg []byte) []byte {
	key := [32]byte{} 
	if len(apikey)>2 {
		key = sha256.Sum256( []byte( seckey ) )
	}else{
		key = sha256.Sum256( []byte(usePass) )
	}
    block, err := aes.NewCipher(key[0:32])
        if err != nil { log.Fatal(err) }
    gcm, err := cipher.NewGCM(block)
        if err != nil { log.Fatal(err) }
    nonce            := msg[:gcm.NonceSize()]
    ciphertext       := msg[gcm.NonceSize():]
    plaintext, err   := gcm.Open(nil, nonce, ciphertext, nil)
        if err != nil { log.Fatal(err) }
    return plaintext
}

func loadfilestring(path string) []byte {
	b, err := ioutil.ReadFile(path)
    if err != nil { b = []byte(" "); }
    return b
}

func RandStringBytesRmndr(n int) string {
    b := make([]byte, n)
    for i := range b { b[i] = letterBytes[m.Int63() % int64(len(letterBytes))] }
    return string(b)
}

func deleteFilesWithExtention(s string){
    d, err := os.Open("voters/")
      if err != nil { fmt.Println(err) }
      defer d.Close()

    fd, err := d.Readdir(-1)
        if err != nil{ fmt.Println(err) }
    for _, file := range fd {
        if file.Mode().IsRegular() {
            if filepath.Ext(file.Name()) == s {
                os.Remove( "voters/" + file.Name() )
            }
        }
    }
}

