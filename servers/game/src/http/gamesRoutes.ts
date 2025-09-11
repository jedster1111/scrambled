import type { FastifyPluginAsync } from "fastify";
import { gameManager } from "../gameManager.js";

export const gamesRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/games", async (req, rep) => {
    return gameManager.getGames().map((g) => g.toDto());
  });
};
