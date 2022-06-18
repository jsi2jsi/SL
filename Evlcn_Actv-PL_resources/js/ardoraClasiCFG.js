//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Muy bien."; messageTime="Tiempo culminado"; messageError="Oh, oh. Erróneo"; messageErrorG="Oh, oh. Erróneo"; messageAttempts="Ups, no más intentos."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["NiBhY3RpdmlkYWRlcyBpbnRlZ3JhZG9yYXM=","VW4gcHJveWVjdG8gaW50ZWdyYWRvcg==","VW4gZm9ybyBkZSBpbnRlZ3JhY2nDs24=","SGFiaWxpZGFkZXMgc29jaW9lbW9jaW9uYWxlcw==","SW50ZXJhY2Npw7NuIGVuIHBsYXRhZm9ybWE=","QXV0b2V2YWx1YWNpw7Nu"];
var img_G=["","","","","",""];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["MQ==","MQ==","MQ==","Mg==","Mg==","Mw=="];
var e_G=["Oh oh. Incorrecto","Oh, oh. Erróneo","Oh, oh. Incorrecto","Oh, oh. Erróneo","Oh, oh. Incorrecto","Oh, oh. Incorrecto"];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var alt_G=["","","","","",""];
var txtGr=["Asesor virtual","Plataforma","Tu como estudiante"];
var imgGr=["","",""];
var mp3Gr=["","",""];
var oggGr=["","",""];
var altGr=["","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. Erróneo";
var dirMedia="Evlcn_Actv-PL_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RXZsY25fQWN0di1QTA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
