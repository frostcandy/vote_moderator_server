# vote.FrostCandy.com
Secure Trustworthy Online Voting for All

YOU ARE VIEWING THE MODERATOR SERVER README FILE

Version: 0.9 - While this software has been tested to be working properly it should be considered a first order template until I get more people testing.

# CONTEXT:
  - VOTE SERVER         : the server that hosts the vote for voters to place their vote.
  - MODERATOR SERVER    : The backend server moderators and watchers use to moderate and view vote actions
  - VOTERS              : this is the person who places the vote from their phone or comptuer
  - SOFTWARE TECHNICIAN : this is someone or a team of people trusted to set up the servers.
  - MODERATOR           : this person has the ability to accept or deny voters trying to place their vote.
  - VALIDATOR           : Same as moderator
  - WATCHER             : this person can watch the live vote happen, but can not affect it. 
  - ADMINISTRATOR       : this person sets up the vote meta data like ballot options and descriptions.


# LINKS:
  - PROMOTIONAL VIDEO       : [ https://youtu.be/1FOVIkmeAJ8 ]

  - VOTE SERVER CODE        : [ https://github.com/frostcandy/vote_server ]
  - MODERATOR SERVER CODE   : [ https://github.com/frostcandy/vote_moderator_server ]
  - DEMO                    : [ https://vote.FrostCandy.com ]
  - Overview Video          : [ https://youtu.be/t7JgCVaiXPA ] 
  ---- The overview is not great, i'm not trying to sell anything just explain.

# CONTACT:
  - Email                   : help (AT) frostcandy.com
  - Discord                 : https://discord.gg/JrqWW6uqGg   ( Use channel software # vote )

# SUPPORT/DONATION:
  - My vote software will always be completely free to download and use. Your financial support will buy me more time to work on this project and other tools. I haven't set up any practical way to accept your support, so for now if you wish to make a donation you can use the donate button on my passbank software
  https://passbank.frostcandy.com/
  - Or just paypal your freind Frost some cash at the email address:  pay (AT) frostcandy.com 



# ABOUT:
  - The FrostCandy moderator software works in tandom with the vote server. This moderator server will pull vote data from the vote server periodically in real time for the moderators and watchers to adjust or view incoming information. 

  Moderators will match an incoming voters voter ID with the one they have on record, they will match all agreed upon voter data like country, city, state, age to be proper. They will check that the voters photo clearly shows the voter holding a proper date for the day of the vote. If the party moderator agrees the voter has passed the checklist, the moderator approves the voter and the ballot will be cast. (This is similar to checking that the mail in ballot has the proper data)

  Should the moderator find an issue with the voter they can deny the voter. That voters vote will not be counted. If a moderator wants to allow that voter another chance to vote they can reset the voter in question. That voter must then vote again and will be re-submitted for the moderators to validate again.

  Each interested party can have multipul moderators. If your precinct expects 1000 voters, each party could have 10 moderators, each servicing 100 votes.

  For a voter to be counted one member from each interested party must approve the voter. It only takes one interested partys moderator to deny a voter, and it only takes one moderator to reset a voter. 

  Each moderator will have the ability to ACCEPT, DENY, or BLOCK IP of the voter. A member from each interested party must accept a voter before their ballot will be processed. 

  When a moderator from each interested party ends the vote, everyones moderator server will build a copy of all voters and ballots. 

  Voters are issued a 7 segment code generated with a password of that voters choosing. That voter can go to their perfered and trusted party to verify that their vote matches the vote they placed. 

  Votes are not tied to the voter once a voter has been approved to vote. The voter can however verify that their vote is accurate as only they know what their 7 segment code is, and how to rebuild it.


# VOTE SERVER FILE STRUCTURE:  
  certs/   
    fc_api_key.bin       - Binary file holding moderator or watchers credentials (created on first proper login)  
    fc_api_key.pub       - This is where you place the API key code you generated on the vote server.  
    frostcandy_vote.crt  - This is the ssl/tls site certificate. (allows https - you may want to tell your browser to trust it)  
    frostcandy_vote.key  - The ssl/tls site key  
  html/  
    index.html           - The initial html document for the moderator website.   
  js/  
    vote.js              - This is where all the user interaction for the website happens. HTML/CSS/LANGAUGE/FORMS   
  voters/                (NOTE you can copy this folder at any time as a personal backup for audits)   
    n.vtr                - The voter file. The number (n) corresponds to the voters vote server id.  
    ballots.bld          - The ballot meta data   
    ballots.blt          - All voters ballots   
    lastmodified.cht     - Last time we polled the vote server for new information.   
    voter.end            - Tells the moderator server that the vote has ended and not to call it anymore.  
    voter.vti            - This is an index of the voter files (simple file based database)  
  conf.json              - The configuration file the moderator or watcher should manage.   
  favicon.ico            - The favicon, generally seen in browser near address bar.  
  frostcandy_vote        - The executable moderator software. Start like this ./frostcandy_vote  
  frostcandy_vote.exe    - future feature if we want to bother making a windows version   
  frostcandy_vote.go     - The Go code for the vote software, if you wanted to rebulit it not trusting the executable.  
  LICENSE                - Basic licensing  
  README.md              - The file you are reading now  
  

# CONFIG SETUP:  
  -- Copy conf.json.tmp to conf.json  
  -- The moderator server reads from the conf.json file  
  
  "Frostcandy_server"  : Put the url of the VOTE SERVER here. Ex: "https://MyPrecinct.com"  
  "This_server_port"   : The MODERATOR SERVER IP and PORT     Ex: "192.168.1.9:9008"  
  "This_server_pass"   : Come up with a password              Ex: "password"  
    - If you are untrusting, leave it empty and start your server by typing it each time  
    - Ex: ./frostcandy_vote password  
  "Refresh_seconds"    : The number of seconds it takes to re-poll the vote server Ex: "60"  
  "Nperpage"           : Number displayed per page - future feature default: 100  
  "Allow_remove"       : Def: 1, if the vote is still live and you restart this server the voter list will re-pull from the beginning.  
    - If you are really untrusting, you should be able to set this to 0, then if you have a power failure the data you have won't be   
    - overwritten.   


# My Build

Install FrostCandy Moderator Server
--> sudo git clone https://github.com/frostcandy/vote_moderator_server.git vote_moderator

# Config
    You can start your moderator server like this:
    Ex: ./frostcandy_vote 9008 MyPassWord

    The port (default 443) will become 9008 in the example above.
    The password will be MyPassWord

    If you trust no unwanted people will have access to your computer you can put the server port and server password in your config file so as not to type them every time you start the software.

# The certs directory
    - To Create new certificates ( frostcandy_vote.crt frostcandy_vote.key )
    - This will let you connect securely to this frostcandy_vote client server. After running the next line, copy and paste the files to your certs folder.

    - General Security without trusted authority (more compatibility) You'll see the warning for some browsers even if you install the cert.
    openssl req -x509 -nodes -newkey rsa:2048 -keyout frostcandy_vote.key -out frostcandy_vote.crt -days 3650

    - OpenSSL ??? 1.1.1 | if you install this version of the certificat you wont see the TLS handshake error | need to edit IP to your ip, Common Name (CN) and altname if you have one.
    openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout frostcandy_vote.key -out frostcandy_vote.crt -subj "/CN=example.com" -addext "subjectAltName=DNS:www.example.com,IP:192.168.10.19"

# The API Key
    - Copy the data you recieved from the VOTE SERVER and paste it in the certs/fc_api_key.pub file. 
    - When you run the software it will automatically create the fc_api_key.bin file to hold your data securly.


# Run
  - cd vote_moderator
  - ./frostcandy_vote


