import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { trpc } from "~/lib/trpc"
import invariant from "~/server/invariant"
import { createTrpcServer } from "~/server/trpc"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

// Fetch data in the server loader
// and pass fetched data to the client query as initialData
// Remove it if you don't need to fetch data on the server
export const loader = async (ctx: LoaderFunctionArgs) => {
  invariant(ctx.response)

  const trpcServer = createTrpcServer(ctx.request, ctx.response.headers)
  const message = await trpcServer.hello()
  return {
    message,
  }
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const messageQuery = trpc.hello.useQuery(undefined, {
    initialData: data.message,
  })

  return (
    <div className="grid h-dvh place-items-center text-3xl">
      <div>Hello {messageQuery.data}</div>
    </div>
  )
}
