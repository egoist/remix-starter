import { z } from "zod"

export const env = z
  .object({
    POSTGRES_URL: z.string(),
  })
  .parse(process.env)
