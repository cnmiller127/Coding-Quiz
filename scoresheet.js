//Variables for post quiz page
var userNameEl = document.createElement("input");
var nameListEl = document.createElement("ol");
var formEl = document.createElement("form");
formEl.id = "postForm";
var  user = userNameEl.value.trim();
var userObj = {name: user, score: score}
var userObjArray = [];
var storedInfo = [];
var score;
var entered = false;


function getScore(){
    score = JSON.parse(localStorage.getItem("recentScore"));
    userObjArray = JSON.parse(localStorage.getItem("user"));
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
    
    if(storedInfo.length > 0)
    {
        writeList();
    }
           
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
    formEl.removeChild(userNameEl);

    //for list items
    var singleUser = document.createElement("li");
    singleUser.textContent = userNameEl.value + " received a " + score.toFixed(1) +"%";
    nameListEl.appendChild(singleUser);

    //For storage
    entered = false;
    localStorage.setItem("tookQuiz", JSON.stringify(entered));

    user = userNameEl.value.trim();
    
    userObj = {name: user, score: score}
    userObjArray.push(userObj)
    console.log(userObjArray);
    localStorage.setItem("user", JSON.stringify(userObjArray));

});