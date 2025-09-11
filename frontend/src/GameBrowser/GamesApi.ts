import axios from "axios";
import type { GamesDTO } from "scrambled-game-dtos";
import type { Api } from "../types.js";

export const client = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

const gamesApi = {
  getGames: async () => {
    try {
      return (await client.get<GamesDTO>("/games")).data;
    } catch (e) {
      console.error("Failed to fetch games", e);
      return [];
    }
  },
} as const satisfies Api;

export default gamesApi;
