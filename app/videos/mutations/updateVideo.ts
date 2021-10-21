import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateVideo = z.object({
  id: z.number(),
  url: z.string(),
  title: z.string(),
  projectId: z.number(),
})

export default resolver.pipe(
  resolver.zod(UpdateVideo),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    return await db.video.update({ where: { id }, data })
  }
)
