import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { Ctx } from "blitz"
import { useUser } from "../../../utils/useUset"

const CreateArticle = z.object({
  name: z.string(),
  text: z.string(),
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
    const article = await db.article.create({ data })

    return article
  }
)
