import { z } from "zod";

export const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  type: z.string(),
  gender: z.string(),
  image: z.string().url(),

  // optional fields
  origin: z
    .object({
      name: z.string(),
      url: z.string().url(),
    })
    .optional(),
  location: z
    .object({
      name: z.string(),
    })
    .optional(),
  episode: z.array(z.string()).optional(),
  url: z.string().url().optional(),
  created: z.string().optional(),
});



export const characterArraySchema = z.object({
  results: z.array(characterSchema),
});

export type Character = z.infer<typeof characterSchema>;
export type CharacterArray = z.infer<typeof characterArraySchema>;
