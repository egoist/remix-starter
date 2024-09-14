import { unstable_defineLoader as defineLoader } from "@remix-run/node"
import { handler } from "~/server/trpc"

export const loader = defineLoader(({ request }) => handler(request))

export const action = loader
