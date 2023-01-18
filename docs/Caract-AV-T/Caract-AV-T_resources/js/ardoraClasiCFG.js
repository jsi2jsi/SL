//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=23; attempts=0; attemptsMax=1;
var score=0; scoreMax=23; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FEFCE9"; colorButton="#9EE0A8"; colorText="#000000"; colorSele="#FFD3A8";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!. Has retomado correctamente las características de 2 agentes educativos."; messageTime=""; messageError="Oh, oh. Toma con cuidado tus notas. Analiza e identifica cada aspecto."; messageErrorG="Oh, oh. Toma con cuidado tus notas. Analiza e identifica cada aspecto."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["QSB0cmF2w6lzIGRlbCBzZWd1aW1pZW50byBkZSBsYSB0cmF5ZWN0b3JpYSBkZWwgZXN0dWRpYW50ZSwgcHJvbXVldmUgZWwgZGVzYXJyb2xsbyBkZSBhY3RpdHVkZXMgeSBoYWJpbGlkYWRlcw==","SW1wbGVtZW50YSBhY2Npb25lcyBwYXJhIGxhIGludGVncmFjacOzbiBhIGxhIG1vZGFsaWRhZCBlbiBsw61uZWE=","RGUgc2VyIG5lY2VzYXJpbyB2aW5jdWxhIGFsIGVzdHVkaWFudGUgY29uIG90cmFzIMOhcmVhcyBpbnRlcm5hcyBvIGV4dGVybmFz","Rm9tZW50YSBsYSBhdXRvcmVndWxhY2nDs24geSBsYXMgZXN0cmF0ZWdpYXMgZGUgYXByZW5kaXphamUgZGVsIGVzdHVkaWFudGUu","UHJvbW92aWVuZG8gbm9ybWFzIGRlIGNvbXVuaWNhY2nDs24gIHZpcnR1YWwgeSBhc2VydGl2YSBjcmVhIHVuIGNsaW1hIGVzY29sYXIgZmF2b3JhYmxlIHBhcmEgZWwgYXByZW5kaXphamUgeSBlbCB0cmFiYWpvIGNvbGFib3JhdGl2bw==","VG9tYSBtZWRpZGFzIG9wb3J0dW5hcyBwYXJhIGlkZW50aWZpY2FyIHNpdHVhY2lvbmVzIGRlIHJpZXNnbyBhY2Fkw6ltaWNvLg==","VHJhYmFqYSBjb24gY2FkYSBlc3R1ZGlhbnRlIG8gbG8gdmluY3VsYSBhIGxhcyDDoXJlYXMgY29ycmVzcG9uZGllbnRlcy4=","RGEgc2VndWltaWVudG8gYWwgcHJvZ3Jlc28gZGVsIGdydXBvIG1lZGlhbnRlIHVuYSBzZXNpw7NuIHPDrW5jcm9uYSBhIGxhIHNlbWFuYQ==","UHJvcG9yY2lvbmEgIGFzZXNvcsOtYXMgc2Vnw7puIGxhcyBuZWNlc2lkYWRlcyBkZSBjYWRhIGVzdHVkaWFudGU=","RW1wbGVhIGRpZmVyZW50ZXMgaGVycmFtaWVudGFzIGRlIGxhIHBsYXRhZm9ybWEgcGFyYSBjb250YWN0YXIgYWwgZXN0dWRpYW50ZQ==","TGxldmEgYSBjYWJvIGRvcyBmdW5jaW9uZXMgY29uIGVsIGVzdHVkaWFudGU6IEFzZXNvcsOtYSBhY2Fkw6ltaWNhIHkgZ2VzdGnDs24gZGVsIGFwcmVuZGl6YWpl","Q29uIGJhc2UgYSBsb3Mgb2JqZXRpdm9zIGRlIGFwcmVuZGl6YWplIHkgZGVzYXJyb2xsbyBkZSBjb21wZXRlbmNpYXMgYXBvcnRhIG9yaWVudGFjacOzbiBhY2Fkw6ltaWNh","QSB0cmF2w6lzIGRlIGxvcyBFc3BhY2lvcyB2aXJ0dWFsZXMgZGUgYXByZW5kaXphamUsIG1vZGVyYSB2aWRlb2NvbmZlcmVuY2lhcw==","Q29uIGJhc2UgZW4gZWwgbWFudWFsIGRlIGV2YWx1YWNpw7NuLCBldmFsw7phIGVsIGRlc2Fycm9sbG8gZGUgY29tcGV0ZW5jaWFz","RGUgdHVzIGFjdGl2aWRhZGVzIGRlIGFwcmVuZGl6YWplLCBkYSBzZWd1aW1pZW50byB5IHJldHJvYWxpbWVudGE=","QWNvcmRlIGEgbG9zIHJlc3VsdGFkb3MgeSBjYWxpZmljYWNpb25lcywgcmV0cm9hbGltZW50YQ==","UHJvbXVldmUgbGEgaW50ZWdyYWNpw7NuIGRlbCBlc3R1ZGlhbnRlLg==","SW50cm9kdWNlIGxhcyBub3JtYXMgZGUgZnVuY2lvbmFtaWVudG8geSBkZSBjb21wb3J0YW1pZW50byA=","Q29uZHVjZSBsYSBhZ2VuZGEgcGFyYSBlbCBkZXNhcnJvbGxvIGRlbCBtw7NkdWxv","UHJvbXVldmUgbGEgY29uc3RydWNjacOzbiBkZSBhcmd1bWVudG9zIHByb3Bpb3Mu","UmVzdWVsdmUgZHVkYXMgcmVzcGVjdG8gYSBjb250ZW5pZG9zLCByZWN1cnNvcyB5IGFjdGl2aWRhZGVzIGRlIGZvcm1hIGluZGl2aWR1YWwgeSBjb2xlY3RpdmE=","Rm9tZW50YSBsYSBjYXBhY2lkYWQgZGUgYXV0b25vbcOtYSBlbiBlbCBhcHJlbmRpemFqZSBlbiBjYWRhIGVzdHVkaWFudGU=","UHJvcGljaWEgbGEgYXBsaWNhY2nDs24gZGUgY29ub2NpbWllbnRvcyB5IGhhYmlsaWRhZGVzIGFkcXVpcmlkb3MgbWVkaWFudGUgY29tZW50YXJpb3MsIGV4cGxpY2FjaW9uZXMgeSBzdWdlcmVuY2lhcw=="];
var img_G=["","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ=="];
var e_G=["Oh, oh. Ten presente analizar la característica","Oh, oh. Toma en cuenta a detalle lo que se menciona","","","","","","","","","","","","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Asesor virtual","Tutor"];
var imgGr=["0_Asesor.jpg","0_Tutor.jpg"];
var mp3Gr=["",""];
var oggGr=["",""];
var altGr=["",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. Toma con cuidado tus notas. Analiza e identifica cada aspecto.";
var dirMedia="Caract-AV-T_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Q2FyYWN0LUFWLVQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
