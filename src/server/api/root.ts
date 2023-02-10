import { createTRPCRouter } from "./trpc";
import { exampleRouter, adhanRouter } from "@/server/api/routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  adhan: adhanRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
