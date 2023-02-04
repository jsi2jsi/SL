//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#F0FFF7"; colorButton="#F2BFAA"; colorText="#000000"; colorSele="#FBF0D9";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!. ¿Habras tomado nota del proceder para cada tipo de  cita?"; messageTime=""; messageError="Oh, oh. El revisar a detalle el contenido, amplia nuestra comprensión"; messageErrorG="Oh, oh. El revisar a detalle el contenido, amplia nuestra comprensión"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["","","",""];
var img_G=["i_01-Tabl_Comp-tps_Citas.jpg","i_02-Tabl_Comp-tps_Citas.jpg","i_03-Tabl_Comp-tps_Citas.jpg","i_04-Tabl_Comp-tps_Citas.jpg"];
var mp3_G=["","","",""];
var ogg_G=["","","",""];
var n_G=["MQ==","Mg==","Mw==","NA=="];
var e_G=["","","",""];
var mp4_G=["","","",""];
var ogv_G=["","","",""];
var alt_G=["","","",""];
var txtGr=["Cita narrativa indirecta","Cita parentética indirecta","Cita narrativa directa","Cita parentética directa"];
var imgGr=["","","",""];
var mp3Gr=["","","",""];
var oggGr=["","","",""];
var altGr=["","","",""];
var ram_G=[-1,-1,-1,-1];
var messageErrorG="Oh, oh. El revisar a detalle el contenido, amplia nuestra comprensión";
var dirMedia="Citar-ejemplos_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Q2l0YXItZWplbXBsb3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
