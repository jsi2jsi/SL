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
var timeOnMessage=3; messageOk="¡Muy bien!. Has recpitulado el tema de evaluación"; messageTime="Ups. Tiempo finalizado"; messageError="Oh, oh. Es requerido elaborar tus apuntes del tema de evaluación"; messageErrorG="Oh, oh. Es requerido elaborar tus apuntes del tema de evaluación"; messageAttempts="Ups. ¿Adivinando?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29tLUV2bGNuLVBM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var depth=-1;var nodeCount=0;
var nodeF=["wr9Dw7NtbyBtZSBldmFsdWFyw6FuPw==","TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","wr9Dw7NtbyBtZSBldmFsdWFyw6FuPw==","U2UgY2FsaWZpY2E=","U2UgY2FsaWZpY2E=","U2UgY2FsaWZpY2E=","U2UgY2FsaWZpY2E=","wr9Dw7NtbyBtZSBldmFsdWFyw6FuPw==","Q29uIHLDumJyaWNh","Q29uIHLDumJyaWNh","Q29uIHLDumJyaWNh","wr9Dw7NtbyBtZSBldmFsdWFyw6FuPw==","wr9Dw7NtbyBtZSBldmFsdWFyw6FuPw==","wr9RdWllbiBjYWxpZmljYT8=","wr9RdWllbiBjYWxpZmljYT8=","wr9RdWllbiBjYWxpZmljYT8=","UGxhdGFmb3JtYQ==","UGxhdGFmb3JtYQ=="];
var nodeFS=[22,34,34,34,34,34,34,22,11,11,11,11,22,12,12,12,22,22,17,17,17,10,10];
var nodeE=["TWVkaWFudGUgZXZpZGVuY2lhcyBkZSBhcHJlbmRpemFqZQ==","RG9zIGFjdGl2aWRhZGVzIGludGVncmFkb3JhcyBlbiBsYXMgMyBwcmltZXJhcyBzZW1hbmFz","VW4gcHJveWVjdG8gaW50ZWdyYWRvciBlbiBsYSA0YSBzZW1hbmE=","UGFydGljaXBhY2nDs24gYXV0b23DoXRpY2EgZW4gdG9kbyBlbCBtw7NkdWxv","VW4gZm9ybyBkZSBpbnRlZ3JhY2nDs24gZW4gbGEgNGEgc2VtYW5hLg==","UmVmbGV4acOzbiBkZSBtaSBhcHJlbmRpemFqZQ==","QWN0aXZpZGFkZXMgc29jaW9lbW9jaW9uYWxlcw==","U2UgY2FsaWZpY2E=","NDIlIGRlIDYgYWN0aXZpZGFkZXMgaW50ZWdyYWRvcmFzIGRlIGxhcyBzZW1hbmFzIDEgYSBsYSAzLg==","NDMlIGVuIGxhIHNlbWFuYSA0LiAxIFByb3llY3RvIGludGVncmFkb3IsIEZvcm8gZGUgaW50ZWdyYWNpw7NuIHkgYXV0b2V2YWx1YWNpw7Nu","MTAlIGVuIHNlbWFuYXMgMiB5IDQuIEhhYmlsaWRhZGVzIHNvY2lvZW1vY2lvbmFsZXM=","NSUgZW4gbGFzIDQgc2VtYW5hcy4gQWN0aXZpZGFkIGVuIHBsYXRhZm9ybWE=","Q29uIHLDumJyaWNh","Q3JpdGVyaW9zOkNvZ25pdGl2bywgYWN0aXR1ZGluYWwsIGNvbXVuaWNhdGl2bywgY29sYWJvcmF0aXZvIHkgcGVuc2FtaWVudG8gY3LDrXRpY28=","Tml2ZWxlcyBkZSBkZXNlbXBlw7FvOiBFeHBlcnRvLCBjYXBhY2l0YWRvLCBhY2VwdGFibGUsIGFwcmVuZGl6LCByZXF1aWVyZSBhcG95bw==","QXRyaWJ1dG9zOiBMbyBxdWUgc2UgZXNwZXJhIHF1ZSBsb2dyZXMsIGFzb2NpYWRvcyBhIHVuYSBjYWxpZmljYWNpw7Nu","UmVnaXNybyBlbiBwb3J0YWZvbGlvIGRlIGV2aWRlbmNpYXM=","wr9RdWllbiBjYWxpZmljYT8=","VHUgbWlzbW8gKEF1dG9ldmFsdWFjacOzbj0=","VHUgYXNlc29yIHZpcnR1YWwgKEFjdGl2aWRhZGVzLCBwcm95ZWN0byB5IGZvcm8p","UGxhdGFmb3JtYQ==","SGFiaWxpZGFkZXMgc29jaW9lbW9jaW9uYWxlcw==","SW50ZXJhY2Npw7NuIGVuIGVsIE3Ds2R1bG8="];
var nodeES=[34,54,38,45,40,28,28,11,58,81,50,44,12,83,79,69,35,17,26,48,10,28,26];
