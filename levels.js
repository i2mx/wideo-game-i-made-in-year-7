

/* LIST OF ITEMS IN A LEVEL */
var list = [];

/* CURRENT LEVEL NUMBER */
var levelNum = 0;

nextLev();

/* NEXT LEVEL */
function nextLev() {
    levelNum++;
    player.gravity = 1
    player.yVel = 0;
    level(levelNum)
}
/* LOADING LEVELS */
function level(x) {
    player.gravity = 1
    player.yVel = 0;
    parlist = []

    list = [];
    switch (x) {
        case 1:
            list.push(new Platform(-2000,1900,-1000,3000))
            list.push(new Platform(2000,1900,-1000,3000))
            var block = new Platform(-100, 1100, 786 - 100, 1536);
            list.push(block);
            var block = new Platform(500, 1500, 786 - 50, 1536);
            list.push(block);
            var block = new Platform(1312.5, 200, 786 - 100, 100);
            list.push(block);
            var dead = new Dead(-2000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(1412.5, 575);
            list.push(portal);
            player.x = 25;
            player.y = 600;
            break;
        case 2:
            list.push(new Platform(-2000,2000,-1000,3000))
            list.push(new Platform(2000,1900,-1000,3000))
            var block = new Platform(0, 500, 786 - 100, 1536);
            list.push(block);
            var block = new Platform(150, 500, 786 - 250, 1536);
            list.push(block);
            var block = new Platform(300, 500, 786 - 400, 1536);
            list.push(block);
            var block = new Platform(1312.5, 200, 500, 1000);
            list.push(block);
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(1412.5, 375);
            list.push(portal);
            player.x = 25;
            player.y = 600;
            break;
        case 3:
            var block = new Platform(300, 500, 786 - 200, 1000);
            list.push(block)
            var block = new Platform(200, 700, 786 - 500, 50);
            list.push(block)
            var block = new Platform(900, 300, 700, 50);
            list.push(block)
            var block = new Platform(1200, 50, 200, 550);
            list.push(block)
            var block = new Platform(850, 50, 340, 100);
            list.push(block)
            var block = new Platform(900, 100, 390, 50);
            list.push(block)
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(550, 170);
            list.push(portal);
            player.x = 550;
            player.y = 550;
            break;
        case 4:
            var block = new Platform(0, 350, 664, 500);
            list.push(block)
            var block = new Platform(900, 50, 100, 150);
            list.push(block)
            var block = new Platform(900, 50, 500, 550);
            list.push(block)
            var block = new Platform(700, 50, 100, 270);
            list.push(block)
            var block = new Platform(550, 150, 700, 170);
            list.push(block)
            var block = new Platform(1340, 150, 300, 50);
            list.push(block)
            var dead = new Dead(950, 10, 100, 150);
            list.push(dead);
            var dead = new Dead(-10000, 100000, 1150, 10000)
            list.push(dead)
            var portal = new Portal(75, 75);
            list.push(portal);
            player.x = 50;
            player.y = 600;
            break;
        case 5:
            var block = new Platform(0, 150, 664, 500);
            list.push(block)
            var block = new Platform(100, 1250, -50, 50);
            list.push(block)
            var block = new Platform(100, 50, 0, 450);
            list.push(block)
            var block = new Platform(400, 50, 160, 1000);
            list.push(block)
            var dead = new Dead(400, 50, 150, 10);
            list.push(dead)
            var block = new Platform(700, 50, 0, 400);
            list.push(block)
            var block = new Platform(700, 50, 700, 1000);
            list.push(block)
            var block = new Platform(1300, 50, 0, 100);
            list.push(block)
            var block = new Platform(1300, 50, 310, 1000);
            list.push(block)
            var dead = new Dead(1300, 50, 300, 10);
            list.push(dead);
            var portal = new Portal(1450, 600);
            var recharge = new Recharge(275, 300);
            list.push(recharge);
            var recharge = new Recharge(1035, 500);
            var dead = new Dead(-1000, 10000, 1100, 10000)
            var dead = new Dead(-10000, 100000, 1150, 10000)

            list.push(dead)
            list.push(recharge);
            list.push(portal);
            player.x = 50;
            player.y = 600;
            break;
        case 6:
            var block = new Platform(100, 1350, -50, 50);
            list.push(block)
            var block = new Platform(200, 50, 0, 65);
            list.push(block)
            var block = new Platform(200, 50, 210, 750);
            list.push(block)
            var dead = new Dead(200, 50, 65, 10);
            list.push(dead)
            var dead = new Dead(200, 50, 200, 10);
            list.push(dead)
            var block = new Platform(500, 50, 0, 50);
            list.push(block)
            var block = new Platform(500, 50, 160, 1000);
            list.push(block)
            var dead = new Dead(500, 50, 150, 10);
            list.push(dead)
            var block = new Platform(800, 50, 0, 400);
            list.push(block)
            var block = new Platform(800, 50, 500, 1000);
            list.push(block)
            var block = new Platform(1100, 50, 0, 600);
            list.push(block)
            var block = new Platform(800, 50, 700, 1000);
            list.push(block)
            var block = new Platform(1400, 50, 0, 100);
            list.push(block)
            var block = new Platform(1400, 50, 310, 1200);
            list.push(block)
            var block = new Platform(1400, 150, 410, 1200);
            list.push(block)
            var recharge = new Recharge(975, 720);
            list.push(recharge);
            var recharge = new Recharge(1275, 720);
            list.push(recharge);
            var recharge = new Recharge(375, 300);
            list.push(recharge);
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(75, 75);
            list.push(portal);
            player.x = 1425;
            player.y = 200;
            break;
        case 7:
            var block = new Platform(100, 1250, -50, 50);
            list.push(block)
            player.x = 50;
            player.y = 500
            var block = new Platform(0, 150, 700, 700);
            list.push(block);
            var recharge = new Recharge(370, 150);
            list.push(recharge);
            var recharge = new Recharge(570, 300);
            list.push(recharge);
            var recharge = new Recharge(1400, 250);
            list.push(recharge);
            var recharge = new Recharge(150, 400);
            list.push(recharge);
            var recharge = new Recharge(950, 400);
            list.push(recharge);
            var dead = new Dead(1200, 50, 0, 200);
            list.push(dead);
            var block = new Platform(1210, 30, 0, 190);
            list.push(block);
            var dead = new Dead(1200, 50, 450, 350);
            list.push(dead);
            var block = new Platform(1210, 30, 460, 350);
            list.push(block);
            var dead = new Dead(700, 50, 100, 1000);
            list.push(dead)
            var block = new Platform(710, 30, 110, 1000);
            list.push(block);
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(1405, 75);
            list.push(portal);
            break;
        case 8:
            var block = new Platform(-100, 19050, -50, 50);
            list.push(block)
            player.x = 1400
            player.y = 600
            var block = new Platform(1300, 1050, 700, 700);
            list.push(block);
            var block = new Platform(1650, 1050, 0, 700);
            list.push(block);
            var block = new Platform(1300, 50, 300, 200);
            list.push(block);
            var dead = new Dead(1290, 10, 300, 75);
            list.push(dead);
            var block = new Platform(1100, 50, 150, 1000);
            list.push(block);
            var recharge = new Recharge(1450, 350)
            list.push(recharge)
            var recharge = new Platform(1350, 300, 450, 50)
            list.push(recharge)
            var dead = new Dead(1350, 300, 440, 10)
            list.push(dead)
            var dead = new Dead(1290, 50, 290, 10);
            list.push(dead)
            var block = new Platform(700, 50, 0, 600);
            list.push(block);
            var block = new Platform(850, 300, 400, 50);
            list.push(block);
            var block = new Platform(700, 300, 600, 50);
            list.push(block);
            var dead = new Dead(850, 250, 390, 10);
            list.push(dead);
            var dead = new Dead(750, 250, 590, 10);
            list.push(dead);
            var recharge = new Recharge(800, 525);
            list.push(recharge);
            var recharge = new Recharge(1050, 705);
            list.push(recharge);
            var recharge = new Recharge(750, 705);
            list.push(recharge);
            var block = new Platform(100, 200, 600, 50)
            list.push(block);
            var recharge = new Recharge(500, 255);
            list.push(recharge);
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(105, 75);
            list.push(portal);
            break;
        case 9:
            player.x = 100
            player.y = 600
            var block = new Platform(0, 200, 700, 700);
            list.push(block);
            var block = new Platform(300, 50, 300, 500);
            list.push(block);
            var dead = new Dead(300, 200, 290, 10);
            list.push(dead);
            var block = new Platform(300, 200, 300, 50);
            list.push(block);
            var recharge = new Recharge(150, 350);
            list.push(recharge);
            var recharge = new Recharge(850, 350);
            list.push(recharge);
            var recharge = new Recharge(1350, 350);
            list.push(recharge);
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(1405, 75);
            list.push(portal);
            break;
        case 10:
            player.x = 1400
            player.y = 600

            var block = new Platform(-800, 800, -1000, 9000);
            list.push(block);
            var block = new Platform(1350, 200, 700, 700);
            list.push(block);
            var block = new Platform(800, 50, 400, 700);
            list.push(block);
            var dead = new Dead(800, 50, 390, 10);
            list.push(dead);
            var recharge = new Recharge(500, 450);
            list.push(recharge);
            var block = new Platform(300, 50, 650, 700);
            list.push(block);
            var dead = new Dead(300, 50, 640, 10);
            list.push(dead);
            var block = new Platform(300, 50, 150, 250);
            list.push(block);
            var block = new Platform(350, 50, 600, 500);
            list.push(block);
            var dead = new Dead(350, 50, 590, 10);
            list.push(dead);
            var dead = new Dead(0, 300, 700, 200);
            list.push(dead);
            var block = new Platform(350, 50, 150, 200);
            list.push(block);
            var block = new Platform(350, 200, 150, 50);
            list.push(block);
            var recharge = new Recharge(150, 450);
            list.push(recharge);
            var recharge = new Recharge(825, 50);
            list.push(recharge);
            var dead = new Dead(0, 1350, 900, 700);
            list.push(dead)
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead);
            var portal = new Portal(1405, 75);
            list.push(portal);
            break;
        case 11:
            player.x = 1400
            player.y = 200
            var block = new Platform(1350, 200, 300, 700);
            list.push(block);
            var dead = new Dead(1340, 10, 300, 700);
            list.push(dead);
            var dead = new Dead(1000, 60, 0, 250);
            list.push(dead);
            var dead = new Dead(990, 60, 0, 200);
            list.push(dead);
            var dead = new Dead(990, 60, 400, 200);
            list.push(dead);
            var block = new Platform(1000, 50, 0, 600);
            list.push(block);
            var block = new Platform(800, 50, 200, 1000);
            list.push(block);
            var dead = new Dead(850, 10, 300, 200);
            list.push(dead);
            var dead = new Dead(850, 10, 700, 200);
            list.push(dead);
            var dead = new Dead(790, 10, 200, 300);
            list.push(dead);
            var block = new Platform(600, 50, 0, 600);
            list.push(block);
            var recharge = new Recharge(925, 500);
            list.push(recharge);
            var recharge = new Recharge(500, 600);
            list.push(recharge);
            var recharge = new Recharge(400, 300);
            list.push(recharge);
            var dead = new Dead(-1000, 10000, 1200, 100000)
            list.push(dead)
            var block = new Platform(0, 10000, 0, 50);
            list.push(block);
            var portal = new Portal(200, 175);
            list.push(portal);
            break;
        case 12:
            player.x = 50;
            player.y = 500;
            var block = new Platform(0, 400, 700, 100)
            list.push(block)
            list.push(new RedRecharge(700, 700));
            list.push(new RedRecharge(1000, 700));
            list.push(new RedRecharge(1300, 700));
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var dead = new Dead(-1000, 10000, -200, 500)
            list.push(dead)
            var portal = new Portal(1700, 370);
            list.push(portal);
            break;
        case 13:
            player.x = 1400;
            player.y = 570;
            var block = new Platform(1300, 400, 700, 100)
            list.push(block)
            var block = new Platform(0, 50, 0, 1000)
            list.push(block)
            var recharge = new RedRecharge(1200, 550);
            list.push(recharge);
            list.push(new RedRecharge(450, 550));
            list.push(new Recharge(450, 200))
            var dead = new MovingDead(300, 10000, 300, 50, 2)
            list.push(dead)
            var dead = new Dead(-1000, 10000, -500, 500)
            list.push(dead)
            var dead = new Dead(-1000, 10000, 1200, 10000)
            list.push(dead)
            var portal = new Portal(1000, 100);
            list.push(portal);
            break;
        case 14:
            player.x = 1400;
            player.y = 570;
            var block = new Platform(1100, 600, 700, 100)
            list.push(block)
            var block = new Platform(200, 1000, 0, 10000)
            list.push(block)
            list.push(new Dead(0, 0, 0, 0))

            list.push(new Platform(1900, 50, 700, 10000))
            list.push(new Platform(1900, 300, 700, 50))
            list.push(new Platform(2100, 300, 900, 50))
            list.push(new Dead(2100, 300, 890, 10))
            list.push(new Dead(1950, 250, 750, 10))


            list.push(new Platform(2400, 50, 300, 900))
            list.push(new Platform(2400, 50, 1400, 1000))

            list.push(new Platform(2700, 50, 600, 600))


            list.push(new Platform(2700, 500, 700, 50))


            list.push(new RedRecharge(2900, 1500))

            list.push(new RedRecharge(2575, 500))


            list.push(new MovingDead(0, 9000, -200, 500, 2))
            list.push(new MovingDead(0, 9000, 900, 500, 2))
            var portal = new Portal(2950, 500);
            list.push(portal);
            break;
    }
    // Centers Charactrer

    for (i = 0; i < list.length; i++) {
        list[i].x += width / 2 - player.x
        list[i].y += height / 2 - player.y
        list[i].orX += width / 2 - player.x
        list[i].orY += height / 2 - player.y
    }

    player.x += width / 2 - player.x
    player.y += height / 2 - player.y

}

