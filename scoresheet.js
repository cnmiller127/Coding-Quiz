//Variables for post quiz page
var userNameEl = document.createElement("input");
userNameEl.placeholder = "Initial here";
var container2El = document.getElementById("container-2");
var btnDiv2 = document.createElement("div");
var nameListEl = document.createElement("ol");
var formEl = document.createElement("form");
formEl.id = "postForm";
var backBtn = document.createElement("button");
var clearBtn = document.createElement("button");
var  user = userNameEl.value.trim();
var storedInfo = [];
var score;
var userObj = {name: user, score: score}
var entered = false;


function getScore(){
    score = JSON.parse(localStorage.getItem("recentScore"));
    entered = JSON.parse(localStorage.getItem("tookQuiz"));
}
function postQuiz(){

    cont2El = document.getElementById("container-2")
    cont2El.appendChild(formEl);
    formEl.appendChild(nameListEl);
    if(score !== null && entered === true){
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
    
    console.log(storedInfo.length);
    for(var t = 0; t < storedInfo.length; t++)
        {
            var newEntry = document.createElement("li");
            var nm = storedInfo[t].name;
            var scr = storedInfo[t].score;
            newEntry.textContent = nm + " received a " + scr.toFixed(1) +"%";
            console.log(storedInfo[t].score)
            nameListEl.appendChild(newEntry); 
        }

}

getScore();
postQuiz();

formEl.addEventListener("submit", function(event){
    event.preventDefault();

    //for list items
    var singleUser = document.createElement("li");
    singleUser.textContent = userNameEl.value + " received a " + score.toFixed(1) +"%";
    nameListEl.appendChild(singleUser);

    //For storage
    entered = false;
    localStorage.setItem("tookQuiz", JSON.stringify(entered));

    user = userNameEl.value.trim();
    
    userObj = {name: user, score: score}
    console.log(userObj);
    storedInfo.push(userObj)
    console.log(storedInfo);
    localStorage.setItem("user", JSON.stringify(storedInfo));
    formEl.removeChild(userNameEl);
    

});


backBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./index.html";
})

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    nameListEl.innerHTML = "";
})