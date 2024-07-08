export function createContext({
  req,
  resHeaders,
}: {
  req: Request
  resHeaders: Headers
}) {
  return { req, resHeaders }
}

export type Context = Awaited<ReturnType<typeof createContext>>
