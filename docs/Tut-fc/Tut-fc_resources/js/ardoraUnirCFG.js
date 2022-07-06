//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=17; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="Muy bien"; messageTime="Tiempo transcurrido"; messageError="Oh,oh. No."; messageErrorG="Oh,oh. No."; messageAttempts="Ups, muchos intentos para adivinar"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VHV0LWZj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["VHV0b3I=", "QXBveW8gcHNpY29sw7NnaWNv"],["VHV0b3I=", "T3JpZW50YWNpw7NuIGFkbWluaXN0cmF0aXZh"],["VHV0b3I=", "T3JpZW50YWNpw7NuIHRlY25vbMOzZ2ljYQ=="],["VHV0b3I=", "QXRpZW5kZSBjdWFscXVpZXIgZXZlbnR1YWxpZGFk"],["VHV0b3I=", "VmluY3VsYSBhIGVzdHVkaWFudGVz"],["VHV0b3I=", "QXNlc29yYSBlbiBlc3RyYXRlZ2lhcyBkZSBhcHJlbmRpemFqZQ=="],["VHV0b3I=", "TW90aXZh"],["VHV0b3I=", "SWRlbnRpZmljYSBzaXR1YWNpb25lcyBkZSByaWVzZ28gYWNhZMOpbWljbw=="],["QVYtVHV0b3I=", "QWNjZXNvIGEgY29udHJvbCBlc2NvbGFy"],["QVYtVHV0b3I=", "RGVzcGxpZWdhbiBlc3RyYXRlZ2lhcw=="],["QVYtVHV0b3I=", "SW1wdWxzYW4gZGVzZW1wZcOxbyBhY2Fkw6ltaWNv"],["QVYtVHV0b3I=", "U2VnaW1pZW50byBhIGV2ZW50dWFsaWRhZGVz"],["QVYtVHV0b3I=", "QXRlbmRlciBwcm9ibGVtYXM="],["VHV0b3ItRXN0dWRpYW50ZXM=", "Q29udGFjdG8gcG9yIGRpZmVyZW50ZXMgbWVkaW9z"],["VHV0b3ItRXN0dWRpYW50ZXM=", "UmVzcG9uZGUgZHVkYXMgZW4gbWVub3MgZGUgMjQgaCBoLg=="],["VHV0b3ItQS4gdGVjbm9sw7NnaWNv", "Q2FuYWxpemFyIGNvbiBBLiB0ZWNvbMOzZ2ljbw=="],["VHV0b3ItQS4gdGVjbm9sw7NnaWNv", "RGV0ZWNjaW9uIGRlIG5lY2VzaWRhZGVzIHRlY25vbMOzZ2ljYXM="]];
var c=[[5,17],[5,26],[5,23],[5,30],[5,21],[5,37],[5,6],[5,42],[8,24],[8,22],[8,28],[8,27],[8,17],[17,30],[17,34],[20,27],[20,37]];
var con1=["Tutor"];
var con2=["Apoyo psicológico","Orientación tecnológica","Orientación administrativa","Atiende cualquier eventualidad","Vincula a estudiantes","Asesora en estrategias de aprendizaje","Motiva","Identifica situaciones de riesgo académico"];
var con3=["AV-Tutor","Tutor-Estudiantes","Tutor-A. tecnológico"];
var con4=["Acceso a control escolar","Despliegan estrategias","Impulsan desempeño académico","Segimiento a eventualidades","Atender problemas","Contacto por diferentes medios","Responde dudas en menos de 24 h h.","Deteccion de necesidades tecnológicas","Canalizar con A. tecológico"];
var sel1=""; join1=[]; join2=[];
