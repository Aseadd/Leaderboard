const game = require('./game.js');

const displayScore = async (url) => {
  const scores = await game.getScores(url);

  const result = document.querySelector('.scores');
  const trial = document.querySelector('.trial');

  let scoreHtml = '';
  scores.forEach((element) => {
    scoreHtml += `<h3>
        ${element.user} : ${element.score}
    </h3>`;
  });
  result.innerHTML = scoreHtml;

  let trialText = 'This is trial';
  trial.innerHTML = trialText;
  return result;
};

module.exports = displayScore;
