$(document).ready(function() {
    console.log("Ready!");

    $('body').on('click', '#start-button', function() {

        
        $('#start-button-div').hide();
       
    });
    

});
var randomQuestion;

var quizQuestions = [
    {
       question: "What is Ugly Naked Guy's apartment number?",
       answers: ['3B', '9C', '2F', '5D'],
       correctAnswer: 0,
       correctGif: 'assets/images/gif1.gif',
       wrongGif: 'assets/images/wronggif1.gif'
    
    }, 
    {
       question: "What dessert did Rachel try to make for Thanksgiving?",
       answers: ['Souffle', 'Cookies', 'Cake', 'Trifle'],
       correctAnswer: 3,
       correctGif: 'assets/images/gif2.gif',
       wrongGif: 'assets/images/wronggif2.gif'

    },
    {
       question: "What song did Ross sing to make Emma laugh?",
       answers: ['Milkshake', 'Party in the USA',  'Baby got back', 'Baby one more time'],
       correctAnswer: 2,
       correctGif: 'assets/images/gif3.gif',
       wrongGif: 'assets/images/wronggif3.gif'

    },
    {
       question: "Who sings the song,'Smelly Cat'?",
       answers: ['Ross', 'Monica', 'Chandler','Phoebe'],
       correctAnswer: 3,
       correctGif: 'assets/images/gif4.gif',
       wrongGif: 'assets/images/wronggif4.gif'
    },
    {
       question: "Who said, 'PI-VOT'?",
       answers: ['Joey', 'Ross',  'Monica', 'Chandler'],
       correctAnswer: 1,
       correctGif: 'assets/images/gif5.gif',
       wrongGif: 'assets/images/wronggif5.gif'

    },
    {
       question: "What's Joey's catch-phrase?",
       answers: ['How you doing?', 'Hey, baby!',  'How goes it?', 'Hey, hey!'],
       correctAnswer: 0,
       correctGif: 'assets/images/gif6.gif',
       wrongGif: 'assets/images/wronggif6.gif' 

    },
    {
       question: "What's the name of the bartender in Central Perk?",
       answers: ['Runther', 'Gunsher',  'Gunther', 'Chandler'],
       correctAnswer: 2,
       correctGif: 'assets/images/gif7.gif',
       wrongGif: 'assets/images/wronggif7.gif'

    },
    {
       question: "Which soap opera does Joey act in?",
       answers: ['General Hospital', 'Days of our lives',  'Passions', 'All my chidren'],
       correctAnswer: 1,
       correctGif: 'assets/images/gif8.gif',
       wrongGif: 'assets/images/wronggif18.gif'

    },
    {
       question: "What name is Chanlder's TV guide addressed to?",
       answers: ['Miss Chanandler Bong', 'Chandy Bing',  'Chandler Bing', 'Joey Tribiani'],
       correctAnswer: 0,
       correctGif: 'assets/images/gif9.gif',
       wrongGif: 'assets/images/wronggif9.gif' 

    }];
   
    
var play = [];

var timer = "";
var incorrectAnswer =  0;
var correctAnswer = 0;
var unansweredQuestion = [];

//Loop through all questions one time then end turn. 

// function gameLoop(){
//     var limit = quizQuestions.length;
//     for (i = 0; i < limit; i++) { 
//         loadQuestion();
//     }
    
// }

var questionTimeOut; 

function timedOut() {
    console.log("inside timeout");
    questionTimeOut = setTimeout(function(){
    $('.triviaDivClass').remove();
    $('.choicesDivClass').remove();
    unansweredQuestion++
    loadQuestion();
    }
        ,20000);

}

    // $('#timer-div').html("<h2>Time remaining: " + timer.time + "</h2>");

    // $('#timer-div').html("<h2>Time remaining: " + timer.time + "</h2>");

// var count=21;

// var counter=setInterval(timerCount, 1000); //1000 will  run it every 1 second

// function timerCount()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      return;
//   }

//   console.log("timer"+ count );
//   $('#timer-div').html("<h2>Time remaining: " + count+ "</h2>");
// }

