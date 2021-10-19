import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteVideo = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteVideo), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const video = await db.video.deleteMany({ where: { id } })

  return video
})
