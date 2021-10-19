import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetVideo = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetVideo), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const video = await db.video.findFirst({ where: { id } })

  if (!video) throw new NotFoundError()

  return video
})
