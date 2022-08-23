import _ from 'lodash';
import './styles.css';
//import scoreInput from './module/score-input';
function component() {
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
  const scoreList1 = document.createElement('label');
  scoreList1.innerHTML = 'This is the score List';
  score.appendChild(scoreList1);

  const scoreList2 = document.createElement('label');
  scoreList2.innerHTML = 'This is the score List';
  score.appendChild(scoreList2);

  const scoreList3 = document.createElement('label');
  scoreList3.innerHTML = 'This is the score List';
  score.appendChild(scoreList3);

  const scoreList = document.createElement('label');
  scoreList.innerHTML = 'This is the score List';
  score.appendChild(scoreList);
  result.appendChild(score);

  const scoreForm = document.createElement('form');
  scoreForm.classList.add('score-form');
  const subTitle = document.createElement('h2');
  subTitle.innerHTML = 'Add Your Score';
  inputContainer.appendChild(subTitle);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Name');
  scoreForm.appendChild(nameInput);

  const scoreInput = document.createElement('input');
  scoreInput.setAttribute