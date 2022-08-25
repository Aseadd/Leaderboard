const game = require('./game.js');
const displayScore = require('./scoreResult.js');

export default function display() {
  const result = document.querySelector('.result');

  const titleSection = document.createElement('div');
  titleSection.classList.add('title-section');

  const outputTitle = document.createElement('h2');
  outputTitle.innerHTML = 'Recent Scores';
  titleSection.appendChild(outputTitle);

  const refresh = document.createElement('button');
  refresh.classList.add('refresh-btn');
  refresh.innerHTML = 'Refresh';
  titleSection.appendChild(refresh);
  result.appendChild(titleSection);
  const score = document.createElement('div');
  score.classList.add('scores');
  result.appendChild(score);
  return result;
}
