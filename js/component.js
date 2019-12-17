class Gift {
    constructor(x) {
        this.x = x;
        this.y = 385;
        this.width = 60;
        this.height = 60;
        this.img = new Image()
        this.img.src = './images/gift2.png';
        this.ctx = document.getElementById('canvas').getContext('2d');
        console.log("created a gift")
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
}