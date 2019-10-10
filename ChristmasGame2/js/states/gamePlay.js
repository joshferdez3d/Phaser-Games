 var gamePlayState = {
    create : function () {


        bmd = game.add.bitmapData(this.game.width, this.game.height);
        bmd.addToWorld();

    	Background = game.add.sprite(0,0,'Background');
    	Background.height = 600;
    	Background.width = 800;



        resetPoint = game.add.sprite(700,300,'Empty');

    	Player1 = game.add.sprite(100,300,'Player');
    	Player1.frameName = 'sprite3';
    	Player1.animations.add('run',['sprite1','sprite3','sprite2','sprite3'],5,true);
    	game.physics.enable(Player1,Phaser.Physics.ARCADE);
    	Player1.scale.setTo(0.5,0.5);
        Player1.body.immovable = true;
    	Player1.body.velocity.x = 0;
    	Player1.anchor.x = 0.5;
    	Player1.anchor.y = 0.5;

    	Player2 = game.add.sprite(700,300,'Player');
    	Player2.frameName = 'sprite6';
    	Player2.animations.add('run',['sprite4','sprite6','sprite5','sprite6'],5,true);
    	game.physics.enable(Player2,Phaser.Physics.ARCADE);
    	Player2.scale.setTo(-0.5,-0.5);
    	Player2.body.immovable = true;
    	Player2.body.velocity.x = 0;
    	Player2.anchor.x = 0.5;
    	Player2.anchor.y = 0.5;

    	Frisbee = game.add.sprite(Player1.position.x +20,290,'Frisbee');
    	game.physics.enable(Frisbee,Phaser.Physics.ARCADE);
    	Frisbee.scale.setTo(1.5,1.5);

    	spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	xkey = game.input.keyboard.addKey(Phaser.Keyboard.X);
    	ckey = game.input.keyboard.addKey(Phaser.Keyboard.C);
		cursors = game.input.keyboard.createCursorKeys();


 

    },
    update: function () {
        // console.log(frisbeeHeldAi);


        // Player1.animations.play('run');
        Player2.body.velocity.x = 0;
        Player2.body.velocity.y = 0;
        game.physics.arcade.collide(Player1, Frisbee, this.catchFrisbee);
        game.physics.arcade.collide(Player2, Frisbee, this.aiCatchFrisbee);
        this.aiMove();

        //AI calculates player position and decides whether to do a straight shot or a curved shot

        if(this.between(playerPositionY, 200, 400)){
             // this.aiCurvedShot();
        } else {
            this.aiStraightShot();
        }

        //Update tracking variables

        playerPositionX = Player1.position.x;
        playerPositionY = Player1.position.y;


        if(!frisbeeHeld || frisbeeHeldAi){
	        this.player1Move();
    	} else {
    		xkey.onDown.add(this.straightShot);
            ckey.onDown.add(this.curvedShot);
    	}

        if(aiFrisbeeThrown){
            this.aiResetPosition();
        }

        if (timer1Stopped && curvedShotThrown) {
           // console.log('in');
            timer1Stopped = false;
            timer1 = game.time.create(true);
            timer1.loop(.01, this.plot, this);  
            timer1.start();
            // this.plot();
        }

        if(curvedShotThrown && Frisbee.position.y< frisbeePositionY){
            timer1.stop();
            timer1.destroy();
            i = 0;
            timer1Stopped = true;
            curvedShotThrown = false;
        }
    },

    between : function(x, min, max) {
        return x >= min && x <= max;
    },

    plot: function() {
        angle+= 0.02;
        radius -= 4;

        // if(Frisbee.position.x<pivotX){
        // } else {
        //     radius 
        // }
        console.log(Frisbee.position.x);
        Frisbee.position.x = pivotX + (radius * Math.cos(angle)) *-1;
        Frisbee.position.y = frisbeePositionY + (radius * Math.sin(angle)); 

        // var points = {
        //     'x': [Frisbee.position.x +10, Frisbee.position.x + 100, Frisbee.position.x + 300, Frisbee.position.x + 456, 640],
        //     'y': [Frisbee.position.y, Frisbee.position.y -100,Frisbee.position.y - 120, Frisbee.position.y - 120, Frisbee.position.y]
        // };
        // var posx = game.math.bezierInterpolation(points.x, i);
        // var posy = game.math.bezierInterpolation(points.y, i);
        // console.log(posx);
        // console.log(posy);
        // Frisbee.position.x = posx;
        // Frisbee.position.y = posy;
        // i += increment;
        // if (posx > 800) {
        //       timer1.stop();
        //       timer1.destroy();
        //       i = 0;
        //       timer1Stopped = true;
        //       curvedShotThrown = false;
        // }
    },

    player1Move: function(){

		if(cursors.left.isDown){
        	Player1.position.x = Player1.position.x - 5;
        } else if (cursors.right.isDown){
        	Player1.position.x = Player1.position.x + 5;
        } else if(cursors.up.isDown){
        	Player1.position.y = Player1.position.y - 5;
        } else if(cursors.down.isDown){
        	Player1.position.y = Player1.position.y + 5;
        }
    },  

    straightShot: function (){
    	if(Frisbee.position.x<400 && frisbeeHeld){
    		Frisbee.body.velocity.x = shotPower;
    		frisbeeHeld = false;
    	} 
    },

    aiStraightShot: function(){
        if(Frisbee.position.x>400 && frisbeeHeldAi && !aiFrisbeeThrown){
            // console.log(aiFrisbeeThrown);
            Frisbee.body.velocity.x = -shotPower;
            frisbeeHeldAi = false;
            aiFrisbeeThrown = true;

        }
    },

    curvedShot: function(){

        if(!curvedShotThrown){
          
          
          for(j=0;j<1;j+=increment){

          }
        // bmd = game.add.bitmapData(this.game.width, this.game.height);
        // bmd.addToWorld();

        // var points = {
        //     'x': [Frisbee.position.x +10, Frisbee.position.x + 100, Frisbee.position.x + 300, Frisbee.position.x + 456, 640],
        //     'y': [Frisbee.position.y, Frisbee.position.y -100,Frisbee.position.y - 120, Frisbee.position.y - 120, Frisbee.position.y]
        // };

        // for(j=0; j<1; j+=increment){
        //     var posx  = game.math.bezierInterpolation(points.x, j);
        //     var posy  = game.math.bezierInterpolation(points.y, j);
        //     bmd.rect(posx, posy, 3, 3, 'rgba(245, 0, 0,1)');

        // }   

            curvedShotThrown = true;     
        }


    },

    aiCurvedShot: function(){

    },


    catchFrisbee: function(){
    	frisbeeHeld = true;
    	Frisbee.body.velocity.x = 0;
    	Frisbee.body.velocity.y = 0;
        frisbeePositionX = Frisbee.position.x;
        frisbeePositionY = Frisbee.position.y;
        
        pivotX = (frisbeePositionX+800)/2;
        radius =  800 - pivotX ;

        // this.plotCurvePoints();

        aiFrisbeeThrown = false;
    },

    aiCatchFrisbee: function(){
    	frisbeeHeldAi = true;
    	Frisbee.body.velocity.x = 0;
    	Frisbee.body.velocity.y = 0;
        Player2.body.velocity.x = 0;


    },



    aiResetPosition: function(){
        Player2.body.angularVelocity = 0;
        radians2 = game.physics.arcade.angleBetween(Player2,resetPoint);
        degrees2 = radians2*(180/Math.PI);
        game.physics.arcade.velocityFromAngle(degrees2,100,Player2.body.velocity);

    },

    aiMove: function(){
        if(Frisbee.position.x>300 && !frisbeeHeldAi && !aiFrisbeeThrown){
            Player2.body.angularVelocity = 0;
    	    radians = game.physics.arcade.angleBetween(Player2, Frisbee);               
            degrees = radians * (180/Math.PI);                        
            game.physics.arcade.velocityFromAngle(degrees, 100, Player2.body.velocity);
        } 
	},

    render: function(){
    	// game.debug.body(Player1);
    	// game.debug.body(Frisbee);
    }
};