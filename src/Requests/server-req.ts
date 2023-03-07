export async function generateWordSet() {
  const wordInd = fetch(`http://localhost:3333/word`).then((response) => response.text());
  return wordInd;
}

export async function getCorrectWord(index: string) {
  const word = fetch(`http://localhost:3333/correctWord/${index}`).then((response) => response.json());
  return word;
}

export async function checkGuess(wordToGuessIndex: string, guess: string) {
  const solution = fetch(`http://localhost:3333/check/${wordToGuessIndex}/${guess}`).then((response) => response.json());
  return solution;
}

export async function letterExists(wordToGuessIndex: string, letter: string) {
  const solution = fetch(`http://localhost:3333/isExists/${wordToGuessIndex}/${letter}`).then((response) => response.json());
  return solution;
}

export async function letterIsCorrect(wordToGuessIndex: string, letterPos: string, letter: string) {
  const solution = fetch(`http://localhost:3333/lic/${wordToGuessIndex}/${letterPos}/${letter}`).then((response) => response.json());
  return solution;
}
