import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const posts = defineCollection({
  schema: z.object({
    titulo: z.string(),
    fecha: z.string(),
    autor: z.string().optional(),
    tags: z.string().optional()
  })
});