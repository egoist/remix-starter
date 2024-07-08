import { LoaderFunction } from "@remix-run/node"
import { handler } from "~/server/trpc"

export const loader: LoaderFunction = ({ request }) => handler(request)

export const action = loader
