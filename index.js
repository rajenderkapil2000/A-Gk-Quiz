var readLineSync = require('readline-sync');

score = 0 ;

console.log("Welcome to my End-Game ");

var userName = readLineSync.question("What is your name: ");

console.log("\n" + userName + " let's start the Game" + "\n");



function play(question, answer){

var userAnswer = readLineSync.question(question);

if(userAnswer===answer){
  console.log("Right!");
  score = score + 1;
    }else{
  console.log("Wrong!");
  score = score - 1;
  }{
  console.log("Current score is: " + score);
  console.log("-----------------");
}
}

const questions = [{
question: `which is the heighest animal in the world: 
a:Elephant
b:Giraffe
c:Dinosaur
`,
answer: "b"
},{
  question:`Laziest animal in the world: 
  a:Sloth
  b:Turtle
  c:Crocodile
  `,
  answer: "a"
},{
  question:`which is the largest animal in the world: 
  a:Antartic Dolphin
  b:Blue Whale
  c:Elephant
  `,
  answer: "b"
},{
  question:`which reptile has 4 chamber heart: 
  a:Lizard
  b:Frog
  c:Crocodile
  `,
  answer: "c"
},{
  question:`Smallest bird in the world: 
  a:Sparrow
  b:Cuckoo
  c:Hammingbird
  `,
  answer: "c"
}]

for (var i=0; i<questions.length; i++){
  var currentQuestion= questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Yay! "+ userName + " your final score is: " + score);

if(score===5){
  console.log("Congratulations! " + userName + " you are the heighest scorer ");
}else{
console.log(userName + " You need to improve your gk" + "\n")
}

var highScores=[{
  name:"Rajender ",
  score:"5"
},{
  name:"Mamta ",
  score:"5"
}]
console.log("high scores ")

for(var i=0; i<highScores.length; i++){
 var highScore = highScores[i];
 console.log(highScore.name + highScore.score);
}