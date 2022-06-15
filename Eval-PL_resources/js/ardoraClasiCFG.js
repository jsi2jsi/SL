//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFF9F9"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien"; messageTime="Ha finalizado tu tiempo para resolver"; messageError="Oh, oh. No"; messageErrorG="Oh, oh. No"; messageAttempts="Muchos intentos para adivinar"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["QXBveW8gZGUgbnVldm8gYXNlc29yIHZpcnR1YWwgeSBkZSB1biBudWV2byB0dXRvci4=","MiBzZW1hbmFzIGFsIGluaWNpbyBkZWwgbcOzZHVsbyBzaWd1aWVudGUsIA==","Y3VhbmRvIG5vIHNlIGxvZ3JhbiBsb3MgYXByZW5kaXphamVzIGVzcGVyYWRvcy4=","RHVyYW50ZSA0IHNlbWFuYXMgeSBhbCBmaW5hbA==","Q2FkYSBhY3RpdmlkYWQgIHVuIHBvcmNlbnRhamUgZGVsIHRvdGFs","QXBveW8gZW4gcsO6YnJpY2Fz","UGVybWl0ZSByZXZpc2FyIHR1IHByb2Nlc28=","Y8OzZGlnb3MgZGUgY29sb3IgZWwgZXN0YWRvIGRlIGVudHJlZ2E=","UG9ydGFmb2xpbyBkZSBldmlkZW5jaWFz","UmV0cm9hbGltZW50YWNpb24gZW4gbGEgcGFydGUgaW5mZXJpb3IgZGUgbGEgcMOhZ2luYSBkZSBsYSBhY3RpdmlkYWQ="];
var img_G=["","","","","","","","","",""];
var mp3_G=["","","","","","","","","",""];
var ogg_G=["","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mw==","Mw==","NA==","NA=="];
var e_G=["=h, ph. No.","","","","0h, 0h. No","0h, 0h.","Oh, oh","Oh, oh","Oh, oh.","Oho, oh."];
var mp4_G=["","","","","","","","","",""];
var ogv_G=["","","","","","","","","",""];
var alt_G=["---Apoyo de nuevo asesor virtual y de un nuevo tutor.","2 semanas al inicio del módulo siguiente,","cuando no se logran los aprendizajes esperados.","","","","","","",""];
var txtGr=["Periodo de recuperación, consiste en","Metodología de evaluación se basa en","El seguimiento a entregas ","Puedes revisar el proceso de tu evaluación mediante"];
var imgGr=["","","",""];
var mp3Gr=["","","",""];
var oggGr=["","","",""];
var altGr=["","Evaluación","\"Mi Avance\"","Portafolio"];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. No";
var dirMedia="Eval-PL_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RXZhbC1QTA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
