import { createRouter } from "./context";
import { z } from "zod";

export const rssRouter = createRouter()
  .query("getRSS", {
    input: z
      .object({
        url: z.string().url(),
      }),
    async resolve({ input }) {
      const res = await fetch(input?.url);
      return {
        data: await res.text(),
      };
    },
  });