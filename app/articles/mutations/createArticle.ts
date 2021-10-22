import { Ctx, resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { useUser } from "../../../utils/useUset"

const CreateArticle = z.object({
  title: z.string(),
  body: z.string(),
  url: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(CreateArticle),
  resolver.authorize(),
  async (input, ctx: Ctx) => {
    const { userId } = useUser(ctx)

    const data = {
      ...input,
      userId,
    }
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    return await db.article.create({ data })
  }
)
