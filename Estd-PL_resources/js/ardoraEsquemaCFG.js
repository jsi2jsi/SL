//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien"; messageTime="Oh, no. El periodo de prueba ha finalizado"; messageError="Oh, oh. Incorrecto."; messageErrorG="Oh, oh. Incorrecto."; messageAttempts="Oh, oh. Muchos intentos para adivinar"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RXN0ZC1QTA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var depth=-1;var nodeCount=0;
var nodeF=["RXN0dWRpYW50ZQ==","UmVhbGl6YXIgZXNmdWVyem8=","UmVhbGl6YXIgZXNmdWVyem8=","RXN0dWRpYW50ZQ==","QXBsaWNhciBlc3RyYXRlZ2lhcw==","RXN0YWJsZWNlciBtZXRhcyBlbiBwbGF6b3M=","RXN0YWJsZWNlciBtZXRhcyBlbiBwbGF6b3M=","RXN0YWJsZWNlciBtZXRhcyBlbiBwbGF6b3M=","QXBsaWNhciBlc3RyYXRlZ2lhcw==","UmVzcGVjdG8gIHR1IHRpZW1wbw==","UmVzcGVjdG8gIHR1IHRpZW1wbw==","RXN0dWRpYW50ZQ==","SWRlbnRpZmljYXI=","SWRlbnRpZmljYXI="];
var nodeFS=[10,17,17,10,19,26,26,26,19,19,19,10,11,11];
var nodeE=["UmVhbGl6YXIgZXNmdWVyem8=","QXByZW5kaXphamVz","Q29tcGV0ZW5jaWFz","QXBsaWNhciBlc3RyYXRlZ2lhcw==","RXN0YWJsZWNlciBtZXRhcyBlbiBwbGF6b3M=","Y29ydG8=","bWVkaWFubw==","bGFyZ28=","UmVzcGVjdG8gIHR1IHRpZW1wbw==","UGxhbmlmaWNhcg==","T3B0aW1pemFy","SWRlbnRpZmljYXI=","VHVzIGVzdGlsb3MgZGUgYXByZW5kaXphamU=","TGFzIGVzdHJhdGVnaWFzIGRlIGVzdHVkaW8gbcOhcyBhZGVjdWFkYXM="];
var nodeES=[17,12,12,19,26,5,7,5,19,10,9,11,26,41];
