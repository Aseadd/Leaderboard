const game = require('./game.js');

const displayScore = async (url) => {
  const scores = await game.getScores(url);
  const result = document.querySelector('.scores');

  let scoreHtml = '';
  scores.forEach((element) => {
    scoreHtml += `<li>
        ${element.user} : ${element.score}
    </li>`;
  });
  result.innerHTML = scoreHtml;
};

module.exports = displayScore;
