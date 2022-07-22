//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
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
var timeOnMessage=4; messageOk="¡Muy bien!, Recapitulando características para una comunicación eficiente"; messageTime=""; messageError="Oh, oh. Es requerido el identificar características de netiqueta y formulacion de preguntas para comunicarse de manera eficiente"; messageErrorG="Oh, oh. Es requerido el identificar características de netiqueta y formulacion de preguntas para comunicarse de manera eficiente"; messageAttempts="Ups. Creo que no, así no."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TmV0cV9Gcm1sX1ByZWduX01uc2pz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["12","15","0","0"],["12","77","0","0"],["434","83","0","0"],["434","15","0","0"],["12","83","1","1"],["152","85","1","1"],["150","105","1","1"],["12","107","1","1"],["18","111","2","2"],["434","113","2","2"],["436","183","2","2"],["12","183","2","2"],["20","191","3","3"],["432","187","3","3"],["434","223","3","3"],["12","227","3","3"],["16","231","4","4"],["432","233","4","4"],["432","303","4","4"],["14","303","4","4"],["10","325","5","5"],["150","327","5","5"],["156","307","5","5"],["14","307","5","5"],["16","329","6","6"],["298","329","6","6"],["300","381","6","6"],["16","380","6","6"]];
var backSrc="Netq_Frml_Pregn_Mnsjs_resources/media/Ejmpl_Comn_Netiq_Forml_Pregn.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(12,15),new Point(12,77),new Point(434,83),new Point(434,15)],[new Point(12,83),new Point(152,85),new Point(150,105),new Point(12,107)],[new Point(18,111),new Point(434,113),new Point(436,183),new Point(12,183)],[new Point(20,191),new Point(432,187),new Point(434,223),new Point(12,227)],[new Point(16,231),new Point(432,233),new Point(432,303),new Point(14,303)],[new Point(10,325),new Point(150,327),new Point(156,307),new Point(14,307)],[new Point(16,329),new Point(298,329),new Point(300,381),new Point(16,380)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6"];
var areaSolved=["N","N","N","N","N","N","N"];
var areaWord=["","","","","","",""];
var areaHelp=["No incluye nombre a quien se dirige","Saludar antes de iniciar una conversación","Ser breve y conciso, no usar abreviaturas ni modismos, respetar normas ortográficas y gramaticales. Evitar solo mayúsculas","Pregunta bien redactada, entre signos de puntuación","Añadir todos los detalles, así el destinatario tendrá información suficiente","Dirigiendose con respeto y cordialidad.","Al despedirse, proporciona tu nombre, número de usuario y tu grupo."];
var areaWrong=["Oh, oh. ¿Que le hace falta a esta sección del mensaje?","Oh, oh. ¿Que requerimos para iniciar una conversación?","Oh, oh. Al dar indicaciones ¿que se requiere?","Oh, oh. Para dar una buena impresión al preguntar, ¿que se requiere?","Oh, oh. ¿Que se requiere para que se comprenda el mensaje?","Oh, oh. Al comunicarnos, ¿como lo hacemos?","Oh, oh. ¿cómo te identificarán en un mensaje?"];
var initMessageError="Oh, oh. Es requerido el identificar características de netiqueta y formulacion de preguntas para comunicarse de manera eficiente";
var wordPointX=["12","12","18","20","16","10","16"];
var wordPointY=["15","83","111","191","231","325","331"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="Netq_Frml_Pregn_Mnsjs_resources/media/"
var auMP3=["","","","","","",""];
var auOGG=["","","","","","",""];
var colorWord="#000000";
