import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideos from "app/videos/queries/getVideos"

const ITEMS_PER_PAGE = 100

export const VideosList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ videos, hasMore }] = usePaginatedQuery(getVideos, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <Link href={Routes.ShowVideoPage({ videoId: video.id })}>
              <a>{video.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const VideosPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Videos</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewVideoPage()}>
            <a>Create Video</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <VideosList />
        </Suspense>
      </div>
    </>
  )
}

VideosPage.authenticate = true
VideosPage.getLayout = (page) => <Layout>{page}</Layout>

export default VideosPage
