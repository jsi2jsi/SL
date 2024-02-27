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
var colorBack="#FDFEE2"; colorButton="#F892D1"; colorText="#000000"; colorSele="#FFDBB7";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="¡Muy bien!. El tomar notas al navegar, es de mucha ayuda en el estudio. "; messageTime="Oh, oh. "; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["UFJFUEFFTkxJTkVB","Q09NVU5JREFE","VVNVQVJJTw==","SU5URVJJT1I=","Q0FNUFVT","SURFTlRJRklDQQ==","REFUT1M=","TU9EVUxP","Q0xJQw==","QVVMQQ=="];
var c=[12,9,7,8,6,10,5,6,4,4];
var defs=["1.- En la barra de navegación, escribir la dirección https://_________.sep.gob.mx/","2.- Clic en la opción “Mi _______” del menú superior.","3.- En la venta que se despliega, escribe tu nombre de ______ o correo institucional, e ingresa.","4.- Al _______ de “Mi comunidad” localiza “Mis campus” a los que tienes acceso","5.- Selecciona y da clic en “Mi _______” actualmente activo","6.- ________ la dirección de la página “Mi Campus” (toma nota).","7.- Ingresa tus dos ____: Usuario y contraseña. Los aportados por Prepa en Línea-SEP. Pulsa “Log in”","8.- Al estar dentro de “Mi Campus”, identifica tu _____ (“Mi Aula”)","9.- De la sección “Ingresa a Mi Aula”, da ____ sobre tu Módulo activo.","10.- ¡¿Preparada(o)?!. Accede, emplea y resuelve cada uno de los recursos, espacios y actividades dentro de “Mi ____”"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="SW5ncl9NaUF1bGE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=12; numRows=12; sizeCell=20;
var direction=["HD","VD","X2I"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
