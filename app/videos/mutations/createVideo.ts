import { Ctx, resolver } from "blitz"
import db from "db"
import { z } from "zod"
import { useUser } from "../../../utils/useUset"

const CreateVideo = z.object({
  url: z.string(),
  title: z.string(),
  body: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateVideo),
  resolver.authorize(),
  async (input, ctx: Ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const { userId } = useUser(ctx)
    const data = {
      ...input,
      userId,
    }

    return await db.video.create({ data })
  }
)
