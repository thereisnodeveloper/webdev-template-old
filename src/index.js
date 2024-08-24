// B * Build a browser form which collects Email, Country, Zip Code, Password
// and Password Confirmation fields
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

// DOM elements
const domInputs = document.querySelectorAll('input');
/** @type {Array.<HTMLInputElement>} */
const [
  passwordOriginal = document.querySelector('input#password'),
  passwordToCompare = document.querySelector('input#confirm-password'),
  email = document.querySelector('input#email'),
  country = document.querySelector('#country'),
] = [];

// event callback functions
// generic validity check

/**
 * @description
 * @param {HTMLInputElement} input
 * @param {*} message
 * @param {Boolean} [invalidCondition=!input.validity.valid]
 * @return {*}
 */
function isInputValid(input, message, invalidCondition = !input.validity.valid) {
  const inputNotValid = invalidCondition;
  // console.log('input:', input);

  input.setCustomValidity('');
  if (inputNotValid) {
    input.setCustomValidity(message);
  } else {
    input.setCustomValidity('');
  }

  // console.log(input.reportValidity());
  // console.log(`input.validationMessage${input.validationMessage}`);
  // console.log(`input.reportValidity(): ${input.reportValidity()}`);
  return input.reportValidity();
}

function checkPasswordPattern(targetPassword) {
  return isInputValid(targetPassword, 'Password should be 4-8 digits, numbers only');
}

function comparePasswords() {
  passwordToCompare.setCustomValidity('');
  if (passwordOriginal.value !== passwordToCompare.value) {
    passwordToCompare.setCustomValidity('Passwords should match');
    // console.log(passwordToCompare.reportValidity());
  }
  passwordToCompare.reportValidity();
}

function validateEmail() {
  // return isInputValid(email, 'Email pattern does not match', email.validity.typeMismatch);
  return isInputValid(email, '', email.validity.typeMismatch);
}
function validateCountry() {}

// bulk addEventLisitener

passwordOriginal.addEventListener('input', (event) => checkPasswordPattern(event.target));
passwordToCompare.addEventListener('input', (event) => checkPasswordPattern(event.target));
passwordToCompare.addEventListener('input', comparePasswords);
email.addEventListener('input', validateEmail);
