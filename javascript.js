
// create button
var startButton = document.createElement("button")
var aButton = document.getElementById("aButton")
var bButton =document.createElement("button")
//set text content for button
 



startButton.textContent("click me to start quiz")
// add event listener to start timer 
startButton.addEventListener( onclick [ quizTimer]);
// creating function quiztimer 
function quizTimer(){
  var quizTimer = setTimeout(() => {

    if (aButton.addEventListener(onclick,"abutton"))
    prompt("you clicked me !")








      
   900000});

















  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}var myQuestions = [
        {
            question: "What is 10/2?",
            answers: {
                a: '3',
                b: '5',
                c: '115'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is 30/3?",
            answers: {
                a: '3',
                b: '5',
                c: '10'
            },
            correctAnswer: 'c'
        }
    ];

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
}