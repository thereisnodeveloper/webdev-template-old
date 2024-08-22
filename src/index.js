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
const passwordToCompare = document.querySelector('input#password');
const countryValidity = document.querySelector('#country').validity;

// event callback functions
function checkPassword() {
  /** @type {HTMLInputElement} */
  console.log('passwordOriginal:', passwordOriginal.validity);
  return passwordOriginal.validity.patternMismatch;
}

// bulk addEventLisitener
passwordOriginal.addEventListener('input', checkPassword);
