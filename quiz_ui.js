//shows questions and answers on ui
//shows score and progress par on ui


function showQuestion(counter) {
     if (counter > questionCounter) {
     document.getElementsByTagName("h1")[0].innerHTML = "Game Over";
        question.innerHTML = "You scored " + currentScore + " out of " + questionCounter;
         choice1.style.display = "none";
         choice2.style.display = "none";
         
         guess0.style.display = "none";
         guess1.style.display = "none";
         questionOf.style.display = "none";
         return;
    } else {
        
    questionOf.innerHTML = "Question " + counter + " of " + questionCounter;
        
    currentQ = "q";
    currentQ += counter;
    console.log(currentQ);
    currentQ += ".question";
    
    question.innerHTML = eval(currentQ)
    
    showAnswers(counter);
    }
}

MakeQuestion.prototype = Object.create(showQuestion.prototype);
MakeQuestion.prototype = Object.create(showAnswers.prototype);

function ranNum() {
    var tat = (Math.floor(Math.random() * 2)) + 1;
    return tat;
     };
   
function showAnswers(counter) {
   
    var choiceX = "choice";
    var choiceY = "choice";
    currentCAnswer = "q";
    currentCAnswer += counter;
    currentCAnswer += ".correctAnswer";
    
    // assigns randomosity to where answers are placed. 
    choiceX += ranNum();
    if (choiceX === "choice1") {
        choiceY = "choice2";
    } else {
            choiceY = "choice1";
           }
      
    choiceX = eval(choiceX);
    choiceX.innerHTML = eval(currentCAnswer);
    choiceX.id = "correct";
    
    
    currentIAnswer = "q";
    currentIAnswer += counter;
    currentIAnswer += ".incorrectAnswer";
    choiceY = eval(choiceY);
    choiceY.innerHTML = eval(currentIAnswer);
    
}

guess0.addEventListener("click", checkAnswer);
guess1.addEventListener("click", checkAnswer);

function checkAnswer() {
 if (this.previousElementSibling.id === "correct" ) {
     currentScore++;
     counter++;
     showQuestion(counter);
 } else {
  counter++;
     showQuestion(counter);
 }
}












