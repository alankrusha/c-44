var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var  Rhand, Phand, Shand;
var rock, paper, sci
var rock1, rock2, paper1, paper2, sci1, sci2;
var rock1Img, rock2Img, paper1Img, paper2Img,sci1Img, sci2Img
var form, player, game;

var Rcheck = false;
var Pcheck = false;
var Scheck = false;

function preload(){
    rock1Img = loadImage("images/rock1.png");
    rock2Img = loadImage("images/rock2.png");
    paper1Img = loadImage("images/paper1.png");
    paper2Img = loadImage("images/paper2.png");
    sci1Img = loadImage("images/sci1.png");
    sci2Img = loadImage("images/sci2.png");
    backg = loadImage("images/bg.png");
}

function setup (){
   canvas = createCanvas(1200, 700);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("pink");

    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
       clear();
       game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
    drawSprites();
}

function rockFunction(){
    Rcheck = true;
    console.log(Pcheck);
    if(Pcheck === true || Scheck === true){
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }
        
        Rhand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Rhand.addImage(rock1Img);
    }
    }
    
function paperFunction(){
    Pcheck =  true;
    if(Rcheck === true || Scheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }
    Phand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
    Phand.addImage(paper1Img);
    }
    }
    
function sciFunction(){
    Scheck = true;
    if(Rcheck === true || Pcheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
    if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }
    Shand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
    Shand.addImage(sci1Img);
    }
    } 