var score = 0;
var questiontimer = 0;
function startGame() {
    myGameArea.start();
    myBackground = new component((screen.width - 50), (screen.height - 150), "https://i.imgur.com/ZZNuSBK.png", 0, 0, "image");
    myScore = new component("18px", "Times", "black", ((screen.width - 50)/1.125), ((screen.height - 150)/16.5), "text");
    myObstacle = new component(470, 250, "black", 810, 435);
    suBuilding = new component(150, 120, "black", 100, 300);
    lockwoodLib = new component(100, 150, "black", 100, 100);
    capenBuilding = new component(120, 120, "black", 650, 250);
    davisHall = new component(50, 120, "black", 400, 570);
    cookeAndHochstetter = new component(220, 80, "black", 865, 85);
    myGamePiece = new component(20, 20, "https://i.imgur.com/on7Ejez.png", ((screen.width - 50)/13.238), ((screen.height - 150)/1.685), 0, 0, "image");
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = screen.width - 50;
        this.canvas.height = screen.height - 150;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
          myGameArea.keys = (myGameArea.keys || []);
          myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
          myGameArea.keys[e.keyCode] = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedx = 0;
  this.speedy = 0;
  this.update = function(){
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else if (type == "image") {
      ctx.drawImage(this.image,
      this.x,
      this.y,
      this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function() {
    this.x += this.speedx;
    this.y += this.speedy;
  }
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
}
function updateGameArea(x) {
  myGameArea.clear();
  //myObstacle.update();
  myBackground.newPos();
  myBackground.update();
  //myObstacle is purposely updated after myBackground for demonstration purposes
  myObstacle.update();
  suBuilding.update();
  lockwoodLib.update();
  capenBuilding.update();
  davisHall.update();
  cookeAndHochstetter.update();
  myGamePiece.speedx = 0;
  myGamePiece.speedy = 0;
  if (questiontimer >= 1 && questiontimer < 300){
      questiontimer++
  }
  if (questiontimer >= 300){
      questiontimer = 0
  }
  if (myGameArea.keys && myGameArea.keys[37]) {
    myGamePiece.speedx = -3;
  }
  if (myGameArea.keys && myGameArea.keys[39]) {
    myGamePiece.speedx = 3;
  }
  if (myGameArea.keys && myGameArea.keys[38]) {
    myGamePiece.speedy = -3;
  }
  if (myGameArea.keys && myGameArea.keys[40]) {
    myGamePiece.speedy = 3;
  }
  if (myGamePiece.crashWith(myObstacle)) {
    var firstnum = Math.floor(Math.random() * 10);
    var secondnum = Math.floor(Math.random() * 10);
    var answ = firstnum + secondnum;
    if (questiontimer == 0){
        myGameArea.keys[37] = false;
        myGameArea.keys[38] = false;
        myGameArea.keys[39] = false;
        myGameArea.keys[40] = false;
        var promptt = prompt(firstnum + "+" + secondnum, "");
        if (promptt == answ){
            score = score + 0.1;
            alert("Congrats! You were the first one to answer the question correctly. Points are only awarded to you.");
        } else {
            alert("Sorry, you did not answer the question correctly/you were not the first one to answer the question. You are not awarded any points.");
        }
    }
    questiontimer ++
  }
  if (myGamePiece.crashWith(suBuilding)) {
    var firstnum = Math.floor(Math.random() * 10);
    var secondnum = Math.floor(Math.random() * 10);
    var answ = firstnum + secondnum;
    if (questiontimer == 0){
        myGameArea.keys[37] = false;
        myGameArea.keys[38] = false;
        myGameArea.keys[39] = false;
        myGameArea.keys[40] = false;
        var promptt = prompt(firstnum + "+" + secondnum, "");
        if (promptt == answ){
            score = score + 0.1;
            alert("Congrats! You were the first one to answer the question correctly. Points are only awarded to you.");
        } else {
            alert("Sorry, you did not answer the question correctly/you were not the first one to answer the question. You are not awarded any points.");
        }
    }
    questiontimer ++
  }
  if (myGamePiece.crashWith(lockwoodLib)) {
    var firstnum = Math.floor(Math.random() * 10);
    var secondnum = Math.floor(Math.random() * 10);
    var answ = firstnum + secondnum;
    if (questiontimer == 0){
        myGameArea.keys[37] = false;
        myGameArea.keys[38] = false;
        myGameArea.keys[39] = false;
        myGameArea.keys[40] = false;
        var promptt = prompt(firstnum + "+" + secondnum, "");
        if (promptt == answ){
            score = score + 0.1;
            alert("Congrats! You were the first one to answer the question correctly. Points are only awarded to you.");
        } else {
            alert("Sorry, you did not answer the question correctly/you were not the first one to answer the question. You are not awarded any points.");
        }
    }
    questiontimer ++
  }
  if (myGamePiece.crashWith(capenBuilding)) {
    var firstnum = Math.floor(Math.random() * 10);
    var secondnum = Math.floor(Math.random() * 10);
    var answ = firstnum + secondnum;
    if (questiontimer == 0){
        myGameArea.keys[37] = false;
        myGameArea.keys[38] = false;
        myGameArea.keys[39] = false;
        myGameArea.keys[40] = false;
        var promptt = prompt(firstnum + "+" + secondnum, "");
        if (promptt == answ){
            score = score + 0.1;
            alert("Congrats! You were the first one to answer the question correctly. Points are only awarded to you.");
        } else {
            alert("Sorry, you did not answer the question correctly/you were not the first one to answer the question. You are not awarded any points.");
        }
    }
    questiontimer ++
  }
  if (myGamePiece.crashWith(davisHall)) {
    var firstnum = Math.floor(Math.random() * 10);
    var secondnum = Math.floor(Math.random() * 10);
    var answ = firstnum + secondnum;
    if (questiontimer == 0){
        myGameArea.keys[37] = false;
        myGameArea.keys[38] = false;
        myGameArea.keys[39] = false;
        myGameArea.keys[40] = false;
        var promptt = prompt(firstnum + "+" + secondnum, "");
        if (promptt == answ){
            score = score + 0.1;
            alert("Congrats! You were the first one to answer the question correctly. Points are only awarded to you.");
        } else {
            alert("Sorry, you did not answer the question correctly/you were not the first one to answer the question. You are not awarded any points.");
        }
    }
    questiontimer ++
  }
  if (myGamePiece.crashWith(cookeAndHochstetter)) {
    var firstnum = Math.floor(Math.random() * 10);
    var secondnum = Math.floor(Math.random() * 10);
    var answ = firstnum + secondnum;
    if (questiontimer == 0){
        myGameArea.keys[37] = false;
        myGameArea.keys[38] = false;
        myGameArea.keys[39] = false;
        myGameArea.keys[40] = false;
        var promptt = prompt(firstnum + "+" + secondnum, "");
        if (promptt == answ){
            score = score + 0.1;
            alert("Congrats! You were the first one to answer the question correctly. Points are only awarded to you.");
        } else {
            alert("Sorry, you did not answer the question correctly/you were not the first one to answer the question. You are not awarded any points.");
        }
    }
    questiontimer ++
  }

  if (score < 0.00001){
    myScore.text = "GPA (SCORE): " + "0.0"
  } else if (score > 4){
    myScore.text = "GPA (SCORE): " + "4.0";
  } else {
    myScore.text = "GPA (SCORE): " + Math.round(score * 10) / 10;
  }
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();
}
function getScore(){
  return score;
}
function updateScore(x){
  x += .1
  return x;
}

//----------------------------------------------------------------


// function testGetScore(){
//   var assert = require('assert');
//   x = getScore();
//   assert (x == score);
// }
//
// function testUpdateScore(){
//   var assert = require('assert');
//   var y = updateGameArea(.5);
//   assert (y == .6);
// }
