//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#F2FEEB"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!. El ejercitar el estudio fortalecer nuestros hábitos."; messageTime=""; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["VkVSQVo=","RkFDSUxJVEE=","Q1LDiURJVE8=","Rk9STUFMSURBRA==","SMOBQklUT1M=","UkVTUEFMREE=","REVESUNBQ0nDk04="];
var c=[5,8,7,10,7,8,10];
var defs=["Permite confirmar que empleamos información ____","_____ en los lectores el cómo encontrar información","Se proporciona _____ a los investigadores correspondientes","Fomentan la ______ en los escritos académicos","Dan evidencia de ______ de estudio y de trabajo","_____ nuestra labor al estructurar ideas","Denota nuestra _____ en el estudio"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q2FyYWN0X3Byb3Bvcl9mdWVudGVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=13; numRows=13; sizeCell=20;
var direction=["HD","VD","X2I"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
