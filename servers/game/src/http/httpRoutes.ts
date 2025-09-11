import { type FastifyPluginAsync } from "fastify";
import { gamesRoutes } from "./gamesRoutes.js";

const httpRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.register(gamesRoutes);
  fastify.get("/hello", async (request, reply) => {
    return { msg: "Hello world!" };
  });
};

export default httpRoutes;
