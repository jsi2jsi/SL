//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFECEC"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="Muy bien. El identificar ideas principales fortalece tu argumentación."; messageTime=""; messageError="Oh, oh. Leer y anotar ideas relevantes es el soporte a la comprensión."; messageErrorG="Oh, oh. Leer y anotar ideas relevantes es el soporte a la comprensión."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MkltcHJfTWVuY19Eb25kX0luZnJt"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["333","48","0","0"],["401","46","0","0"],["396","80","0","0"],["330","81","0","0"],["515","58","1","1"],["581","56","1","1"],["579","80","1","1"],["513","81","1","1"],["461","94","2","2"],["524","94","2","2"],["527","116","2","2"],["461","117","2","2"],["333","192","3","3"],["435","192","3","3"],["436","226","3","3"],["332","227","3","3"],["469","207","4","4"],["577","208","4","4"],["578","240","4","4"],["464","241","4","4"],["74","41","5","5"],["164","39","5","5"],["163","85","5","5"],["73","87","5","5"],["88","129","6","6"],["163","128","6","6"],["161","162","6","6"],["86","163","6","6"],["109","199","7","7"],["182","199","7","7"],["179","242","7","7"],["110","245","7","7"]];
var backSrc="2Impr_Menc_Dond_Infrm_resources/media/Map_Refer_0a.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(333,48),new Point(401,46),new Point(396,80),new Point(330,81)],[new Point(515,58),new Point(581,56),new Point(579,80),new Point(513,81)],[new Point(461,94),new Point(524,94),new Point(527,116),new Point(461,117)],[new Point(333,192),new Point(435,192),new Point(436,226),new Point(332,227)],[new Point(469,207),new Point(577,208),new Point(578,240),new Point(464,241)],[new Point(74,41),new Point(164,39),new Point(163,85),new Point(73,87)],[new Point(88,129),new Point(163,128),new Point(161,162),new Point(86,163)],[new Point(109,199),new Point(182,199),new Point(179,242),new Point(110,245)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6","7"];
var areaSolved=["N","N","N","N","N","N","N","N"];
var areaWord=["Damos el crédito","Autores","de ideas","Ayudamos a nuestros lectores","Mostramos diversas perspectiva","Aportamos nuevos puntos vista","Evitamos el plagio","Validas esfuerzo de redactar"];
var areaHelp=["Damos el crédito","Autores","de ideas","Ayudamos a nuestros lectores","Identificamos diversas perspectivas","Aportamos nuevos puntos de vista","Evitamos el plagio","Validas tu esfuerzo de redactar"];
var areaWrong=["La honestidad ante todo","","","","","","Fortaleces tu argumentación",""];
var initMessageError="Oh, oh. Leer y anotar ideas relevantes es el soporte a la comprensión.";
var wordPointX=["313","517","465","293","469","40","74","101"];
var wordPointY=["65","68","106","212","227","67","150","225"];
var areaColor=["#FF8080","#FF8080","#FF8080","#808000","#808000","#808080","#0080C0","#FF8000"];
var pathMedia="2Impr_Menc_Dond_Infrm_resources/media/"
var auMP3=["","","","","","","",""];
var auOGG=["","","","","","","",""];
var colorWord="#000000";
