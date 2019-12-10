const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');
myCanvas.width = 1400;
myCanvas.height = 650;

const mainChar = new Image();
mainChar.src = './images/Mario_NSMB2.png';
let mainCharX = 0;
let mainCharY = 525;

const obstacleImg = new Image();
obstacleImg.src = './images/bomb-clipart.png';
let obstacleX = 1000;
let obstacleY = 545;

function drawImg(name, pathToImg, x, y, w, h) {
    console.log("drawwwwwwww=-=-=-=-=-=-=-= ", name)
    name = new Image();
    name.src = pathToImg;
    // name.onload = () => {
        ctx.drawImage(name, x, y, w, h);
    // };
}
function drawEverything() {
    console.log("called drawingeverything")
    drawImg(mainChar, "./images/Mario_NSMB2.png", mainCharX, mainCharY, 65, 65);
    drawImg(obstacleImg, "./images/bomb-clipart.png", obstacleX, obstacleY, 60, 60);
    console.log("hello!!!!!!")
    // if (checkCollision(mainCharX, mainCharY, obstacleX, obstacleY)) {
        //     console.log('CRASH!!!!!!');
        //     gameOver();
        // }
        // if (obstacleX === 0) {
            //     score++;
            // }
            drawImg('brick', './images/cartoon-brick-wall-6.png', 150, 375, 75, 75);
            drawImg('brick', './images/cartoon-brick-wall-6.png', 205, 375, 75, 75);
            drawImg('brick', './images/cartoon-brick-wall-6.png', 260, 375, 75, 75);
            drawImg('brick', './images/cartoon-brick-wall-6.png', 315, 375, 75, 75);
            drawImg('brick', './images/cartoon-brick-wall-6.png', 370, 375, 75, 75);
        }
        
function drawingLoop() {
    ctx.clearRect(0, 0, 1400, 650);

    // // drawBackground();
    // obstacleX -= 5;
   
    // if (obstacleX < -70) {
    //     obstacleX = 1000;
    //     obstacleY = Math.floor(Math.random() * 430);
    // }
    drawEverything();
    // requestAnimationFrame(() => drawingLoop());
    // if (isOver === false) {
        requestAnimationFrame(() => drawingLoop());
    // }  
    // drawingLoop()
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

// move() {
//     document.onkeydown = event => {
//       //   console.log("event: ", event.keyCode);
//       const key = event.keyCode;
//       const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
//       if (possibleKeystrokes.includes(key)) {
//         event.preventDefault();
//         switch (key) {
//           case 37:
//           case 65:
//             if (this.x >= 0) this.x -= 20;
//             break;
//           case 38:
//           case 87:
//             if (this.y >= 10) this.y -= 20;
//             break;
//           case 39:
//           case 83:
//             if (this.x <= 1000 - this.width) this.x += 20;
//             break;
//           case 40:
//           case 68:
//             if (this.y <= 500 - this.height) this.y += 20;
//             break;
//         }
//       }
//     };

drawingLoop();