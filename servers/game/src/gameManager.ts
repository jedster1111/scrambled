import { Game } from "./game.js";

class GameManager {
  private games: Game[] = [new Game()];

  getGame = (): Game | undefined => this.games[0];
}

export const gameManager = new GameManager();
