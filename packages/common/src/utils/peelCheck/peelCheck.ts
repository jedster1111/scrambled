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

type PeelCheckError = BoardPlayerLetterMismatch;

export function peelCheck(
  board: Board,
  player: Player,
): Result<void, PeelCheckError> {
  const letterCheckResult = hasPlayerPlacedAllPieces(board, player);
  if (letterCheckResult.isErr()) return letterCheckResult;

  console.log("Board check passed!");
  return ok();
}

function hasPlayerPlacedAllPieces(
  board: Board,
  player: Player,
): Result<void, PeelCheckError> {
  const countedBoardLetters = countLetters(board);
  const compareResult = compareLetters(countedBoardLetters, player.letters);
  if (compareResult.isErr()) {
    const error = new BoardPlayerLetterMismatch(
      countedBoardLetters,
      player.letters,
    );
    error.cause = compareResult.error;
    return err(error);
  }

  return ok();
}
