let button1 = document.querySelector("#p1");
let button2 = document.getElementById("p2");
let button3 = document.querySelector("#reset")
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let inputNum = document.querySelector("input");
let para = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winnerScore = 5;


button1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++; 
        if(p1Score === winnerScore){
            p1Display.classList.add("winner");

            gameOver = true; 
        }
            // console.log("GAME OVER")
        p1Display.textContent = p1Score;
        // console.log(p1Score);
        }
});

button2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;  
        if(p2Score === winnerScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
            p2Display.textContent = p2Score;
            // console.log(p2Score);
        }     
});

button3.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;

});


inputNum.addEventListener("click", function(){
    para.textContent = this.value;
    winnerScore = number(this.value);
});







   
 


