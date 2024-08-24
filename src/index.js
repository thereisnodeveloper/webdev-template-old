import './reset.css';
import './style.css';

const testElem = document.createElement("div")
function isRequired(argument) {
  throw new Error(`missing argument: ${argument}`);
}
