import { v4 as uuid4 } from "uuid";

import type { Player } from "./Player.js";
import type { GameDTO } from "scrambled-game-dtos";

export class Game {
  constructor(name: string) {
    this.name = name;
  }

  private id: string = uuid4();
  private name: string;
  private players: Player[] = [];

  toDto(): GameDTO {
    return {
      id: this.id,
      name: this.name,
      players: this.players.map((p) => p.toDTO()),
    };
  }

  canJoin(player: Player): boolean {
    return true;
  }
}
