import './styles.css';
import scoreInputFunc from './module/scoreInput';
import display from './module/display';
import Score from './module/score.js';
const game = require('./module/game.js');
const scoreResult = require('./module/scoreResult.js');

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I29zP7wzCCRzPd6OVPpA/scores';
scoreInputFunc();
display();
scoreResult(url);

const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

submit.addEventListener('click', () => {
  const user = inputName.value;
  const score = inputScore.value;
  game.setScores(url, user, score);
  scoreResult(url);
});
