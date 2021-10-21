import { Ctx } from "blitz"

export const useUser = (context: Ctx) => {
  const userId = context.session.userId as number

  return { userId }
}
