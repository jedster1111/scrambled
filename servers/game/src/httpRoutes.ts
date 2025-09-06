import type { FastifyPluginAsync } from "fastify";

const httpRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/hello", async (request, reply) => {
    return { msg: "Hello world!" };
  });
};

export default httpRoutes;
