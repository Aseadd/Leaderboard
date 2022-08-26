import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sound from './audio/music.wav';

const song = new Audio(sound);
const game = require('./module/game.js');
const scoreResult = require('./module/scoreResult.js');
// eslint-disable-next-line
const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/y87mZKQ441q4wBL6veJQ/scores';
scoreResult(url);

const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

submit.addEventListener('click', async () => {
  const user = inputName.value;
  const score = inputScore.value;
  inputName.value = '';
  inputScore.value = '';
  await game.setScores(url, user, score);
  await scoreResult(url);
});

refresh.addEventListener('click', async () => {
  await scoreResult(url);
});

document.addEventListener('mousemove', () => {
  song.play();
});
