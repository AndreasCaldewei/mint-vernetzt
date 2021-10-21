import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getArticles from "app/articles/queries/getArticles"
import Sidebar from "../../../components/atoms/Sidebar"
import BigCard from "../../../components/atoms/BigCard"
import DashboardCardRow from "../../../components/molecules/dashboard/DashboardCardRow"

const ITEMS_PER_PAGE = 100

export const ArticlesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ articles, hasMore }] = usePaginatedQuery(getArticles, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

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
          <DashboardCardRow label={"Artikel"} cards={articles}></DashboardCardRow>
        </div>
      </div>
    </div>
  )
}

const ArticlesPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Artikel</title>
      </Head>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ArticlesList />
        </Suspense>
      </div>
    </>
  )
}

ArticlesPage.authenticate = true
ArticlesPage.getLayout = (page) => <Layout>{page}</Layout>

export default ArticlesPage
