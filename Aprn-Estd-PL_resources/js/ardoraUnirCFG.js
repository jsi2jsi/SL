//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=16; attempts=0; attemptsMax=1;
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
var timeOnMessage=2; messageOk="Muy bien."; messageTime="Oh, oh. Tiempo concluido"; messageError="Oh, oh. Erróneo"; messageErrorG="Oh, oh. Erróneo"; messageAttempts="Ups, ¿Adivinando?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QXBybi1Fc3RkLVBM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["RXN0dWRpYW50ZQ==", "UGFwZWwgcHJvdGFnw7NuaWNv"],["RXN0dWRpYW50ZQ==", "RGVkaWNhY2nDs24="],["RXN0dWRpYW50ZQ==", "RXNmdWVyem8="],["RXN0dWRpYW50ZQ==", "Q29tcHJvbWlzbw=="],["RXN0dWRpYW50ZQ==", "UGFydGljaXBhY2nDs24gYWN0aXZh"],["RXN0dWRpYW50ZQ==", "TG9ncmFyIGF1dG9ub21pYQ=="],["QXNlc29yIHZpdHVhbA==", "T3JpZW50YQ=="],["QXNlc29yIHZpdHVhbA==", "Rm9tZW50YSBlc3RyYXRlZ2lhcyB5IGFjdGl0dWRlcw=="],["QXNlc29yIHZpdHVhbA==", "UHJvbXVldmUgaW5kZXBlbmRpZW5jaWE="],["QWN0aXZpZGFkZXM=", "ZWxldmFkYSBpbnRlcmFjdGl2aWRhZA=="],["QWN0aXZpZGFkZXM=", "UmVsYWNpb25hZGEgY29uIG11bmRvIGNvdGlkaWFubw=="],["QWN0aXZpZGFkZXM=", "U29sdWNpb25hbiB1bmEgcHJvYmxlbcOhdGljYQ=="],["QWN0aXZpZGFkZXM=", "QWNsYXJhbiBsbyBxdWUgY29uc2VnaXJhcw=="],["RXZhbHVhY2nDs24=", "QXByZW5kaXphamVzIGVzcGVyYWRvcw=="],["RXZhbHVhY2nDs24=", "QWNvcmRlIGEgZGVzZW1wZcOxbw=="],["RXZhbHVhY2nDs24=", "RW4gbG9zIHByb2R1Y3Rvcw=="]];
var c=[[10,17],[10,10],[10,8],[10,10],[10,20],[10,16],[13,7],[13,31],[13,23],[11,22],[11,31],[11,27],[11,25],[10,22],[10,18],[10,16]];
var con1=["Estudiante","Los recursos","La plataforma","Asesor vitual","Asesor tecnológico","SAME"];
var con2=["Papel protagónico","Dedicación","Esfuerzo","Compromiso","Participación activa","Lograr autonomia","Orienta","Fomenta estrategias y actitudes","Promueve independiencia"];
var con3=["Actividades","Mi aula","Foros","Evaluación","Estudio"];
var con4=["elevada interactividad","Relacionada con mundo cotidiano","Solucionan una problemática","Aclaran lo que consegiras","Aprendizajes esperados","Acorde a desempeño","En los productos","Objetivos"];
var sel1=""; join1=[]; join2=[];
