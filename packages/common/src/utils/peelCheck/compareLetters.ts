import type { CountedLetters, Letter } from "../../types.ts";
import { err, ok, type Result } from "neverthrow";
import _ from "lodash";

class DifferentLettersError extends Error {
  constructor() {
    super();
    this.message = `Letters are different.`;
  }
}

type CompareLettersError = DifferentLettersError;

export const compareLetters = (
  lettersA: CountedLetters,
  lettersB: CountedLetters,
): Result<void, CompareLettersError> => {
  if (_.isEqual(lettersA, lettersB)) return ok();
  else return err(new DifferentLettersError());
};
