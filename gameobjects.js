/* TRYNA FIX DASHING HERE */
var pog = false
var dashpar = false

var bonk = false

var dead = false

var powdash = false 

async function screenShake() {
    let temp = 1
    let playerX = player.x
    let playerY = player.y
    let movX = 0
    let movY = 0
    let rX = random(0, 1) * 2 - 1
    let rY = random(0, 1) * 2 - 1
    
    for (let i = 0; i < 180; i++) {

        movX = playerX + Math.sin(temp) * rX * 12 / temp
        movY = playerY + Math.sin(temp) * rY * 12 / temp
        movX = movX - player.x
        movY = movY - player.y

        for (j in list) {
            list[j].x += movX
            list[j].y += movY
        }

        for (j in parlist) {
            parlist[j].x += movX
            parlist[j].y += movY
        }

        player.x += movX
        player.y += movY


        await pause(10)

        temp++
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pause(ms) {
    await sleep(ms);
}

async function DashingThing() {
    await sleep(300);
    Dash = true;
}

var yes = true;

/* SETUP */
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


/* PLATFORMS */
class Platform {
    constructor(x, x2, y, y2) {
        this.width = x2;
        this.height = y2;
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(15,15,15)";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }

    closestEdge(){
        let tempX = list[list.length-1].x
        let tempY = list[list.length-1].y
        let A = [this.x,this.y];
        let B = [this.x+this.width,this.y];
        let C = [this.x+this.width,this.y+this.height];
        let D = [this.x, this.y+this.height];
        let ATrans = [2*A[0] - tempX,2*A[1] - tempY];
        let BTrans = [2*B[0] - tempX,2*B[1] - tempY];
        let CTrans = [2*C[0] - tempX,2*C[   1] - tempY];
        let DTrans = [2*D[0] - tempX,2*D[1] - tempY];

        let AB = [ ( A[0] + B[0] )/ 2 , ( A[1] + B[1] )/ 2 ] 
        let BC = [ ( B[0] + C[0] )/ 2 , ( B[1] + C[1] )/ 2 ]
        let CD = [ ( C[0] + D[0] )/ 2 , ( C[1] + D[1] )/ 2 ]
        let DA = [ ( D[0] + A[0] )/ 2 , ( D[1] + A[1] )/ 2 ]
        let returner = ""
        
        if(tempY < this.y){
            returner += "AB"
        }else if(tempY > this.y + this.height){
            returner += "CD"
        }
        if(tempX < this.x){
            returner += "DA"
        }else if(tempX > this.x + this.width){
            returner += "BC"
        }
        return returner
    }

    drawShadow(){
                let tempX = list[list.length-1].x
                let tempY = list[list.length-1].y
                let A = [this.x,this.y];
                let B = [this.x+this.width,this.y];
                let C = [this.x+this.width,this.y+this.height];
                let D = [this.x, this.y+this.height];
                let AB = [ ( A[0] + B[0] )/ 2 , ( A[1] + B[1] )/ 2 ] 
                let BC = [ ( B[0] + C[0] )/ 2 , ( B[1] + C[1] )/ 2 ]
                let CD = [ ( C[0] + D[0] )/ 2 , ( C[1] + D[1] )/ 2 ]
                let DA = [ ( D[0] + A[0] )/ 2 , ( D[1] + A[1] )/ 2 ]
                let ATrans = [1.3*A[0] - tempX * 0.3,1.3*A[1] - tempY * 0.3];
                let BTrans = [1.3*B[0] - tempX * 0.3,1.3*B[1] - tempY * 0.3];
                let CTrans = [1.3*C[0] - tempX * 0.3,1.3*C[1] - tempY * 0.3];
                let DTrans = [1.3*D[0] - tempX * 0.3,1.3*D[1] - tempY * 0.3];

                switch(this.closestEdge()){
                    case "ABDA":
                        //topleft
                        ctx.beginPath()
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(B[0],B[1]);
                        ctx.lineTo(BTrans[0],BTrans[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(D[0],D[1]);
                        ctx.lineTo(B[0],B[1]);
                        ctx.fill()
                        ctx.closePath()
                    break
                    case "ABBC":
                        //topright
                        ctx.beginPath()
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(A[0],A[1]);
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(C[0],C[1]);
                        ctx.lineTo(A[0],A[1]);
                        ctx.fill()
                        ctx.closePath()

                    break
                    case "CDDA":
                        //bottomleft
                        ctx.beginPath()
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(A[0],A[1]);
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(BTrans[0],DTrans[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(C[0],C[1]);
                        ctx.lineTo(A[0],A[1]);
                        ctx.fill()
                        ctx.closePath()
                    break
                    case "CDBC":
                        //bottomright
                        ctx.beginPath()
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(B[0],B[1]);
                        ctx.lineTo(BTrans[0],BTrans[1])
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(D[0],D[1]);
                        ctx.lineTo(B[0],B[1]);
                        ctx.fill()
                        ctx.closePath()
                    break
                    case "AB":
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.beginPath();
                        ctx.moveTo(A[0],A[1]);
                        ctx.lineTo(B[0],B[1])
                        ctx.lineTo(BTrans[0],BTrans[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(A[0],A[1])
                        ctx.fill()
                        ctx.closePath()
                    break;

                    case "CD":
                        ctx.beginPath();
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(D[0],D[1]);
                        ctx.lineTo(C[0],C[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(BTrans[0],BTrans[1])
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(D[0],D[1])
                        ctx.fill()
                        ctx.closePath()
                    break;

                    case "DA":
                        ctx.beginPath();
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(A[0],A[1]);
                        ctx.lineTo(D[0],D[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(BTrans[0],BTrans[1])
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(A[0],A[1])
                        ctx.fill()
                        ctx.closePath()
                    break;

                    case "BC":
                        ctx.beginPath();
                        ctx.fillStyle = "rgba(0,0,0,0.1)"
                        ctx.moveTo(B[0],B[1]);
                        ctx.lineTo(C[0],C[1])
                        ctx.lineTo(CTrans[0],CTrans[1])
                        ctx.lineTo(DTrans[0],DTrans[1])
                        ctx.lineTo(ATrans[0],ATrans[1])
                        ctx.lineTo(BTrans[0],BTrans[1])
                        ctx.lineTo(B[0],B[1])
                        ctx.fill()
                        ctx.closePath()
                    break;
                }





                
    }   


    update() {

    }
}
/* READ THINGS */
class Dead {
    constructor(x, x2, y, y2) {
        this.width = x2;
        this.height = y2;
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
        
    }
    update() {

    }
}
/* EXIT PORTAL */
class Portal {
    constructor(x, y) {
        this.x = x;
        this.orX = x;
        this.y = y;
        this.orY = y;
        this.thing = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.rect(this.x - 50, this.y - 50, 100, 100)
        ctx.fill();
        ctx.closePath();

        //Glow

        /*let grd = ctx.createLinearGradient(this.x-450, this.y - 150, this.x -50, this.y - 150   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");
        
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x-450,this.y-50,400,100);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x+450, this.y - 150, this.x + 50, this.y - 150   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x+450,this.y-50,-400,100);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x+150, this.y + 450, this.x + 150, this.y + 50   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x-50,this.y+50,100,400);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x+150, this.y - 450, this.x + 150, this.y - 50   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x-50,this.y-50,100,-400);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x-250, this.y - 250, this.x - 50, this.y - 50   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x-50,this.y-50,-400,-400);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x-250, this.y + 250, this.x - 50, this.y + 50   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x-50,this.y+50,-400,400);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x+250, this.y - 250, this.x + 50, this.y - 50   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x+50,this.y-50,400,-400);
        ctx.stroke();
        ctx.closePath();

        grd = ctx.createLinearGradient(this.x+250, this.y + 250, this.x + 50, this.y + 50   );
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255,0.5)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.fillRect(this.x+50,this.y+50,400,400);
        ctx.stroke();
        ctx.closePath();*/
    }
    /* Up and Down */
    update() {
        this.thing = (this.thing + 0.05);
        this.y = this.orY + Math.sin(this.thing) * 10;
        if (this.thing > 360) {
            this.thing = 0;
        }
    }
}

/* BLUE RECHARGE THING */
class Recharge {
    constructor(x, y) {
        this.x = x;
        this.orX = x;
        this.y = y;
        this.orY = y;
        this.thing = 0;
        this.yes = true
    }
    draw() {
        if (this.yes == true) {
            ctx.beginPath();
            ctx.fillStyle = "#3366CC";
            ctx.arc(this.x,this.y,20,0,Math.PI*2)
            ctx.fill();
            ctx.closePath();
            
            var grd = ctx.createRadialGradient(this.x,this.y,20,this.x,this.y,35);
            grd.addColorStop(0, "#3366CCcc"); 
            grd.addColorStop(1, "#3366CC00");

            ctx.fillStyle = grd;
            ctx.fillRect(this.x-100, this.y-100, 200, 200); 

        }
    }
    /* Up and Down */
    update() {
        this.thing = (this.thing + 0.1);
        this.y = this.orY + Math.cos(this.thing) * 3;
        if (this.thing > 360) {
            this.thing = 0;
        }
    }
}

/* WHITE BALL, PLAYER */
class Platformer {
    constructor() {
        this.x = width / 2;
        this.y = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.WallL = true;
        this.WallR = true;
        this.gravity = 1;
        this.angle = 0
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect(this.x - 15, this.y - 15, 30, 30)
        ctx.closePath();
    }

    /* Moving the direction of the arrows which is given in main.js */
    move(xDirection) {
        this.xVel += xDirection / 1.3;
    }


    async update() {

        if (dashpar) {
            var part = new DashParticle(player.x, player.y, random(5, 10), 255, 255, 255, 1);
            parlist.push(part);
        }

        /* Checks if should recharge dash and wall jumps */
        if (this.isOnGround(0, 10) || this.jumper) {
            this.WallL = true;
            this.WallR = true;
        }
        /* Collisions */
        this.Xcheck()
        this.Ycheck();
        /* Wall Jump??? */
        if (this.yVel > 0) {
            if (this.isOnGround(10, 0) && this.WallR) {
                this.yVel -= this.yVel * 0.07
            } else if (this.isOnGround(-10, 0) && this.WallL) {
                this.yVel -= this.yVel * 0.07
            }
        }
        this.angle += this.xVel / 120
        if (this.isOnGround(3, 0)) {
            this.angle = (this.angle + Math.round(this.angle / 90) * 90) / 2
        }
        if (this.isOnGround(-3, 0)) {
            this.angle = (this.angle + Math.round(this.angle / 90) * 90) / 2
        }
        if (this.isOnGround(0, 3)) {
            this.angle = (this.angle + Math.round(this.angle / 90) * 90) / 2
        }
        if (this.isOnGround(0, -3)) {
            this.angle = (this.angle + Math.round(this.angle / 90) * 90) / 2
        }
    }

    async jump() {
        /* Normal Jump */
        if (this.isOnGround(0, 10) || this.jumper) {
            if (pog) {
                if (this.xVel != 0) {
                    // Cool story, this part of the code took me an hour to fix because when they dash straight down and jump the xVel = 0 and you can't divide by 0
                    // So i had lots of fun
                    // It made me refactor my fricking screen shake so many times omg
                    this.xVel = 35 * this.xVel / Math.abs(this.xVel)
                    pog = false
                }
            }
            this.yVel = this.gravity * -7;
            this.WallL = true;
            this.WallR = true;
            this.dashRech();
        }
        /* Wall Jumps */
        else {
            if (this.isOnGround(10, 0) || this.jumper) {
                if (this.WallR) {
                    if (pog == false) {
                        this.yVel = this.gravity * -7;
                    } else {
                        this.yVel = this.gravity * -10;
                    }
                    this.xVel = -7;
                    this.WallR = false;
                    this.WallL = true;
                }
            }
            if (this.isOnGround(-10, 0) || this.jumper) {
                if (this.WallL) {
                    if (pog == false) {
                        this.yVel = this.gravity * -7;
                    } else {
                        this.yVel = this.gravity * -10;
                    }
                    this.xVel = 7;
                    this.WallL = false;
                    this.WallR = true;
                }
            }
        }
    }

    Ycheck() {
        /* Collision for Y */
        for (i = 0; i < list.length; i++) {
            list[i].y -= this.yVel;
            list[i].orY -= this.yVel
        }
        for (i = 0; i < parlist.length; i++) {
            parlist[i].y -= this.yVel
        }

        if (this.isOnGround(0, 0)) {
            for (i = 0; i < list.length; i++) {
                list[i].y += this.yVel * 1.1;
                list[i].orY += this.yVel * 1.1
            }
            for (i = 0; i < parlist.length; i++) {
                parlist[i].y += this.yVel * 1.1
            }
            this.yVel = 0;
            return
        } else {
            this.yVel += this.gravity * 0.35;
        }
    }
    Xcheck() {
        /* Collision for X */
        for (i = 0; i < list.length; i++) {
            list[i].x -= this.xVel;
            list[i].orX += this.xVel
        }
        for (i = 0; i < parlist.length; i++) {
            parlist[i].x -= this.xVel;
        }

        if (this.isOnGround(0, 0)) {
            for (i = 0; i < list.length; i++) {
                list[i].x += this.xVel * 1.1;
                list[i].orX += this.xVel * 1.1
            }
            this.xVel = 0;
            return
        } else {
            this.xVel *= 0.875;
        }
    }

    isOnGround(x, y) {
        /* Checks if is on ground at offset (x,y) and if yes return 1 else return 0 */
        for (let j = 0; j < list.length; j++) {
            if (this.y + y + 20 > list[j].y && this.y + y - 20 < list[j].y + list[j].height && list[j].x - 20 < this.x + x && list[j].x + 20 + list[j].width > this.x + x) {
                if (list[j] instanceof Platform) {
                    return (1);
                }
            }

        }
        return (0);
    }

    /* Checks is touching portal, if yes goes to next level */
    portalCheck() {
        if (this.y + 20 > list[list.length - 1].y - 50 && this.y - 20 < list[list.length - 1].y + 50 && list[list.length - 1].x - 50 < this.x + 20 && list[list.length - 1].x + 50 > this.x - 20) {
            this.yVel = 0;
            this.gravity = 1;
            nextLev();
        }
    }

    /* Dash*/
    async dasher() {
        if (DashKey) {
            if (Dash) {
                if (!(xDir == 0 && yDir == 0)) {
                    dashpar = true
                    yes = false;
                    pog = true;
                    screenShake()
                    player.xVel = xDir * 25;
                    player.yVel = yDir * 12;
                    var audio = new Audio('dash.wav');
                    audio.volume = 0.21;
                    audio.play();
                    Dash = false;
                    if (yDir == 0) {
                        this.gravity /= 10
                        await pause(200);
                        this.gravity = this.gravity / Math.abs(this.gravity)
                        await pause(100);
                    } else {
                        await pause(500)
                    }
                    dashpar = false
                    yes = true;
                    pog = false
                }
            }
        }
    }

    async dashRech() {
        if (yes) {
            if (this.isOnGround(0, 10)) {
                Dash = true;
                yes = false
            }
        }
    }

    /* Checks is touching recarge crystal if so it boosts you up are gives u another dash */
    async rechargeCheck() {
        for (let j = 0; j < list.length; j++) {
            if (this.y + 40 > list[j].y - 40 && this.y - 40 < list[j].y + 40 && list[j].x - 40 < this.x + 40 && list[j].x + 40 > this.x - 40) {
                if (list[j] instanceof Recharge) {
                    if (list[j].yes == true) {

                        list[j].yes = false

                        Dash = true;
                        var audio = new Audio('glass.mp3');
                        audio.volume = 0.7;
                        audio.play();
                        this.yVel = this.gravity * -7;
                        this.WallR = true;
                        this.WallL = true;
                        RechargeCrystalParticle(list[j].x, list[j].y, "#3366CCcc");
                        bonk = true;
                        await sleep(300);
                        bonk = false;
                        await sleep(5000);

                        list[j].yes = true
                    }

                }
            }
        }
    }

    /* Checks is touching red recarge crystal if so it boosts you up are gives u another dash */
    async redRechargeCheck() {
        for (let j = 0; j < list.length; j++) {
            if (this.y + 40 > list[j].y - 40 && this.y - 40 < list[j].y + 40 && list[j].x - 40 < this.x + 40 && list[j].x + 40 > this.x - 40) {
                if (list[j] instanceof RedRecharge) {
                    if (list[j].yes == true) {

                        list[j].yes = false

                        Dash = true;
                        var audio = new Audio('glass.mp3');
                        audio.volume = 0.7;
                        audio.play();
                        this.yVel = this.gravity * 7;
                        this.gravity *= -1
                        this.WallR = true;
                        this.WallL = true;
                        RechargeCrystalParticle(list[j].x, list[j].y, "#CC6633cc");
                        bonk = true;
                        await sleep(300);
                        bonk = false;
                        await sleep(5000);

                        list[j].yes = true
                    }
                }
            }
        }
    }
    /* Checks if you touch the red Dead things and kills u*/
    async deadCheck() {
        if (dead != true) {
            for (let j = 0; j < list.length; j++) {
                if (list[j] instanceof Dead) {
                    if (this.y + 20 > list[j].y && this.y - 20 < list[j].y + list[j].height && list[j].x - 20 < this.x && list[j].x + 20 + list[j].width > this.x) {
                        dead = true
                        var audio = new Audio('glass.mp3');
                        audio.volume = 1;
                        audio.play();
                        this.gravity = 0;
                        this.yVel = 0
                        this.xVel = 0
                        level(levelNum);
                        this.yVel = 0;
                        this.xVel = 0;
                        dead = false
                    }
                }
            }
        }
    }



    bound() {
        /* Makes sure guy doesn't go out of the level */
        if (this.x < 20) {
            this.x = 20;
            this.xVel = 0.1 * Math.abs(this.xVel);
        }
        if (this.x > width - 20) {
            this.x = width - 20;
            this.xVel = -0.1 * Math.abs(this.xVel);
        }
        if (this.y < 0) {
            this.y = 0
            this.yVel = 0;
        }
    }
}

/* RED RECHARGE THING */
class RedRecharge {
    constructor(x, y) {
        this.x = x;
        this.orX = x;
        this.y = y;
        this.orY = y;
        this.thing = 0;
        this.yes = true;
    }
    draw() {
        if (this.yes == true) {
            ctx.beginPath();
            ctx.fillStyle = "#CC6633";
            ctx.arc(this.x,this.y,20,0,Math.PI*2)
            ctx.fill();
            ctx.closePath();

            var grd = ctx.createRadialGradient(this.x,this.y,20,this.x,this.y,35);
            grd.addColorStop(0, "#CC6633cc"); 
            grd.addColorStop(1, "#CC663300");

            ctx.fillStyle = grd;
            ctx.fillRect(this.x-100, this.y-100, 200, 200); 
        }
    }
    /* Up and Down */
    update() {
        this.thing = (this.thing + 0.1);
        this.y = this.orY + Math.cos(this.thing) * 3;
        if (this.thing > 360) {
            this.thing = 0;
        }
    }
}

class MovingDead extends Dead {
    constructor(x, x2, y, y2, speed) {
        super(x, x2, y, y2)
        this.speed = speed
    }
    update() {
        this.y += this.speed * player.gravity
    }
}


var list = [];
var player = new Platformer();
