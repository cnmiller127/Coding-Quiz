
//Variables for Intro:
var introBtnEl = document.createElement("button");
var introHdr = document.createElement("h1");

//Variables for page layout:
var containerEl = document.getElementById("container");
var btnDiv = document.createElement("div");
btnDiv.id = "btnDiv";
var mainEl = document.createElement("main");
mainEl.id = "main";
var timerEl = document.createElement("div");
timerEl.id = "timer";
var scoreEl = document.createElement("div");
scoreEl.id = "score";



//Variables for Questions:

questArray = ["What is an if/else statement? ", "What is a for loop? ", "What is CSS used for? "]
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
// Question 3, B is true
var a3 = {answer: "The skeletal structure of the website", isRight: false};
var b3 = {answer: "The logic and reasoning behind the website.", isRight: false};
var c3 = {answer: "Computer screen syncronization", isRight: false}
var d3 = {answer: "The styling and layout of the website", isRight: true};
// // Question 4, B is true
// var a4 = {answer: "Tells you what a loop is for", isRight: false};
// var b4 = {answer: "Iterates a specified number of times.", isRight: true};
// var c4 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d4 = {answer: "Enhances processing speed", isRight: false};
// // Question 5, B is true
// var a5 = {answer: "Tells you what a loop is for", isRight: false};
// var b5 = {answer: "Iterates a specified number of times.", isRight: true};
// var c5 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d5 = {answer: "Enhances processing speed", isRight: false};
// // Question 6, B is true
// var a6 = {answer: "Tells you what a loop is for", isRight: false};
// var b6 = {answer: "Iterates a specified number of times.", isRight: true};
// var c6 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d6 = {answer: "Enhances processing speed", isRight: false};
// // Question 7, B is true
// var a7 = {answer: "Tells you what a loop is for", isRight: false};
// var b7 = {answer: "Iterates a specified number of times.", isRight: true};
// var c7 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d7 = {answer: "Enhances processing speed", isRight: false};
// // Question 8, B is true
// var a8 = {answer: "Tells you what a loop is for", isRight: false};
// var b8 = {answer: "Iterates a specified number of times.", isRight: true};
// var c8 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d8 = {answer: "Enhances processing speed", isRight: false};
// // Question 9, B is true
// var a9 = {answer: "Tells you what a loop is for", isRight: false};
// var b9 = {answer: "Iterates a specified number of times.", isRight: true};
// var c9 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d9 = {answer: "Enhances processing speed", isRight: false};
// // Question 10, B is true
// var a10 = {answer: "Tells you what a loop is for", isRight: false};
// var b10 = {answer: "Iterates a specified number of times.", isRight: true};
// var c10 = {answer: "Determines if a specified conditional statement is true or false", isRight: false}
// var d10 = {answer: "Enhances processing speed", isRight: false};

const numChoices = 4; // number of multiple choice answers
var qNum = 0; // question number

// 2-d object array for answer text and bools
var ansArray = [[a1, b1, c1, d1], [a2, b2, c2, d2], [a3, b3, c3, d3]]; 
//Variables for timer:
var totTime = 120;
//Variables for score
var score = 100; 
//Variables for passing info to other page
var tookQuiz = true;



//Function for introduction page
function setup(){

    introHdr.textContent = "QUIZ TIME!";
    containerEl.appendChild(introHdr);

    
    mainEl.textContent = "This is a multiple choice quiz. You will have 5 mintues to complete the quiz.";
    containerEl.appendChild(mainEl);

    containerEl.appendChild(btnDiv);

    introBtnEl.textContent = "Begin Quiz";
    btnDiv.appendChild(introBtnEl);

}

function introBtn(event){
    event.stopPropagation();
    timerEl.textContent = "Good Luck"; 
    containerEl.insertBefore(timerEl, mainEl);
    beginQuiz();
   
}

function beginQuiz(){
    
    timer();
    btnDiv.removeChild(introBtnEl);
    mainEl.textContent = questArray[qNum];
                
    for(x = 0; x < numChoices; x++){
        var aBtnEl = document.createElement("button");
        aBtnEl.id = x; 
        aBtnEl.textContent = ansArray[qNum][x].answer;
        aBtnEl.value = ansArray[qNum][x].isRight;
        btnDiv.appendChild(aBtnEl); 
                    
        }

    scoreEl.textContent = score.toFixed(1) + "%";
    containerEl.appendChild(scoreEl);
    
}

//Functions below for click events on answers.
function ansBtn(event){
    event.preventDefault();
    if(!event.target.matches("button")){
        return;
    }

    // Takes 10 seconds off clock if wrong
    // Takes percentage off score if wrong
    if(event.target.value === "false" && totTime >= 0 && score > 0){
        totTime -= 10;
        score = score - 100*(1/ansArray.length);
        console.log(score);

    }
    nextInQuiz();
    
    
}

function nextInQuiz(){
    
    qNum++;
    scoreEl.textContent = "Score: " + score.toFixed(1) + "%";
    if(qNum < ansArray.length){
        
        
        mainEl.textContent = questArray[qNum];
        
        
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

        
        totTime--;
        var tMin = Math.floor(totTime/60);
        var tSec = totTime % 60;
        
       if(totTime > 0 && qNum < ansArray.length){
           if(tSec >= 10){
            timerEl.textContent = "Time: " + tMin + ":" + tSec;
           }
           else{
            timerEl.textContent = "Time: " + tMin + ":0" + tSec;
           }

       }
       else{
        clearInterval(interval);
        timerEl.textContent = "Time: 0:00";
        localStorage.setItem("tookQuiz", JSON.stringify(true));
        saveScore();
        window.location.href = "./scoresheet.html";

       }

    }, 1000); //TOGGLE TIME HERE MILLISECONDS
}

//Save score
function saveScore(){
    localStorage.setItem("recentScore", JSON.stringify(score));
    console.log(score);

}

 
// RUNNING CODE
setup(); 
introBtnEl.addEventListener("click", introBtn)
containerEl.addEventListener("click", ansBtn);



