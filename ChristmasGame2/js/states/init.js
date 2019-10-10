console.log('game');
var game = new Phaser.Game(900, 600, Phaser.AUTO, 'game');

player1Speed = 100;
frisbeeHeld = true;
frisbeeHeldAi = false;
aiFrisbeeThrown = false;
curvedShotThrown = false;
shotPower = 200;
var frisbeePositionX;
var frisbeePositionY;
var playerPositionX;
var playerPositionY;
var radius  = 200;
var angle = 0;

increment = 1/game.width;
i = 0;
timer1Stopped = true;
timer1 = null;


var bmd = null;
var px;
var py;
game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('gamePlay', gamePlayState);
game.state.add('curveShotTest', curveShotTestState);
game.state.add('gameEnd', gameEndState);
game.state.add('countdown', countdownState);

game.state.start('boot');