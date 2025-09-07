import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { countLetters } from "./countLetters";
import type { Board } from "../../types";

describe("countLetters", () => {
  it("should convert board to counted letters", () => {
    const board: Board = {
      "1,1": "A",
      "1,2": "A",
      "1,3": "A",
      "2,1": "B",
      "2,2": "B",
      "3,1": "C",
    };
    const result = countLetters(board);
    assert.deepEqual(result, { A: 3, B: 2, C: 1 });
  });
});
