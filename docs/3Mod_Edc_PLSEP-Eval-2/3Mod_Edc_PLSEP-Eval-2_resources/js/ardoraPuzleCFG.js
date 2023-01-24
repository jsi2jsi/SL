//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=20; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFF2F2"; colorButton="#F7B3E9"; colorText="#000000"; colorSele="#ECF8C9";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!, Has ordenado la información. ¿Has tomado nota?"; messageTime=""; messageError="Oh, oh. Revisar los apuntes es de gran ayuda."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="3Mod_Edc_PLSEP-Eval-2_resources/media/original.jpg";
var board=[["3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UxXzE=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UyXzE=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UzXzE=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2U0XzE=.jpg"],["3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UxXzI=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UyXzI=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UzXzI=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2U0XzI=.jpg"],["3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UxXzM=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UyXzM=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UzXzM=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2U0XzM=.jpg"],["3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UxXzQ=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UyXzQ=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UzXzQ=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2U0XzQ=.jpg"],["3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UxXzU=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UyXzU=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2UzXzU=.jpg","3Mod_Edc_PLSEP-Eval-2_resources/media/cGllY2U0XzU=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="M01vZF9FZGNfUExTRVAtRXZhbC0y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
