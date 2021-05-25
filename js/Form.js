class Form{
    constructor(){
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        rock = createButton("ROCK");
        rock.position(50, 500);
        rock.mousePressed(rockFunction);

        paper = createButton("PAPER");
        paper.position(50, 550);
        paper.mousePressed(paperFunction);

        sci = createButton("SCISSORS");
        sci.position(50, 600);
        sci.mousePressed(sciFunction);
        
        for(var i = 0 ; i < 900; i = i+ 20){
            line(600, i, 600, i+10);
        }

    }
    display(){
       this.title = createElement('h1');
       this.title.html("ROCK PAPER SCISSORS");
       this.title.position(400, 30);

       this.input = createInput("NAME");
       this.input.position(450, 200);

       this.button = createButton('START');
       this.button.position(500, 300);

       this.reset = createButton('reset');
       this.reset.position(500, 650);
       //this.reset.hide();

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })




    }
}



