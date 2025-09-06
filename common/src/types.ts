export type Letter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export type CountedLetters = {
  [letter in Letter]?: number;
};

export type Board = {
  [coordinates: `${number},${number}`]: Letter;
};

export type Player = {
  letters: CountedLetters;
};

export type Coord = {
  x: number;
  y: number;
};

export type Location = {
  start: Coord;
  end: Coord;
};

export type WordDescription = {
  location: Location;
  word: string;
};
