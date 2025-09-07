import type { Board, CountedLetters, Letter } from "../../types.js";

export function countLetters(board: Board): CountedLetters {
  const letters = Object.values(board);
  return letters.reduce<CountedLetters>((accum, letter) => {
    accum[letter] = (accum[letter] ??= 0) + 1;
    return accum;
  }, {});
}
