//Variables for layout
var container2El = document.getElementById("container-2");
    var formEl = document.createElement("form");
    formEl.id = "postForm";
        var nameListEl = document.createElement("ol");
        nameListEl.className = "nameList"
        var scoreEl = document.createElement("div");
        scoreEl.id = "pre-initials"
        var userNameEl = document.createElement("input");
        userNameEl.placeholder = "ENTER initials";
        userNameEl.id = "initials"
    var btnDiv2 = document.createElement("div");
        var backBtn = document.createElement("button");
        backBtn.className = "btn";
        var clearBtn = document.createElement("button");
        clearBtn.className = "btn";
//Variables for list and storage
var storedInfo = [];
var score;
var entered = false;


 
function getScore(){
    score = JSON.parse(localStorage.getItem("recentScore"));
    entered = JSON.parse(localStorage.getItem("tookQuiz"));
    scoreEl.textContent = "YOUR SCORE: " + score.toFixed(1) + "%";
}
function postQuiz(){

    cont2El = document.getElementById("container-2")
    cont2El.appendChild(formEl);
    formEl.appendChild(nameListEl);
    
    if(score !== null && entered === true){
        formEl.appendChild(scoreEl);
        formEl.appendChild(userNameEl);
    }

    storedInfo = JSON.parse(localStorage.getItem("user"));
    if(storedInfo === null){
        storedInfo = [];
    }
    
    if(storedInfo.length > 0)
    {
        writeList();
    }
    container2El.appendChild(btnDiv2);
    backBtn.textContent = "Re-take quiz";
    clearBtn.textContent = "Clear list";
    btnDiv2.appendChild(backBtn);
    btnDiv2.appendChild(clearBtn);
           
}

function writeList(){
    nameListEl.innerHTML = ""; 
    storedInfo.sort(function(a, b){
        var scoreA = a.score;
        var scoreB = b.score;
        let comparison = 0;
        if (scoreA > scoreB) {
          comparison = -1;
        } else if (scoreA < scoreB) {
          comparison = 1;
        }
        return comparison;
      })

    for(var t = 0; t < storedInfo.length; t++)
        {
            var newEntry = document.createElement("li");
            newEntry.className = "nameEntered";
            var nm = storedInfo[t].name;
            var scr = storedInfo[t].score;
            newEntry.textContent = nm + " received a(n) " + scr.toFixed(1) +"%";
            console.log(storedInfo[t].score)
            nameListEl.appendChild(newEntry);
        }
     

        
   

        

}

getScore();
postQuiz();

formEl.addEventListener("submit", function(event){
    event.preventDefault();
    scoreEl.remove();
    //For storage
    entered = false;
    localStorage.setItem("tookQuiz", JSON.stringify(entered));

    var user = userNameEl.value.trim();
    
    var userObj = {name: user, score: score}
    console.log(userObj);
    storedInfo.push(userObj)
    console.log(storedInfo);
    localStorage.setItem("user", JSON.stringify(storedInfo));
    formEl.removeChild(userNameEl);
    writeList();
    

});


backBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./index.html";
})

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("user");
    storedInfo = [];
    nameListEl.innerHTML = "";
})