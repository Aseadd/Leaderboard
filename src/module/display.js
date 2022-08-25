export default function display() {
  const result = document.querySelector('.result');

  const titleSection = document.createElement('div');
  titleSection.classList.add('title-section');
  titleSection.classList.add('row');

  const outputTitle = document.createElement('h2');
  outputTitle.innerHTML = 'Recent Scores';
  outputTitle.classList.add('col');
  titleSection.appendChild(outputTitle);

  const refresh = document.createElement('button');
  refresh.classList.add('refresh-btn');
  refresh.classList.add('col-lg-2');
  refresh.classList.add('btn');
  refresh.classList.add('btn-primary');
  refresh.classList.add('btn-sm');
  refresh.innerHTML = 'Refresh';
  titleSection.appendChild(refresh);
  result.appendChild(titleSection);
  return result;
}
