import { err, ok, type Result } from "neverthrow";
import type { Board, CountedLetters, Letter, Player } from "../../types.ts";
import { compareLetters } from "./compareLetters.ts";
import { countLetters } from "./countLetters.ts";

class BoardPlayerLetterMismatch extends Error {
  constructor(boardLetters: CountedLetters, playerLetters: CountedLetters) {
    super();
    this.message = `Board provided does not have correct letters for Player.
Board: ${JSON.stringify(boardLetters)},
Player:${JSON.stringify(playerLetters)}`;
  }
}

type CheckBoardError = BoardPlayerLetterMismatch;

export function checkBoard(
  board: Board,
  player: Player
): Result<void, CheckBoardError> {
  const countedBoardLetters = countLetters(board);
  const compareResult = compareLetters(countedBoardLetters, player.letters);
  if (compareResult.isErr()) {
    const error = new BoardPlayerLetterMismatch(
      countedBoardLetters,
      player.letters
    );
    error.cause = compareResult.error;
    return err(error);
  }

  console.log("Board check passed!");
  return ok();
}
