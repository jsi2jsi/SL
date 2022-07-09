//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=25; attempts=0; attemptsMax=1;
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
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicidades. Bien al recapitular características del tutor"; messageTime=""; messageError="Oh, oh. Corrobora con lo expuesto en los recursos"; messageAttempts="Ups. Muchos intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="Caract_Tutor_PL_resources/media/original.jpg";
var board=[["Caract_Tutor_PL_resources/media/cGllY2UxXzE=.jpg","Caract_Tutor_PL_resources/media/cGllY2UyXzE=.jpg","Caract_Tutor_PL_resources/media/cGllY2UzXzE=.jpg","Caract_Tutor_PL_resources/media/cGllY2U0XzE=.jpg","Caract_Tutor_PL_resources/media/cGllY2U1XzE=.jpg"],["Caract_Tutor_PL_resources/media/cGllY2UxXzI=.jpg","Caract_Tutor_PL_resources/media/cGllY2UyXzI=.jpg","Caract_Tutor_PL_resources/media/cGllY2UzXzI=.jpg","Caract_Tutor_PL_resources/media/cGllY2U0XzI=.jpg","Caract_Tutor_PL_resources/media/cGllY2U1XzI=.jpg"],["Caract_Tutor_PL_resources/media/cGllY2UxXzM=.jpg","Caract_Tutor_PL_resources/media/cGllY2UyXzM=.jpg","Caract_Tutor_PL_resources/media/cGllY2UzXzM=.jpg","Caract_Tutor_PL_resources/media/cGllY2U0XzM=.jpg","Caract_Tutor_PL_resources/media/cGllY2U1XzM=.jpg"],["Caract_Tutor_PL_resources/media/cGllY2UxXzQ=.jpg","Caract_Tutor_PL_resources/media/cGllY2UyXzQ=.jpg","Caract_Tutor_PL_resources/media/cGllY2UzXzQ=.jpg","Caract_Tutor_PL_resources/media/cGllY2U0XzQ=.jpg","Caract_Tutor_PL_resources/media/cGllY2U1XzQ=.jpg"],["Caract_Tutor_PL_resources/media/cGllY2UxXzU=.jpg","Caract_Tutor_PL_resources/media/cGllY2UyXzU=.jpg","Caract_Tutor_PL_resources/media/cGllY2UzXzU=.jpg","Caract_Tutor_PL_resources/media/cGllY2U0XzU=.jpg","Caract_Tutor_PL_resources/media/cGllY2U1XzU=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q2FyYWN0X1R1dG9yX1BM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
