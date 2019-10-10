var menuState = {
    create : function () {
    	spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        menuBg = game.add.sprite(0,0,'blackBackground');
        playText = game.add.sprite( 200, 200,'Play');
        console.log('menu');

    },
    update: function () {
    	if(spaceBar.isDown){
            game.state.start('countdown');
        }
    }

};