var curveShotTestState = {
  
  create: function(){
      Background = game.add.sprite(0,0,'Background');
      Background.height = 600;
      Background.width = 800;

      Frisbee = game.add.sprite(100,290,'Frisbee');
      game.physics.enable(Frisbee,Phaser.Physics.ARCADE);
      Frisbee.anchor.x = 0.5;
      Frisbee.anchor.y = 0.5;
      Frisbee.scale.setTo(1.5,1.5);
  },

  update:function(){
    angle += 0.02;
    // radius+=0.05;
    // console.log(Frisbee.body.velocity.x);
    Frisbee.position.x = 400 + (radius * Math.cos(angle));
    Frisbee.position.y = 600 + (radius * Math.sin(angle));

  }
};