import Fastify from "fastify";
import FastifyWS from "@fastify/websocket";
import httpRoutes from "./httpRoutes.ts";
import wsRoutes from "./wsRoutes.ts";

console.log("Starting game server");

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
