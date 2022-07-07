//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=17; attempts=0; attemptsMax=1;
var score=0; scoreMax=17; scoreInc=1; scoreDec=1
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
var timeOnMessage=4; messageOk="Muy bien recapitulando las regas de Netiqueta y formulación de preguntas"; messageTime="Ups. Demasiado tiempo para resolver."; messageError="Oh, ho. Redacta tus apuntes en base al estudio de las reglas de Netiqueta y formulación eficiente de preguntas"; messageErrorG="Oh, ho. Redacta tus apuntes en base al estudio de las reglas de Netiqueta y formulación eficiente de preguntas"; messageAttempts="Ups. Muchos intentos para atinarle."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["Q3VhbmRvIG5vIGVyZXMgY2xhcm8geSBjb3J0ZXMgYWwgY29tdW5pY2FydGU=","Q3VhbmRvIG5vIHNhbMO6ZGFtb3MgYWwgaW5pY2lvIGRlIHVuYSBjb252ZXJzYWNpw7Nu","QWwgcmVhbGl6YXIgY29tZW50YXJpb3MgcXVlIHB1ZWRhbiBvZmVuZGVyIGEgY29tcGHDsWVyb3M=","QWwgbm8gYXRlbmRlciBhIGxhcyBub3JtYXMgb3J0b2dyw6FmaWNhcyB5IGdyYW1hdGljYWxlcw==","QWwgaW5jbHVpciBhYnJldmlhdHVyYXMsIG1vZGlzbW9zLiBFbGxvIGRlc2Fycm9sbGEgbWFsb3MgaMOhYml0b3MgZGUgZXNjcml0dXJh","QWwgbm8gbGVlciBjb24gZGV0YWxsZSBsYXMgcGF1dGFzIGRlIGNvbXVuaWNhY2nDs24gcGFyYSBlbnRvcm5vcyB2aXJ0dWFsZXM=","Q3VhbmRvIGFsIGVzY3JpYmlyIG5vIGluZGljYW1vcyBhIHF1aWVuIHZhIGRpcmlnaWRv","Q3VhbmRvIG5vIHNlIHJlc3BldGEgbGEgcHJpdmFjaWRhZCBkZSBsYSBpbmZvcm1hY2nDs24gcXVlIGNvbXBhcnRlbiBsb3MgZGVtw6Fz","Q3VhbmRvIHByZXNlbnRhcyBpbmZvcm1hY2nDs24gYWplbmEgY29tbyBwcm9waWE=","Q3VhbmRvIG5vIGVzY3JpYmVzIGNvcnJlY3RhbWVudGUgZWwgbm9tYnJlIGRlIGxhIHBlcnNvbmEgYSBxdWllbiB0ZSBkaXJpamVz","Q3VhbmRvIGVuIHR1cyBjb21lbnRhcmlvcyBpbmNsdXllcyBwYWxhYnJhcyBxdWUgcHVlZGVuIG9mZW5kZXIgYSB0dXMgY29tcGHDsWVyb3M=","Q3VhbmRvIG5vIHJlc3BldGFzIGxhIHBvc3R1cmEgZGUgdHVzIGNvbXBhw7Flcm9zLCBhdW4gbm8gZXN0YW5kbyBkZSBhY3VlcmRvIGNvbiBlbGxvcw==","Q3VhbmRvIGVzY3JpYmVzIHPDs2xvIGNvbiBtYXnDunNjdWxhcy4gRW4gbGEgY29tdW5pY2FjacOzbiB2aXJ0dWFsIHNpZ25pZmljYSBncml0YXI=","Q3VhbmRvIHRlIGRpcmlnZXMgZGUgbWFuZXJhIGdyb3NlcmEsIGVzdG8gb2ZlbmRlIGEgdHVzIGNvbXBhw7Flcm9z","Q3VhbmRvIGluY2x1eWVzIGltw6FnZW5lcyBlbiB0dXMgcGFydGljaXBhY2lvbmVzIHlhIHF1ZSBvY3VwYW4gdW4gZ3JhbiBlc3BhY2lv","Q3VhbmRvIG5vIGVzY3JpYmVzIGRlIG1hbmVyYSBjb25jaXNhIHkgYnJldmUuIEN1YW5kbyB0dXMgcMOhcnJhZm9zIHNvbiBtdXkgZXh0ZW5zb3Mu","Q3VhbmRvIG5vIGluZGljYXMgY29uIGV4YWN0aXR1ZCBkZSBkw7NuZGUgb2J0dXZpc3RlIGxhIGluZm9ybWFjacOzbiBxdWUgcHJvcG9yY2lvbmFz"];
var img_G=["","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","",""];
var n_G=["Mg==","MQ==","Mw==","MQ==","MQ==","Mg==","Mg==","Mg==","Mw==","Mw==","Mw==","NA==","NA==","NA==","NQ==","NQ==","NQ=="];
var e_G=["Oh, oh. Revisar reglas de Netiqueta","Oh, oh. Corrobora resuelve el estudio de reglas de Netiqueta","Oh, oh. Corrobora con tus apuntes","Oh, oh. Revisa con atención las reglas de Netiqueta","Oh, oh. Atender el estudio de reglas de Netiqueta","Oh,oh. Atender el estudio de normas de Netiqueta","Oh, oh. Revisa tus apuntes respecto a Netiqueta.","Oh, oh. En el recurso de Netiqueta encontramos el apoyo.","Oh, oh. Atiende las pautas de netiqueta y los peligros del plagio","Oh, oh. Tomar notas de los recursos te beneficia. Consulta Netiqueta","Oh, oh. Redacta tus apuntes de Netiqueta","Oh, oh. Corrobora tus apuntes de Netiqueta","Oh, oh. Es necesario revisar las reglas de Netiqueta","Oh, oh. Recapitula las reglas de Netiqueta","Oh, oh. Corrobora tus apuntes","Oh, oh. Redacta tus apuntes acorde a lo expuesto en Netiqueta.","Oh, oh. Toma nota de las reglas de Netiqueta."];
var mp4_G=["","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","",""];
var txtGr=["En un Mensaje: Hey¡, q c tiene que hcer en la tarea?","En Foro: Te avise que envié mi tarea ayer domingo. Revisé y no tengo mi calificación. ¿Para cuando?","Juancho, compañero, pasame la tarea, porfa, no me da tiempo, ya va ha cerrar la plataforma.","Ana: ARI, ESTAS MAL, YA TE DIJE QUE NO ES COMO TU DIGAS.","Una extensa redacción, no indicando fuentes de información"];
var imgGr=["","","","","0_Img-Partc-Imgn.png"];
var mp3Gr=["","","","",""];
var oggGr=["","","","",""];
var altGr=["","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Oh, ho. Redacta tus apuntes en base al estudio de las reglas de Netiqueta y formulación eficiente de preguntas";
var dirMedia="Prbl-Comnc-Vrtl_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="UHJibC1Db21uYy1WcnRs"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
