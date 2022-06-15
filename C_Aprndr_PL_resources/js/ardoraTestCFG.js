//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien."; messageTime="Ups. Tiempo finalizado para la prueba"; messageError="oh, oh. Erróneo."; messageErrorG="oh, oh. Erróneo."; messageAttempts="Ups, ¿Adivinando?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q19BcHJuZHJfUEw="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cómo aprendes en Prepa en Línea SEP?","¿Que se requiere para estudiar en línea?","¿Que rutina te permite atender tu estudio en línea?"];
var answers1=["MURlY2lkZXMgbHVnYXIgeSBob3JhIHBhcmEgaW5ncmVzYXI=","MUVtcGxlYXMgdGVjbm9sb2fDrWFzIGluZm9ybcOhdGljYXM=","MUZhY2lsaXRhIGFjY2VzbyBhIGRpZmVyZW50ZXMgZnVlbnRlcw==","MVBlcm1pdGUgYXByZW5kZXIgZW4gY3VhbHF1aWVyIG1vbWVudG8=","MURlIG1hbmVyYSBjcsOtdGljYSwgYnVzY2Fyw6FzLCBhbmFsaXphcsOhcyB5IGV2YWx1YXLDoXMgaW5mb3JtYWNpw7Nu","MVRyYW5zZm9ybWFyw6FzIGluZm9ybWFjacOzbiBlbiBudWV2b3MgcHJvZHVjdG9z","MFNvbG8gZW4gbGFzIG5vY2hlcyBwdWVkZXMgaW5ncmVzYXI=","MEluZ3Jlc2FzIGEgbGEgaG9yYSBkZSBsYSBzZXNpw7NuIHNpbmNyb25h","MENvbiBsaWJyb3MgcXVlIGNvbXByYXLDqQ=="];
var answers2=["MUNvbnN0YW5jaWE=","MUVzdGFibGVjZXIgdW5hIHJ1dGluYQ==","MURlZGljYWNpw7Nu","MFNvbG8gdmVyIGxvcyB2aWRlb3M=","MEluZ3Jlc2FyIHVuYSB2ZXogYSBsYSBzZW1hbmE="];
var answers3=["MUluZ3Jlc2FyIGRpYXJpYW1lbnRlIGEgcGxhdGFmb3JtYQ==","MVJldmlzYXIgbWVuc2FqZXM=","MUVzdHVkaWFyIGxvcyByZWN1cnNvcw==","MUF0ZW5kZXIgdG9kb3MgbG9zIGVzcGFjaW9zIHBhcmEgc3VtYXIgcHVudHVhY2nDs24=","MVRlbmVyIHByZXNlbnRlIGZlY2hhcyBsw61taXRlIGRlIGVudHJlZ2E=","MUFsIHRlbmVyIGR1ZGFzLCBwcmVndW50YXIgYWwgYXNlc29yIHZpcnR1YWwgbyB0dXRvcg==","MVV0aWl6YXIgdG9kb3MgbG9zIHJlY3Vyc29zIGRpc3BvbmlibGVzIGVuIE1pIENvbXVuaWRhZA==","MFNvbG8gdmVyIGxvcyB2aWRlc28gZGUgbGFzIHNlc2lvbmVz","MFNvbG8gc2FsdWRhciBlbiBlbCBmb3Jv","MExlZXIgZGUgcsOhcGlkbw==","MENvcGlhciB5IHBlZ2FyIGluZm9ybWFjacOzbg=="];
var ans=[answers1,answers2,answers3];
var err=["Oh, oh. Corrobora los recursos.","Oh, oh. Incorrecto","Oh, oh. Es incorrecto"];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var alt=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="C_Aprndr_PL_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=1;
