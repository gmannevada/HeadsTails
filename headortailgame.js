
const canvas = document.getElementById('canvas'); 
const context = canvas.getContext('2d'); 
const img = new Image();        
let filesArray= ['Head.jpg', 'Tail.jpg', 'letsplay.jpg','youloose.jpg']; // array of images

img.src = filesArray[2];        
img.onload = () => { context.drawImage(img, 0, 0);  };
 
//drawImage(image, 0, 0);
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//myContext.drawImage(image, 0, 0, 100, 100, 0, 0, 100, 100);

const headwin = 0;
const tailwin = 1;

let btn_head = document.getElementById("btn_head");
let btn_tail = document.getElementById("btn_tail");
let btn_finish = document.getElementById("btn_finish");
let userWinCounter = document.getElementById("userWinCounter");
let computerWinCounter  = document.getElementById("computerWinCounter");
let result = document.querySelector("#result");
let resultCounter = document.querySelector("#resultCounter");

btn_head.onclick = () => { 
    context.clearRect(0, 0, 150, 150);

    let randomNum = Math.floor(Math.random() * 2); // 0 or 1
    img.src = filesArray[randomNum]; 
    context.drawImage(img, 0, 0); 

    if (randomNum == headwin) {
        IncrementUserWinCounter();
    } else {
        IncrementComputerWinCounter();       
    }

    DisplayResult(randomNum == headwin);
}

btn_tail.onclick = () => { 
    context.clearRect(0, 0, 150, 150);
    let randomNum = Math.floor(Math.random() * 2); // 0 or 1
    img.src = filesArray[randomNum]; 
    context.drawImage(img, 0, 0); 

    if (randomNum == tailwin) {
        IncrementUserWinCounter();    
    } else {
        IncrementComputerWinCounter();        
    }
    DisplayResult(randomNum == tailwin);
}
             
function IncrementUserWinCounter() {
    userWinCounter.value = parseInt(userWinCounter.value) + 1;    
}

function IncrementComputerWinCounter() {
    computerWinCounter.value = parseInt(computerWinCounter.value) + 1;    
}


function DisplayResult(userWon){
      result.innerHTML = "You won: " + userWinCounter.value + " Computer won: " + computerWinCounter.value;
}


function DisplayFinalResults() {
    if (userWinCounter.value > computerWinCounter.value) {
        alert("You win!");
    } else if (userWinCounter.value < computerWinCounter.value) {
        alert("You lose!");
    } else {
        alert("Draw!");
    }
}

btn_finish.onclick = () => {
    DisplayFinalResults();
    userWinCounter.value = 0;    
    computerWinCounter.value = 0;
    context.clearRect(0, 0, 150, 150);
    result.innerHTML = "You won: " + userWinCounter.value + " Computer won: " + computerWinCounter.value + " let's play again!"; 
}