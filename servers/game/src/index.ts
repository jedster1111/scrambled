import Fastify from "fastify";
import FastifyWS from "@fastify/websocket";
import httpRoutes from "./httpRoutes.js";
import wsRoutes from "./wsRoutes.js";
import { sum } from "scrambled-common";

console.log("Starting game server");

console.log(`sum: ${sum(4, 5)}`);

const fastify = Fastify({
  logger: true,
});

fastify.register(FastifyWS);

fastify.register(wsRoutes);
fastify.register(httpRoutes);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
