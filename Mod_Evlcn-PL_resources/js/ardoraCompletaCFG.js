//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=14; attempts=0; attemptsMax=1;
var score=0; scoreMax=14; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Muy bien. "; messageTime="Ups, tiempo consumido"; messageError="Oh, oh. Erróneo."; messageAttempts="¿Adivinando?-"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>En Prepa en Línea SEP, se evalúa de diferentes formas y de manera <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly>. Tu calificación se genera acorde a las evidencias: </p><p> + Durante las 3 primeras semanas, actividades <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly> y <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. </p><p> </p>','<p>+ En la última semana, un <input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly> integrador, foro de <input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly> y tu <input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly>. </p><p> + A través del módulo, tu actividad en <input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly> y la elaboración de actividades para el <input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly> de habilidades <input aria-label="Item 9" type="text" name="item9" id="item9" class="ardoraDropInput" readonly>. </p><p>  </p><p> </p>','<p>Los agentes educativos que participan en tu <input aria-label="Item 10" type="text" name="item10" id="item10" class="ardoraDropInput" readonly>, son: 1) <input aria-label="Item 11" type="text" name="item11" id="item11" class="ardoraDropInput" readonly> mediante la reflexión y valoración de <input aria-label="Item 12" type="text" name="item12" id="item12" class="ardoraDropInput" readonly>. 2) tu <input aria-label="Item 13" type="text" name="item13" id="item13" class="ardoraDropInput" readonly>, que evalúa tus actividades integradoras, foro de integración y tu proyecto integrador. Y 3) la <input aria-label="Item 14" type="text" name="item14" id="item14" class="ardoraDropInput" readonly> de manera automática asigna valores a tu interacción y solución actividades para el desarrollo de habilidades socioemocionales. </p><p>  </p><p> </p>'];
var answers=["proyecto","tu mismo","socioemocionales","aprendizajes","autoevaluación","asesor virtual","integración","evaluación","plataforma","contínua","integradoras","formativas","plataforma","desarrollo"];
var a=["NA==","MTE=","OQ==","MTI=","Ng==","MTM=","NQ==","MTA=","MTQ=","MQ==","Mg==","Mw==","Nw==","OA=="];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TW9kX0V2bGNuLVBM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var textBNext="Siguiente";
var fHelp="Verdana, Geneva, sans-serif";
