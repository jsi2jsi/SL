//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
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
var colorBack="#FFE1E1"; colorButton="#8ED02B"; colorText="#000000"; colorSele="#CE77CE";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien!.  Has atendido con cuidado cómo abordar la solución de tus Actividades."; messageTime=""; messageError="Oh, oh. Considera el reto de fortalecer la atención y tomar notas."; messageErrorG="Oh, oh. Considera el reto de fortalecer la atención y tomar notas."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R3VpYV9Tb2xfQUk="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["UmVjdXJzb3MuanBn","SW5kaWNhX0FJLmpwZw==","UnVicmljYS5qcGc=","SW5zdHJ1Y2Npb25lcy5qcGc=","UmV2aXNhci5qcGc=","RW50cmVnYXIuanBn"];
var alts=["Estudiar los recursos","Atender las  indicaciones","Identificar los criterios con que se evaluará","Resolver las instrucciones","Revisar antes de enviar","Entregar archivo."];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="Guia_Sol_AI_resources/media/";
var wordsG=[];aW=[];
