//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=13; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="Bien identificando el procedimiento para contactar a tu SAME. Ahora, redacta tu procedimiento "; messageTime=""; messageError="Oh, oh. Es recomendable ejercitar y tomar nota de nuestros procedimientos."; messageErrorG="Oh, oh. Es recomendable ejercitar y tomar nota de nuestros procedimientos."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Mk1zbl9TcHJ2X0FzZ19NanJfRWRj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["MDEtTW5zLVN1cHJ2LmpwZw==","MDItTW5zLVN1cHJ2LmpwZw==","MDMtTW5zLVN1cHJ2LmpwZw==","MDQtTW5zLVN1cHJ2LmpwZw==","MDUtTW5zLVN1cHJ2LmpwZw==","MDYtTW5zLVN1cHJ2LmpwZw==","MDctTW5zLVN1cHJ2LmpwZw==","MDgtVGEtTW5zLVN1cHJ2LmpwZw==","MDktTW5zLVN1cHJ2LmpwZw==","MTAtTW5zLVN1cHJ2LmpwZw==","MTEtTW5zLVN1cHJ2LmpwZw==","MTItTW5zLVN1cHJ2LmpwZw==","MTMtVGEtTW5zLVN1cHJ2LmpwZw=="];
var alts=["","","","","","","","","","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="2Msn_Sprv_Asg_Mjr_Edc_resources/media/";
var wordsG=[];aW=[];
