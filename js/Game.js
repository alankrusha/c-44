class Game {
    constructor(){
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
    }
  
    play(){
      form.hide();
      
           Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
          var index = 0;
  
      for(var plr in allPlayers){
         index = index+1;
          if (index === player.index){
            

          }
    
        }
        
      }
      drawSprites();
    }
  
    end(){
      console.log("GAME ENDED");
    }

    
  }

  