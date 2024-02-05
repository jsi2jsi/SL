//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=32; attempts=0; attemptsMax=1;
var score=0; scoreMax=32; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFF4F4"; colorButton="#B8D1E7"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Muy bien. El observar con atención y apuntar, es la mejor pauta de participación"; messageTime=""; messageError="Oh, no. Bueno. A elaborar notas de lo que consultemos."; messageErrorG="Oh, no. Bueno. A elaborar notas de lo que consultemos."; messageAttempts="Oh, oh. Será requerido el redactar apuntes de lo que navegemos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["RW5jYWJlemFkbywgYWNjZXNvIGE6IDEpIHJlZ2lzdHJvLCAyKSBhdGVuY2nDs24gYSB0dXMgcGV0aWNpb25lcywgMykgaW5ncmVzbyBhICJNaSBjb211bmlkYWQiLCA0KWLDunNxdWVkYSBkZSB0ZW1hcyB5IDUpTWVuw7ogZGVzcGxlZ2FibGU=","VmlkZW8gcHJvbW9jaW9uYWw=","Q2FyYWN0ZXLDrXN0aWNhcyBkZWwgc2VydmljaW8gZGUgUHJlcGEgZW4gTMOtbmVhLVNFUA==","UHJpbmNpcGFsZXMgZXN0YWTDrXN0aWNhcyBkZWwgc2VydmljaW8=","UmVjdXJzb3MgcGFyYSBtYXlvciBpbmZvcm1hY2nDs24gZGUgUHJlcGEgZW4gTMOtbmVhLVNFUA==","UXVpZW5lcyBzb21vcw==","Qm9sZXTDrW5lcyBkZSBQcmVwYSBlbiBMw61uZWEtU0VQ","VmlkZW9zIHJlbGF0aXZvcyBhIFByZXBhIGVuIEzDrW5lYS1TRVA=","VmVudGFuYSBkZSBzb2xpY2l0dWQgZGUgdXN1YXJpbyBwYXJhIGluZ3Jlc28=","QXZpc29zIGltcG9ydGFudGVz","QWNjZXNvIGhhY2lhICJNaSBDYW1wdXMi","UmVkaXJlY2Npw7NuIGEgU0lHQVBSRVA=","Q2FsZW5kYXJpbw==","QW51YXJpb3M=","VmVudGFuYSBkZSBzb2xpY2l0dWQgZGUgVXN1YXJpbyB5IGNvbnRyYXNlw7Fh","RW5jYWJlemFkbyBjb24gSW3DoWdlbiBkZSB1c3VhcmlvLCBub3RpZmljYWNpb25lcyB5IGRpw6Fsb2dvICBkZSBtZW5zYWplcy4=","TWVuw7ogY29uIG9wY2lvbmVzIGhhY2lhIGVzcGFjaW9zIGRlIFByZXBhIGVuIEzDrW5lYS1TRVA=","U2VjY2nDs24gZGUgaW5ncmVzbyBoYWNpYSAiTWkgQXVsYSI=","VmlzdGEgZ2VuZXJhbCBkZSBtw7NkdWxvcw==","TmF2ZWdhY2nDs24gKFRhYmxlcm8sIFDDoWdpbmEgZGUgaW5pY2lvIGRlbCBzaXRpbywgUMOhZ2luYXMgZGUgc2l0aW8sIE1pcyBNw7NkdWxvcyk=","QmxvcXVlcyBkZSBuYXZlZ2FjacOzbjogTMOtbmVhIGRlIHRpZW1wbywgQXJjaGl2b3MgcHJpdmFkb3MsIFVzdWFyaW9zIGVuIGzDrW5lYSw=","QmxvcXVlcyBkZSBuYXZlZ2FjacOzbjogRXZlbnRvcyBwcsOzeGltb3MsIEN1cnNvcyBhY2NlZGlkb3MgcmVjaWVudGVtZW50ZSwgU2VndWltaWVudG8gYSBwbGFnaW8=","SW5kaWNhZG9yIGRlIGxhIHJ1dGEgZW4gbGEgcXVlIHRlIGVuY3VlbnRyYXM=","Q2Fyw6F0dWxhIGRlbCBNw7NkdWxv","UHJlc2VudGFjacOzbiBkZWwgTcOzZHVsbw==","U2VjY2nDs24gZGUgcmVjdXJzb3M=","QXZpc29zIHJlY2llbnRlcw==","UGl6YXJyYSBkZSBzZXNpb25lcw==","QmxvcXVlczogRXZpZGVuY2lhcywgTWkgQXZhbmNlLCBEZWRpY2FjacOzbiBlbiBlbCBhdWxh","QmxvcXVlIGRlIG5hdmVnYWNpw7NuOiBQYXJ0aWNpcGFudGVz","QmxvcXVlcyBkZSBuYXZlZ2FjacOzbjogRm9yb3MgZGUgYXBveW8sIFVzdWFyaW9zIGVuIGzDrW5lYQ==","TmF2ZWdhY2nDs24gZGVudHJvIGRlbCBNw7NkdWxv"];
var img_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","MQ==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","Mw==","NA==","NA==","NA==","NA==","NA==","NA==","NA==","NA==","NA==","NA=="];
var e_G=["Oh, oh. ¡A tomar nota se ha dicho!","Oh, oh. Mejor tomar apuntes.","Oh, vaya.","¡A estudiar se ha dicho!","¡A estudiar!","Tomenos nota","Redactemos apuntes","","¡oh, oh!. Mejor reviso a detalle.","¿De qué tratan?","¿A partir de donde ingresamos a este espacio?","¡A tomar nota se ha dicho!","¿Tomaste nota?","¡Oh, vaya!","¿Donde se piden estos 2 datos?","¿Donde aparece de primera vez?","¡A tomar notas!","¡Afinemos nuestra observación!","¿Donde vemos esta sección?","¡Poco a poco mejoraremos!","Oh, oh.","Oh, oh.","Oh, vaya.","Oh, no.","Oh.","¿En que espacio se encuentra?","A tomar notas","¿Dentro de donde se encuentra?","¡Oh, mejor tomar notas!","¿Dentro de qué espacio se localiza?","¡A redactar apuntes!","Oh, oh"];
var mp4_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Portal de Prepa en Línea-SEP","Mi Comunidad","Mi Campus","Mi Aula"];
var imgGr=["0_Portal-PL-24.png","0_MiComunidad-2024.png","0_MiCampus-2024.png","0_MiAula-2024.png"];
var mp3Gr=["","","",""];
var oggGr=["","","",""];
var altGr=["Portal de Prepa en Línea-SEP","Mi comunidad","Mi Campus","Mi Aula"];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, no. Bueno. A elaborar notas de lo que consultemos.";
var dirMedia="Espc-PL-SEP_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="RXNwYy1QTC1TRVA="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
