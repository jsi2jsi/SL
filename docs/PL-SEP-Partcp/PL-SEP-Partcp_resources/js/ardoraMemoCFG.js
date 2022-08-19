//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="Muy bien. Identificando aspectos de la participación en PL-SEP"; messageTime="Oh, oh. "; messageError=""; messageErrorG=""; messageAttempts="Oh, oh. Corrobora con tus apuntes lo expuesto en los recursos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="UEwtU0VQLVBhcnRjcA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Solución antes del cierre de cada semana","Foro de integración","Semanas 1 a la 3","Semana 4","Autoevaluación","Actividades integradoras","Habilidades socioemocionales","Foro aprendiendo"];im1=["","","","","","","",""];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["Sumas el 57% de la calificación","¿Que tienes que hacer para evitar complicaciones?","Aporta el 43 % a tu calificación","Espacio donde compartes tu experiencia y conocimientos logrados en el Módulo","Ejercicio que te permite reflexionar tu labor de estudio.","Principal elemento con el cual demuestras tus saberes de cada semana. Desarrollas competencias","Conjunto de acciones que te capacitan para el manejo de tus emociones","Permiten compartir experiencias y conocimientos mediante la argumentación y la colaboración"];im2=["","","","","","","",""];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjE=","MjM=","MjA=","MjI=","MjQ=","MjU=","MjY=","Mjc="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="PL-SEP-Partcp_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
