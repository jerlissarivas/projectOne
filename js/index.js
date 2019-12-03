window.addEventListener("load", () => {

    const myCanvas = document.getElementById("canvas");
    const ctx = myCanvas.getContext("2d");
    myCanvas.width = 1440;
    myCanvas.height = 650;
    
    const background = new Image();
    background.src = "./images/background1"
    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
        ctx.drawImage(background,0,0)
    }

    const mainChar = new Image();
    mainChar.src =  "./images/Mario_NSMB2.png"
    mainChar.onload = function(){
        ctx.drawImage(mainChar, 0, 525, 65, 65)
    }


})