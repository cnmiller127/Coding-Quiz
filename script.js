
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
var question = document.getElementById("question"); 
var questEl = document.createElement("textarea");
var timerEl = document.createElement("div");
const numChoices = 4;
var qNum = 0; // question number
var totTime = 120;

var ansArray = [[a1, b1, c1, d1], [a2, b2, c2, d2]];






//Function for introduction page
function introPage(){

}

//Functions below for initializing quiz and click events on answers.
function eventBtn(event){
    event.preventDefault();
    if(!event.target.matches("button")){
        return;
    }
    console.log(event.target.value);
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
                
                questEl.textContent = questArray[qNum];
                question.appendChild(questEl);
                for(x = 0; x < numChoices; x++){
                    var aBtnEl = document.createElement("button");
                    aBtnEl.id = x; 
                    aBtnEl.textContent = ansArray[qNum][x].answer;
                    aBtnEl.value = ansArray[qNum][x].isRight;
                    question.appendChild(aBtnEl); 
                    console.log(ansArray[qNum][x].isRight);
                    }
                }
            function newQuestion(){
                console.log(questArray[qNum])
                questEl.textContent = questArray[qNum];
                
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

        document.body.children[0].appendChild(timerEl);

        
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
        
timer();
fillBtns();






question.addEventListener("click", eventBtn)
