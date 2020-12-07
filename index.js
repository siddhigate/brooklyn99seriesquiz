const readlineSync = require('readline-sync');
const chalk = require('chalk');

// printing colored line
function colorLine(){
  console.log(chalk.bold.magentaBright("--------------------------------------"));
}

// empty line 
function emptyLine(){
  console.log();
}

// displaying rules
function rules(){
  emptyLine()
  console.log(chalk.bold.greenBright("HOW TO PLAY THIS GAME?"));
  console.log(chalk.cyanBright.bold("1 Enter the correct option 1/2/3/4"));
  console.log(chalk.cyanBright.bold("2 Press Enter"));
  console.log(chalk.cyanBright.bold("3 Send the screenshot of your final score to me"));
  console.log(chalk.yellowBright.bold("Have Fun!"))
  emptyLine()
  colorLine()
}

// welcome message
console.log(chalk.green.bold("Welcome to DO YOU KNOW SIDDHI? quiz"));
emptyLine(); colorLine(); emptyLine();

// current player object
var currentplayer ={score:"0",name:""};

// username input
currentplayer.name = readlineSync.question(chalk.blueBright.bold("What's your name? "));
emptyLine();emptyLine();

// saying hello to user 
console.log(chalk.bold.yellowBright("HELLO "+currentplayer.name.toUpperCase()) );

// decoration
emptyLine();colorLine();emptyLine();

// calling function to display rules
rules();


function play(question,options,answer){
  emptyLine();

  console.log(chalk.green.bold(question));

  for(var i=0;i<4;i++){
    console.log(chalk.cyan.bold(i+1+" "+options[i]));
  }

  var userAnswer = readlineSync.question(chalk.green("Enter your answer: "));
  
  if(answer.toUpperCase() === userAnswer.toUpperCase()){
    console.log(chalk.yellowBright.bold("CORRECT!"));
    currentplayer.score = parseInt(currentplayer.score)+1;
  }
  else{
    console.log(chalk.redBright("WRONG"))
  }
  
  console.log(chalk.blueBright("Current Score is: "+currentplayer.score));
  emptyLine()
  colorLine()

} 


// question objects
var questionOne = {
  question: "1) What is Jake’s favourite cop movie?",
  options: ["Die hard","Robocop","Bad boys","The other guys"],
  answer: "1"
}

var questionTwo = {
  question: "2) What’s the name of the horse who gets the highest honour instead of Boyle?",
  options: [
    "Sergeant Peanut Butter","Lieutenant Pony","Sergeant Sweetcakes","Lieutenant Black Beauty"],
  answer: "1"
}

var questionThree = {
  question: "3) Who are NYPD’s worse enemies?",
  options: [" The Suicide Squad","U.S. Postal Services","FDNY - The Fire Department","Pizza delivery guys"],  
  answer: "3"
}

var questionFour = {
  question: "4) Cheddar is the name of whose dog?",
  options: ["Captain Holt","Jake","Charles","Rosa"],
  answer: "1"
}

var questionFive = {
  question: "5) How many brothers does Amy have?",
  options: ["Five","Six","Seven","Eight"],
  answer: "3"
}

var questionSix = {
  question: "6) What is The Vulture's real name?",
  options: ["Seth Dozerman","Detective Pembroke","Detective Podolski","Agent Kendrik"],
  answer: "2"
}
var questionSeven = {
  question: "7) Jake and Amy have a bet about who can get the most arrests. What is the final score?",
  options: ["Jake:92 Amy:83","Jake:99 Amy:90","Jake:87 Amy:78","Jake:93 Amy:84"],
  answer: "1"
}

var questionEight = {
  question: "8) What is Terry's favorite yogurt flavor?",
  options: ["Peach","Strawberry","Mango","Raspberry"],
  answer: "3"
}
var questionNine = {
  question: "9) Who won 'Boyle Bingo'?",
  options: ["Amy","Jake","Gina","Terry"],
  answer: "2"
}

var questionTen = {
  question: "10) Amy played which instrument in high school?",
  options: ["Clarinet","French horn","Bassoon","Double bass"],
  answer: "2"
}


// creating array of all question objects
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

// calling play function for all question objects
for(var i=0;i<questions.length;i++){

  play(questions[i].question,questions[i].options,questions[i].answer);
}

emptyLine();

// displaying final score
console.log(chalk.bold.cyanBright("FINAL SCORE is: ")+chalk.bold.yellowBright(currentplayer.score)+"/10");

emptyLine();colorLine();emptyLine();

// high scores
var highscore1={ score:9, name:"Tanya"};
var secondhighscore={score:8, name:"Avaneesh"};

if(currentplayer.score>highscore1.score){
  
  console.log(chalk.yellow.bold("Yayy, You have beaten the high score!"));
  emptyLine();
  
  
  emptyLine();colorLine();
  console.log(chalk.yellowBright.bold("HIGH SCORES: "));
  displayScoreName(currentplayer);
  displayScoreName(highscore1);
  displayScoreName(secondhighscore);

}
else if(currentplayer.score==highscore1.score){
  console.log(chalk.yellow.bold("Yayy, You are the highest scorer!"));
  
  emptyLine();colorLine();
  console.log(chalk.yellowBright.bold("HIGH SCORES: "));
  displayScoreName(highscore1);
  displayScoreName(currentplayer);
  displayScoreName(secondhighscore);

}
else{
  console.log(chalk.yellow.bold("You didn't beat the high score :("));
  
  emptyLine();colorLine();
  console.log(chalk.yellowBright.bold("HIGH SCORES: "));
  displayScoreName(highscore1);
  displayScoreName(secondhighscore);
  displayScoreName(currentplayer);
}


function displayScoreName({score,name}){
  console.log(chalk.greenBright.bold(score)+chalk.greenBright.bold("/10")+"  "+chalk.greenBright.bold(name));
}

emptyLine(); colorLine();emptyLine();
  console.log(chalk.yellow("Take a screenshot and share it with me :)"))
emptyLine(); colorLine();
