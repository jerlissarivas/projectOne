const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');
myCanvas.width = 1400;
myCanvas.height = 650;

let score = 0;
let isOver = false;

const mainChar = new Image();
mainChar.src = './images/Mario_NSMB2.png';
let mainCharX = 0;
let mainCharY = 525;

const obstacleImg = new Image();
obstacleImg.src = './images/bomb-clipart.png';
let obstacleX = 1340;
let obstacleY = 545;

function drawImg(name, pathToImg, x, y, w, h) {
    name = new Image();
    name.src = pathToImg;
    // name.onload = () => {
        ctx.drawImage(name, x, y, w, h);
    // };
}
function drawEverything() {
    drawImg(mainChar, "./images/Mario_NSMB2.png", mainCharX, mainCharY, 65, 65);
    drawImg(obstacleImg, "./images/bomb-clipart.png", obstacleX, obstacleY, 60, 60);
    drawImg('brick', './images/cartoon-brick-wall-6.png', 150, 375, 75, 75);
    drawImg('coin', "./images/a726-512.png", 200, 368, 95, 95);
    drawImg('brick', './images/cartoon-brick-wall-6.png', 275, 375, 75, 75);
    drawImg('coin', "./images/a726-512.png", 500, 368, 95, 95);
    drawImg('coin', "./images/a726-512.png", 560, 368, 95, 95);
    drawImg('coin', "./images/a726-512.png", 620, 368, 95, 95);
    drawImg('brick', './images/cartoon-brick-wall-6.png', 700, 375, 75, 75);
    drawImg('brick', './images/cartoon-brick-wall-6.png', 755, 375, 75, 75);
    drawImg('coin', "./images/a726-512.png", 810, 368, 95, 95);
    drawImg('brick', './images/cartoon-brick-wall-6.png', 1000, 375, 75, 75);
    drawImg('brick', './images/cartoon-brick-wall-6.png', 1055, 375, 75, 75);
    // drawImg('brick', './images/cartoon-brick-wall-6.png', 755, 375, 75, 75);

    

    if (checkCollision(mainCharX, mainCharY, obstacleX, obstacleY)) {
            console.log('CRASH!!!!!!');
            gameOver();
        }
        if (obstacleX === 0) {
                score++;
                document.getElementById('score').innerHTML = "Score: "+ score;
            }
        }
        
function drawingLoop() {
    ctx.clearRect(0, 0, 1400, 650);

    obstacleX -= 5;
   
    if (obstacleX < -70) {
        obstacleX = 1340;
        // obstacleY = Math.floor(Math.random() * 430);
    }
    drawEverything();
    // requestAnimationFrame(() => drawingLoop());
    // if (isOver === false) {
        requestAnimationFrame(() => drawingLoop());
    // }  

};

document.onkeydown = function (event) {

    console.log("event: ", event.keyCode, mainCharX, mainCharY)
    // console.log(event);

    switch(event.keyCode){
        case 37: // LEFT
        case 65:
            if (mainCharX >= 10) mainCharX -= 25;
            break;
        case 38: // UP
        case 87:
            if (mainCharY >= 10) mainCharY -= 25;
            break;
        case 39: // RIGHT
        case 83:
            if (mainCharX <= 1320) mainCharX += 25;
            break;
        case 40: // DOWN
        case 68:
            if (mainCharY <= 515) mainCharY += 25;
            break;
        default:
            console.log("They key codes are not working", event.keyCode);
    }
};

function checkStatus(){
    console.log("Check Status being called")
    if(score < 0){
        alert('you lose');
    } 

    if(score > 3){
        alert('you win');
    }
}


function checkCollision(mainCharX, mainCharY, obstacleX, obstacleY){
    // supermanY + superman-height >= fireballY
    return mainCharY >= obstacleY + 25
    // supermanY <= fireballY + fireball-height
    // && mainCharY <= obstacleY
    // // supermanX + superman-width >= fireballX
    // && mainCharX >= obstacleX
    // // supermanX <= fireballX + fireball-width
    // && mainCharX <= obstacleX;
};

drawingLoop();
checkStatus();