// import wordBank from './bank.txt';

export const boardDefault = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const wordArr = ['apple', 'dates', 'hello', 'right', 'guest', 'world', 'table'];

export const generateWordSet = () => {
  let wordSet;
  let wordToGuess;
  wordToGuess = wordArr[Math.floor(Math.random() * wordArr.length)];
  wordSet = new Set(wordArr);

  return { wordSet, wordToGuess };
};
