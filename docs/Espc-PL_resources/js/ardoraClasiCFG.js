//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=26; attempts=0; attemptsMax=1;
var score=0; scoreMax=26; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="¡Muy bien!. Tu esfuerzo en el estudio bien vale."; messageTime="Ups. Tiempo finalizado"; messageError="Oh. oh. Se requiere que tomes nota de los recursos."; messageErrorG="Oh. oh. Se requiere que tomes nota de los recursos."; messageAttempts="Ups. Tiempo concluido"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["SW5ncmVzbyBhICJNaSBDb211bmlkYWQi","QWNlcmNhIGRlIFByZXBhIGVuIEzDrW5lYSBTRVA=","UGFyYSBlc3R1ZGlhciBlbiBQcmVwYSBlbiBMw61uZWEgU0VQ","SW5zY3JpcGNpw7NuIGEgUHJlcGEgZW4gTMOtbmVhIFNFUA==","UmVjdXJzb3MgZGUgYXBveW8gYWNhZGVtaWNv","SW5mb3JtYWNpw7NuIGltcG9ydGFudGUgcGFyYSBsYSBjb211bmlkYWQ=","VGUgcGVybWl0ZSBjb25vY2VyIGxvcyByZWN1cnNvcyB5IHNlcnZpY2lvcyBkZSBsYSBwbGF0YWZvcm1h","UGFyYSBhY2NlZGVyIGEgIk1pIENhbXB1cyIsIGxvIGhhY2VzIGRlc2RlIC4uLg==","UHVlZGVzIHRyYW1pdGFyIHR1IGNyZWRlbmNpYWwgZGVzZGUgLi4u","RGVzZGUgYXF1w60gcHVlZGVzIGlkZW50aWZpY2FyIGxvcyBzZXJ2aWNpb3MgZXN0dWRpYW50aWxlcw==","QWNjZXNvIGEgcHVibGljYWNpb25lcywgZ2FjZXRhcywgcmV2aXN0YXMsIGV0Yy4=","QWNjZXNvIGEgZGlmZXJlbnRlcyByZXBlcnRvcmlvcyBkZSBsYSBsZW5ndWEgZXNwYcOxb2xhLCBpbmdsZXMsIG90cm9z","VGUgZGlyaWdlIGhhY2lhIGRpcmVjY2lvbmVzIGVsZWN0csOzbmljYXMgcGFyYSBpbnN0YWxhciBudmVnYWRvcmVzIHkgb3Ryb3Mu","UHVlZGVzIGNvbnN1bHRhciBpbmZvcm1hY2nDs24gZ2VuZXJhbCBjb21vIHR1dG9yaWFsZXMu","UG9kcsOhcyBpbmdyZXNhciBhIEJpYmxpb3RlY2FzIHZpcnR1YWxlcyBhbCBlc3RhciBkZW50cm8gZGUgLi4u","RGVzZGUgZXNlIGVzcGFjaW8gcHVlZGVzIGRpcmlnaXJ0ZSBhIGxvcyBtw7NkdWxvcyBlbiBxdWUgZXN0YXMgaW5zY3JpdEA=","Q29tcHVlc3RvIHBvciB0cmVzIMOhcmVhcywgSW5ncmVzbyBhICJNaSBBdWxhIiwgVmlzdGEgZ2VuZXJhbCBkZWwgTcOzZHVsbyB5IEJsb3F1ZXMgZGUgbmF2ZWdhY2nDs24=","RGVzZGUgZXN0ZSBlc3BhY2lvLCB0aWVuZXMgdW5hIHZpc2nDs24gZ2VuZXJhbCBkZSBsYXMgYWN0aXZpZGFkZXMgeSByZWN1cnNvcw==","RXNwYWNpbyBxdWUgY29udGllbmUgbGFzIGNvbnRlbmlkb3MgeSBhY3RpdmlkYWRlcyBxdWUgYXByZW5kZXLDoXM=","RXNwYWNpbyBkb25kZSBzZSBnZW5lcmEgZWwgaW50ZXJjYW1iaW8gZGUgaWRlYXMgcmVzcGVjdG8gYWwgYXByZW5kaXphamU=","QXF1w60gdGUgcGVybWl0ZSBkZXNhcnJvbGxhciB0dXMgY29tcGV0ZW5jaWFz","RXNwYWNpbyBkb25kZSByZWFsaXphcsOhcyB0dXMgYWN0aXZpZGFkZXMgZGUgYXByZW5kaXphamU=","THVnYXIgZG9uZGUgZW5jdWVudHJhcyBsYSBwcmVzZW50YWNpw7NuLCBsYXMgdW5pZGFkZXMgZGUgYXByZW5kaXphamUsIGxhIGV2YWx1YWNpw7NuLCBldGMu","QXF1w60gZW5jdWVudGFzIGF2aXNvcyBkZSB0dSBhc2Vzb3IgdmlydHVhbCw=","RGVzZGUgYXF1w60gcG9kcsOhcyBhY2NlZGVyIGEgbG9zIGRpc3RpbnRvcyBmb3JvcyB5IHBhcnRpY2lwYXIgZW4gZWxsb3Mu","QXF1w60gdmlzdWFsaXphcsOhcyB0dSBhdmFuY2UsIHR1IHRpZW1wbyBkZSBkZWRpY2FjacOzbiwgbG9zIHBhcnRpY2lwYW50ZXM="];
var img_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mw==","Mw==","Mw==","NA==","NA==","NA==","NA==","NA==","NA==","NA==","NA=="];
var e_G=["Oh, oh. Corrobora con tus apuntes","Oh, oh. Revisa tus apuntes","Oh, oh. Revisa tus notas.","Oh, oh. Corrobora tus notas.","Oh, oh. Revisa tus notas","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos"];
var mp4_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Portal de Prepa en Línea SEP","Mi Comunidad de aprendizaje","Mi Campus","Mi Aula"];
var imgGr=["","","",""];
var mp3Gr=["","","",""];
var oggGr=["","","",""];
var altGr=["","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh. oh. Se requiere que tomes nota de los recursos.";
var dirMedia="Espc-PL_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RXNwYy1QTA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
