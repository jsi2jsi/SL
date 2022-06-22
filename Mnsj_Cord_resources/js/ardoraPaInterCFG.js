//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Muy bien recapitulando características"; messageTime="Ha finalizado tu oportunidad"; messageError="Oh, oh. Se requiere revisar los temas de la semana."; messageErrorG="Oh, oh. Se requiere revisar los temas de la semana."; messageAttempts="Oh, oh. ¡Ha revisar apuntes!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TW5zal9Db3Jk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["5","1","0","0"],["33","1","0","0"],["33","21","0","0"],["3","21","0","0"],["6","25","1","1"],["294","21","1","1"],["292","47","1","1"],["4","49","1","1"],["300","45","2","2"],["300","27","2","2"],["606","23","2","2"],["602","45","2","2"],["10","104","3","3"],["6","132","3","3"],["616","128","3","3"],["612","52","3","3"],["8","58","3","3"],["10","141","4","4"],["6","422","4","4"],["610","422","4","4"],["610","135","4","4"],["10","429","5","5"],["6","487","5","5"],["606","483","5","5"],["600","427","5","5"],["6","537","6","6"],["6","491","6","6"],["602","487","6","6"],["602","531","6","6"],["6","579","7","7"],["6","541","7","7"],["602","545","7","7"],["602","579","7","7"],["38","19","8","8"],["38","1","8","8"],["94","1","8","8"],["96","19","8","8"]];
var backSrc="Mnsj_Cord_resources/media/Mensaje_apoyo.png";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(5,1),new Point(33,1),new Point(33,21),new Point(3,21)],[new Point(6,25),new Point(294,21),new Point(292,47),new Point(4,49)],[new Point(300,45),new Point(300,27),new Point(606,23),new Point(602,45)],[new Point(10,104),new Point(6,132),new Point(616,128),new Point(612,52),new Point(8,58)],[new Point(10,141),new Point(6,422),new Point(610,422),new Point(610,135)],[new Point(10,429),new Point(6,487),new Point(606,483),new Point(600,427)],[new Point(6,537),new Point(6,491),new Point(602,487),new Point(602,531)],[new Point(6,579),new Point(6,541),new Point(602,545),new Point(602,579)],[new Point(38,19),new Point(38,1),new Point(94,1),new Point(96,19)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6","7","8"];
var areaSolved=["N","N","N","N","N","N","N","N","N"];
var areaWord=["","","","","","","","",""];
var areaHelp=["Al inicio del mensaje un saludo.","Formas de preguntar de manera eficiente","Fomenta una cultura de respeto y cordialidad.","Uso correcto de signos de puntuación, mayúsculas y minúsculas.","Añade detalles, para auxiliar la comprensión.","Sé preciso y claro al aportar información","Aporta tu despedida","Proporciona tu nombre, usuario y grupo","Nombre correcto de la persona a quien te diriges."];
var areaWrong=["Oh, oh. Intenta de nuevo","Oh, oh. Intenta de nuevo","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.","Oh, oh.",""];
var initMessageError="Oh, oh. Se requiere revisar los temas de la semana.";
var wordPointX=["5","6","300","10","10","10","6","6","96"];
var wordPointY=["1","25","45","104","141","429","537","579","19"];
var areaColor=["#FEEFE0","#FEE0F5","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="Mnsj_Cord_resources/media/"
var auMP3=["","","","","","","","",""];
var auOGG=["","","","","","","","",""];
var colorWord="#000000";
