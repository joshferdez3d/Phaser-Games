var countdownState = {
	create: function (){
		countdownBg = game.add.sprite(0,0,'blackBackground');
		countdown1 = game.add.sprite(300,200,'1');
        countdown1.visible = false;
        countdown2 = game.add.sprite(300,200,'2');
        countdown2.visible = false;
        countdown3 = game.add.sprite(300,200,'3');
        countdown3.visible = false;
        countdownGo = game.add.sprite(300,200,'Go');
        countdownGo.visible = false;


        countdownBegin = true;
        countdownMid = false;
        countdownMid2 = false;
        countdownEnd = false;
    },
	update : function(){
		if(countdownBegin){
			countdown3.visible = true;
			setTimeout(function(){ 
				countdown3.visible = false; 
				countdown2.visible = true;
				countdownBegin =false;
				countdownMid = true;
			}, 1000);
		}
		if(countdownMid){
			setTimeout(function(){ 
				countdown2.visible = false; 
				countdown1.visible = true;
				countdownMid = false;
				countdownMid2 = true;
			}, 1000);

		}
		if(countdownMid2){
			setTimeout(function(){
				countdown1.visible = false; 
				countdownGo.visible = true;
				countdownEnd = true;
				countdownMid2 = false;
			
			},1000);
		}
		if(countdownEnd){
			setTimeout(function(){
				countdown1.visible = false; 
				countdownGo.visible = false;
				countdownEnd = false;
				game.state.start('gamePlay');
			},450);
		}
    }
}