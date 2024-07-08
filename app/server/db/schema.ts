import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { ulid } from "ulidx"

const defaultRandom = () => ulid().toLowerCase()
const defaultNow = () => new Date()

export const user = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(defaultRandom),
  createdAt: timestamp("createdAt", { precision: 3 })
    .$defaultFn(defaultNow)
    .notNull(),
  email: text("email").notNull().notNull(),
})
