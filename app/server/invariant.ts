export class InvariantError extends Error {}

export default function invariant(
  condition: any,
  message?: string | (() => string),
): asserts condition {
  if (condition) {
    return
  }

  const provided = typeof message === "function" ? message() : message
  const value = provided ?? "Invariant failed"

  throw new InvariantError(value)
}
