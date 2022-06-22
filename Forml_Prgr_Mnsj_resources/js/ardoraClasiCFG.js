//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=11; attempts=0; attemptsMax=1;
var score=0; scoreMax=11; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Muy bien, retomando Netiqueta y formulando preguntas"; messageTime="Ups. Finalizado tu oportunidad"; messageError="Oh, oh. Recapitula tus notas"; messageErrorG="Oh, oh. Recapitula tus notas"; messageAttempts="Oh, oh. Habrá que recapitular netiqueta y formular preguntas"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["SW5pY2lhIGNvbiB1biBzYWx1ZG8=","RXNwZWNpZmljYSBsYSBwZXJzb25hIGEgcXVpZW4gdGUgZGlyaWdlcw==","QcOxYWRlIHRvZG9zIGxvcyBkZXRhbGxlcyBkZSB0dSBkdWRh","VXRpbGl6YSB1biB0b25vIGNvcnTDqXMgcGFyYSByZWRhY3RhciB0dSBwcmVndW50YS4=","VXRpbGl6YSBjb3JyZWN0YW1lbnRlIGxvcyBzaWdub3MgZGUgaW50ZXJyb2dhY2nDs24=","Q3VhbmRvIHJlY2liYXMgdW5hIHJlc3B1ZXN0YSwgdmFsw7NyYWxhIHkgYWdyYWRlY2UgZWwgYXBveW8=","Q29uc2lkZXJhIGxhcyBub3JtYXMgZGUgTmV0aXF1ZXRh","RXZpdGFyIGZyYXNlcyBjb21vICJBeXVkYSBwb3IgZmF2b3IiIG8gInRlbmdvIGR1ZGEi","RXZpdGFyIHByZWd1bnRhcyBvZmVuc2l2YXMgbyBxdWUgYXRhcXVlbg==","QXRpZW5kZSBhIGxhcyByZWdsYXMgZGUgb3J0b2dyYWbDrWEgeSBncmFtw6F0aWNhLg==","TGVlIHR1IG1lbnNhamUgYW50ZXMgZGUgcHVibGljYXJsbywgdmVyaWZpY2EgcXVlIGFwb3J0YSB1bmEgaWRlYSBjbGFyYSwgY29tcGxldGEgeSBzaW4gZXJyb3Jlcw=="];
var img_G=["","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","",""];
var n_G=["MQ==","Mg==","Mw==","NA==","NA==","NQ==","Ng==","NA==","NA==","Mw==","Ng=="];
var e_G=["Oh, oh.","Oh, oh.","Oh, oh","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh."];
var mp4_G=["","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","",""];
var alt_G=["","","","","","","","","","",""];
var txtGr=["Hola, buen día.","Estimados compañeros, Acabo de incorporarme al Módulo","He navegado en diversas áreas, pero requiero exponer algunos detalles sobre mi situación académica","¿Podría alguno de ustedes indicarme cómo contactar al Tutor?","Les agradeceré su apoyo.","Un saludo cordial. Yair Romero Juárez. Estudiante T005"];
var imgGr=["","","","","",""];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. Recapitula tus notas";
var dirMedia="Forml_Prgr_Mnsj_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Rm9ybWxfUHJncl9NbnNq"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
