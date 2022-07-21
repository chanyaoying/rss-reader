import { z } from "zod";

const ItemValidaor = z.object({
  id: z.string().uuid(),
  title: z.string(),
  link: z.string(),
  description: z.string(),
  pubDate: z.string(),
  origin: z.string(),
})

// To parse
// ItemValidaor.parse({ ... });

// extract the inferred type
type Item = z.infer<typeof ItemValidaor>

export default Item;