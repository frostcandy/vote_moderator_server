//-------------------------------------------------------------------------
// Some CSS
var style = document.createElement('style');
style.innerHTML = '' + 
  '*{margin:0;padding:0;}'+
  '.noselect{-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}'+
  '.floatleft{float:left;margin-left: 10px;}'+
  '.floatright{float:right;margin-left: 10px;}'+
  '.centertext{text-align:center;}'+
  'p1{font-size: 13px;}'+
  '.p1{font-size: 14px;}'+
  '.p2{font-size: 16px;}'+
  '.c1{color: #333333;}'+
  '.c2{colot: #4C4C4C;}'+
  'h1{}'+
  'h2{}'+
  'h3{color:#929292;}'+
  '.ex{color:#333; font-size:14px;}'+
  '.frost{color:#84BBEC;}'+
  '.candy{color:#EC84E9;}'+
  '.code{ padding: 20px; border-radius: 10px; background-color:#fff; border: 1px solid #333; color:#333; font-size: 14px; }'+
  '.hide{display:none !important;}'+
  '.tog1{background-color:#FFF;}'+
  '.tog2{background-color:#ECF6FF;}'+
  '.cgood {color:#46DE1F; font-weight: bold; font-size: 14px;}'+
  '.cbad  {color:#DE1F1F; font-weight: bold; font-size: 14px;}'+
  '.title_blue_default{ color:#6BB5F5; }'+

  'optional{font-size:12px; color:#DE8C1F;}'+
  '.leftfieldname{width: 300px !important; margin-right:10px; }'+
  '.smallinfo{font-size:12px; color:#DE7D1F;}'+
  '.smallinfodark{font-size:12px; color:#7B7B7B;}'+
  '.overhide{overflow:hidden;padding:0px 10px 18px 10px;}'+
  '.width100{width: 100%;}'+
  '.center{text-align:center;}'+
  '.bolditalic{font-weight:bold; font-style: italic;font-size:16px;}'+
  '.bold{font-weight:bold;font-size:16px;}'+
  '.divunder{border-bottom: 1px dashed #929292;margin-bottom:10px;}'+
  '.div_spacer_10>div{margin: 10px;}'+
  '#content_box{padding-bottom: 250px;}'+
  '.boxshadow{ -webkit-box-shadow: 3px 3px 15px 5px rgba(0,0,0,0.75); box-shadow: 3px 3px 15px 5px rgba(0,0,0,0.75); }'+
  '.sline{margin-bottom: 6px; border-bottom: 1px dashed #999;}'+

  '.quietscroll::-webkit-scrollbar{ display: none; }'+
  '.quietscroll{-ms-overflow-style: none; scrollbar-width: none;}'+

  'body{background-color:#EEEEEE; font-family: "Courier New", monospace; font-size:16px; margin-bottom: 100px; min-width: 1000px; }'+

  '#searchit_div{ display: inline-block; color:#fff; floatright; margin: 0px 10px; }'+
  '#searchit{ padding: 4px; margin: 2px; border: 1px solid #000; background-color:#E8F3FF; }'+

  '.btn,.btnred,.btngrey,.btnorange,.btno2{margin: 0px 10px; border-radius:4px;display:inline-block;cursor:pointer; font-size:13px;font-weight:bold;padding:6px 12px;text-decoration:none;}'+
  '.btn:active,.btnred:active,.btngrey:active,.btnorange:active,.btno2:active{position:relative;top:1px;}'+
  '.btn{box-shadow: 0px 10px 14px -7px #3e7327;background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);background-color:#77b55a;border:1px solid #4b8f29;color:#ffffff;text-shadow:0px 1px 0px #5b8a3c;}' +
  '.btn:hover{ background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);background-color:#72b352;}' + 

  '.btnred{box-shadow: 0px 10px 14px -7px #732727;background:linear-gradient(to bottom, #b35959 5%, #b35252 100%);background-color:#b35959;border:1px solid #8f2929;color:#ffffff;text-shadow:0px 1px 0px #8a3e3e;}'+
  '.btnred:hover{background:linear-gradient(to bottom, #b35252 5%, #b35959 100%);background-color:#b35252;}'+
  '.btngrey{box-shadow: 0px 10px 14px -7px #ffffff;background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);background-color:#ededed;border:1px solid #dcdcdc;color:#777777;text-shadow:0px 1px 0px #ffffff;}'+
  '.btngrey:hover{background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);background-color:#dfdfdf;}'+
  '.btnorange{box-shadow: 0px 10px 14px -7px #ECC314;background:linear-gradient(to bottom, #ffed64 5%, #ffed64 100%);background-color:#ffed64;border:1px solid #ffab23;color:#000000;text-shadow:0px 1px 0px #ffed66;}'+
  '.btnorange:hover{background:linear-gradient(to bottom, #ffed64 5%, #ffed64 100%);background-color:#ffed64;}'+
  '.btno2{background:linear-gradient(to bottom, #B8DEFF 5%, #68B9FF 100%);background-color:#B8DEFF;border:1px solid #365B13;color:#000000;}'+
  '.btno2:hover{background:linear-gradient(to bottom, #B8DEFF 5%, #68B9FF 100%);background-color:#68B9FF;}'+
  '.btnact{cursor:pointer;}'+
  '.beGrey{background:linear-gradient(to bottom, #C18015 5%, #C18015 100%);background-color:#C18015;border:1px solid #191919;color:#FFF;}'+

  '#myPopBlk{display:none; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color:#000; background-color: rgba(0, 0, 0, .8); z-index:49; }'+
  '#myPop{ display: none; position:fixed; top: 0; left: 50%; transform: translateX(-50%); width: 400px; min-height: 120px; padding:10px; border: 1px solid #333; background-color:#FFFFE2; z-index:50; overflow: hidden; }'+
  '#myPop > form > div{margin: 10px 0px;}'+
  '#popup_other_div{display:none;}'+


  '#vote_has_ended{ display: none; color:#6BB5F5; font-weight: bold; }'+
  '#button_end_vote{ display: none; }'+
  '#errnote{ position: fixed; display: none; opacity:0; border-top: 1px solid #000; bottom: 0px; left: 0px; width: 100%; padding: 10px; background-color:#FFD5D4; overflow: hidden; z-index: 55;}'+
  '#errtext{float: left;}'+
  '.errclose{float: right; border-radius: 10px; width: 20px; height: 20px; background-color:#fff; border: 2px solid #000; margin: 0px 20px; line-height: 17px; text-align: center; cursor:pointer;}'+
  '.errclose:hover{background-color:#FFF0B0;}'+
  '.errclose:active{position:relative;top:1px;}'+
  '.errclose:after{display:inline-block;content:"\\00d7";font-weight:bold; font-size: 18px;}'+
  '.hasError{background-color:#FFD5D4 !important;}'+
  '.note{ background-color:#E8FFD2 !important; }'+

  '#fc_header{padding: 10px; background-color:#333;border: 1px solid #000; overflow: hidden;}'+
  '.fc_logo{float: left; font-weight:bold;}'+
  '.fc_logo>span:nth-child(1){color:#E0E0E0;}' +
  '.fc_logo>span:nth-child(2){color:#84BBEC;}' +
  '.fc_logo>span:nth-child(3){color:#EC84E9;}' +
  '.fc_logo>span:nth-child(4){color:#E0E0E0;}' +

  '#top_menu{float: right;margin-right:10px;}'+
  '#top_menu>div{float: right;}'+

  '#content_center{ display: block; position: relative; max-width: 800px; margin: 20px auto; }'+
  '.ctog0{background-color: #F3FAFF;}'+
  '.ctog1{background-color: #F4F4F4;}'+

  '#set_password{ margin: 20px; }'+
  '#voter_box     { text-align: center; }'+
  '#voter_box>div { text-align: left; }'+
  '.didreset{ color:#A90918; font-weight: bold; }'+

  '#voter_box_list{display: inline-block; position: relative; border: 1px solid #333; width: 440px; height: 570px; background-color:#FFF; border-radius:10px; margin: 10px; overflow: hidden; }'+
  '#voter_box_list_head{position: absolute; top: 0px; left: 0px; text-align: right; height: 30px; width: 100%; border-radius: 10px 10px 0px 0px; background-color:#333; border-bottom: 1px solid #000; overflow: hidden; padding: 3px 0px; }'+
  '#voter_box_list_head .btno2 { font-size: 12px !important; }'+
  '.voter_box_list_who_denied{ display: inline-block; font-size: 11px; color:#DE9013; }'+

  '#voter_box_list_items{margin-top: 30px; padding: 10px; overflow-y: auto; overflow-x: hidden; height: 510px; }'+
  '#voter_box_list .btn:hover{ background:linear-gradient(to bottom, #007817 5%, #007817 100%); background-color:#007817; border: 1px solid #02510D; /*background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);background-color:#72b352;*/}' + 
  '.new_voter_list_item_name{ margin: 5px; padding: 5px; border: 1px solid #777; font-size: 14px !important; overflow:hidden; }'+
  '.new_voter_list_item_name:hover{ background-color:#FFFFE2; }'+
  '.voter_box_list_data1{font-size: 14px; font-weight: bold;}'+
  '.voter_box_list_data2{font-size: 11px;}'+

  '#vba_name{ font-weight: bold; }'+
  '#vba_v{ background-color:#FFFFE2; font-weight: bold; border-top: 1px dashed #9B9B00; border-bottom: 1px dashed #9B9B00; padding: 3px 0px; margin: 5px 0px; }'+


  '#voter_box_approval{display: inline-block; position: relative; border: 1px solid #333; width: 440px; height: 570px; background-color:#FFF; padding: 0px; overflow-y: auto; overflow-x: hidden; border-radius:10px; margin: 10px;}'+
  '.new_voter_list_item_img{ display: block; width: 250px; max-height: 200px; margin: 10px auto; border: 1px solid #000; cursor: pointer; }'+

  '#voter_button_options{position: absolute; top: 0px; left: 0px; text-align: right; height: 30px; width: 100%; border-radius: 10px 10px 0px 0px; background-color:#333; border-bottom: 1px solid #000; overflow: hidden; padding: 3px 0px; }'+
  '#voter_button_options .btnred, #voter_button_options .btno2 {font-size: 12px !important; }'+
  '#voter_option_data{margin-top: 30px; padding: 10px;}'+

  '#voter_results_box{display: none; }'+
  '.vote_number_checks{ width: 60px; padding: 4px 6px; }'+

  '#archive_voter_show_type_div { display: inline-block; width: 60px;  }'+
  '#archive_voter_show_type     {}'+


  '.verify_user_number_div{ overflow: hidden; margin: 10px; }'+
  '.verify_user_number_input{ width: 150px; font-size: 14px; padding: 4px 6px; background-color:#F6FBFF; }'+
  '.verify_user_number_button{}'+


  '#end_ballot_container{display: block; position: relative; margin-top: 50px; padding: 10px; font-size: 14px; border: 1px solid #333; background-color:#fff; border-radius: 10px; }'+

  '.ballot_option_total_title{ background-color:#333; color:#fff; padding: 6px; }'+
  '#ballot_output_totals{ }'+
  '.ballot_output_totals_div{ margin: 10px; padding: 10px; }'+
  '.ballot_output_totals_items{ margin: 10px 0px; overflow: hidden; }'+
  '.ballot_output_totals_runner{float: left;}'+
  '.ballot_output_totals_number{float: right;}'+

  '#ballot_output_ballot_list{ margin: 40px 10px 20px 10px; border-top: 3px solid #333; }'+
  '.ballot_output_ballot_list_item{ padding: 10px; overflow: hidden; }'+
  '.ballot_output_ballot_list_item_choice{  }'+


  '.form_default_css{display: block; position: relative; padding: 10px; border: 1px solid #333; background-color:#FFFFFF; border-radius:10px; margin: 40px 0px;}'+
  '.form_default_css>div{margin: 6px;}'+
  '.form_default_css p{ font-size: 20px; }'+
  '.form_default_css input,.form_default_css select{padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}'+
  '.form_soft_css select{padding: 6px 10px; margin: 4px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}'+
  '.form_soft_css input{padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}'+
  '.form_soft_css textarea{padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; width: 90%; height: 100px; }'+
  '.form_bittxtarea_css textarea{ width: 98%; min-width: 350px; height: 150px; padding:10px; }'+
  '.field_col1{ display: inline-block; width: 90px; }'+


  '.modal{display:none; position: fixed; z-index: 1000; padding-top: 50px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgb(0,0,0,0.9); }'+
  '.modal-content{margin: auto; display: block; width: 80%; max-width: 700px; }'+
  '.modal-close{position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold;}'+
  '.modal-close:hover, .modal-close:focus{color: #bbb; text-decoration:none; cursor: pointer;}'+
  '@media only screen and (max-width: 700px){.modal-content { width: 100%; } }'+


  '::placeholder{          color: #D2D2D2; opacity: 1;}'+
  ':-ms-input-placeholder{ color: #D2D2D2;}'+
  '::-ms-input-placeholder{color: #D2D2D2;}'+

  '.form_default_css>div>div{display: inline-block; width: 100px;}'+

  '';
