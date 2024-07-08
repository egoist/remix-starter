import { defineConfig } from "drizzle-kit"
import invariant from "~/server/invariant"

invariant(process.env.POSTGRES_URL, "POSTGRES_URL is required")

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
  out: "./migrations",
  schema: "app/server/db/schema.ts",
})
