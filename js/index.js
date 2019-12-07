window.addEventListener("load", () => {

    const myCanvas = document.getElementById("canvas");
    const ctx = myCanvas.getContext("2d");
    myCanvas.width = 1440;
    myCanvas.height = 650;

    const mainChar = new Image();
    mainChar.src = "./images/Mario_NSMB2.png";

    let mainCharX = 0;
    let mainCharY = 525;

    const obstacleImg = new Image();
    obstacleImg.src = "./images/bomb-clipart.png";

    let obstacleX = 1000;
    let obstacleY = 545;

function drawEverything(){
    ctx.drawImage(mainChar, mainCharX, mainCharY, 65, 65);
    ctx.drawImage(obstacleImg, obstacleX, obstacleY, 60, 60);

    if(checkCollision(mainCharX, mainCharY, obstacleX, obstacleY)){
        console.log('CRASH!!!!!!');
        gameOver();
    }

    if (obstacleX === 0){
        score ++;
    }
}

    function drawImg(name, pathToImg, x, y, w, h){
        name = new Image();
        name.src = pathToImg;
        name.onload = () => {
            ctx.drawImage(name, x, y, w, h)
        }
    }

    // drawImg("mainChar", "./images/Mario_NSMB2.png",0, 525, 65, 65)
    // drawImg("obstacle", "./images/bomb-clipart.png", 1000, 545, 60, 60)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 150, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 205, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 260, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 315, 375, 75, 75)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 370, 375, 75, 75)


    function drawingLoop(){
        ctx.clearRect(0, 0, 1000, 500);
        drawBackground();
    
        obstacleX -= 5;
    
        if(obstacleX < -70){
            obstacleX = 1000;
            obstacleY = Math.floor(Math.random() * 430);
        }
        drawEverything();
    
        // requestAnimationFrame(() => drawingLoop());
    
        if(isOver === false){
            requestAnimationFrame(() => drawingLoop());
        }
    }

})