import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { createContext } from "./context"
import { t } from "./utils"

export const appRouter = t.router({
  hello: t.procedure.query(() => "world"),
})

export type AppRouter = typeof appRouter

export const handler = (request: Request, endpoint = "/api/trpc") =>
  fetchRequestHandler({
    endpoint,
    req: request,
    router: appRouter,
    createContext,
  })

const createCaller = t.createCallerFactory(appRouter)
export const createTrpcServer = (req: Request, resHeaders = new Headers()) =>
  createCaller(() => createContext({ req, resHeaders }))
