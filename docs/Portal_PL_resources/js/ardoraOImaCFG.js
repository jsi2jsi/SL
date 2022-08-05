//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
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
var timeOnMessage=4; messageOk="Muy bien, has anotado las áreas que consittuye el portal de Prepa en  Línea SEP"; messageTime=""; messageError="Oh. oh. Es neesario tomar nota a detalle de las características del Portal Prepa en Línea SEP"; messageErrorG="Oh. oh. Es neesario tomar nota a detalle de las características del Portal Prepa en Línea SEP"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UG9ydGFsX1BM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RW5jYWJfUG9ydGFsLmpwZw==","QmFubmVyX0luZm9ybV9JbXBvcnQtUG9ydGFsLmpwZw==","VGFibGVyb19hdmlzb3NfUG9ydGFsLmpwZw==","QWNlcmNhX2JhY2hpbGxlcmF0b19lbl9QTC1Qb3J0YWwuanBn","T3JpZW50YWNpb25fRXN0dWRpb19QTC1Qb3J0YWwuanBn","QWNlcmNhX01pQ29tdW5pZGFkX1BvcnRhbC5qcGc=","SW5jcmlwY2lfX25fYV9QTC1Qb3J0YWwuanBn","VmlkZW9zX0luZm9ybWF0aXZvc19Qb3J0YWwuanBn","UG9ydGFsZXNfYXBveW9fUExfUG9ydGFsLmpwZw==","UGllX1BhZ19Qb3J0YWwuanBn"];
var alts=["Encabezado, lugar que te permite encontra información del Modelo de Prepa en Línea SEP","Despliega información de mayor relevancia para el público o aspirantes y estudiantes.","Área que da acceso a información relevante","Información respecto al modelo educativo de Prepa en Línea SEP","Notas de los aspecto que se requiere para estudiar en Prepa en Línea SEP.","Algunas notas respecto a Mi comunidad de aprendizaje.","PAra registrarse en Prepa en Línea SEP","Videos informativos","Portales de apoyo para el estudio.","Pie informativo del Portal de Prepa en Línea SEP"];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="Portal_PL_resources/media/";
var wordsG=[];aW=[];
