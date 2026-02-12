import { z } from "zod";

export const insertProductSchema = z.object({
    name: z.string().min(3,'name must be al least 3 chars'),
    slug: z.string().min(3,'slug must be al least 3 chars'),
    category: z.string().min(3,'category must be al least 3 chars'),
    brand: z.string().min(3,'brand must be al least 3 chars'),
    description: z.string().min(3,'description must be al least 3 chars'),
    stock: z.coerce.number(),
    images: z
        .array(z.string())
        .min(1, 'include at least 1 image for the product'),
});
