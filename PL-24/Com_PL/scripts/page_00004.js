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



$(document).ready(function ()
{
	const questionIndex = 3;
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
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('3sFFYYbHXc8=', 492, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3sFFYYbHXc8=', 492, -1000, 1000),DecodeDecimal('f52GzuwVuS0=', 492, -1000, 1000),DecodeDecimal('f52GzuwVuS0=', 492, -1000, 1000));
    question.num = 4;
    question.answers.length = 0;
    question.shortTextQuestion = "Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula?  ";
    question.noChoice = false;
    choice = $('#idGap4_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AZgHqQgDXAEElXGqVj7VPQkMcNg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}


/* Code generated function */
function ClearQuestion4()
{
    ClearFillTheGap(4,0);

}






