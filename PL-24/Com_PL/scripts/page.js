//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('5XYxaw+jMQk=', 198, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5XYxaw+jMQk=', 198, -1000, 1000),DecodeDecimal('oVxnwe++kqg=', 198, -1000, 1000),DecodeDecimal('oVxnwe++kqg=', 198, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = " Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula?";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('8/oNViUkY6KVBSRUX/TOoA=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('pOobaGv42mw=', 44, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pOobaGv42mw=', 44, -1000, 1000),DecodeDecimal('V06I4SVwRec=', 44, -1000, 1000),DecodeDecimal('V06I4SVwRec=', 44, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula?";
    question.noChoice = false;
    choice = $('#idGap2_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bs0EVxUdBpa/zn3qX8L/0zc5hAJ9c7w+dSbuQR1iMkMc7P+AMwrBIQ=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('ZkoKA63oyAI=', 54, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZkoKA63oyAI=', 54, -1000, 1000),DecodeDecimal('51weDsF3Nkg=', 54, -1000, 1000),DecodeDecimal('51weDsF3Nkg=', 54, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula? ";
    question.noChoice = false;
    choice = $('#idGap3_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lTMWC9s0+Y3FwVDo8lDvUnydUmuCuvhpvXbHuuP1mGRdbaD2Hl0yeumumxKTJdu69eUfFUOfXGM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('PfkXWRU9G+U=', 423, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PfkXWRU9G+U=', 423, -1000, 1000),DecodeDecimal('jPMgxp7USHw=', 423, -1000, 1000),DecodeDecimal('jPMgxp7USHw=', 423, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula?  ";
    question.noChoice = false;
    choice = $('#idGap4_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('MdWcqh75YAZ6y3WEOw+0fRo4t48='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('f8JSSIzta7I=', 433, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('f8JSSIzta7I=', 433, -1000, 1000),DecodeDecimal('8C3rrEYJN6w=', 433, -1000, 1000),DecodeDecimal('8C3rrEYJN6w=', 433, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Además de contactar con estos agentes educativos mediante la plataforma, ¿cuáles son sus respectivos datos de contacto?";
    question.noChoice = false;
    choice = $('#idGap5_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lzxeHy7jLnCjyU83Z1dTwkiDwhCjjMqV'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ysdi+ff0Z3HLucOYKg6GlR47V+7SIdagArZHZXzaU1g='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lTMWC9s0+Y3FwVDo8lDvUnydUmuCuvhpvXbHuuP1mGRdbaD2Hl0yeumumxKTJdu69eUfFUOfXGM='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap5_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Eqm6TZfG0Fm/d4MKhEXFyzNQ41PnnPmstdKJ5SB2Oy6bfgY40hAYSCgs1WFyEYTifFW+hw=='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('+xTpz//Zcf4=', 443, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0YHDBEaZICw=', 279, -1000, 1000),DecodeDecimal('hXvXlJ1MhUk=', 279, -1000, 1000),DecodeDecimal('hXvXlJ1MhUk=', 279, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Además de contactar con estos agentes educativos mediante la plataforma, ¿cuáles son sus respectivos datos de contacto?  ";
    question.noChoice = false;
    choice = $('#idGap6_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bs0EVxUdBpa/zn3qX8L/0zc5hAJ9c7w+dSbuQR1iMkMc7P+AMwrBIQ=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('aTXYjYJLauNJmXTQGkOdFna2irw1NmyXrB/LMQ=='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tBPJvHLg2wr/ufp1OX1h1DAvpgIGTNxZ5jsgWwOA34N1aDaS'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap6_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WxplPgJPPu7nEmaNUw49ERWzsiLCqeW2'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap6_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GeqQzbwzJOglZ9/7eNo1Mg=='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap6_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('k3CvFpSPugrAAV4BNue6LizNo819vQ0m5FS3G7eAPxOZHt1Zt4GlgWG1G0JZ4LjM'));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    ClearFillTheGap(1,0);

}
/* Code generated function */
function ClearQuestion2()
{
    ClearFillTheGap(2,0);

}
/* Code generated function */
function ClearQuestion3()
{
    ClearFillTheGap(3,0);

}
/* Code generated function */
function ClearQuestion4()
{
    ClearFillTheGap(4,0);

}
/* Code generated function */
function ClearQuestion5()
{
    ClearFillTheGap(5,0);
    ClearFillTheGap(5,1);
    ClearFillTheGap(5,2);
    ClearFillTheGap(5,3);

}
/* Code generated function */
function ClearQuestion6()
{
    ClearFillTheGap(6,0);
    ClearFillTheGap(6,1);
    ClearFillTheGap(6,2);
    ClearFillTheGap(6,3);
    ClearFillTheGap(6,4);
    ClearFillTheGap(6,5);

}






