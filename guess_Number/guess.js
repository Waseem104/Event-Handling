let secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score=20;
let highscore=0;

function displayMessage(message){
    document.querySelector(".message").textContent=message;
}
document.querySelector(".check").addEventListener('click',function(){
    const guess=Number(document.querySelector(".guess").value);

    if(!guess){
        displayMessage("not a number");
    }else if(guess===secretNumber){
        displayMessage("You Win");
        
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('body').style.background="#60b347";

        if(score>highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }

        document.querySelector(".guess").disabled=true;
    }
    else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? "too high":"too low");
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            displayMessage("you lost game");
            document.querySelector(".score").textContent=0;
        }
    }
});

document.querySelector(".again").addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    console.log(secretNumber);
    
    
    displayMessage("start guessing....");
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
    document.querySelector('body').style.background="#222";
    document.querySelector(".guess").disabled=false;
})