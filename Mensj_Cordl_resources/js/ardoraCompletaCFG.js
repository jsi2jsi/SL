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
var textButtonTime=" Comenzar";
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
var timeOnMessage=3; messageOk="Muy bien, has recapitulado conceptos de la semana"; messageTime="Oh, oh. Ha finalizado al oportunidad"; messageError="Oh, oh. Corrobora tus apuntes del tema"; messageAttempts="Oh, oh. ¡Ha estudiar se ha dicho!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>Hola, <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly> Gilberto <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly>. </p><p>  </p><p> Una gran novedad esta modalidad de estudio, ¿no crees? <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. Me llamo Ángel y también estoy participando es este módulo <input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly>. </p><p> </p>','<p>Mira, para resolver los cuestionarios, requerimos haber estudiado los temas de la semana, ello nos proporciona la información con la cual podemos dar respuesta correcta a cada interrogante. <input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly>Te recomiendo redactar  tus propias notas de cada recurso, te serán de utilidad. <input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly> </p><p>  </p><p>  Una vez resuelto el estudio, ya cuentas con elementos para resolver los cuestionamientos. <input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly> </p><p>  </p><p> </p>','<p>Espero te sea de utilidad.  </p><p> Estamos en contacto. Compartiendo dudas, podemos aprender juntos. </p><p>  </p><p> Saludos <input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly>. </p><p>  </p><p> Ángel  Hernández  Pérez </p><p> Estudiante Grupo H07D3R24-018 <input aria-label="Item 9" type="text" name="item9" id="item9" class="ardoraDropInput" readonly> </p><p>  </p><p> </p>'];
var answers=["Mayúsculas y minúsculas.","Saludo inicial.","Nombre correcto.","Formular preguntas","Respeto y cordialidad.","Signos de puntuación","Redacción cortes","Incuye tu despedida","Tu nombre, usuario y grupo"];
var a=["NQ==","MQ==","Mg==","Mw==","NA==","Ng==","Nw==","OA==","OQ=="];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TWVuc2pfQ29yZGw="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var textBNext="Siguiente sección";
var fHelp="Verdana, Geneva, sans-serif";
