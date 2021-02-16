/* PARTICLE CODE */
/* PARTICLE CODE */
/* PARTICLE CODE */

class Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.radius = radius;
    }

    draw() {

        ctx.beginPath();
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
}

class GravityParticle extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed = Math.abs(this.yspeed * 1.095) + 0.1;
    }

}

class Spread extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
    }

    update() {
        this.x += this.xspeed / 75;
        this.y += this.yspeed / 75;
        this.yspeed = (this.yspeed * 1.125);
        this.xspeed = (this.xspeed * 1.125);
    }

}

class Invert extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
        this.originalX = xspeed;
        this.originalY = yspeed;
    }

    update() {
        this.x += this.xspeed / 2;
        this.y += this.yspeed / 2;
        this.yspeed = this.yspeed - this.originalY / random(10, 100);
        this.xspeed = this.xspeed - this.originalX / random(10, 100);
    }

}

class Sway extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += random(1.125, -1);
        this.xspeed += random(-2, 2);
    }

}

class Rand extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
        this.originalX = xspeed;
        this.originalY = yspeed;
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += random(this.originalY, -this.originalY) / 5;
        this.xspeed += random(this.originalX, -this.originalX) / 5;
    }

}

class GravityParticle2 extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed += 1;
        this.xspeed += 0;
    }

}

class GravityParticle3 extends Particle {

    constructor(x, y, xspeed, yspeed, radius, colour) {
        super(x, y, xspeed, yspeed, radius);
        this.colour = colour;
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.yspeed = this.yspeed * 1.01 + 0.75;
        this.xspeed = this.xspeed * 1.01;
    }
    draw() {

        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

class DashParticle extends Particle {

    constructor(x, y, radius, r, g, b, a) {
        super(x, y, 0, 0, radius);
        this.r = r
        this.g = g
        this.b = b
        this.a = 0.8
        this.radius = 12
    }

    update() {
        //this.a = this.a - 0.1
        if (this.radius > 0) {
            this.radius -= 1
            this.a -= 0.01
        }
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.a}`;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();

            var grd = ctx.createRadialGradient(this.x,this.y,this.radius* 1,this.x,this.y,this.radius * 2);
            grd.addColorStop(0, `rgba(255,255,255,${this.a})`); 
            grd.addColorStop(1, "rgba(135,170,205,0)");
            ctx.fillStyle = grd;
            ctx.fillRect(this.x-100, this.y-100, 200, 200); 
        

    }
}

class Slower extends Particle {

    constructor(x, y, xspeed, yspeed, radius) {
        super(x, y, xspeed, yspeed, radius);
        this.originalX = xspeed;
        this.originalY = yspeed;
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.xspeed = this.xspeed / 1.01 + this.originalX / 75;
        this.yspeed = this.yspeed / 1.01 + this.originalY / 75;
    }

}


/* LIST OF PARTICLES */
var parlist = [];

/* DOES THE PARTICLES */
function Explosion(amount) {
    if (Math.random < 0.5) {
        var audio = new Audio('bonk.wav');
    }
    else {
        var audio = new Audio('bonk2.wav');
    }
    if (amount > 10) {
        audio.volume = 1;
    } else {
        audio.volume = 0.1 * amount
    }
    audio.play();
    for (i = 0; i < amount * 2; i++) {
        //Particle, GravityParticle, GravityParticle2, GravityParticle3, Invert, Sway, Rand, Spread, Slower
        var part = new GravityParticle3(player.x, player.y, random(-10, 10), random(-10, 10), random(5, 8), "#151515cc");
        parlist.push(part);
    }
}

function RechargeCrystalParticle(x, y, colour) {
    var audio = new Audio('bonk.wav');
    audio.volume = 0.3;
    audio.play();
    for (i = 0; i < 15; i++) {
        var part = new GravityParticle3(player.x, player.y, random(-10, 10), random(-10, 10), random(5, 8), colour);
        parlist.push(part);
    }
}