var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);


//-------------------------------------------------------------------------
// Hold my coffee while I whip up a discount JQuery
$ja = []; $jao = []; $ja2=[]; $jao2 = [];
class $${
  constructor(eleID){ if(typeof eleID === 'undefined'){ return this;} this.eleID = eleID; this.eleObj = []; if( eleID.charAt(0)=='#' ){this.eleObj[0] = document.getElementById(eleID.substring(1)); }else if( eleID.charAt(0)=='.' ){this.eleObj = document.getElementsByClassName(eleID.substring(1));} else{return false;} }
  show(){ this.runAction('show'); return this; }
  hide(){ this.runAction('hide'); return this; }
  fadeIn(){ this.runAction('fadeIn'); return this; }
  fadeOut(){ this.runAction('fadeOut'); return this; }
  addClass(s){ this.runAction('addClass',s); return this; }
  removeClass(s){ this.runAction('removeClass',s); return this; }
  hasClass(s){ if( this.eleObj[0].classList.contains(s) ){ return true; } return false; }
  isChecked(s){ if(typeof s !== 'undefined'){ this.eleObj[0].checked = s; return this; } else { return this.eleObj[0].checked; } }
  val(s) { if(typeof s !== 'undefined'){this.eleObj[0].value = s;       return this; } else { return (this.eleObj[0]==null)?'':this.eleObj[0].value; }       }
  text(s){ if(typeof s !== 'undefined'){this.eleObj[0].textContent = s; return this; } else { return this.eleObj[0].textContent; } }
  data(s,r){ if(typeof r !== 'undefined'){this.eleObj[0].setAttribute('data-'+s,r); return this; } else { return this.eleObj[0].getAttribute('data-'+s); } }
  attr(s,r){ if(typeof r !== 'undefined'){this.eleObj[0].setAttribute(s,r); return this; } else { return this.eleObj[0].getAttribute(s); } }
  serialize(o,s){var c=this.eleObj[0].querySelectorAll('input, select, textarea, button');
    for(var i=0;i<c.length;i++){
      if(c[i].id&&document.getElementById(c[i].id).value!==undefined){
        if(!s||startsWith(c[i].id,s)){ if(c[i].type != 'checkbox' || c[i].checked ){ o[c[i].id] = c[i].value; } }
      }
    }
  }
  click(doFunc){ if(doFunc && doFunc!==''){this.runAction('click', doFunc);}else{ document.getElementById(this.eleID).click(); } return this; }
  change(doFunc){ this.runAction('change', doFunc); return this; }
  unclick(){ for(var i=0;i<$jao.length;i++){ try{ $jao[i].removeEventListener('click',$jao[i]); }catch(e){} } $jao = []; }
  unchange(){ for(var i=0;i<$jao2.length;i++){ try{ $jao2[i].removeEventListener('change',$jao2[i]); }catch(e){} } $jao2 = []; }
  html(htm){ this.runAction('html',htm); }
  runAction(action, meta1){
    // Store Selectors and functions for clickable content to reuse when HTML changes are made
    if( action == 'click' ){
      var ifound = false;
      if($ja.length>0){ for(var i=0;i<$ja.length;i++){ if($ja[i][0]==this.eleID){ifound=true;} } }
      if(ifound===false){$ja.push([this.eleID, meta1]);}
    }
    if( action == 'change' ){
      var ifound = false;
      if($ja2.length>0){ for(var i=0;i<$ja2.length;i++){ if($ja2[i][0]==this.eleID){ifound=true;} } }
      if(ifound===false){$ja2.push([this.eleID, meta1]);}
    }
    // Handle actions
  	for(var i=0;i<this.eleObj.length;i++){
      var s = this.eleObj[i]!=null ? this.eleObj[i].style : null;
  		switch(action) {
  		    case 'show':
      				s.display="block"; s.opacity=1;
  		        break;
  		    case 'hide':
  		    		s.display="none";
  		        break;
          case 'fadeIn':
              s.display="block"; s.opacity = 0; s.transition = '0.8s'; setTimeout( function fo(){s.opacity = 1.0;}, 10);
              break;
          case 'fadeOut':
              s.opacity = 1; s.transition = '1s'; s.opacity = 0; setTimeout( function fo(){s.display='none';}, 1000);
              break;
          case 'addClass':
              this.eleObj[i].classList.add(meta1);
              break;
          case 'removeClass':
              var co = this.eleObj.length; this.eleObj[ i ].classList.remove(meta1); if(co !== this.eleObj.length){i--;}
              break;
          case 'click':
              // Store element objects to remove event listeners when HTML changes are made
              var ifound = false;
              if($jao.length>0){ for(var ii=0;ii<$jao.length;ii++){ if($jao[ii]==this.eleObj[i]){ifound=true;} } }
              if(ifound===false){$jao.push([this.eleObj[i]]);}

              if( this.eleObj[i]!=null ){ this.eleObj[i].addEventListener("click",  meta1); }
              break;
          case 'change':
              // Store element objects to remove event listeners when HTML changes are made
              var ifound = false;
              if($jao2.length>0){ for(var ii=0;ii<$jao2.length;ii++){ if($jao2[ii]==this.eleObj[i]){ifound=true;} } }
              if(ifound===false){$jao2.push([this.eleObj[i]]);}

              if( this.eleObj[i]!=null ){ this.eleObj[i].addEventListener("change",  meta1); }
              break;
  		    case 'html':
              this.unclick();this.unchange();
              this.eleObj[i].innerHTML = stripScripts(meta1);
              // Rebuild all clickable actions for newly created HTML
              for( var ii=0;ii<$ja.length;ii++ ){ var tempObj = new $$($ja[ii][0]).click($ja[ii][1]); }
              for( var ii=0;ii<$ja2.length;ii++ ){ var tempObj = new $$($ja2[ii][0]).change($ja2[ii][1]); }
  		    	  break;
  		    default:
  		} //End Switch
	  } // End For eleObj array
  } // End runAction
  post(doc,callback,obj,event){
    closeErr(1);
    var x = new XMLHttpRequest();
    x.onreadystatechange = function(){ 
      if(this.readyState == 4 && this.status == 200){
        var d = JSON.parse( scriptClean(this.responseText) );
        if (d.e != '') { doErr(d.e); return false;}
        if (d.ask != ''){ storepass = d.ask; }
        if( typeof callback === 'function'){ callback( d, event, this); } 
      } 
    }
    x.open("POST", 'ajax/' + doc, true);
    x.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    x.send(JSON.stringify( obj ));
  }
}
function $(eleID){ if( typeof eleID === 'object' ){ eleID = '#'+eleID.id; } return new $$(eleID);}

