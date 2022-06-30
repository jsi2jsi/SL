//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=1;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="¡Muy bien!. El estudio te permite avanzar."; messageTime=""; messageError="Oh, oh. Se requiere recapitular lo expuesto en los recursos"; messageErrorG="Oh, oh. Se requiere recapitular lo expuesto en los recursos"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MC1NaS1DYW1wLVBM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["321","59","0","0"],["319","135","0","0"],["121","137","0","0"],["123","59","0","0"],["321","269","1","1"],["319","141","1","1"],["123","137","1","1"],["121","269","1","1"],["123","295","2","2"],["123","339","2","2"],["319","337","2","2"],["319","295","2","2"],["121","341","3","3"],["319","343","3","3"],["321","373","3","3"],["121","371","3","3"],["411","35","4","4"],["505","37","4","4"],["507","75","4","4"],["409","75","4","4"],["411","81","5","5"],["505","83","5","5"],["505","151","5","5"],["407","151","5","5"],["411","159","6","6"],["507","159","6","6"],["507","243","6","6"],["411","245","6","6"],["409","251","7","7"],["505","251","7","7"],["507","339","7","7"],["409","341","7","7"],["147","9","8","8"],["145","25","8","8"],["199","25","8","8"],["195","5","8","8"],["139","25","9","9"],["139","9","9","9"],["105","7","9","9"],["103","23","9","9"],["421","23","10","10"],["419","9","10","10"],["363","9","10","10"],["365","27","10","10"],["429","9","11","11"],["429","21","11","11"],["513","23","11","11"],["509","5","11","11"]];
var backSrc="0-Mi-Camp-PL_resources/media/Mi_Campus-Carct.png";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(321,59),new Point(319,135),new Point(121,137),new Point(123,59)],[new Point(321,269),new Point(319,141),new Point(123,137),new Point(121,269)],[new Point(123,295),new Point(123,339),new Point(319,337),new Point(319,295)],[new Point(121,341),new Point(319,343),new Point(321,373),new Point(121,371)],[new Point(411,35),new Point(505,37),new Point(507,75),new Point(409,75)],[new Point(411,81),new Point(505,83),new Point(505,151),new Point(407,151)],[new Point(411,159),new Point(507,159),new Point(507,243),new Point(411,245)],[new Point(409,251),new Point(505,251),new Point(507,339),new Point(409,341)],[new Point(147,9),new Point(145,25),new Point(199,25),new Point(195,5)],[new Point(139,25),new Point(139,9),new Point(105,7),new Point(103,23)],[new Point(421,23),new Point(419,9),new Point(363,9),new Point(365,27)],[new Point(429,9),new Point(429,21),new Point(513,23),new Point(509,5)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6","7","8","9","10","11"];
var areaSolved=["N","N","N","N","N","N","N","N","N","N","N","N"];
var areaWord=["Mi Aula","","Portafolio de evidencias","","","","","Mi Agenda","","","",""];
var areaHelp=["Permite una visión general de los módulos","Recuerda algunas actividades","Resguardo de tus actividades o productos","Facilita ajustar tus datos personales, claves, configurar tu cuenta","Titulares más destacados","Nombre de usuario y forma de contacto.","Indica la ruta que seguiste","Fechas de inicio y fin. Fechas de entregas, etc.","Retornas a \"Mi comunidad de aprendizaje\"","Accedes al portal de Prepa en Línea SEP","Buzón de mensajes","Menú con funciones a tu información personal"];
var areaWrong=["Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos","Oh, oh. Toma nota de lo expuesto en los recursos"];
var initMessageError="Oh, oh. Se requiere recapitular lo expuesto en los recursos";
var wordPointX=["321","321","123","121","411","411","411","409","147","139","421","429"];
var wordPointY=["59","269","295","341","35","81","159","251","9","25","23","9"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="0-Mi-Camp-PL_resources/media/"
var auMP3=["","","","","","","","","","","",""];
var auOGG=["","","","","","","","","","","",""];
var colorWord="#000000";
