import type { FastifyPluginAsync } from "fastify";
import { WebSocket } from "ws";
import type { Data } from "ws";

const wsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/ws", { websocket: true }, (socket, req) => {
    fastify.log.info(`Client connected`);
    socket.send("Hey client! This is the game server!");

    socket.on("message", messageHandler);
  });
};

function messageHandler(this: WebSocket, message: Data) {
  console.log(`Received message: ${message}`);
  switch (message) {
    case "hello":
      this.send("Why hello there...");
      break;
    default:
      this.send("I don't know how to handle that!");
  }
}

export default wsRoutes;
