import { LoaderFunctionArgs } from "@remix-run/node"
import { handler } from "~/server/trpc"

export const loader = ({ request }: LoaderFunctionArgs) => handler(request)

export const action = loader
