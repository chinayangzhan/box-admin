/*
*
* @Author : zyang@conviva.com
* @Date : 2020/4/27
* @Version : 1.0
*
*/
var _document_root="/admin/";

function fn_login(){
  pwd = document.getElementById("pwd").value;
  if(pwd.length == 0){
    alert("Input correct information!");
    return;
  }
  sessionid=getCookie("sessionid");
  var passhash = CryptoJS.MD5(pwd).toString();
  t=CryptoJS.MD5(sessionid + passhash).toString();
  url=document_root + "doLogin?t=" + t;
  content = syncRequest(url);
  var obj= JSON.parse(content);
  if(obj["Status"] == "OK"){
    //window.location.replace(document_root + user + "/");
    //window.location.reload();
    if(document.referrer.length > 0){
      window.location.href=document.referrer;
    }else{
      window.location.href=document_root + "?" + Math.random();
    }
  }else{
    alert(obj["Message"]);
  }
}

function _getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

$('#goBack').on('click', function() {
  window.history.back(-1);
});
