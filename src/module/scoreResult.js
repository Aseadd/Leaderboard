const game = require('./game.js');

const displayScore = async (url) => {
  const scores = await game.getScores(url);
  const result = document.querySelector('.scores');

  let scoreHtml = '';
  scores.forEach((element) => {
    scoreHtml += ` <tr>
       <td>
        ${element.user} </td>
      <td>   ${element.score}
    </td></tr>`;
  });
  result.innerHTML = scoreHtml;
};

module.exports = displayScore;
