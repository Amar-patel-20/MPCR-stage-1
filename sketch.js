var form, player, game;
var gameState=0;
var playerCount;
var databas;

function setup() {
  createCanvas(400,400)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
  
}   
function draw(){

}