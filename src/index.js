import './styles.css';
import scoreInputFunc from './module/score-input';
import display from './module/display';
import Score from './module/score.js';
const game = require('./module/game.js');
const scoreResult = require('./module/scoreResult.js');

const trial = document.querySelector('.trial');
const refresh = document.querySelector('.refresh-btn');
const submit = document.querySelector('.score-btn');

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I29zP7wzCCRzPd6OVPpA/scores';

function component() {
  display();
  scoreInputFunc();
  scoreResult(url);
}

document.body.appendChild(component());

refresh.addEventListener('click', () => {
  scoreResult(url);
});

submit.addEventListener('click', async () => {
  const user = document.querySelector('#name').value;
  const scoreValue = document.querySelector('#score').value;
  const userScore = new Score(user, scoreValue);
  console.log(userScore);
  let scoreHtml = 'fgl;qeqglrjlg';
  scoreHtml += `<h3>
        ${user} : ${scoreValue}
    </h3>`;
  trial.innerHTML = scoreHtml;
  await game.setScores(url, JSON.stringify(userScore));
  scoreResult(baseurl);
});
