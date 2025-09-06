import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { compareLetters } from "./compareLetters.ts";
import type { CountedLetters } from "../../types.ts";

describe("compareLetters", () => {
  it("should return error if total count of letters is different", () => {
    const lettersA: CountedLetters = { A: 3 };
    const lettersB: CountedLetters = { A: 4 };
    const result = compareLetters(lettersA, lettersB);
    assert.ok(result.isErr());
  });

  it("should return error if total count of letters is different with multiple letters", () => {
    const lettersA: CountedLetters = { A: 3, B: 4 };
    const lettersB: CountedLetters = { A: 3, B: 3 };
    const result = compareLetters(lettersA, lettersB);
    assert.ok(result.isErr());
  });

  it("should return error if total count is the same, but individual letter counts are different", () => {
    const lettersA: CountedLetters = { A: 3, B: 4 };
    const lettersB: CountedLetters = { A: 2, B: 5 };
    const result = compareLetters(lettersA, lettersB);
    assert.ok(result.isErr());
  });

  it("should return ok if letters are the same", () => {
    const lettersA: CountedLetters = { A: 3, B: 4 };
    const lettersB: CountedLetters = { A: 3, B: 4 };
    const result = compareLetters(lettersA, lettersB);
    assert.ok(result.isOk());
  });
});
