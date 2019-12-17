const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');
myCanvas.width = 1400;
myCanvas.height = 650;

let score = 0;
let isOver = false;

const mainChar = new Image();
mainChar.src = './images/Santa-Logo.png/';
let mainCharX = 0;
let mainCharY = 525;

let giftsArray = [];
const giftsXPositions = [150, 210, 270, 440, 500, 560, 700, 760, 820, 1000, 1060]

addGifts();

const obstacleImg = new Image();
obstacleImg.src = './images/bomb-clipart.png';
let obstacleX = 1340;
let obstacleY = 545;

function drawImg(name, pathToImg, x, y, w, h) {
    name = new Image();
    name.src = pathToImg;
        ctx.drawImage(name, x, y, w, h);
}

function addGifts() {
    for(let i = 0; i < giftsXPositions.length; i++) {
        giftsArray.push(new Gift(giftsXPositions[i]))
        console.log("gifts array ==> ==> ", {giftsArray, Gift});
    }
};

function drawEverything() {

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";

    ctx.fillText("Move your player with the arrow keys or W A S D keys.", 10, 40);
    ctx.fillText("Jump over the bomb collect the bricks and coins.", 10, 60);

    if(giftsArray.length === 0) {
        addGifts();
    }


    drawImg(mainChar, "./images/Santa-Logo.png", mainCharX, mainCharY, 65, 65);
    drawImg(obstacleImg, "./images/coal.png", obstacleX, obstacleY, 55, 55);
    for(let i = 0; i < giftsArray.length; i++) {
        giftsArray[i].draw();
    }
    // drawImg('brick', './images/gift2.png', 150, 385, 60, 60);
    // drawImg('coin', "./images/gift2.png", 210, 385, 60, 60);
    // drawImg('brick', './images/gift2.png', 270, 385, 60, 60);
    // drawImg('coin', "./images/gift2.png", 440, 385, 60, 60);
    // drawImg('coin', "./images/gift2.png", 500, 385, 60, 60);
    // drawImg('coin', "./images/gift2.png", 560, 385, 60, 60);
    // drawImg('brick', './images/gift2.png', 700, 385, 60, 60);
    // drawImg('brick', './images/gift2.png', 760, 385, 60, 60);
    // drawImg('coin', "./images/gift2.png", 820, 385, 60, 60);
    // drawImg('brick', './images/gift2.png', 1000, 385, 60, 60);
    // drawImg('brick', './images/gift2.png', 1060, 385, 60, 60);

    
    
    if (checkCollision(mainCharX, mainCharY, obstacleX, obstacleY)) {
        // alert("GAME OVER!");
        gameOver();
    }
    for(let i = 0; i < giftsArray.length; i++) {
        if (checkContact(mainCharY, giftsArray[i].y, mainCharX, giftsArray[i].x)) {
            // drawImg('brick', './images/166-1660430_brick-background-png-brick-wall-background-pattern-png.png', 150, 375, 75, 75);
            score++;
            document.getElementById('score').innerHTML = "Score: "+ score;
            giftsArray.splice(i, 1);
        }
    }

    // if (checkContact(mainCharY, 375, mainCharX, 150)) {
    //     // drawImg('brick', './images/166-1660430_brick-background-png-brick-wall-background-pattern-png.png', 150, 375, 75, 75);
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 385, mainCharX, 210)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 375, mainCharX, 270)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 385, mainCharX, 440)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 385, mainCharX, 500)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 385, mainCharX, 560)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 375, mainCharX, 700)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 375, mainCharX, 760)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 385, mainCharX, 820)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 375, mainCharX, 1000)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }
    // if (checkContact(mainCharY, 375, mainCharX, 1060)) {
    //     score++;
    //     document.getElementById('score').innerHTML = "Score: "+ score;
    // }

    if (obstacleX === 0){
        score++;
        document.getElementById('score').innerHTML = "Score: "+ score;
    }

}

        
function drawingLoop() {
    ctx.clearRect(0, 0, 1400, 650);

    obstacleX -= 5;
    
    if (obstacleX < -70) {
        obstacleX = 1340;
        // obstacleY = Math.floor(Math.random() * 600);
    }
    
    
    drawEverything();
    // this is so that santa has gravitational pull after a jump
    if(mainCharY < 525) {
        mainCharY += 3;
    }

    if (isOver === false) {
        requestAnimationFrame(() => drawingLoop());
    }  
    checkStatus();
    
};

function checkStatus(){
console.log("Check Status being called")
    if(score >= 15){
    youWin();
    }
}

document.onkeydown = function (event) {

    switch(event.keyCode){
        case 37: // LEFT
        case 65:
            if (mainCharX >= 10) mainCharX -= 25;
            break;
        case 38: // UP
        case 87:
            if (mainCharY >= 515) mainCharY -= 135;
            break;
        case 39: // RIGHT
        case 68:
            if (mainCharX <= 1320) mainCharX += 25;
            break;
        case 40: // DOWN
        case 83:
            if (mainCharY <= 505) mainCharY += 100;
            break;
        default:
            console.log("They key codes are not working", event.keyCode);
        }
    };
    


function checkContact(mainCharY, obstacleBottom, mainCharX, obstacleLeft){
    // mainCharY + mainChar-height >= obstacleY
return mainCharY <= obstacleBottom + 50
// // mainCharY <= obstacleY + obstacle-height
&& mainCharX + obstacleLeft >= obstacleLeft + obstacleLeft
// // mainCharX + mainChar-width >= obstacleX
&& mainCharX + obstacleLeft <= obstacleLeft + obstacleLeft + 20
// // mainCharX <= obstacleX + obstacle-width
// && obj1y + 65 >= obj2y;
};
  

function checkCollision(obj1x, obj1y, obj2x, obj2y){
    // mainCharY + mainChar-height >= obstacleY
return obj1y + 65  >= obj2y
    // mainCharY <= obstacleY + obstacle-height
    && obj1y <= obj2y + 60
    // mainCharX + mainChar-width >= obstacleX
    && obj1x + 65 - 10 >= obj2x
    // mainCharX <= obstacleX + obstacle-width
    && obj1x <= obj2x + 60;
};


function gameOver(){
    ctx.clearRect(0, 0, 1400, 650);

    isOver = true;

    ctx.font = "70px bold Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER!", 450, 350);
};

function youWin(){
    ctx.clearRect(0, 0, 1400, 650);

    ctx.font = "70px bold Arial";
    ctx.fillStyle = "green";
    ctx.fillText("YOU WIN!", 500, 350);
};

drawingLoop();

