const choices =["rock","paper","scissors"]
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerchoice === computerchoice){
        result ="IT IS A TIE!"
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result=(computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result=(computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerdisplay.textContent=`Player:${playerchoice}`;
    computerdisplay.textContent=`Computer:${computerchoice}`;
    resultdisplay.textContent= result;

    resultdisplay.classList.remove("redtext","greentext")

    switch(result){
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            break;
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            break;
    }
}