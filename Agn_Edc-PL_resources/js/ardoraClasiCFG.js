//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=35; attempts=0; attemptsMax=1;
var score=0; scoreMax=35; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="¡Muy bien!, Has recapitulado características de los agentes eductivos!"; messageTime="Ups. Tiempo finalizado"; messageError="Oh, oh. Corrobora con tus apuntes, tu elección"; messageErrorG="Oh, oh. Corrobora con tus apuntes, tu elección"; messageAttempts="Oh, oh. ¿Adivinando?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["Q2FwYWNpZGFkIGRlIHJlZ3VsYXIgc3UgYXByZW5kaXphamU=","RGlzcG9zaWNpw7NuIGUgaW5pY2lhdGl2YSBwYXJhIGNvbnN0cnVpciBjb25vY2ltaWVudG9z","UmVzcG9uZGUgcG9yIHN1IHByb3BpbyBhcHJlbmRpemFqZQ==","Q29uZHVjZSwgcmV0cm9hbGltZW50YSB5IHZhbG9yYSBlbCBkZXNhcnJvbGxv","QXBveWEgcHNpY29zb2NpYWwsIHRlY25vbMOzZ2ljYSB5IGFkbWluaXN0cmF0aXZhbWVudGU=","UGFydGljaXBhIGFjdGl2YSB5IGNvbGFib3JhdGl2YW1lbnRl","RXhwZXJpZW5jaWFzIHkgY29ub2NpbWllbnRvcyBtZWRpYW50ZSBhcG95byBtdXR1by4=","RnVuY2nDs24gZGUgYXNlc29yw61hIGFjYWTDqW1pY2E=","RnVuY2nDs24gZGUgZ2VzdGnDs24gZGVsIGFwcmVuZGl6YWpl","T3JpZW50YSBoYWNpYSBlbCBkZXNhcnJvbGxvIGRlIGFwcmVuZGl6YWplcyB5IGNvbXBldGVuY2lhcyBlc3BlcmFkb3M=","RXhwbGljYSBjb250ZW5pZG9zLCBjb25jZXB0b3MgeSByZXN1ZWx2ZSBkdWRhcw==","UHJvbXVldmUgbGEgY29uc3RydWNjacOzbiBkZSBhcmd1bWVudG9zIHByb3Bpb3Mu","TW9uaXRvcsOpYSB5IHJldHJvYWxpbWVudGEgbGFzIGFjdGl2aWRhZGVzIGRlIGFwcmVuZGl6YWpl","RXZhbMO6YSBlbCBkZXNhcnJvbGxvIGRlIGxhcyBjb21wZXRlbmNpYXM=","UmV0cm9hbGltZW50YSBsb3MgcmVzdWx0YWRvcyB5IGNhbGlmaWNhY2lvbmVzIG9idGVuaWRhcw==","SW1wdWxzYSBsYSBnZXN0acOzbiBkZWwgYXByZW5kaXphamUgaGFjaWEgdW5hIGZvcm1hY2nDs24gYXV0w7Nub21h","TWVkaWFudGUgZGlmZXJlbnRlcyByZWN1cnNvcyBwcm9waWNpYSBlbCBtYW5lam8geSBhcGxpY2FjacOzbiBkZSBsb3MgY29ub2NpbWllbnRvcy4=","QXBveWEgaGFjaWEgbGEgb3JnYW5pemFjacOzbiBkZSBhY3RpdmlkYWRlcw==","RGlyaWdlIGFsIG1lbm9zIHVuYSBzZXNpw7NuIHNpbmNyb25hIGNhZGEgc2VtYW5h","QXRpZW5kZSBjdWFscXVpZXIgZXZlbnR1YWxpZGFkIHBzaWNvc29jaWFsLCBhY2Fkw6ltaWNhLCBtZXRvZG9sw7NnaWNhLCBhZG1pbmlzdHJhdGl2YSB5IHRlY25vbMOzZ2ljYQ==","RGVwZW5kaWVuZG8gZGUgbGEgZXZlbnR1YWxpZGFkIGNhbmFsaXphIGEgbGFzIMOhcmVhcyBjb3JyZXNwb25kaWVudGVz","UHJvcGljaWEgaW50ZXJhY2Npw7NuIGVudHJlIGFzZXNvcmVzIHZpcnR1YWxlcyB5IGVzdHVkaWFudGVz","VmluY3VsYSBhbCBlc3R1ZGlhbnRlIGNvbiBvdHJvcyBhZ2VudGVzIGVkdWNhdGl2b3M=","QXNlc29yYSBlbiBlbCB1c28gZGUgZXN0cmF0ZWdpYXMgZGUgYXByZW5kaXphamUu","TW90aXZhIGFsIGVzdHVkaWFudGUgZW4gc3UgYXByZW5kaXphamUgZW4gbMOtbmVhLg==","SWRlbnRpZmljYSBvcG9ydHVuYW1lbnRlIGFjdGl0dWRlcyBvIHNpdHVhY2lvbmVzIGRlIHJpZXNnbyBhbCBhdmFuY2UgbyBwZXJtYW5lbmNpYQ==","RGEgc2VndWltaWVudG8gYWwgcHJvZ3Jlc28gZ3J1cGFs","VGUgYWNvbXBhw7FhcsOhIGEgbG8gbGFyZ28gZGUgdW4gTcOzZHVsbw==","VGUgYWNvbXBhw7FhIGVuIHRvZGEgdHUgdHJheWVjdG9yaWEgZXNjb2xhcg==","Q29udHJpYnV5ZSBhIHF1ZSBzZSBjdW1wbGFuIGxvcyBvYmpldGl2b3MgZWR1Y2F0aXZvcw==","RGEgc2VndWltaWVudG8gZGVsIG1vZGVsbyBlZHVjYXRpdm8=","QnVzY2EgZ2FyYW50aXphciBsYSBjYWxpZGFkIHkgZWZpY2FjaWEgZGVsIG1vZGVsbyBlZHVjYXRpdm8=","Rm9tZW50YSBlc3RyYXRlZ2lhcyBkZSB0cmFiYWpvIGNvbGFib3JhdGl2byBlbnRyZSBhc2Vzb3JlcyB2aXJ0dWFsZXMgeSB0dXRvcmVz","VmVyaWZpY2EgZWwgY3VtcGxpbWllbnRvIGRlIGNhbGlkYWQ=","RGEgdW4gc2VndWltaWVudG8gYSBsb3MgcHJvY2Vzb3MgZGUgUHJlcGEgZW4gTMOtbmVhIFNFUA=="];
var img_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","Mg==","Mw==","MQ==","MQ==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","Mg==","Mw==","NA==","NA==","NA==","NA==","NA==","NA=="];
var e_G=["Oh, oh. Revisa tus apuntes. ¿Ok?","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? ","Oh, oh. Revisa tus apuntes. ¿Ok? "];
var mp4_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Estudiante","Asesor virtual","Tutor","Supervisor para acompañamiento y mejora educativa"];
var imgGr=["","","",""];
var mp3Gr=["","","",""];
var oggGr=["","","",""];
var altGr=["","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. Corrobora con tus apuntes, tu elección";
var dirMedia="Agn_Edc-PL_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="QWduX0VkYy1QTA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
