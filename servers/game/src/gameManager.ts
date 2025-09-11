import { Game } from "./game.js";

class GameManager {
  private games: Game[] = [new Game("First Test Game!")];

  getGame = (): Game | undefined => this.games[0];

  getGames(): Game[] {
    return this.games;
  }
}

export const gameManager = new GameManager();
