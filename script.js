
//Variables for Intro:
var introBtnEl = document.createElement("button");
introBtnEl.className = "btn"; 
var introHdr = document.createElement("h1");
introHdr.className = "hdr";
var introList = document.createElement("ol")
introList.className = "nameList";

//Variables for page layout:
var containerEl = document.getElementById("container");
var btnDiv = document.createElement("div");
btnDiv.id = "btnDiv";
var mainEl = document.createElement("main");
mainEl.id = "main";
mainEl.className = "main";
var timerEl = document.createElement("div");
timerEl.id = "timer";
var scoreEl = document.createElement("div");
scoreEl.id = "score";



//Variables for Questions:

questArray = ["1.) What is an if statement? ", "2.) What is a for loop? ", "3.) What is CSS used for?"
, "4.) What values can bool have?", "5.) What does floating an image help with?", "6.) What is the '%' operator?"
, "7.) What does == do in Javascript?", "8.) What is bootstrap", "9.) What does stopPropogation() do?" ]
//Question 1, C is true
var a1 = {answer: "Iterates a specified number of times", isRight: false};
var b1 = {answer: "Prompts the user to answer a question", isRight: false};
var c1 = {answer: "Body runs if a specified conditional statement is met", isRight: true}
var d1 = {answer: "Enhances processing speed", isRight: false};
// Question 2, B is true
var a2 = {answer: "Tells you what a loop is for", isRight: false};
var b2 = {answer: "Iterates a specified number of times", isRight: true};
var c2 = {answer: "A user input interface", isRight: false}
var d2 = {answer: "Only for timers", isRight: false};
// Question 3, B is true
var a3 = {answer: "The skeletal structure of the website", isRight: false};
var b3 = {answer: "The logic and reasoning behind the website", isRight: false};
var c3 = {answer: "Computer screen syncronization", isRight: false}
var d3 = {answer: "The styling and layout of the website", isRight: true};
// Question 4, A is true
var a4 = {answer: "True or false", isRight: true};
var b4 = {answer: "Numbers", isRight: false};
var c4 = {answer: "Characters", isRight: false}
var d4 = {answer: "All of the above", isRight: false};
// Question 5, D is true
var a5 = {answer: "Changing the image filter", isRight: false};
var b5 = {answer: "Enlarging and shrinking the image", isRight: false};
var c5 = {answer: "Higher definition", isRight: false}
var d5 = {answer: "Wrapping text", isRight: true};
// Question 6, C is true
var a6 = {answer: "Division operator", isRight: false};
var b6 = {answer: "Returns a value as a percentage", isRight: false};
var c6 = {answer: "Remainder operator", isRight: true}
var d6 = {answer: "Recursive function marker", isRight: false};
// Question 7, B is true
var a7 = {answer: "Equality comparison operator that returns true only when both variable types AND values are equal", isRight: false};
var b7 = {answer: "Equality comparison operator that returns true when variable values are equal regardless of variable type", isRight: true};
var c7 = {answer: "Equals operator for algebraic expressions", isRight: false}
var d7 = {answer: "Not equal to", isRight: false};
// Question 8, B is true
var a8 = {answer: "Back-end development language", isRight: false};
var b8 = {answer: "CSS framework", isRight: true};
var c8 = {answer: "Javascript library", isRight: false}
var d8 = {answer: "HTML element tag library", isRight: false};
// Question 9, A is true
var a9 = {answer: "Prevents event bubbling", isRight: true};
var b9 = {answer: "Enables event bubbling", isRight: false};
var c9 = {answer: "Creates sin waves", isRight: false}
var d9 = {answer: "Breaks out of a for loop", isRight: false};

const numChoices = 4; // number of multiple choice answers
var qNum = 0; // question number
var qRight = 0;

// 2-d object array for answer text and bools
var ansArray = [[a1, b1, c1, d1], [a2, b2, c2, d2], [a3, b3, c3, d3], [a4, b4, c4, d4], [a5, b5, c5, d5], [a6, b6, c6, d6], [a7, b7, c7, d7], [a8, b8, c8, d8], [a9, b9, c9, d9]]; 
//Variables for timer:
var totTime = 240;
//Variables for score
var score = 0; 
//Variables for passing info to other page
var tookQuiz = true;



//Function for introduction page
function setup(){

    introHdr.textContent = "QUIZ TIME!";
    containerEl.appendChild(introHdr);
    
    containerEl.appendChild(mainEl);
    
    mainEl.appendChild(introList);

    var introListLi1 = document.createElement("li")
    introListLi1.textContent = "Multiple choice quiz"
    introList.appendChild(introListLi1);

    var introListLi2 = document.createElement("li")
    introListLi2.textContent = "Timed: 4 minutes"
    introList.appendChild(introListLi2);

    var introListLi3 = document.createElement("li")
    introListLi3.textContent = "Lose 10 seconds per wrong answer"
    introList.appendChild(introListLi3);

    containerEl.appendChild(btnDiv);

    introBtnEl.textContent = "Begin Quiz";
    btnDiv.appendChild(introBtnEl);

}

function introBtn(event){
    event.stopPropagation();
    mainEl.removeChild(introList);
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
        aBtnEl.className = "btn";
        aBtnEl.textContent = ansArray[qNum][x].answer;
        aBtnEl.value = ansArray[qNum][x].isRight;
        btnDiv.appendChild(aBtnEl); 
                    
        }

    scoreEl.textContent = "SCORE " + score.toFixed(1) + "%";
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
    if(event.target.value === "true")
    {
        qRight++;
        score = 100*(qRight/(qNum + 1));
    }
    if(event.target.value === "false" && totTime >= 0 && Math.floor(score) > 0){
        totTime -= 10;
        score = 100*(qRight/(qNum + 1));
        // score = score - 100*(1/ansArray.length);
        if(score < 0){
            score = 0;
        }

    }
    nextInQuiz();
    
    
}

function nextInQuiz(){
    
    qNum++;
    scoreEl.textContent = "SCORE: " + score.toFixed(1) + "%";
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
            timerEl.textContent = "TIME: " + tMin + ":" + tSec;
           }
           else{
            timerEl.textContent = "TIME: " + tMin + ":0" + tSec;
           }

       }
       else{
        clearInterval(interval);
        score = 100*qRight/(ansArray.length);
        //console.log(score);
        timerEl.textContent = "TIME: 0:00";
        localStorage.setItem("tookQuiz", JSON.stringify(true));
        saveScore();
        window.location.href = "./scoresheet.html";

       }

    }, 1000); //TOGGLE TIME HERE MILLISECONDS
}

//Save score
function saveScore(){
    localStorage.setItem("recentScore", JSON.stringify(score));
    //console.log(score);

}

 
// RUNNING CODE
setup(); 
introBtnEl.addEventListener("click", introBtn)
containerEl.addEventListener("click", ansBtn);



