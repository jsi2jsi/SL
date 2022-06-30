//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Muy bien. Vale la pena el tomar notas de los recursos"; messageTime="Ups. Tiempo finalizado"; messageError="Oh, oh. ¡A revisar recursos se ha dicho!"; messageAttempts="Ups. ¿Adivinando?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0"];
var posX=[25,225,245,229,155,181,13,243]; var posY=[100,140,4,88,102,4,36,284];
var coorx=["MjA=", "MjIw", "MjQw", "MjI0", "MTUw", "MTc2", "OA==", "MjM4"]; var coory=["MTAw", "MTQw", "NA==", "ODg=", "MTAy", "NA==", "MzY=", "Mjg0"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", ""]; answers=["Visión general de los Módulos", "Muestra algunas actividades", "Permite actualizar tus datos", "Muestra la ruta que seguiste", "Respaldo de tus productos", "Buzon de mensajes", "Hacia el Portal de PL-SEP", "Fechas límite de entrega"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q2FtcC1BY3QtUEw="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