errTimeout = null;
function doErr(d,t){
  closeErr(1); var s = ''; $('#errnote').removeClass('note');
  errTimeout = setTimeout(function(){ closeErr() }, 10000);
  if(t==1){ $('#errnote').addClass('note'); }
  $('#errtext').text(d); $('#errnote').fadeIn();
}
function closeErr(t){ clearTimeout(errTimeout); $('.hasError').removeClass('hasError'); t==1?$('#errnote').hide():$('#errnote').fadeOut(); } 
function scriptClean(s){return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function cleaner(s){  return (s).replace(/[^a-zA-Z ]/g, ""); }
function noH(s){ return s.replace(/&/g, "").replace(/</g, "").replace(/>/g, "").replace(/'/g, "").replace(/"/g, "").replace(/`/g, "").replace(/~/g, ""); }

// Even though only the administrators write to the vote page we should still do some sanaty checks to remove scripts from injected html.
function stripScripts(s) {var div = document.createElement('div'); div.innerHTML = s; var scripts = div.getElementsByTagName('script'); var i = scripts.length; while (i--) { scripts[i].parentNode.removeChild(scripts[i]); } return div.innerHTML;}

function titleCase(s){if(typeof s == 'undefined' || s.trim() == ''){return '';}return s.trim().split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');}
function shorts(s,n){if(typeof s == 'undefined'){return '';}return s.substring(0,n); }
function calculateAge(bd){ var birthday = +new Date(bd); return ~~((Date.now() - birthday) / (31557600000)); }


//-------------------------------------------------------------------------
// Initialization on page load
var autocall;
var storepass = '';
var selected_main_opiton = '#call_type_new';

var end_ballot_totals      = []; // The ballot totals
var end_ballot_meta_data   = {}; // The end ballot meta data
var end_ballot_array       = {}; // The end ballot data
var end_voter_data         = []; // The end voter data



function init(){
  $('.mimg').click(function(){ $("#myModal").show(); $("#img01").attr("src", $(this).attr("src") );  });
  $(".modal-close").click(function(){ $('#myModal').hide(); });

  $('.errclose').click(function(){ closeErr(1); });


  document.getElementById("searchit").addEventListener("keyup", function(e){
    var s_val = noH($(this).val()).trim();
    var s_item = document.getElementsByClassName("s_item");
    for (var i = 0; i < s_item.length; i++) {
      if( s_val == '' || $(s_item.item(i)).data('parts').includes( s_val ) ){ $(s_item.item(i)).removeClass('hide'); } else { $(s_item.item(i)).addClass('hide'); }
    }
  });
  document.getElementById("searchit").addEventListener("keydown", function(e){ if(e.keyCode === 13){ event.preventDefault(); $(this).val(''); } return false; });


  $('#set_password_button').click(function(e){ setpassword(e); });
  $('#button_end_vote').click( function(){
    var proceed = confirm("Ending the vote can not be undone, are you sure?");
    if (proceed) { $().post('call_new', voter_action_end_vote,  { "pkey":storepass, "a":"1000" } ); }
  });



  $('#voter_button_reset').click( function(){ $('#myPopBlk').show(); $('#myPop').show().html(''+
      '<form onsubmit="return false;">'+
      '<div><span class="bold">RESET -</span> Are you sure you want to let this voter try to vote again?</div>'+
      '<div> <div id="popup_cancel" class="btnred noselect floatright">Cancel</div> <div id="popup_submit" data-k="'+ $(this).data('k') +'" data-t="resetvoter" class="btn noselect floatright">Submit</div> </div>'+
      '</form>'+
    ''); 
  });


  $('#voter_button_blockip').click( function(){ $('#myPopBlk').show(); $('#myPop').show().html(''+
      '<form onsubmit="return false;">'+
      '<div><span class="bold">BLOCK -</span> Why block this ip?</div>'+
      '<div id="popup_select_div"><SELECT id="popup_select">'+
          '<OPTION VALUE=""></OPTION>'+
          '<OPTION VALUE="SPAM">SPAM</OPTION>'+
          '<OPTION VALUE="HackAttempt">Hack Attempt</OPTION>'+
          '<OPTION disabled VALUE="">---------</OPTION>'+
          '<OPTION VALUE="other">Other</OPTION>'+
      '</SELECT></div>'+
      '<div id="popup_other_div">Enter Reason:<br> <input type="text" id="popup_other"/></div>'+
      '<div> <div id="popup_cancel" class="btnred noselect floatright">Cancel</div> <div id="popup_submit" data-k="'+ $(this).data('k') +'" data-t="blockip" class="btn noselect floatright">Submit</div> </div>'+
      '</form>'+
    ''); 
  });
  $('#voter_button_deny').click(    function(){ $('#myPopBlk').show(); $('#myPop').show().html(''+
      '<form onsubmit="return false;">'+
      '<div><span class="bold">DENY -</span> Why deny this voter?</div>'+
      '<div id="popup_select_div"><SELECT id="popup_select">'+
          '<OPTION VALUE=""></OPTION>'+
          '<OPTION VALUE="InformationMismatch">Information Mismatch</OPTION>'+
          '<OPTION VALUE="AlreadyVoted">Already Voted</OPTION>'+
          '<OPTION VALUE="InvalidVID">Invalid Voter ID</OPTION>'+
          '<OPTION VALUE="InvalidPhoto">Invalid Photo</OPTION>'+
          '<OPTION VALUE="InvalidName">Invalid Name</OPTION>'+
          '<OPTION VALUE="InvalidAddress">Invalid Address</OPTION>'+
          '<OPTION VALUE="InvalidDOB">Invalid DOB</OPTION>'+
          '<OPTION VALUE="InvalidEmail">Invalid Email</OPTION>'+
          '<OPTION VALUE="InvalidPhone">Invalid Phone</OPTION>'+
          '<OPTION VALUE="InvalidTag">Invalid Tag</OPTION>'+
          '<OPTION VALUE="InvalidExtra">Invalid Extra</OPTION>'+
          '<OPTION disabled VALUE="">---------</OPTION>'+
          '<OPTION VALUE="other">Other</OPTION>'+
      '</SELECT></div>'+
      '<div id="popup_other_div">Enter Reason:<br> <input type="text" id="popup_other"/></div>'+
      '<div> <div id="popup_cancel" class="btnred noselect floatright">Cancel</div> <div id="popup_submit" data-k="'+ $(this).data('k') +'" data-t="denyvote" class="btn noselect floatright">Submit</div> </div>'+
      '</form>'+
    '');
  });
  $('#voter_button_accept').click(  function(){ $('#myPopBlk').show(); $('#myPop').show().html(''+
      '<form onsubmit="return false;">'+
      '<div>Are you sure you want to approve this voter?</div>'+
      '<div> <div id="popup_cancel" class="btnred noselect floatright">Cancel</div> <div id="popup_submit" data-k="'+ $(this).data('k') +'" data-t="approvevote" class="btn noselect floatright">Submit</div> </div>'+
      '</form>'+
    ''); 
  });
  $('#popup_select').change(function(){ if( $(this).val() == 'other' ){ $(this).hide(); $('#popup_other').val(''); $('#popup_other_div').show(); } else { $('#popup_other').val( $(this).val() ); } });
  $('#popup_submit').click(         function(){
    closeErr(1);
    if($(this).data('t') == 'blockip'){
      if( typeof $('#popup_other').val() == 'undefined' || $('#popup_other').val() == ''){ doErr('You must enter a reason.'); return false; }
        $().post('call_new', voter_action_modify_vote,  { "pkey":storepass, "a":"10", "k":$(this).data('k'), "r":$('#popup_other').val() } );
    } else if($(this).data('t') == 'denyvote'){
      if( typeof $('#popup_other').val() == 'undefined' || $('#popup_other').val() == ''){ doErr('You must enter a reason.'); return false; }
        $().post('call_new', voter_action_modify_vote,  { "pkey":storepass, "a":"11", "k":$(this).data('k'), "r":$('#popup_other').val() } );
    } else if($(this).data('t') == 'approvevote'){
        $().post('call_new', voter_action_modify_vote,  { "pkey":storepass, "a":"12", "k":$(this).data('k') } );
    } else if($(this).data('t') == 'resetvoter'){
        $().post('call_new', voter_action_modify_vote,  { "pkey":storepass, "a":"13", "k":$(this).data('k') } );
    }



    $('#myPop').hide().html(''); 
    $('#myPopBlk').hide(); 
  });
  $('#popup_cancel').click(function(){ $('#myPop').hide().html(''); $('#myPopBlk').hide(); });

  // Refresh page or add a button to restart the call process.
  $('#call_type_new').click(      function(){ $('#voter_box_approval').html(''); selected_main_opiton='#call_type_new'; start_autocall(0 ); doErr("Pulling new vote events.",1);      });
  $('#call_type_accept').click(   function(){ $('#voter_box_approval').html(''); selected_main_opiton='#call_type_accept'; start_autocall(12); doErr("Pulling accepted vote events.",1); });
  $('#call_type_deny').click(     function(){ $('#voter_box_approval').html(''); selected_main_opiton='#call_type_deny'; start_autocall(11); doErr("Pulling denied vote events.",1);   });
  $('#call_type_blocked').click(  function(){ $('#voter_box_approval').html(''); selected_main_opiton='#call_type_blocked'; start_autocall(10); doErr("Pulling new vote events.",1);      });

  // ----------------------------------------------------------
  // After Vote Ends
  //$('#call_type_archive').click(  function(){ $('#voter_box_approval').html(''); selected_main_opiton='#call_type_archive';
        //$().post('call_old', show_vote_archive,  { "pkey":storepass, "a":"10", "page":"0" } );
  //});


  $('.verify_user_number_button').click(  function(){ 
    $().post('vote_check', vote_check,  { "pkey":storepass,  a:1, k:$(this).data('k'), s:$('#verify_user_id_'+$(this).data('k')).val(), p:$(this).data('pub'), r:$(this).data('rnd') } );
  });

  $('#switch_to_voters').click( function(){
    $('#voter_results_box').hide();
    $('#voter_box').show();
    $('#searchit_div').show(); $('#searchit').val(''); $('#voter_box_approval').html('');
  });
  $('#switch_to_ballots').click( function(){
    $('#voter_box').hide();
    $('#voter_results_box').show();
    $('#searchit_div').hide(); $('#searchit').val(''); $('#voter_box_approval').html('');

  });

  $("#vote_number_check_button").click( function(){  
    tk_id = $('#vote_number_check1').val().toUpperCase() + '-' +
        $('#vote_number_check2').val().toUpperCase() + '-' +
        $('#vote_number_check3').val().toUpperCase() + '-' +
        $('#vote_number_check4').val().toUpperCase() + '-' +
        $('#vote_number_check5').val().toUpperCase() + '-' +
        $('#vote_number_check6').val().toUpperCase() + '-' +
        $('#vote_number_check7').val().toUpperCase();

    if( $('#vote_number_check1').val() == '' ){
      $('#ballot_output_totals').show();
      $('.ballot_output_ballot_list_item').show();
    }else{
      $('#ballot_output_totals').hide();

    var mclass = document.getElementsByClassName("ballot_output_ballot_list_item");
    for (var i = 0; i < mclass.length; i++) {
      if( $(mclass[i]).data('k') != tk_id ){
          $(mclass[i]).hide();
        }
    }
    for(i=1;i<=7;i++){ $('#vote_number_check'+i).val(''); }
    }
  });

  $('#archive_voter_show_type').change( function(){
    var s_val = $(this).val();
    var s_item = document.getElementsByClassName("s_item");
    for (var i = 0; i < s_item.length; i++) {
      if( s_val == '0' || $(s_item.item(i)).data('atype').includes( s_val ) ){ $(s_item.item(i)).removeClass('hide'); } else { $(s_item.item(i)).addClass('hide'); }
    }
  });



}

function start_autocall(ty){
  clearInterval(autocall);
  // If the vote has ended, no reason to check for new voters.
  if( passvar.vote_ended == "1" ){ return false; }
  // Call Vote Server every (x) seconds and pull new voters.
  $().post('call_new', call_new, { "pkey":storepass, "a":"2", "t": ty.toString() } );
  if(ty==0){
    // Not sure we need to pull 1000's of denied and blocked every x seconds. Instead maybe we let the user re-click the deny or blocked ip button.
    autocall = setInterval(function(){ $().post('call_new', call_new, { "pkey":storepass, "a":"2", "t": ty.toString() } ); }, (passvar.refsec*1000) );
  }
}
function setpassword(e){ e.preventDefault(); $().post('check_pass',check_pass,{"pkey":$('#serverpass').val()});$('#serverpass').val(''); }
function manage_new(k){ $().post('call_new', manage_new_response, { "pkey":storepass, "a":"3", "k":k } ); }

function manage_old(k){ fetch('./voters/'+k+'.vtr').then(res => res.json()).then(data => manage_old_response(data) ); }



//-------------------------------------------------------------------------
// AJAX Callbacks
function check_pass(d, e, o){
  // Quick Server Check & Initial Voter Pull
  if( d.e == '' ){
    $('#set_password').hide();
    if( passvar.vote_ended == "1" ){ vote_has_ended(); } else{ $('#button_end_vote').show(); }
    $('.hide').removeClass('hide');
    start_autocall(0);
  }
}
function call_new(d, e, ol){
  var a = d.o.a;
  var o = '';
  if(d.o.e !=='undefined' && d.o.e == 'vote_ended'){ vote_has_ended(); doErr('Vote Complete!',1); }
  for(var i=0;i<a.length;i++){
    var u = a[i].u;
    var ctog = (ctog=='ctog0')?'ctog1':'ctog0';
    var oi = '';
    for(var ii=0;ii<a[i].apl.length;ii++){
      oi += '<div class="voter_box_list_who_denied">[ &#10004; '+ shorts(a[i].apl[ii][2], 4) + ' - ' + shorts(a[i].apl[ii][1], 25)+' ]</div><br>';
    }
    o += '<div id="s_item_'+i+'_'+ii+'" class="s_item new_voter_list_item_name new_voter_list_item_name_'+a[i].k+' '+ctog+'" data-parts="' + noH(u.fn + ' ' + u.ln + ' ' + u.v + ' '  + u.zi + ' '  + u.st + ' ' + u.str + ' ' + u.e + ' ' + u.p) +'">' + 
        '<div class="voter_box_list_data1">' + shorts(titleCase(u.fn) + ' ' + titleCase(u.ln),25) + ' <span class="floatright">[' + shorts(u.v,16) + ']</span></div>'+
        '<div class="voter_box_list_data2">' + shorts(u.zi.toUpperCase() + '('+u.st.toUpperCase()+')' + ' ' + titleCase(u.str) ,40) + '</div>'+
        oi+
        '<div onClick="manage_new('+a[i].k+');return false;" class="manage_new btn floatright noselect" data-k="'+a[i].k+'">Manage</div>'+
      '</div>';
  }
  if(d.e != ""){
    clearInterval(autocall);
  }
  set_voter_box_list(o);
}
function set_voter_box_list(o){
  $('#voter_box_list').html( '<div class="new_voter_list_item">'+
      '<div id="voter_box_list_head">'+
        '<div title="Show New Votes" id="call_type_new" class="btno2 noselect">NEW</div>'+
        '<div title="Show Accepted Votes" id="call_type_accept" class="btno2 noselect">ACCEPTED</div>'+
        '<div title="Show Denied Votes" id="call_type_deny" class="btno2 noselect">DENIED</div>'+
        '<div title="Show Blocked Votes" id="call_type_blocked" class="btno2 noselect">BLOCKED</div>'+
      '</div>'+
      '<div id="voter_box_list_items" class="quietscroll">' + o + '</div>'+
    '</div>');
  $('.beGrey').removeClass('beGrey'); $(selected_main_opiton).addClass('beGrey');
}

function manage_new_response(d, e, o){
  var a = d.o.a;
  var button_out = '';
  if( $('#call_type_new').hasClass('beGrey') ){
    button_out = '<div id="voter_button_blockip" data-k="'+a[0].k+'" class="btnred noselect">Block IP</div>'+
      '<div id="voter_button_deny" data-k="'+a[0].k+'" class="btnred noselect">Deny</div>'+
      '<div id="voter_button_accept" data-k="'+a[0].k+'" class="btno2 noselect">Accept</div>';
  }
  var didreset = (a[0].ap == '13') ? '<span class="didreset">(reset)</span> ':'';
  if( $('#call_type_deny').hasClass('beGrey') && didreset == '' ){
    button_out = '<div id="voter_button_reset" data-k="'+a[0].k+'" class="btnred noselect">Reset Voter</div>';
  }


  $('#voter_box_approval').html(''+
    '<div id="voter_button_options">'+
      button_out +
    '</div>'+
    '<div id="voter_option_data">'+
      '<div id="vba_name" class="p2 c2 vba_infodata">'+ titleCase(a[0].u.ln) + ', ' + titleCase(a[0].u.fn) + ' ' + titleCase(a[0].u.mn) +
        ' <div class="floatright p1 c1">' + a[0].u.bm + '/' + a[0].u.bd + '/' + a[0].u.by + ' (' + calculateAge(a[0].u.bm +'/'+ a[0].u.bd +'/'+ a[0].u.by) + ')</div>' +
      '</div>'+
      '<div id="vba_str" class="p1 c1 vba_infodata">'+ titleCase(a[0].u.str) + ' ' + titleCase(a[0].u.str2) + '</div>'+
      '<div id="vba_ci" class="p1 c1 vba_infodata sline">'+ titleCase(a[0].u.ci) + ', ' + a[0].u.st.toUpperCase() + '&nbsp;&nbsp;' + a[0].u.zi.toUpperCase() + ' ' + a[0].u.co.toUpperCase() + '</div>'+
      '<div id="vba_e" class="p1 c1 vba_infodata"><div class="field_col1">Email: </div>'+ a[0].u.e + '</div>'+
      '<div id="vba_p" class="p1 c1 vba_infodata"><div class="field_col1">Phone: </div>'+ a[0].u.p + '</div>'+
      '<div id="vba_v" class="p1 c1 vba_infodata"><div class="field_col1">Voter ID: </div>'+ didreset + a[0].u.v + '</div>'+
      '<div id="vba_t" class="p1 c1 vba_infodata"><div class="field_col1">Tag: </div>'+ a[0].u.t.toUpperCase() + '</div>'+
      '<div id="vba_x" class="p1 c1 vba_infodata"><div class="field_col1">Extra: </div>'+ a[0].u.ex + '</div>'+

      '<div id="vba_pic"><img id="voter_img_id_'+a[0].k+'" class="new_voter_list_item_img mimg" src="'+a[0].p+'"></div>'+

    '</div>'+

  '');

}

function voter_action_modify_vote(d,e,o){
  $('#voter_box_approval').html('');
  selected_main_opiton = '#call_type_new';
  setTimeout(function(){ doErr(d.o,1); }, 700);
  start_autocall(0);
}
function voter_action_end_vote(d,e,o){
  $('#voter_box_approval').html('');
  $('#button_end_vote').hide();
  if( d.o == 'vote_ended' ){ doErr('Vote Ended - Processing Totals', 1); } else { doErr( d.o ); }
}


function vote_check(d,e,o){
  var imatch = '<span class="cbad">( NO MATCH )</span>';
  if( $( '#verify_user_number_button' + d.k ).data('chk') == d.o ){ imatch = '<span class="cgood">( MATCH )</span>' }
  $( '#vote_check_match_div' + d.k ).html( d.o + ' ' + imatch ); 

}



//-------------------------------------------------------------------------
// After Vote Ended Area

function manage_old_response(d){
  var a = []; a.push(d);
  var button_out = '<div class="title_blue_default floatleft">Vote Ended</div>';
  var didreset = 'unknown';
  switch(a[0].ap){
    case 10:
      didreset = 'Blocked';
      break;
    case 11:
      didreset = 'Denied';
      break;
    case 12:
      didreset = 'Accepted';
      break;
    case 13:
      didreset = 'Reset';
      break;
    default:
      didreset = 'unknown';
  }
  didreset = '&nbsp;&nbsp;<span class="didreset">(' +didreset+ ')</span>';

  $('#voter_box_approval').html(''+
    '<div id="voter_button_options">'+
      button_out +
    '</div>'+
    '<div id="voter_option_data">'+
      '<div id="vba_name" class="p2 c2 vba_infodata">'+ titleCase(a[0].u.ln) + ', ' + titleCase(a[0].u.fn) + ' ' + titleCase(a[0].u.mn) +
        ' <div class="floatright p1 c1">' + a[0].u.bm + '/' + a[0].u.bd + '/' + a[0].u.by + ' (' + calculateAge(a[0].u.bm +'/'+ a[0].u.bd +'/'+ a[0].u.by) + ')</div>' +
      '</div>'+
      '<div id="vba_str" class="p1 c1 vba_infodata">'+ titleCase(a[0].u.str) + ' ' + titleCase(a[0].u.str2) + '</div>'+
      '<div id="vba_ci" class="p1 c1 vba_infodata sline">'+ titleCase(a[0].u.ci) + ', ' + a[0].u.st.toUpperCase() + '&nbsp;&nbsp;' + a[0].u.zi.toUpperCase() + ' ' + a[0].u.co.toUpperCase() + '</div>'+
      '<div id="vba_e" class="p1 c1 vba_infodata"><div class="field_col1">Email: </div>'+ a[0].u.e + '</div>'+
      '<div id="vba_p" class="p1 c1 vba_infodata"><div class="field_col1">Phone: </div>'+ a[0].u.p + '</div>'+
      '<div id="vba_v" class="p1 c1 vba_infodata"><div class="field_col1">Voter ID: </div>'+ a[0].u.v + didreset +'</div>'+
      '<div id="vba_t" class="p1 c1 vba_infodata"><div class="field_col1">Tag: </div>'+ a[0].u.t.toUpperCase() + '</div>'+
      '<div id="vba_x" class="p1 c1 vba_infodata"><div class="field_col1">Extra: </div>'+ a[0].u.ex + '</div>'+

      '<div id="vba_pic"><img id="voter_img_id_'+a[0].k+'" class="new_voter_list_item_img mimg" src="'+a[0].p+'"></div>'+
    '</div>'+
  '');
}

function archive_list_voters(){
  var o = '';
  for(var i=0;i<end_voter_data.length;i++){
    var u = end_voter_data[i].u;
    var ctog = (ctog=='ctog0')?'ctog1':'ctog0';
    var oi = '';
    for(var ii=0;ii<end_voter_data[i].apl.length;ii++){
      oi += '<div class="voter_box_list_who_denied">[ &#10004; '+ shorts(end_voter_data[i].apl[ii][2], 4) + ' - ' + shorts(end_voter_data[i].apl[ii][1], 25)+' ]</div><br>';
    }
    o += '<div id="s_item_'+i+'_'+ii+'" class="s_item new_voter_list_item_name new_voter_list_item_name_'+end_voter_data[i].k+' '+ctog+'" data-atype="'+end_voter_data[i].ap+'" data-parts="' + noH(u.fn + ' ' + u.ln + ' ' + u.v + ' '  + u.zi + ' '  + u.st + ' ' + u.str + ' ' + u.e + ' ' + u.p) +'">' + 
        '<div class="voter_box_list_data1">' + shorts(titleCase(u.fn) + ' ' + titleCase(u.ln),25) + ' <span class="floatright">[' + shorts(u.v,16) + ']</span></div>'+
        '<div class="voter_box_list_data2">' + shorts(u.zi.toUpperCase() + '('+u.st.toUpperCase()+')' + ' ' + titleCase(u.str) ,40) + '</div>'+
        oi+
        '<div onClick="manage_old('+end_voter_data[i].k+');return false;" class="manage_old btn floatright noselect" data-k="'+end_voter_data[i].k+'">Manage</div>'+
      '</div>';
  }
  return o;
}


function set_end_ballot_meta_data(d){
  end_ballot_meta_data = d;
  var t1 = (end_ballot_meta_data.hasOwnProperty('t1') && end_ballot_meta_data.t1) ? end_ballot_meta_data.t1 : '';
  $("#vote_details_opening_block").text(t1);
}
function set_end_voter_data(d){
  end_voter_data  = d;
  loadContent_vote_archive();
}

// Vote Ended Screen
function vote_has_ended(){ 
	passvar.vote_ended == "1";                     // Let Javascript know the vote is over.
	clearInterval(autocall);                       // Disable future calls to vote server
	$('#button_end_vote').hide(); $('#vote_has_ended').show(); 
  $('#voter_box').hide();
  $('#voter_results_box').show();
  $('#searchit_div').hide(); $('#searchit').val(''); $('#voter_box_approval').html('');

  selected_main_opiton     = '#call_type_archive';

  end_ballot_meta_data     = {};
  fetch('./voters/ballots.bld').then(res => res.json()).then(data => set_end_ballot_meta_data(data) );

  loadContent_vote_ended();
  end_ballot_array         = {};
  fetch('./voters/ballots.blt').then(res => res.json()).then(data => set_ballot_info(data) );
  end_voter_data           = ["dog"];
  fetch('./voters/voter.vti'  ).then(res => res.json()).then(data => set_end_voter_data(data) );


}
function loadContent_vote_archive(){
  var o = archive_list_voters();

  $('#voter_box_list').html( '<div class="new_voter_list_item">'+
      '<div id="voter_box_list_head">'+
        '<div id="call_type_archive" class="title_blue_default floatleft">'+
            'VOTERS <span id="call_type_archive_voter_total">('+end_voter_data.length+')</span> '+
            '<div id="archive_voter_show_type_div"><form>'+
                 '<SELECT id="archive_voter_show_type">'+
                      '<OPTION VALUE="0">ALL</OPTION>'+
                      '<OPTION VALUE="12">ACCEPTED</OPTION>'+
                      '<OPTION VALUE="11">DENIED</OPTION>'+
                      '<OPTION VALUE="10">BLOCKED</OPTION>'+
                      '<OPTION VALUE="13">RESET</OPTION>'+
                  '</SELECT>'+
            '</form></div>'+
        '</div>'+
        '<div title="Show Ballots" id="switch_to_ballots" class="btnorange floatright noselect">Ballots</div>'+

      '</div>'+
      '<div id="voter_box_list_items" class="quietscroll">' + o + '</div>'+
    '</div>');
}




function vote_number_multi_hop(o){
  // Example Code: 2D68D2-81A469-32F7B1-DC9038-9B4E1E-BC4531-836230
  if( $(o).val().length > 6 ){
    var s = ($(o).val().replace(/-/g,'')).match(/.{1,6}/g);
    for(var i = 0; i<s.length; i++){
      if(i>6){break;}
      $('#vote_number_check'+ parseInt(i+1) ).val( s[i] );
    }
    document.getElementById("vote_number_check1").blur();
  }
}
function set_ballot_info(d){
  d = d.a;
  end_ballot_array  = d;
  end_ballot_totals = [];

  // Prase out the object - saved some golang coding
  for(i=0;i<d.length;i++){ d[i].c = JSON.parse( d[i].c ); }
  // Sanatize data
  for(i=0;i<d.length;i++){
    for(i2=0;i2<d[i].c.op.length;i2++){
      for(i3=0;i3<d[i].c.op[i2].ct.length;i3++){
        d[i].c.op[i2].ct[i3] = cleaner(d[i].c.op[i2].ct[i3].toLowerCase());
      }
    }
  }

  // Each ballot i
  for(i=0;i<d.length;i++){
    var i_ballot = d[i].c.op;
    // Each ballot option ii
    for(i2=0;i2<i_ballot.length;i2++){
      var i2_ballot_options = i_ballot[i2].ct;

      // Set initial option selection for totals
      if( end_ballot_totals[i2] === undefined ){
        end_ballot_totals[i2]      = [];
        for(i3=0;i3<i2_ballot_options.length;i3++){
           end_ballot_totals[i2].push( [ i2_ballot_options[i3], 1 ] ); 
        }
        continue;
      }

      // Each ballot selected option iii
      for(i3=0;i3<i2_ballot_options.length;i3++){
        // Each updated ballot total
        var ichanged = false;
        for(i4=0;i4<end_ballot_totals[i2].length;i4++){
          if( i2_ballot_options[i3] == end_ballot_totals[i2][i4][0] ){
            end_ballot_totals[i2][i4][1]++;
            ichanged = true;
            break;
          }else if( i2_ballot_options[i3] < end_ballot_totals[i2][i4][0] ){
            end_ballot_totals[i2].splice( i4, 0, [ i2_ballot_options[i3], 1 ] );
            ichanged = true;
            break;
          }
        }
        if(!ichanged){ end_ballot_totals[i2].push( [ i2_ballot_options[i3], 1 ] ); }
      }
    }
  }

  // Create the output (Might address the number of for loops at some point)
  var tog = 'tog2';
  var top_total_votes = 0;
  var o = '<div id="ballot_output_totals">';
  for(i=0;i<end_ballot_totals.length;i++){
    tog = tog=='tog2'?'tog1':'tog2';
    o += '<div class="ballot_output_totals_div '+tog+'">';
        var o2 = '';
        var total_votes = 0;
        for(i2=0;i2<end_ballot_totals[i].length;i2++){
          o2 += '<div class="ballot_output_totals_items">';
               o2 += '<div class="ballot_output_totals_runner">'+end_ballot_totals[i][i2][0]+'</div>';
               o2 += '<div class="ballot_output_totals_number">'+end_ballot_totals[i][i2][1]+'</div>';
          o2 += '</div>';
          total_votes = total_votes + end_ballot_totals[i][i2][1];
          top_total_votes = top_total_votes + end_ballot_totals[i][i2][1];
        }
      o += '<div class="ballot_option_total_title">Option '+(i+1)+' - Total Votes: '+total_votes+'</div>' + o2;
    o += '</div>';
  }
  o += '</div><div id="ballot_output_ballot_list"><div>List of Ballots:</div>';
  tog = 'tog2';
  for(i=0;i<end_ballot_array.length;i++){
    tog = tog=='tog2'?'tog1':'tog2';
    o += '<div id="ballot_output_ballot_list_item'+i+'" class="ballot_output_ballot_list_item '+tog+'" data-k="'+end_ballot_array[i].k+'">';
        o += '<div>'+end_ballot_array[i].k+'<div id="vote_check_match_div'+i+'"></div></div>';
        for(i2=0;i2<end_ballot_array[i].c.op.length;i2++){
            o += '<div class="ballot_output_ballot_list_item_choice">'+(i2+1)+') '+ end_ballot_array[i].c.op[i2].ct.join(', ') +'</div>';
        }
        o += '<div class="verify_user_number_div">';
             o += '<div class="floatleft"><input id="verify_user_id_'+i+'" class="verify_user_number_input" type="password"/></div>';
             o += '<div id="verify_user_number_button'+i+'" data-k="'+i+'" data-pub="'+end_ballot_array[i].c.pub+'" data-chk="'+end_ballot_array[i].c.chk+'" data-rnd="'+end_ballot_array[i].c.rnd+'" class="verify_user_number_button btn floatright">Verify ME</div>';

        o += '</div>';
    o += '</div>';
  }
  o += '</div>';

  $('#ballot_totals_totalcount').text( end_ballot_array.length );
  $('#top_total_votes').text( top_total_votes );
  $('#end_ballot_list').html( o );
}
function loadContent_vote_ended(){
  $('#voter_results_box').show();

  $('#voter_results_box').html(
    '<div id="content_center" class="div_spacer_10">'+
      '<div id="vote_section_1" class="vote_sections">'+
        '<div>This vote has been completed.</div>'+
          '<div> <div id="vote_details_opening_block"></div> </div>'+
          '<div><br><br>'+
            '<div>Enter your vote code to verify your vote.</div>'+
            '<div id="vote_number_check_container">'+
              '<form>'+
                '<input type="text" id="vote_number_check1" class="vote_number_checks" placeholder="XXXXXX" maxlength=48 oninput="vote_number_multi_hop(this);" /><span>-</span>'+
                '<input type="text" id="vote_number_check2" class="vote_number_checks" placeholder="XXXXXX" maxlength=6 /><span>-</span>'+
                '<input type="text" id="vote_number_check3" class="vote_number_checks" placeholder="XXXXXX" maxlength=6 /><span>-</span>'+
                '<input type="text" id="vote_number_check4" class="vote_number_checks" placeholder="XXXXXX" maxlength=6 /><span>-</span>'+
                '<input type="text" id="vote_number_check5" class="vote_number_checks" placeholder="XXXXXX" maxlength=6 /><span>-</span>'+
                '<input type="text" id="vote_number_check6" class="vote_number_checks" placeholder="XXXXXX" maxlength=6 /><span>-</span>'+
                '<input type="text" id="vote_number_check7" class="vote_number_checks" placeholder="XXXXXX" maxlength=6 />'+
              '</form>'+
            '</div>'+
            '<div id="vote_number_check_button" class="btn noselect floatright">Continue</div>'+
          '</div>'+
      '</div>'+
      '<div id="end_ballot_container">'+
          'Total Ballots: <span id="ballot_totals_totalcount"></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total Votes: <span id="top_total_votes"></span> <div id="switch_to_voters" class="btnorange floatright noselect">Show Voters</div>'+
          '<div id="end_ballot_list">'+
          '</div>'+
      '</div>'+
    '</div>'
  );

  $('#vote_section_1').show();
}

