var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var timer = 0;

var up = false;
var left = false;
var right = false;

var xDir = 0;
var yDir = 0
var Dash = false;
var DashKey = false;


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.onkeydown = async function (e) {
    var str = "";
    if (e.keyCode == 37) {
        xDir = -1;
        left = true;
    }
    if (e.keyCode == 38) {
        yDir = -1;
    }
    if (e.keyCode == 40) {
        yDir = 1;
    }
    if (e.keyCode == 90) {
        up = true;
        player.rechargeCheck();
        player.redRechargeCheck();
    }
    if (e.keyCode == 39) {
        xDir = 1;
        right = true;
    }
    if (e.keyCode == 88) {
        DashKey = true;
    }

};


document.onkeyup = async function (e) {
    var str = "";
    switch (e.keyCode) {
        case 37:
            left = false;
            await sleep(100);
            if (xDir == -1) {
                xDir = 0;
            }
            break;
        case 38:
            await sleep(100);
            yDir = 0;
            break;
        case 40:
            await sleep(100);
            yDir = 0;
            break;
        case 90:
            up = false;
            await sleep(100);
            break;
        case 39:
            right = false;
            await sleep(100);
            if (xDir == 1) {
                xDir = 0;
            }
            break;
        case 88:
            await sleep(10);
            DashKey = false;
            break;
        case 76:
            nextLev();
            console.log("pog")
        break;
        case 82:
            level(levelNum);
            break;
    }
};

ctx.save()

function animation() {

    ctx.beginPath();
    ctx.fillStyle = "rgb(35,35,35)";
    ctx.rect(0, 0, width, height)
    ctx.fill();
    ctx.closePath();

        for (i = 0; i < list.length; i++) {
        if(list[i] instanceof Platform){
            list[i].drawShadow()
        }
    }

    for (i = 0; i < list.length; i++) {
        list[i].update()
        list[i].draw()
    }

    if (up) {
        player.jump();
    }
    if (left) {
        player.move(-1);
    }
    if (right) {
        player.move(1);
    }




    player.portalCheck();
    player.dasher();
    player.deadCheck();
    player.update();
    player.bound();

    // Rotating

    ctx.translate(player.x, player.y)
    ctx.rotate(player.angle)
    ctx.translate(-player.x, -player.y)

    player.draw();

    ctx.translate(player.x, player.y)
    ctx.rotate(-player.angle)
    ctx.translate(-player.x, -player.y)

    player.dashRech();




    if (player.isOnGround(0, 15) + player.isOnGround(0, -15)) {
        Explosion(Math.floor(Math.abs(player.yVel) / 3 + Math.abs(player.xVel) / 15));
    }
    if (player.isOnGround(2, 0) + player.isOnGround(-2, 0)) {
        Explosion(Math.floor(Math.abs(player.yVel) / 15 + Math.abs(player.xVel)));
    }

    if (parlist.length > 0) {
        for (j = 0; j < parlist.length; j++) {
            parlist[j].draw();
            parlist[j].update();
        }
        for (j = 0; j < parlist.length; j++) {
            if (parlist[j].x > width || parlist[j].x < 0 || parlist[j].y > height || parlist[j].y < 0) {
                parlist.splice(j, 1)
            }
            if (parlist[j] instanceof DashParticle) {
                if (parlist[j].radius <= 0) {
                    parlist.splice(j, 1)
                }
            }
        }
    }

    if (player.y > height * 1.1) {
        var audio = new Audio('glass.mp3');
        audio.volume = 0.21;
        audio.play();
        level(levelNum);
    }

    requestAnimationFrame(animation)
}

animation()