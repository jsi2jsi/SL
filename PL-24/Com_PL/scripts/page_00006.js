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
	const questionIndex = 5;
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
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('DiHKdKcJzqs=', 707, 0, 99999);
    var numOfAnswers = 6;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DiHKdKcJzqs=', 707, -1000, 1000),DecodeDecimal('FG8hZt/6KXI=', 707, -1000, 1000),DecodeDecimal('FG8hZt/6KXI=', 707, -1000, 1000));
    question.num = 6;
    question.answers.length = 0;
    question.shortTextQuestion = "Además de contactar con estos agentes educativos mediante la plataforma, ¿cuáles son sus respectivos datos de contacto?  ";
    question.noChoice = false;
    choice = $('#idGap6_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7xwXu7Td6/5LshEOggQ03Oo+NtZCyEzI+dh+aDrYrchua9xrLIfYXQ=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7y8of6jjWsnz3CZ4h8cJks1dTvEhm5apzCTwcQ=='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('S1zj0q0WSIIZGz5ac1VNzi8NbakklZzZ0yv6oA4yWdYA9lL8'));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap6_3').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AZgHqQgDXAEElXGqVj7VPQkMcNg='));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap6_4').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/GnVFit3d2Ws6fVtcWmTyQ=='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    choice = $('#idGap6_5').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2zL1RbwQ3n1xBpjJOjPNTd4U/XnC6YV3h3/UlA7ZZEB+J7pFgH1v1VhpM0EDbXw1'));
    var answer5 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer5);
    return question;

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






