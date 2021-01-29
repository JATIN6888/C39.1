var gameState=0;
var database,playerCount;
var form,player,game;
var distance=0;
var allPlayers;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
 
game = new Game();
game.getState();
game.start();
}
function draw(){

    background("yellow");
    if(playerCount===4){
        game.update (1);
    }
    if(gameState === 1){
        clear ();
        game.play();
    }
   
}

/*
function readPos(data){
    position=data.val();
    ball.x=position.x
    ball.y=position.y

}


function pos(x,y){
 database.ref('ball/position').set({
     'x':position.x +x,
     'y':position.y +y
 })   

}
function showError(){
    console.log("error");
}*/