import { z } from "zod";

const SubscriptionValidator = z.object({
    id: z.number(),
    title: z.string(),
    link: z.string(),
    rssLink: z.string(),
    description: z.string(),
    imageURL: z.string(),
})

// To parse
// SubscriptionValidator.parse({ ... });

// extract the inferred type
type Subscription = z.infer<typeof SubscriptionValidator>

export default Subscription;