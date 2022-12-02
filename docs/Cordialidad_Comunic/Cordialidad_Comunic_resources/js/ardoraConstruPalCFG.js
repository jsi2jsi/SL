//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFF0F0"; colorButton="#F4DAA8"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="¡Muy bien!. Relevante la recapitulación respecto a normas de comunicación virtual"; messageTime=""; messageError="Oh. Oh. No olvides apoyarte con lo expuesto para las normas de cordialidad en entornos virtuales"; messageErrorG="Oh. Oh. No olvides apoyarte con lo expuesto para las normas de cordialidad en entornos virtuales"; messageAttempts="Oh, oh. Es recomendable recapitular las normas de cordialidad en entornos virtuales"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["U0FMVURP","Tk9NQlJFIFBST1BJTw==","REVUQUxMRVM=","Tk8gT0ZFTkRFUg==","UkVTUEVUQVIgTEEgUE9TVFVSQQ==","Q0xBUk8gWSBDT1JUw4lT","R1JBTcOBVElDQSBZIE9SVE9HUkFGw41B","TUFZw5pTQ1VMQVM=","SU3DgUdFTkVT","QUJSRVZJQVRVUkFTIE5JIE1PRElTTU9T"];var cp_ima=["","","","","","","","","",""];var cp_mp3=["","","","","","","","","",""];var cp_ogg=["","","","","","","","","",""];var cp_que=["wr9Dw7NtbyBpbmljaWFtb3MgdW4gY29tdW5pY2Fkbz8=","QSBxdWllbiB2YSBkaXJpZ2lkbyBlbCBtZW5zYWpl","SW5mb3JtYWNpw7NuIHF1ZSBzZSByZXF1aWVyZSBxdWUgZXhwcmVzZSBsbyBxdWUgc2UgZGVzZWEgY29tdW5pY2FyLg==","RXZpdGFyIGdyb3NlcmlhcyB5IGNvbWVudGFyaW9zIHBhcmEgX18gX19fXyBhIGNvbXBhw7Flcm9z","X19fIF8gX19fXyBkZSB0dXMgY29tcGHDsWVyb3MsIGF1biBubyBlc3RhbmRvIGRlIGFjdWVyZG8u","wr9Dw7NtbyBkZWJlIHNlciB0dSBtZW5zYWplIHBhcmEgZm9tZW50YXIgbGEgY29yZGlhbGlkYWQgeSBlbCBlbnRlbmRpbWllbnRvPw==","UmVkYWN0YXIgY3VpZGFuZG8gbGEgX19fIF8gX19fXy4gUHVlZGVzIGVtcGxlYXIgbGFzIGhlcnJhbWllbnRhcyBkZSBjb3JyZWNjacOzbiBkZSB1biBwcm9jZXNhZG9yIGRlIHRleHRvcw==","U29sbyBfX18gZXMgY29tbyBncml0YXIu","TG8gcXVlIG5vIGRlYmVzIGluY2x1aXIgZW4gZm9yb3Mu","UGFyYSBubyBkZXNhcnJvbGxhciBtYWxvcyBow6FiaXRvcyBkZSBlc2NyaXR1cmEsIG5vIGVtcGxlYXIgX19fIF8gX19f"];var cp_num=[6,13,8,10,19,14,22,10,8,24];var cp_alt=["","","","","","","","","",""];
var wordsGame="Q29yZGlhbGlkYWRfQ29tdW5pYw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
