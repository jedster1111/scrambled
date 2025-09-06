import type { FastifyPluginAsync } from "fastify";

const wsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/ws", { websocket: true }, (socket, req) => {
    fastify.log.info(`Client connected`);
    socket.send("Hey client! This is the game server!");

    socket.on("message", (message) => {
      console.log(`Received message: ${message}`);
    });
  });
};

export default wsRoutes;
