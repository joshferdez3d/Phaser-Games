var preloadState = {
    preload : function () {
        game.load.image('Empty','Assets/Empty.png');
    	game.load.image('1','Assets/Countdown/1.png');
        game.load.image('2','Assets/Countdown/2.png');
        game.load.image('3','Assets/Countdown/3.png');
        game.load.image('Go','Assets/Countdown/Go.png');
        game.load.image('Play','Assets/Menu/Play_Text.png');
        game.load.image('blackBackground', 'Assets/Menu/blackBackground.png');
        game.load.image('Background','Assets/Game/Pitch.png');
        game.load.image('Frisbee','Assets/Game/Frisbee.png');
        game.load.atlas('Player','Assets/Game/player_img.png','Assets/Game/player_img.json');
    },
    create : function () {
        game.state.start('gamePlay');
    }
};