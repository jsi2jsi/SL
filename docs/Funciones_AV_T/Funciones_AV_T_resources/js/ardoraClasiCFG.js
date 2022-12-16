//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=28; attempts=0; attemptsMax=1;
var score=0; scoreMax=28; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FBEEDB"; colorButton="#A2E7EA"; colorText="#000000"; colorSele="#D9F8C2";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="¡Muy bien!. El esmero en el estudio de los recursos fortalece tu desarrollo."; messageTime=""; messageError="Oh, oh. La fortaleza proviene de redactar tus notas provenientes de los recursos."; messageErrorG="Oh, oh. La fortaleza proviene de redactar tus notas provenientes de los recursos."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["RHVyYW50ZSBwZXJpb2RvIG9yZGluYXJpbyBvIHBlcmlvZG8gZGUgcmVjdXBlcmFjacOzbiBhc2Vzb3JhIGFjYWTDqW1pY2FtZW50ZS4=","T3JpZW50YSBhbCBkZXNhcnJvbGxvIGRlIGxhcyBjb21wZXRlbmNpYXMgZGlzY2lwbGluYXJlcywgZ2Vuw6lyaWNhcyB5IHByb2Zlc2lvbmFsZXM=","SW1wbGVtZW50YSBhY2Npb25lcyBoYWNpYSBlc3R1ZGlhbnRlcyBwYXJhIGVsIGxvZ3JvIGRlIGxvcyBhcHJlbmRpemFqZXMgZXNwZXJhZG9zIGRlIGNhZGEgbW9kdWxv","Rm9tZW50YSB0dSBjYXBhY2lkYWQgZGUgYXV0b25vbcOtYSBlbiBhcHJlbmRpemFqZQ==","TWVkaWFudGUgY29tZW50YXJpb3MsIGV4cGxpY2FjaW9uZXMgeSBzdWdlcmVuY2lhcyBwcm9waWNpYSBsYSBhcGxpY2FjacOzbiBkZSB0dXMgY29ub2NpbWllbnRvcyB5IGNhcGFjaWRhZGVzIGFkcXVpcmlkYXM=","UHJvbXVldmUgdHUgcGFydGljaXBhY2nDs24gYWN0aXZhLCBlbCB0cmFiYWpvIGNvbGFib3JhdGl2byB5IGVsIGFwcmVuZGl6YWplIHNpZ25pZmljYXRpdm8=","SW5jZW50aXZhIHR1IGludGVyw6lzIHBvciBhcHJlbmRlci4=","TWVkaWFudGUgZXNwYWNpb3MgdmlydHVhbGVzIGRlIGFwcmVuZGl6YWplIG1vZGVyYSB2aWRlb2NvbmZlcmVuY2lhcw==","RXZhbMO6YSB0dXMgYWN0aXZpZGFkZXMgZW50cmVnYWRhcyBjb24gYmFzZSBhbCBsb2dybyBkZSBjb21wZXRlbmNpYXM=","QXBvcnRhIHJldHJvYWxpbWVudGFjacOzbiB5IGRhIHNlZ3VpbWllbnRvIGEgdHVzIGFjdGl2aWRhZGVzIGRlIGFwcmVuZGl6YWpl","QnVzY2EgbGEgaW50ZWdyYWNpw7NuIGRlIGVzdHVkaWFudGVzIGNvbiBkaXZlcnNvcyBjb211bmljYWRvcw==","Q29tdW5pY2Egbm9ybWFzIGRlIGZ1bmNpb25hbWllbnRvIHkgZGUgY29tcG9ydGFtaWVudG8=","TGxldmEgYSBjYWJvIGxvIHBsYW5lYWRvIHBhcmEgY2FkYSBtw7NkdWxv","UHJvbXVldmUgbGEgY29uc3RydWNjacOzbiBkZSBhcmd1bWVudG9zIHByb3Bpb3M=","UmVzdWVsdmUgZHVkYXMgZGUgZm9ybWEgaW5kaXZpZHVhbCB5IGNvbGVjdGl2YQ==","UHJvbXVldmUgZWwgZGVzYXJyb2xsbyBkZSBhY3RpdHVkZXMgeSBoYWJpbGlkYWRlcyBhIGxvIGxhcmdvIGRlIHR1IHRyYXllY3RvcmlhIGVzY29sYXI=","VmluY3VsYSBhbCBlc3R1ZGlhbnRlIGNvbiBvdHJhcyDDoXJlYXMgc2kgZXMgbmVjZXNhcmlv","QXBsaWNhIGVzdHJhdGVnaWFzIHBhcmEgbGEgaW50ZWdyYWNpw7NuIGRlbCBlc3R1ZGlhbnRlICBhIGxhIG1vZGFsaWRhZCBlbiBsw61uZWE=","QXBvcnRhIG9yaWVudGFjacOzbiBzb2Npb2Vtb2Npb25hbA==","Rm9tZW50YSBsYSBhdXRvcmVndWxhY2nDs24geSBlbCBlbXBsZW8gZGUgZXN0cmF0ZWdpYXMgZGUgYXByZW5kaXphamU=","TW90aXZhIGFsIGVzdHVkaW8gZW4gbMOtbmVh","RW5jYXJnYWRvIGRlIG9yaWVudGFjacOzbiBlZHVjYXRpdmE=","UHJvbXVldmUgdHUgcHJveWVjdG8gdm9jYWNpb25hbCB5IHByb2Zlc2lvbmFs","UHJvbXVldmUgbGEgY29tdW5pY2FjacOzbiB2aXJ0dWFsLCBhc2VydGl2YSB5IHRyYWJham8gY29sYWJvcmF0aXZvIHBhcmEgY3JlYXIgdW4gYW1iaWVudGUgZXNjb2xhciBmYXZvcmFibGU=","QXRpZW5kZSBjdWFscXVpZXIgZXZlbnR1YWxpZGFkIGFjYWTDqW1pY2EsIGFkbWluaXN0cmF0aXZhIHkgdGVjbm9sw7NnaWNh","SW1wbGVtZW50YSBhY2Npb25lcyBvcG9ydHVuYXMgaWRlbnRpZmljYW5kbyBzaXR1YWNpb25lcyBkZSByaWVzZ28gYWNhZMOpbWljbw==","RGEgc2VndWltaWVudG8gZ3J1cGFsIG1lZGlhbnRlIHVuYSBzZXNpw7NuIHZpcnR1YWwgYSBsYSBzZW1hbmE=","RW1wbGVhIGRpdmVyc2FzIGhlcnJhbWllbnRhcyBkZSBsYSBwbGF0YWZvcm1hIHBhcmEgY29udGFjdGFyIHkgYXNlc29yYXIgYSBlc3R1ZGlhbnRlcw=="];
var img_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg=="];
var e_G=["Oh, oh. ","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Asesor virtual","Tutor"];
var imgGr=["0_Asesor.jpg","0_Tutor.jpg"];
var mp3Gr=["",""];
var oggGr=["",""];
var altGr=["",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. La fortaleza proviene de redactar tus notas provenientes de los recursos.";
var dirMedia="Funciones_AV_T_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RnVuY2lvbmVzX0FWX1Q="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
