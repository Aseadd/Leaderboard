import _ from 'lodash';
import './styles.css';
import scoreInputFunc from './module/score-input';
import display from './module/display';
function component() {
  display();
  scoreInputFunc();
}

document.body.appendChild(component());
