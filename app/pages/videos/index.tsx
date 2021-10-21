import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideos from "app/videos/queries/getVideos"
import Sidebar from "../../../components/atoms/Sidebar"
import BigCard from "../../../components/atoms/BigCard"
import DashboardCardRow from "../../../components/molecules/dashboard/DashboardCardRow"

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
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className="ml-16">
          <BigCard
            title={"Der heiße Scheiß"}
            body={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            }
          ></BigCard>
          <DashboardCardRow label={"Videos"} cards={videos}></DashboardCardRow>
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
