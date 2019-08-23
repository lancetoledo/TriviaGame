$(document).ready(function(){
  
  // event listeners
  $("#remaining-time").hide();
  $("#start").on('click', trivia.startGame);
  $(document).on('click' , '.option', trivia.guessChecker);
  
})

var x = document.getElementById("right");
var a = document.getElementById("wrong");


var trivia = {
  
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId : '',
  
  questions: {
    q1: "What is Ironman's name?",
    q2: "Who is Peter Parker’s best friend in Spider-Man: Homecoming?",
    q3: "Who does Chris Pratt play in Guardians of the Galaxy",
    q4: "Which one of the dimensions does the Ancient One show Doctor Strange to practice his magic safely?",
    q5: "What is the name of Thor's Hammer?",
    q6: "What is Groot's Catchphrase?",


  },
  options: {
    q1: ["Tony Stank", "Anthony Edwards", "Antonio Stark", "Anthony Edward Stark"],
    q2: ["Ned", "Fred", "John", "Mark"],
    q3: ["Groot", "Gamora", "Rocket","Peter Quill"],
    q4: ["Mind Dimension", "Mirror Dimension", "Minor Dimension", "Secret Dimension"],
    q5: ["Hagrid", "Excalibur", "Mjolnir", "Hammer"],
    q6: ["I am not Groot", "I am Groob", "I am Groot", "I am Good"],

  },
  answers: {
    q1: "Anthony Edward Stark",
    q2: "Ned",
    q3: "Peter Quill",
    q4: "Mirror Dimension",
    q5: "Mjolnir",
    q6: "I am Groot",
  },

  startGame: function(){
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);
    
    $('#game').show();
    

    $('#results').html('');
    

    $('#timer').text(trivia.timer);
    

    $('#start').hide();

    $('#remaining-time').show();
    trivia.nextQuestion();
    
  },

  nextQuestion : function(){
    trivia.timer = 10;
     $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);
 
    if(!trivia.timerOn){
      trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }
    

    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);
    
   
    var questionOptions = Object.values(trivia.options)[trivia.currentSet];
    
 
    $.each(questionOptions, function(index, key){
      $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    })
    
  },
  timerRunning : function(){
    if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
      $('#timer').text(trivia.timer);
      trivia.timer--;
        if(trivia.timer === 4){
          $('#timer').addClass('last-seconds');
        }
    }
    else if(trivia.timer === -1){
      trivia.unanswered++;
      trivia.result = false;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
    }
    else if(trivia.currentSet === Object.keys(trivia.questions).length){      
      $('#results')
        .html('<h3>Thank you for playing!</h3>'+
        '<p>Correct: '+ trivia.correct +'</p>'+
        '<p>Incorrect: '+ trivia.incorrect +'</p>'+
        '<p>Unaswered: '+ trivia.unanswered +'</p>'+
        '<p>Please play again!</p>');
      

      $('#game').hide();
      $('#start').show();
    }
    
  },

  guessChecker : function() {
    

    var resultId;
    

    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
    
 
    if($(this).text() === currentAnswer){

      $(this).addClass('btn-success').removeClass('btn-info');
      
      trivia.correct++;
      playRight()
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Correct Answer!</h3>');
    }
  
    else{

      $(this).addClass('btn-danger').removeClass('btn-info');
      
      trivia.incorrect++;
      clearInterval(trivia.timerId);
      resultId = setTimeout(trivia.guessResult, 1000);
      $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
    }
    
  },

  guessResult : function(){

    trivia.currentSet++;
    

    $('.option').remove();
    $('#results h3').remove();
    
    trivia.nextQuestion();
     
  }

}

function playRight() { 
  x.play(); 
} 

function playWrong() { 
  a.play(); 
} 










































// var questions = [
    
//  {
//     questions: "Who came up with the name Squadron?",
//     answers: ["Fabio", "Lance", "Jeff", "Drew"],
//     correctAns: "Jeff",
  
    

