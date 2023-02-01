//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FEF4FF"; colorButton="#F9FEED"; colorText="#000000"; colorSele="#F372AF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!. ¿Realizaste tus notas del proceder?"; messageTime=""; messageError="Oh, oh. Recomendamos revisar lo expuesto en el Manual de citas y referencias de Prepa en Línea SEP. Estilo APA"; messageErrorG="Oh, oh. Recomendamos revisar lo expuesto en el Manual de citas y referencias de Prepa en Línea SEP. Estilo APA"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError="https://prepaenlinea.sep.gob.mx/wp-content/uploads/2023/01/09C.03_Manual_de_citacion_APA_para_Prepa_en_Linea_2023-vf.pdf"; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RXNjcmliaXItdGV4dC1hY2Fk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="Escribir-text-acad_resources/media/";
var indexG=0;
var words1G=["QnVzY2EgaW5mb3JtYWNpw7NuIGVuIGRpZmVyZW50ZXMgZnVlbnRlcyBjb25maWFibGVzLg==","RXhwcmVzYSBjb24gdHVzIHBhbGFicmFzIGxvIHF1ZSBjb25zaWRlcmVzIHJlbGV2YW50ZSB5IG9yZ2FuaXphIGxhIGluZm9ybWFjacOzbiBkZSB0dXMgZnVlbnRlcyBwYXJhIHJlYWxpemFyIGxhcyBjaXRhcy4=","RGlzZcOxYSBmaWd1cmFzIG8gdGFibGFzIHF1ZSBjb21wbGVtZW50ZW4gdHUgaW5mb3JtYWNpw7NuLg==","T3RvcmdhIGVsIGNyw6lkaXRvIGNvcnJlc3BvbmRpZW50ZSBhIGxhcyBpZGVhcywgZnJhc2VzIG8gaW5mb3JtYWNpw7NuIHF1ZSByZXRvbWVzIGRlIG90cmFzIG9icmFzLg==","UHJvcMOzbiBsYSBmb3JtYSBlbiBsYSBxdWUgc2UgcHVlZGEgY2l0YXIgeSBoYWNlciByZWZlcmVuY2lhIGRlbCBlc2NyaXRvIHByb3BpbyBxdWUgaGF5YXMgcmVhbGl6YWRvLg==","Q29uc3RydXllIGlkZWFzIG9yaWdpbmFsZXMgcXVlIHB1ZWRhcyBjb21wYXJ0aXIgZGUgZm9ybWEgY2xhcmEu","UmVhbGl6YSBjaXRhcyB5IHJlZmVyZW5jaWFzIGFjb3JkZSBhbCBtYW51YWwgZGUgY2l0YXMgeSByZWZlcmVuY2lhcyBkZSBQcmVwYSBlbiBMw61uZWEgU0VQLiBFc3RpbG8gQVBBLg0KaHR0cHM6Ly9wcmVwYWVubGluZWEuc2VwLmdvYi5teC93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMS8wOUMuMDNfTWFudWFsX2RlX2NpdGFjaW9uX0FQQV9wYXJhX1ByZXBhX2VuX0xpbmVhXzIwMjMtdmYucGRm"];
var words2G=[];
var words3G=[];
var c1=[51,118,56,95,99,63,224];
var c2=[];
var c3=[];
