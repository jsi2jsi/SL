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
	const questionIndex = 4;
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
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('te72nvpRJ9Q=', 339, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('te72nvpRJ9Q=', 339, -1000, 1000),DecodeDecimal('trDd0DS4S60=', 339, -1000, 1000),DecodeDecimal('trDd0DS4S60=', 339, -1000, 1000));
    question.num = 5;
    question.answers.length = 0;
    question.shortTextQuestion = "Además de contactar con estos agentes educativos mediante la plataforma, ¿cuáles son sus respectivos datos de contacto?";
    question.noChoice = false;
    choice = $('#idGap5_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QYC/HujzyA9cg9QwrKXTFNshg642qKar'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1H21oT5Nl0a4yHgGApSpzNUGM2g5uz+2nTQRdXwkruwWytB33Rqs8T9Wh7M62vAciGzule8iFBU='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EteS6HOIVKHMAZ030OW2ZWaTiuOEiE97iEyUFfV6aJtwvc7E2n8Uqoiap7VQbzc9bY2Ipw=='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}


/* Code generated function */
function ClearQuestion5()
{
    ClearFillTheGap(5,0);
    ClearFillTheGap(5,1);
    ClearFillTheGap(5,2);

}