var counter;

function loadQuestion() {
    console.log("quizQuestions");
    if (quizQuestions.length === 0){
        updateDisplay();
        return;
    }

    function updateDisplay() {
       
    $('#quiz-div').append("<h3> Correct Answers: " + correctAnswer + "</h3>");
    $('#quiz-div').append("<h3> Incorrect Answers: " + incorrectAnswer + "</h3>");
    $('#quiz-div').append("<h3> Unanswered: " + unansweredQuestion + "</h3>");
    $('#timer-div').remove;

    };

    // Math for random array of questions and .shift so that it doesn't repeat the same question in one turn. 
    var randomNum = Math.floor(Math.random()*quizQuestions.length);
    randomQuestion = quizQuestions[randomNum];

    console.log("quizquestions: ");
    console.log(quizQuestions);

    // quizQuestions[randomNum]=quizQuestions[0];
    quizQuestions.splice(randomNum, 1);

    console.log("fter shift quizquestions: ");
    console.log(quizQuestions);

    console.log(randomQuestion.answers);
    console.log(randomQuestion.correctGif);
    
    var triviaDiv = $('<div>');
    triviaDiv.addClass('triviaDivClass');
    triviaDiv.attr('correctAnswer', randomQuestion.answers);
    triviaDiv.attr('rightGifPath', randomQuestion.correctGif);
    triviaDiv.attr('wrongGifPath',randomQuestion.wrongGif);

    console.log(triviaDiv);
    triviaDiv.append(randomQuestion.question);
    $('#quiz-div').append(triviaDiv);



    // Answer choices
    var choicesDiv = $('<div>');
    choicesDiv.addClass('choicesDivClass');
    $('#quiz-div').append(choicesDiv);

    
    for (var i = 0; i < randomQuestion.answers.length; i++) {
        var pickedAnswerDiv = $('<div>');
        pickedAnswerDiv.addClass('pickedAnswerDivClass');
        pickedAnswerDiv.attr('thisAnswer', [i]);
        pickedAnswerDiv.append(randomQuestion.answers[i]);
        $(choicesDiv).append(pickedAnswerDiv);
    };



    var count=20;

    counter=setInterval(timerCount, 1000); //1000 will  run it every 1 second

    function timerCount()
    {
        count=count-1;
        if (count <= 0)
        {
            clearInterval(counter);
            //counter ended, do something here
            return;
        }

        console.log("timer"+ count );
        $('#timer-div').html("<h4>Time remaining: " + count+ "</h4>");
    }

    timedOut();

};

$('container').on('click', '.pickedAnswerDivClass', function() {
    clearInterval(counter);
    clearTimeout(questionTimeOut);
    var rightClick = parseInt(($(this).attr('thisAnswer')));
    play++;
    var rightAnswer = randomQuestion.correctAnswer;
    console.log(rightAnswer);
    var showGif = $('.triviaDivClass').attr('rightGifPath');
    var showWrongGif = $('.triviaDivClass').attr('wrongGifPath');
    

   
    console.log($('.triviaDivClass').attr('rightGifPath'));
    console.log($('.triviaDivClass').attr('wrongGifPath'));
    console.log("rightClick:" + rightClick);
    console.log("rightAnswer:" +rightAnswer);
    console.log(rightClick === rightAnswer );
    console.log(showWrongGif);

    if (rightClick === rightAnswer) {
        correctAnswer++;
        $('.triviaDivClass').remove();
        $('.choicesDivClass').remove();
        $('#quiz-div').append('<img id="image" src=' + showGif + '>');
    }else {
    
        incorrectAnswer++;
        $('.triviaDivClass').remove();
        $('.choicesDivClass').remove();
        $('#quiz-div').append('<img id="image" src=' + showWrongGif + '>');

        // Display end game stats
    }

    

    setTimeout(function(){ 
        $('#image').remove(); 
    }, 2000);    
    
    setTimeout(function(){ 
        loadQuestion();
    }, 4000);

    
    
    
});

 


