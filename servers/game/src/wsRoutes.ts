import type { FastifyPluginAsync } from "fastify";
import { WebSocket } from "ws";
import type { Data } from "ws";

type Message<
  Id extends string,
  Payload extends Record<string, string | number> | undefined = undefined,
> = { id: Id; payload: Payload };

type HelloMessage = Message<"hello", undefined>;

type Messages = HelloMessage;

const wsRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/ws", { websocket: true }, (socket, req) => {
    fastify.log.info(`Client connected`);
    socket.send("Hey client! This is the game server!");

    socket.on("message", messageHandler);
  });
};

function messageHandler(this: WebSocket, message: Data) {
  console.log(`Received message: ${message}`);

  try {
    const parsedMessage = JSON.parse(message.toString());
    if (parsedMessage.id) {
      this.send(
        JSON.stringify({
          id: "hello-back",
          payload: { msg: "returning the favour" },
        }),
      );
    }
  } catch {
    console.error("Whoops, failed to parse message");
  }
}

export default wsRoutes;
