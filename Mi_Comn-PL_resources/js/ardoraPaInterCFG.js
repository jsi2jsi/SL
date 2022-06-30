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
var timeOnMessage=3; messageOk="Bien. Recapitulaste elementos dentro de \"Mi comunidad\""; messageTime="Ups. Tiempo concluido"; messageError="Oh, oh. Redacta tus notoas de lo expuesto en los recursos"; messageErrorG="Oh, oh. Redacta tus notoas de lo expuesto en los recursos"; messageAttempts="Ups. Muchos intentos."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TWlfQ29tbi1QTA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["0","79","0","0"],["68","81","0","0"],["70","29","0","0"],["144","27","0","0"],["142","3","0","0"],["2","1","0","0"],["132","175","1","1"],["182","175","1","1"],["182","163","1","1"],["132","163","1","1"],["78","213","2","2"],["132","215","2","2"],["130","181","2","2"],["78","177","2","2"],["142","208","3","3"],["178","208","3","3"],["182","182","3","3"],["140","180","3","3"],["192","206","4","4"],["232","208","4","4"],["232","178","4","4"],["194","178","4","4"],["234","248","5","5"],["196","246","5","5"],["192","216","5","5"],["234","216","5","5"],["180","248","6","6"],["178","216","6","6"],["134","216","6","6"],["132","248","6","6"],["130","220","7","7"],["80","216","7","7"],["74","250","7","7"],["130","250","7","7"],["300","107","8","8"],["244","107","8","8"],["242","87","8","8"],["300","89","8","8"],["246","109","9","9"],["244","123","9","9"],["300","123","9","9"],["298","111","9","9"],["240","141","10","10"],["240","59","10","10"],["78","57","10","10"],["76","141","10","10"],["298","163","11","11"],["244","165","11","11"],["242","217","11","11"],["302","217","11","11"]];
var backSrc="Mi_Comn-PL_resources/media/In_Mi_comunidad.png";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(0,79),new Point(68,81),new Point(70,29),new Point(144,27),new Point(142,3),new Point(2,1)],[new Point(132,175),new Point(182,175),new Point(182,163),new Point(132,163)],[new Point(78,213),new Point(132,215),new Point(130,181),new Point(78,177)],[new Point(142,208),new Point(178,208),new Point(182,182),new Point(140,180)],[new Point(192,206),new Point(232,208),new Point(232,178),new Point(194,178)],[new Point(234,248),new Point(196,246),new Point(192,216),new Point(234,216)],[new Point(180,248),new Point(178,216),new Point(134,216),new Point(132,248)],[new Point(130,220),new Point(80,216),new Point(74,250),new Point(130,250)],[new Point(300,107),new Point(244,107),new Point(242,87),new Point(300,89)],[new Point(246,109),new Point(244,123),new Point(300,123),new Point(298,111)],[new Point(240,141),new Point(240,59),new Point(78,57),new Point(76,141)],[new Point(298,163),new Point(244,165),new Point(242,217),new Point(302,217)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6","7","8","9","10","11"];
var areaSolved=["N","N","N","N","N","N","N","N","N","N","N","N"];
var areaWord=["","SIGAPREP","Servicios estudiantiles","Publicaciones","Diccionarios","Descarga de software","Bibliotecas virtuales","Videos","","","",""];
var areaHelp=["Acceso a \"Mi Comunidad\"","Tramites escolares","Información, actividades extraescolares, orientación educativa","Gacetas informativas, revisas electrónicas","Apoyo para la redacción de documentos","Herramientas informáticas para navegar","Para enriquecer tu formación académica","Tutoriales de Prepa en Línea SEP","Acceso hacia \"Mi Campus\"","Agenda de actividades","Información importante, varias","Integrantes de \"Mi Comunidad\""];
var areaWrong=["Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos","Oh, oh. Corrobora lo explicado en los recursos"];
var initMessageError="Oh, oh. Redacta tus notoas de lo expuesto en los recursos";
var wordPointX=["0","132","78","142","192","234","180","130","300","246","240","298"];
var wordPointY=["79","172","213","208","206","248","248","220","107","109","141","163"];
var areaColor=["#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var pathMedia="Mi_Comn-PL_resources/media/"
var auMP3=["","","","","","","","","","","",""];
var auOGG=["","","","","","","","","","","",""];
var colorWord="#E78556";
