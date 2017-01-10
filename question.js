//all questions go here
// all answers go here

var questionCounter = 0;

function MakeQuestion(question, correctAnswer, incorrectAnswer) {
    this.question = question;   
    this.correctAnswer = correctAnswer;
    this.incorrectAnswer = incorrectAnswer;
    questionCounter++;
}

var q1 = new MakeQuestion("What is the capital of France?", "Paris", "Marseille");
var q2 = new MakeQuestion("Who starred in the Matrix", "Keanu Reeves", "Will Smith");
var q3 = new MakeQuestion("When did Donald Trump get elected President?", "2016", "2017");



