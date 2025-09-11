export type PlayerDTO = {
  id: string;
  username: string;
};

export type GameDTO = {
  id: string;
  name: string;
  players: PlayerDTO[];
};

export type GamesDTO = GameDTO[];
