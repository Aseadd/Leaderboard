export default function scoreInputFunc() {
  const inputContainer = document.querySelector('.input-form');

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
  scoreInput.setAttribute('type', 'text');
  scoreInput.setAttribute('name', 'point');
  scoreInput.setAttribute('placeholder', 'Score');
  scoreForm.appendChild(scoreInput);

  const btn = document.createElement('button');
  btn.classList.add('score-btn');
  // btn.setAttribute('type', 'button');
  btn.innerHTML = 'button';
  scoreForm.appendChild(btn);
  inputContainer.appendChild(scoreForm);
  return inputContainer;
}
