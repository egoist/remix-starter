import { QueryClient } from "@tanstack/react-query"
import { createTRPCReact, httpLink } from "@trpc/react-query"
import type { AppRouter } from "~/server/trpc"

export const trpc = createTRPCReact<AppRouter>()

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Consider data to be stale after this time
        // Only stale data will be refetched
        staleTime: 1000 * 3, // 3 seconds
      },
    },
  })
}

const baseUrl = "/api/trpc"

export const createTrpcClient = () => {
  return trpc.createClient({
    links: [
      httpLink({
        url: baseUrl,
      }),
    ],
  })
}
