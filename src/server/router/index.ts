// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

// import { exampleRouter } from "./example";
import { rssRouter } from "./RSS";

export const appRouter = createRouter()
  .transformer(superjson)
  // .merge("example.", exampleRouter)
  .merge("rss.", rssRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
