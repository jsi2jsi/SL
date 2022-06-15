var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Muy bien. Recapitulaste conceptos"; messageTime="Uy, no. Finalizó tu tiempo."; messageError="Oh, oh. Erróneo."; messageErrorG="Oh, oh. Erróneo."; messageAttempts="Oh, oh. ¿Intentando adivinar?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TWV0ZF9FdmFsLVBM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TWV0b2RvbG9nw61hIGRlIGV2YWx1YWNpw7NuOg==","RHVyYW50ZSA0IHNlbWFuYXMgeSBhbCBmaW5hbCBkZWwgTcOzZHVsbyw=","TGEgcmVhbGl6YWRhIHBvciB0dSBhc2Vzb3IgdmlydHVhbCB5IHR1IHR1dG9y","TGEgcmVhbGl6YWRhIGRlIG1hbmVyYSBhdXRvbcOhdGljYSBlbiBwbGF0YWZvcm1h","WSBhdXRvZXZhbHVhY2nDs24gZGVsIGxvZ3JvIGRlIHR1cyBhcHJlbmRpemFqZXM="];imaW=["","","","",""];queW=["","","","",""];altW=["","","","",""];c=[26,40,45,47,46];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="Metd_Eval-PL_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
