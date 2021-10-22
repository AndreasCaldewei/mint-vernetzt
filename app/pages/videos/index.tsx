import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideos from "app/videos/queries/getVideos"
import Sidebar from "../../../components/atoms/Sidebar"
import BigCard from "../../../components/atoms/BigCard"
import DashboardVideosRow from "../../../components/molecules/dashboard/DashboardVideosRow"
import Fallback from "../../../components/atoms/Fallback"

export const VideosList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ videos, hasMore }] = usePaginatedQuery(getVideos, {
    orderBy: { id: "asc" },
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className="ml-14">
          <DashboardVideosRow label={"Videos"} cards={videos}></DashboardVideosRow>
          <DashboardVideosRow label={"Videos"} cards={videos}></DashboardVideosRow>
          <DashboardVideosRow label={"Videos"} cards={videos}></DashboardVideosRow>
        </div>
      </div>
    </div>
  )
}

const VideosPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>MINTFLIX | Videos</title>
      </Head>

      <div>
        <Suspense fallback={<Fallback />}>
          <VideosList />
        </Suspense>
      </div>
    </>
  )
}

VideosPage.authenticate = { redirectTo: "/signin" }
VideosPage.getLayout = (page) => <Layout>{page}</Layout>

export default VideosPage
