// B * Build a browser form which collects Email, Country, Zip Code, Password
// and Password Confirmation fields
import './reset.css';
import './style.css';

const testElement = document.createElement('div');

// [x] TODO:bulid HTML form
// [x] TODO:check HTML required
// novalidate
// [ ] TODO: write JS validation for each
// [x] TODO:  password- length, pattern
// [x] TODO: password- check with confirmation password
// [x] TODO: email - make sure it matches pattern
// [x] TODO: country - validate pattern
// [] TODO: country - validate from list of countries
// [x] TODO: zip - allow numbers and '-' and whitespaces
// [ ] TODO: make sure form doesn't submit if element is invalid
// trying to see if it is aria-required that is getting read wrong

// DOM elements
const domInputs = document.querySelectorAll('input');
/** @type {Array.<HTMLInputElement>} */
const [
  passwordOriginal = document.querySelector('input#password'),
  passwordToCompare = document.querySelector('input#confirm-password'),
  email = document.querySelector('input#email'),
  country = document.querySelector('#country'),
  zip = document.querySelector('#zip'),
  form = document.querySelector('form'),
] = [];

// function to throw error if argument is missing
function isRequired(argument) {
  throw new Error(`missing argument: ${argument}`);
}

// event callback functions
// generic validity check

/**
 * @description
 * @param {HTMLInputElement} input
 * @param {*} message
 * @param {Boolean} [invalidCondition]
 * @return {*}
 */
function isInputValid(input, message, invalidCondition) {
  const inputNotValid = invalidCondition;
  // console.log('input:', input);

  input.setCustomValidity('');
  if (inputNotValid) {
    input.setCustomValidity(message);
  } else {
    input.setCustomValidity('');
  }

  // console.log(input.reportValidity());
  // console.log(`input.validationMessage: ${input.validationMessage}`);
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
function validateCountry() {
  return isInputValid(country, '', country.validity.patternMismatch);
}
function validateZip() {
  return isInputValid(zip, '', zip.validity.patternMismatch);
}

function formSubmissionHandler(event) {
  event.preventDefault();
  /** @type {HTMLFormElement} */
  const formToCheck = event.target;
  console.log('form.checkValidity():', formToCheck.checkValidity());
  if (formToCheck.checkValidity()) {
    const message = document.createElement('div', {
      textContent: 'Form Submitted',
    });
    document.body.append(message);
    console.log('form submitted');
  } else {
    formToCheck.reportValidity();
    console.log('form not valid');
  }
}

// bulk addEventLisitener

passwordOriginal.addEventListener('input', (event) => checkPasswordPattern(event.target));
passwordToCompare.addEventListener('input', (event) => checkPasswordPattern(event.target));
passwordToCompare.addEventListener('input', comparePasswords);
email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
zip.addEventListener('input', validateZip);
form.addEventListener('submit', (event) => formSubmissionHandler(event));

function preventEmpty(input) {
  if (input.validity.valueMissing) {
    console.log('missing value');
    console.log(input.validity.reportValidity());
  }
}
for (const input of [passwordOriginal, passwordToCompare, email, country, zip]) {
  input.addEventListener('submit', () => preventEmpty(input));
}
