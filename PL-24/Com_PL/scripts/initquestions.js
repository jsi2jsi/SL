var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
);

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
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('kIXTcigRJeA=', 277, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kIXTcigRJeA=', 277, -1000, 1000),DecodeDecimal('KFjkFbQ/66s=', 277, -1000, 1000),DecodeDecimal('KFjkFbQ/66s=', 277, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula?";
    question.noChoice = false;
    choice = $('#idGap2_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7xwXu7Td6/5LshEOggQ03Oo+NtZCyEzI+dh+aDrYrchua9xrLIfYXQ=='));
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
    var weight = DecodeNumber('B71nlfF7qYY=', 482, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B71nlfF7qYY=', 482, -1000, 1000),DecodeDecimal('yYbGQPScIxU=', 482, -1000, 1000),DecodeDecimal('yYbGQPScIxU=', 482, -1000, 1000));
    question.num = 3;
    question.answers.length = 0;
    question.shortTextQuestion = "Has iniciado tu exploración de la plataforma educativa. Atendiendo a tus habilidades de observación, además de los estudiantes, ¿Cuáles son los otros 4 agentes educativos presentes dentro de Mi Aula? ";
    question.noChoice = false;
    choice = $('#idGap3_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1H21oT5Nl0a4yHgGApSpzNUGM2g5uz+2nTQRdXwkruwWytB33Rqs8T9Wh7M62vAciGzule8iFBU='));
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
