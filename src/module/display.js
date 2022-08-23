export default function display() {
  const result = document.querySelector('.result');
  const inputContainer = document.querySelector('.input-form');

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
  const scoreList1 = document.createElement('h3');
  scoreList1.innerText = 'Name 100';
  score.appendChild(scoreList1);

  const scoreList2 = document.createElement('h3');
  scoreList2.innerHTML = 'Name 20';
  score.appendChild(scoreList2);

  const scoreList3 = document.createElement('h3');
  scoreList3.innerHTML = 'Name 40';
  score.appendChild(scoreList3);

  const scoreList = document.createElement('h3');
  scoreList.innerHTML = 'Name 70';
  score.appendChild(scoreList);
  result.appendChild(score);

  return result;
}
