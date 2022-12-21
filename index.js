var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question('What is your name? ');

console.log('Welcome ' + userName + ", to MISSION IMIPOSSIBLE MOVIE Quiz!!");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  let userAns = userAnswer.toLowerCase();

  if(userAns === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!")
  }
  console.log("current score: ", score)
  console.log("--------------")
}

let questions = [{
  question: 'Which year was the first part of mission Impossible released? \n1. 2006,\n2. 1996,\n3. 2000,\n4. 1999\n\n',
  answer: '2'
},{
  question: 'The fourth part of Mission Impossible was tagged as...........? \n1. Ghost Protocol, \n2. Rogue Nation, \n3. Fallout, \n4. Ghost Recon\n\n',
  answer: '1'
},{
  question: 'Which character do Tom Cruise portray in Mission Impossible? \n1. Ethan Hunt, \n2. Davian, \n3. Billy Baird, \n4. Luther Stickell\n\n',
  answer: '1'
},{
  question: '"IMF" abbreviation in Mission Impossible stands for.......? \n1. Impossible Mission Force, \n2. Impossible Missions Force, \n3. Intelligent Mission Force, \n4. Intelligent Missions Force\n\n',
  answer: '2'
},{
  question: 'Who helped Hunt to escape the torture chamber in Mission Impossible 5? \n1. Alan Hunley, \n2. Benji Dunn, \n3. Luther Stickell, \n4. Ilsa Faust\n\n',
  answer: '4'
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! you SCORED: ", score);