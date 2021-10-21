import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateVideo = z.object({
  id: z.number(),
  title: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateVideo),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const video = await db.video.update({ where: { id }, data })

    return video
  }
)
