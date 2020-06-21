
//Variables for Intro:
var introBtn = document.createElement("button");
var introHdr = document.createElement("h1");

//Variables for page layout:
var containerEl = document.getElementById("container"); 
var mainEl = document.createElement("main");
var timerEl = document.createElement("div");
var scoreEl = document.createElement("div");


//Variables for Questions:

questArray = ["What is an if/else statement? ", "What is a for loop? "]
//Question 1, C is true
var a1 = {answer: "Iterates a specified number of times.", isRight: false};
var b1 = {answer: "Prompts the user to answer a question.", isRight: false};
var c1 = {answer: "Determines if a specified conditional statement is true or false", isRight: true}
var d1 = {answer: "Enhances processing speed", isRight: false};
// Question 2, B is true
var a2 = {answer: "Tells you what a loop is for", isRight: false};
var b2 = {answer: "Iterates a specified number of times.", isRight: true};
var c2 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
var d2 = {answer: "Enhances processing speed", isRight: false};

const numChoices = 4; // number of multiple choice answers
var qNum = 0; // question number

// 2-d object array for answer text and bools
var ansArray = [[a1, b1, c1, d1], [a2, b2, c2, d2]]; 
//Variables for timer:
var totTime = 120;
//Variables for score
var score = 100; 



//Function for introduction page
function setup(){

    introHdr.textContent = "QUIZ TIME!";
    containerEl.appendChild(introHdr);

    
    mainEl.textContent = "This is a multiple choice quiz. You will have 5 mintues to complete the quiz.";
    containerEl.appendChild(mainEl);

    
    introBtn.textContent = "Begin Quiz";
    introBtn.value = true;
    containerEl.appendChild(introBtn);

}

//Functions below for initializing quiz and click events on answers.
function eventBtn(event){
    event.preventDefault();
    if(!event.target.matches("button")){
        return;
    }
   
    fillBtns();
    
    
}

function fillBtns(){
    

    if(qNum<ansArray.length){
        
        if(qNum===0){
            
            initializeBtns();
            
        }
        else{
            newQuestion();
        }
        qNum++;
    }
    // Punish for wrong asnwer: totTime -= 10;

            //Helper functions
            function initializeBtns(){
                timer();
                containerEl.removeChild(introBtn);
                mainEl.textContent = questArray[qNum];
                
                for(x = 0; x < numChoices; x++){
                    var aBtnEl = document.createElement("button");
                    aBtnEl.id = x; 
                    aBtnEl.textContent = ansArray[qNum][x].answer;
                    aBtnEl.value = ansArray[qNum][x].isRight;
                    containerEl.appendChild(aBtnEl); 
                    
                    }

                scoreEl.textContent = score + "%";
                containerEl.appendChild(scoreEl);
                }
            function newQuestion(){
                
                mainEl.textContent = questArray[qNum];
                scoreEl.textContent = score + "%";
                
                for(x = 0; x < numChoices; x++){
                    aBtnEl = document.getElementById(x);
                    aBtnEl.textContent = ansArray[qNum][x].answer;
                    aBtnEl.value = ansArray[qNum][x].isRight;
                }
            }
            
    
}    

//Timer
function timer(){
    
    
    var interval = setInterval(function(){

        containerEl.insertBefore(timerEl, mainEl);

        
        totTime--;
        var tMin = Math.floor(totTime/60);
        var tSec = totTime % 60;
        
       if(totTime > 0){
           if(tSec >= 10){
            timerEl.textContent = tMin + ":" + tSec;
           }
           else{
            timerEl.textContent = tMin + ":0" + tSec;
           }

       }
       else{
        clearInterval(interval);
        timerEl.textContent = "0:00";
        // TRIGGER FN FOR END OF TIME HERE

       }

    }, 1000); //TOGGLE TIME HERE MILLISECONDS
}

function score(){

}
 
// RUNNING CODE
setup(); 
containerEl.addEventListener("click", eventBtn);
