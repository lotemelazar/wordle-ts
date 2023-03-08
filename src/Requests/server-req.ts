export async function generateWordInd() {
  const wordInd = fetch(`http://localhost:3333/wordInd`).then((response) => response.text());
  return wordInd;
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
