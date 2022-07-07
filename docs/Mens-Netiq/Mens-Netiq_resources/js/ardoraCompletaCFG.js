//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=22; attempts=0; attemptsMax=1;
var score=0; scoreMax=22; scoreInc=1; scoreDec=1
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
var timeOnMessage=3; messageOk="Muy bien, ejercitando reglas de Netiqueta"; messageTime=""; messageError="Oh, oh. Corroborar el tema de Netiqueta"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>En un mensaje: </p><p> Juan<input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly>, buena tarde<input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly>.Tengo un problema. No terminaré la actividad a tiempo<input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. ¿Ya no podré entregar esta actividad después del cierre de semana?<input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly>. Agradecería tu orientación<input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly>.  </p><p> Un saludo cordial<input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly>. </p><p> Ana Peréz Rodríguez<input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly> </p><p> Aspirante R45T18 Grupo T0037-12<input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly> </p><p> </p>','<p>En un foro: </p><p> Brian: QUE ESTOY MAL?<input aria-label="Item 9" type="text" name="item9" id="item9" class="ardoraDropInput" readonly>, ANA. PUES YO ASI SE COLOCA <input aria-label="Item 10" type="text" name="item10" id="item10" class="ardoraDropInput" readonly>LA INFORMACIÓN EN MI PARTICIPACIÓN.<input aria-label="Item 11" type="text" name="item11" id="item11" class="ardoraDropInput" readonly> </p><p>  </p><p> </p>','<p>En foro: </p><p> Esaú: Compañeros. Sobre el uso de calendarios para mí no son de utilidad, con solo entrar a plataforma puedo realizar todas mis actividades<input aria-label="Item 12" type="text" name="item12" id="item12" class="ardoraDropInput" readonly>. </p><p> Arí: No Esaau<input aria-label="Item 13" type="text" name="item13" id="item13" class="ardoraDropInput" readonly>. así <input aria-label="Item 14" type="text" name="item14" id="item14" class="ardoraDropInput" readonly> no resuelves tus activides a  tiempo<input aria-label="Item 15" type="text" name="item15" id="item15" class="ardoraDropInput" readonly>. Mejor piensa las actividades que tienes<input aria-label="Item 16" type="text" name="item16" id="item16" class="ardoraDropInput" readonly>. </p><p>  </p><p> </p>','<p>En un foro: </p><p> Asly: Apreciados compañeros, asesor virtual<input aria-label="Item 17" type="text" name="item17" id="item17" class="ardoraDropInput" readonly>.  </p><p>  </p><p> De la organización del tiempo<input aria-label="Item 18" type="text" name="item18" id="item18" class="ardoraDropInput" readonly>, estoy de acuerdo con Ana<input aria-label="Item 19" type="text" name="item19" id="item19" class="ardoraDropInput" readonly>,  es <input aria-label="Item 20" type="text" name="item20" id="item20" class="ardoraDropInput" readonly> importante q identifiquemos aquello q nos quita el tiempo. El cel, el face, wtsp. la tele<input aria-label="Item 21" type="text" name="item21" id="item21" class="ardoraDropInput" readonly>. Luego no dedicar mucho tiempo al quehacer para así tener tiempo para estudiar. <input aria-label="Item 22" type="text" name="item22" id="item22" class="ardoraDropInput" readonly> </p><p>  </p><p> Un saludo cordial. </p><p> Asly R. L.  </p><p> Estudiante F2200-L7 </p><p> Grupo H0M3R68-23 </p><p>  </p><p> </p>'];
var answers=["Saludar al inicio","No escribir solo en mayúsculas","Se claro y cortés","Indicar partes puntuales de un texto","Agradecer","Escribir correctamente el nombre","Tu nombre","Cuidar la ortografía","Respetar la postura de otros","Atender la ortografía","Evitar comentarios que ofendan","Centrar la participación en el tema","Se claro y cortés","Datos que te identifican","Evitar comentarios que ofendan","Evitar abreviaturas y modismos","Ser claro y cortés","Nombre completo","Saludo al inicio","Formular preguntas","Aportar detalles","Despedida"];
var a=["MTc=","MTE=","MTI=","MTk=","NQ==","MTM=","Nw==","MTQ=","MTU=","MjA=","OQ==","MTg=","MTA=","OA==","MTY=","MjE=","MjI=","MQ==","Mg==","NA==","Mw==","Ng=="];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="TWVucy1OZXRpcQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var textBNext="Sigue -->";
var fHelp="Verdana, Geneva, sans-serif";
