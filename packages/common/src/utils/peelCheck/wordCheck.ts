// Need to check that all tiles are connected in one group, and that all words are valid words.

import { ok, type Result } from "neverthrow";
import type { WordDescription } from "../../types.js";

class WordsNotConnectedError extends Error {
  constructor() {
    super();
    this.message = `Not all words are connected.`;
  }
}

class InvalidWordError extends Error {
  constructor(invalidWords: WordDescription[]) {
    super();
    this.invalidWords = invalidWords;

    const invalidWordsString = invalidWords
      .map((word) => JSON.stringify(word))
      .join(",\n");
    this.message = `Invalid word(s):\n${invalidWordsString}`;
  }

  invalidWords: WordDescription[];
}

type WordCheckError = WordsNotConnectedError | InvalidWordError;

export function wordCheck(): Result<void, WordCheckError> {
  return ok();
}
