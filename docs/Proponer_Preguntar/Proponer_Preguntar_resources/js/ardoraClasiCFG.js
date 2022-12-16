//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=27; attempts=0; attemptsMax=1;
var score=0; scoreMax=27; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FEF3E0"; colorButton="#F0AEDE"; colorText="#000000"; colorSele="#CBF5E8";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!. Ejercita tu redacción solicitudes o aportes con base a formulación de preguntas y normas de comunicacion"; messageTime=""; messageError="Oh, oh. Considera el reto de afinar la atención e identificar las características para prefuntar y para opinar"; messageErrorG="Oh, oh. Considera el reto de afinar la atención e identificar las características para prefuntar y para opinar"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["QWwgcHJlZ3VudGFyIHF1ZSB0dSBjdWVzdGlvbmFtaWVudG8gc2VhIGNvbXByZW5zaWJsZS4=","Rm9ybXVsYWNpw7NuIGRlIHByZWd1bnRhcyBlZmljYWNlcw==","UHJlZ3VudGEgY29uIHRvbm8gY29ydMOpcw==","Q3VpZGFyIGxhIG9ydG9ncmFmw61hLCBsYSBncmFtw6F0aWNhIHkgbGEgcHVudHVhY2nDs24gYWwgc29saWNpdGFyIG9yaWVudGFjacOzbi4=","RXhwcmVzYSBsYXMgZnJhc2VzIGRlIHNvbGljaXR1ZCBlbnRyZSBzaWdub3MgZGUgaW50ZXJyb2dhY2nDs24u","QXBvcnRhIGluZm9ybWFjacOzbiBzdWZpY2llbnRlIHBhcmEgcXVlIHNlIGNvbXByZW5kYSBsYSBwZXRpY2nDs24u","QW50ZXMgZGUgcHVibGljYXIgbyBlbnZpYXIgdHUgc29saWNpdHVkIGRlIGFwb3lvLCB2ZXJpZmljYSBxdWUgcHJlc2VudGEgdW5hIGlkZWEgY2xhcmEgeSBjb21wbGV0YSwgeSBzaW4gZXJyb3Jlcy4g","QW50ZSBkdWRhcywgIGluY2x1eWUgZXZpZGVuY2lhcyAoY2FwdHVyYSBkZSBwYW50YWxsYSk=","QWwgcmVxdWVyaXIgb3JpZW50YWNpw7NuLCBldml0YXIgc29sbyBwb25lciAiQXl1ZGEgcG9yIGZhdm9yIiBvICJUZW5nbyB1bmEgZHVkYSIu","QWwgcGVkaXIgaW5mb3JtYWNpw7NuLCBldml0YSBwcmVndW50YXMgcXVlIHB1ZWRhbiBzZXIgb2ZlbnNpdmFzIG8gcXVlIGF0YXF1ZW4=","QWwgc29saWNpdGFyIGF5dWRhLCB2YWxvcmFyIGxhIHJlc3B1ZXN0YSAgeSBhZ3JhZGVjZXIgZWwgYXBveW8=","Tm9ybWFzIGRlIGNvcmRpYWxpZGFk","QWwgZXhwb25lciBvcGluaW9uZXMgbyBjb2xhYm9yYXIsIHNhbHVkYXIgeSBwcmVzZW50YXJzZSBhbnRlIG51ZXN0cm8gaW50ZXJsb2N1dG9yLg==","QWwgY29sYWJvcmFyLCBldml0YXIgY29tZW50YXJpb3MgeSBncm9zZXLDrWFzIHF1ZSBwdWVkYW4gb2ZlbmRlciA=","QWwgb3BpbmFyLCByZXNwZXRhciBsYSBwb3N0dXJhIGRlIHR1cyBjb21wYcOxZXJvcw==","QWwgYXJndW1lbnRhciwgZXNjcmliaXIgY29ycmVjdGFtZW50ZSBlbCBub21icmUgZGUgbGEgcGVyc29uYSBhIHF1aWVuIHRlIGRpcmlnZXM=","QWwgcmVjb21lbmRhciwgc2UgY2xhcm8geSBjb3J0ZXMu","QWwgZXhwb25lciBudWVzdHJhIHBvc3R1cmEsIHJlc3BldGFyIG5vcm1hcyBkZSBvcnRvZ3JhZsOtYSB5IGdyYW3DoXRpY2E=","QWwgcmVzcG9uZGVyIGEgdW4gcHJlZ3VudGEsIHJlc3BldGFyIGxhIHByaXZhY2lkYWQgZGUgaW5mb3JtYWNpw7NuLg==","QWwgcHJvcG9yY2lvbmFyIHJlY29tZW5kYWNpw7NuLCBOTyBlc2NyaWJhcyBjb24gc29sbyBNQVnDmlNDVUxBUw==","QWwgYXJndW1lbnRhciwgbm8gaW5jbHVpciBpbcOhZ2VuZXMgZW4gcGFydGljaXBhY2lvbmVzLCBvY3VwYW4gdW4gZ3JhbiB2b2x1bWVu","QWwgZXhwcmVzYXIgdW5hIG9waW5pw7NuLCBldml0YXIgYWJyZXZpYXR1cmFzIHkgbW9kaXNtb3MsIGVzdG8gZGVzYXJyb2xsYSBtYWxvcyBow6FiaXRvcyBkZSBlc2NyaXR1cmE=","QWwgZXhwb25lciBudWVzdHJhIHBvc3R1cmEsIHNlciBicmV2ZXMgeSBjb25jaXNvcy4=","QWwgYXJndW1lbnRhciwgbm8gcHJlc2VudGFyIGluZm9ybWFjacOzbiBhamVuYSBjb21vIHByb3BpYS4=","QWwgcHJvcG9yY2lvbmFyIHR1cyBhcmd1bWVudG9zLCBpbmRpY2FyIGNvbiBleGFjdGl0dWQgZGUgZG9uZGUgb2J0dXZpbW9zIG51ZXN0cm9zIGNvbWVudGFyaW9zLCBkYXRvcyBvIGluZm9ybWFjacOzbg==","RWplbXBsbyBkZSBtZW5zYWplIGRlIHNvbGljaXR1ZCBkZSBhcG95by4=","RWplbXBsbyBkZSBtZW5zYWplIGFwb3J0YW5kbyBvcGluacOzbiwgYXJndW1lbnRhZG8sIGVzdGFibGVjaWVuZG8gdW5hIHBvc3R1cmEgbyBkYW5kbyByZXNwdWVzdGEgYSB1bmEgcHJlZ3VudGEu"];
var img_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","MQ==","Mg=="];
var e_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["",""];
var imgGr=["0_Mensj_solc_apoy.jpg","0_Mensj_dando_apoy.jpg"];
var mp3Gr=["",""];
var oggGr=["",""];
var altGr=["",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, oh. Considera el reto de afinar la atención e identificar las características para prefuntar y para opinar";
var dirMedia="Proponer_Preguntar_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="UHJvcG9uZXJfUHJlZ3VudGFy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
