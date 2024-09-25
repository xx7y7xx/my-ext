import { formatDate } from '../node_modules/@db-man/github/es6/utils.js';

console.log('[my-ext] Background script started.');

console.log(
  'An example to show how to load a module from npm packages:',
  formatDate
);

console.log('[my-ext] Background script ended.');
