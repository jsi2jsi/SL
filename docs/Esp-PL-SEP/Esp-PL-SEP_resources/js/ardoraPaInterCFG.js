//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Muy bien. El esfuerzo en el estudio, bien vale."; messageTime=""; messageError="Oh, oh. Considera ejercitar la redacción de tus notas en base a los recursos"; messageErrorG="Oh, oh. Considera ejercitar la redacción de tus notas en base a los recursos"; messageAttempts="Ups. Mucho tiempo, ¿no crees?"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RXNwLVBMLVNFUA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["74","219","0","0"],["76","81","0","0"],["154","81","0","0"],["152","17","0","0"],["16","13","0","0"],["14","215","0","0"],["74","255","1","1"],["142","257","1","1"],["146","139","1","1"],["216","135","1","1"],["214","85","1","1"],["78","85","1","1"],["148","297","2","2"],["214","299","2","2"],["218","189","2","2"],["284","187","2","2"],["286","137","2","2"],["150","141","2","2"],["218","385","3","3"],["218","193","3","3"],["354","191","3","3"],["356","383","3","3"]];
var backSrc="Esp-PL-SEP_resources/media/Esp-PL-SEP.png";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(74,219),new Point(76,81),new Point(154,81),new Point(152,17),new Point(16,13),new Point(14,215)],[new Point(74,255),new Point(142,257),new Point(146,139),new Point(216,135),new Point(214,85),new Point(78,85)],[new Point(148,297),new Point(214,299),new Point(218,189),new Point(284,187),new Point(286,137),new Point(150,141)],[new Point(218,385),new Point(218,193),new Point(354,191),new Point(356,383)]];
var game=[];indexGame=0;
var area=["0","1","2","3"];
var areaSolved=["N","N","N","N"];
var areaWord=["","","",""];
var areaHelp=["Primer espacio de navegación, permite acceso a toda información de PL-SEP","Ingresas si eres miembro de la comunidad, permite acceder a servicios y conocer a los integrantes de  PL-SEP","Espacio más personal, puedes ver tu módulo, accedes a portafolio y agenda de actividades, tu perfil, noticias","Lugar donde encuentras todos los recursos, materiales, actividades formativas, integradoras, foros, proyecto y foro integrador. Ahi conoces a tu grupo, asesor virtual y tutor"];
var areaWrong=["Oh, oh. Corrobora con tus apuntes","Oh, oh. Es requerido estudiar los recursos","Oh. oh. Toma nota de los recursos","Oh, oh. Corrobora tus notas en base a los recursos"];
var initMessageError="Oh, oh. Considera ejercitar la redacción de tus notas en base a los recursos";
var wordPointX=["74","74","148","218"];
var wordPointY=["219","255","297","385"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="Esp-PL-SEP_resources/media/"
var auMP3=["","","",""];
var auOGG=["","","",""];
var colorWord="#000000";