//   },
//   {
//     questions: "What was the first Vlog called",
//     answers: ["WE BREAK INTO OUR ROOMMATES DORM", "TWO ASIANS ONE CUP", "TO ASIANS ONE LOCK?", "TWO ASIANS ONE LOCK?"],
//     correctAns:"TWO ASIANS ONE LOCK?",
  
   

//   },
//   {
//     questions: "What was the first Squadron event that was planned?",
//     answers: ["Friendsgiving", "Friendsmas", "Squadron Smash Tournament","Family Dinner"],
//     correctAns:"Friendsgiving",
  
//   },

//   {
//     questions: "Which Squadron member dated the most people?",
//     answers: ["Anna", "Alex", "Fabio", "Lance"],
//     correctAns:"Alex",
  
//   },

//   {
//     questions: "Which crime did Squadron get caught for?",
//     answers: ["Illegal Drugs", "Stealing", "Underage Drinking", "Vandalism"],
//     correctAns:"Underage Drinking",
  
//   },

//   {
//     questions: "What is Squadron's first offical opening Song?",
//     answers: ["Topanga", "Senior Skip Day", "Broad Shoulders", "GS MODE"],
//     correctAns:"Broad Shoulders",
  
  


//  }
// ];








$( document ).ready(function() {
    console.log( "ready!" );
});




var game = {
  correct: 0,
  incorrect: 0,
  counter: 10,
  timer: null,
  countdown: function(){
    game.counter--;
    $("#counter").html(game.counter);
    if(game.counter==0){
      console.log("Time is up!");
      game.done();
      
    }


  },
  start: function(){

    game.timer = setInterval(game.countdown, 1000)
    $("#game").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')

    $("#start").hide();
    
    for (var i = 0; i < questions.length; i++) {

       $("#game").append('<h2>'+questions[i].questions + '</h2>');
       for(var x=0;x<questions[i].answers.length;x++)
       $("#game").append("<input type = 'radio' name= 'question-"+i+"'value='"+questions[i].answers[x]+"'>"+questions[i].answers[x])
}
  },
  done: function(){
    console.log("done function executed")
    var answer1 = $('input[name="question-0"]:checked').val()
 
      if(answer1==questions[0].correctAns){
        game.correct++;
        
      }
      else{
        game.incorrect++;
      }
    
    var answer2 = $('input[name="question-1"]:checked').val()
      if(answer2==questions[1].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    
    var answer3 = $('input[name="question-2"]:checked').val()
      if(answer3==questions[2].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    
    var answer4 = $('input[name="question-3"]:checked').val()
      if(answer4==questions[3].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    
    var answer5 = $('input[name="question-4"]:checked').val()
    
      if(answer5==questions[4].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    
    var answer6 = $('input[name="question-5"]:checked').val()
    console.log(answer6)
    console.log(questions[5].correctAns)

      if(answer6==questions[5].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    
    game.result();
  },
  result: function(){
    console.log("result function is executed!")
    clearInterval(game.timer);
    $('#game h2').remove();

    $('#game').html("<h2>All Done!</h2>")

    $('#game').append("<h3>Correct Answers: " +game.correct+"</h3>");
    $('#game').append("<h3>Incorrect Answers: " +game.incorrect+"</h3>");
    $('#game').append("<h3>Unanswered: " +(questions.length-(game.incorrect+game.correct))+"</h3>");
  }
}











// function runTimer(){
// 	if (!running) {
// 	intervalId = setInterval(decrement, 1000); 
// 	running = true;
// 	}
// }

// function decrement() {
// 	$("#timeLeft").html("<h3>Time remaining: " + timer + "</h3>");
// 	timer --;


// 	if (timer === 0) {
//         $("#timeLeft").html("<h3>Time remaining: " + timer + "</h3>");
//         $(".questions").html("<p>All Done!" + "</p>");
//         stop();
		
// 	}	
// }

// function stop(){
//     clearInterval(intervalId);
// }