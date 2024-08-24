// Build a browser form which collects Email, Country, Zip Code, Password and
// Password Confirmation fields

import './reset.css';
import './style.css';

const testElem = document.createElement('div');

// [ ] TODO:bulid HTML form
// [ ] TODO:check HTML required
// novalidate

// [ ] TODO: write JS validation for each
// [x] TODO:  password- length, pattern
// [x] TODO: password- check with confirmation password
// [] TODO: email - make sure it matches pattern
// [] TODO: country - validate from list of countries
// [] TODO: zip - ????

// constants
const domInputs = document.querySelectorAll('input');
const [
  passwordOriginal = document.querySelector('input#password'),
  passwordToCompare = document.querySelector('input#confirm-password'),
  email = document.querySelector('input#email')
  country = document.querySelector('#country'),
] = [];

// event callback functions
function checkPasswordPattern(targetPassword) {
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

function comparePasswords() {
  passwordToCompare.setCustomValidity('');
  if (passwordOriginal.value !== passwordToCompare.value) {
    passwordToCompare.setCustomValidity('Passwords should match');
    // console.log(passwordToCompare.reportValidity());
  }
  passwordToCompare.reportValidity();
}
// document.querySelector('input').valid;

// bulk addEventLisitener

passwordOriginal.addEventListener('input', (event) => checkPasswordPattern(event.target));
passwordToCompare.addEventListener('input', (event) => checkPasswordPattern(event.target));
passwordToCompare.addEventListener('input', comparePasswords);

