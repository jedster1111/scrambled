import { after, before, beforeEach, describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import { Result, err, ok } from "neverthrow";
import type { Board, CountedLetters, Player } from "../../types.ts";
import { countLetters } from "./countLetters.ts";
import { compareLetters } from "./compareLetters.ts";

describe("checkBoard", async () => {
  const board: Board = { "1,1": "A", "1,2": "A" };
  const player: Player = { letters: { A: 2 } };
  const countedBoardLetters: CountedLetters = { A: 3, B: 2, C: 1 };
  let countLettersMock = mock.fn<typeof countLetters>(
    () => countedBoardLetters,
  );
  let compareLettersMock = mock.fn<typeof compareLetters>(() => ok());

  mock.module("./countLetters.ts", {
    namedExports: { countLetters: countLettersMock },
  });
  mock.module("./compareLetters.ts", {
    namedExports: { compareLetters: compareLettersMock },
  });

  const { peelCheck: checkBoard } = await import("./peelCheck.ts");

  beforeEach(() => {
    countLettersMock.mock.restore();
    countLettersMock.mock.resetCalls();
    compareLettersMock.mock.restore();
    compareLettersMock.mock.resetCalls();
  });

  after(() => {
    mock.reset();
    mock.restoreAll();
  });

  it("should return an error if there are letters in the board that the player shouldn't have", () => {
    compareLettersMock.mock.mockImplementationOnce(() => err(new Error()));

    const result = checkBoard(board, player);

    assert.equal(compareLettersMock.mock.callCount(), 1);
    assert.ok(result.isErr());
  });

  it("should return ok if player owns all letters in board", () => {
    compareLettersMock.mock.mockImplementationOnce(() => ok());

    const result = checkBoard(board, player);

    assert.equal(countLettersMock.mock.callCount(), 1);
    assert.deepEqual(countLettersMock.mock.calls[0].arguments, [board]);

    assert.equal(compareLettersMock.mock.callCount(), 1);
    assert.deepEqual(compareLettersMock.mock.calls[0].arguments, [
      countedBoardLetters,
      player.letters,
    ]);

    assert.ok(result.isOk());
  });
});
