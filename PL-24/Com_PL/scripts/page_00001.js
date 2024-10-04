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
    var weight = DecodeNumber('hZaMDDBntoM=', 908, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cbu5SUtIMcg=', 267, -1000, 1000),DecodeDecimal('axIIfoEnQEs=', 267, -1000, 1000),DecodeDecimal('axIIfoEnQEs=', 267, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = " Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula?";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('T1m0oGubfCVDJkN5l7xODQ=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    ClearFillTheGap(1,0);

}






