import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetVideosInput
  extends Pick<Prisma.VideoFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetVideosInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: videos,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.video.count({ where }),
      query: (paginateArgs) => db.video.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      videos,
      nextPage,
      hasMore,
      count,
    }
  }
)
