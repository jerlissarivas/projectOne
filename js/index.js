window.addEventListener("load", () => {

    const myCanvas = document.getElementById("canvas");
    const ctx = myCanvas.getContext("2d");
    myCanvas.width = 1440;
    myCanvas.height = 650;

    function drawImg(name, pathToImg, x, y, w, h){
        name = new Image();
        name.src = pathToImg;
        name.onload = () => {
            ctx.drawImage(name, x, y, w, h)
        }
    }

    drawImg("mainChar", "./images/Mario_NSMB2.png", 0, 325, 65, 65)
    drawImg("brick", "./images/cartoon-brick-wall-6.png", 10, 525, 200, 200)

})