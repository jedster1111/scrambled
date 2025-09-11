import { v4 as uuid4 } from "uuid";

import type { Player, PlayerDTO } from "./Player.js";

type GameDTO = {
  id: string;
  name: string;
  players: PlayerDTO[];
};

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
