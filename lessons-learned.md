#### Managing Workspace/Git

#### JavaScript
declare DOM elements in an array with JSDOC
```js
  // constants
  const domInputs = document.querySelectorAll('input');
  /** @type {Array.<HTMLInputElement>} */
  const [
    passwordOriginal = document.querySelector('input#password'),
    passwordToCompare = document.querySelector('input#confirm-password'),
    email = document.querySelector('input#email'),
    country = document.querySelector('#country'),
  ] = [];
```
