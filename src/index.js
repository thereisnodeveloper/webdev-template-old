// @ts-check
// Build a browser form which collects Email, Country, Zip Code, Password and
// Password Confirmation fields

import './reset.css';
import './style.css';

const testElem = document.createElement('div');

// [ ] TODO:bulid HTML form
// [ ] TODO:check HTML required
// novalidate

// [ ] TODO: write JS validation for each
// [ ] TODO:  password- length, pattern
// [ ] TODO: password- check with confirmation password
// [ ] TODO:

// constants
const domInputs = document.querySelectorAll('input');
const passwordOriginal = document.querySelector('input#password');
const passwordToCompare = document.querySelector('input#confirm-password');
const countryValidity = document.querySelector('#country').validity;

// event callback functions
function checkPassword(targetPassword) {
  // const passwords = [passwordOriginal, passwordToCompare];

  function isEachPasswordValid(password) {
    password.setCustomValidity('');

    if (!password.validity.valid) {
      password.setCustomValidity('Password should be 4-8 digits, numbers only');
    } else {
      password.setCustomValidity('');
    }
    return password.reportValidity();
  }
  return isEachPasswordValid(targetPassword);
}
// document.querySelector('input').valid;

// bulk addEventLisitener
passwordOriginal.addEventListener('input', (event) => checkPassword(event.target));
passwordToCompare.addEventListener('input', (event) => checkPassword(event.target));
