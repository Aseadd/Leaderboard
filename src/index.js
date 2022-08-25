import './styles.css';
import display from './module/display';

const game = require('./module/game.js');
const scoreResult = require('./module/scoreResult.js');
// eslint-disable-next-line
const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xXcSDd9DQXixIyWfrbiy/scores';
display();
scoreResult(url);

const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

submit.addEventListener('click', async () => {
  const user = inputName.value;
  const score = inputScore.value;
  await game.setScores(url, user, score);
  await scoreResult(url);
});

refresh.addEventListener('click', async () => {
  await scoreResult(url);
});
