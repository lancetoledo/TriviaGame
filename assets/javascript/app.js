$( document ).ready(function() {
    console.log( "ready!" );
});


var questions = [
    
 {
    questions: "What is Ironman's name?",
    answers: ["Tony Stank", "Anthony Edwards", "Antonio Stark", "Anthony Edward Stark"],
    correctAns: "Anthony Edward Stark",
  
    

  },
  {
    questions: "Who is Peter Parker’s best friend in Spider-Man: Homecoming?",
    answers: ["Ned", "Fred", "John", "Mark"],
    correctAns:"Ned",
  
   

  },
  {
    questions: "Who does Chris Pratt play in Guardians of the Galaxy",
    answers: ["Groot", "Gamora", "Rocket","Peter Quill"],
    correctAns:"Peter Quill",
  
  },

  {
    questions: "Which one of the dimensions does the Ancient One show Doctor Strange to practice his magic safely?",
    answers: ["Mind Dimension", "Mirror Dimension", "Minor Dimension", "Secret Dimension"],
    correctAns:"Mirror Dimension",
  
  },

  {
    questions: "What is the name of Thor's Hammer?",
    answers: ["Hagrid", "Excalibur", "Mjolnir", "Hammer"],
    correctAns:"Mjolnir",
  
  },

  {
    questions: "What is Groot's Catchphrase?",
    answers: ["I am Groot", "I am Groot", "I am Groot", "I am Groot"],
    correctAns:"I am Groot",
  
  


 }
];





$("#start").on("click", function(){
    game.start();
})

var game = {
  correct: 0,
  incorrect: 0,
  counter: 10,
  countdown: function(){
    game.counter--;
    $("#counter").html(game.counter);
    if(game.counter<=0){
      console.log("Time is up!");
      game.done();
    }


  },
  start: function(){

    timer = setInterval(game.countdown, 1000)
    $("#game").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')

    $("#start").hide();
    
    for (var i = 0; i < questions.length; i++) {

       $("#game").append('<h2>'+questions[i].questions + '</h2>');
       for(var x=0;x<questions[i].answers.length;x++)
       $("#game").append("<input type = 'radio' name= 'questions-"+i+"'value='"+questions[i].answers[x]+"'>"+questions[i].answers[x])
}
  },
  done: function(){
    $.each($('input[name="questions0]":checked'),function(){
      if($(this).val()==questions[0].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    })
    $.each($('input[name="questions1]":checked'),function(){
      if($(this).val()==questions[1].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    })
    $.each($('input[name="questions2]":checked'),function(){
      if($(this).val()==questions[2].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    })
    $.each($('input[name="questions3]":checked'),function(){
      if($(this).val()==questions[3].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    })
    $.each($('input[name="questions4]":checked'),function(){
      if($(this).val()==questions[4].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    })
    $.each($('input[name="questions5]":checked'),function(){
      if($(this).val()==questions[5].correctAns){
        game.correct++;
      }
      else{
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function(){
    clearInterval(timer);
    $('#game h2').remove();

    $('#game').html("<h2>All Done!</h2>")

    $('#game').append("<h3>Correct Answers: " +this.correct+"</h3>");
    $('#game').append("<h3>Incorrect Answers: " +this.incorrect+"</h3>");
    $('#game').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
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