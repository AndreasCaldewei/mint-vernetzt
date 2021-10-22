import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getArticles from "app/articles/queries/getArticles"
import Sidebar from "../../../components/atoms/Sidebar"
import BigCard from "../../../components/atoms/BigCard"
import DashboardArticlesRow from "../../../components/molecules/dashboard/DashboardArticlesRow"
import Fallback from "../../../components/atoms/Fallback"

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
        <div className="ml-14">
          <DashboardArticlesRow label={"Artikel"} cards={articles}></DashboardArticlesRow>
          <DashboardArticlesRow label={"Artikel"} cards={articles}></DashboardArticlesRow>
          <DashboardArticlesRow label={"Artikel"} cards={articles}></DashboardArticlesRow>
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
        <Suspense fallback={<Fallback />}>
          <ArticlesList />
        </Suspense>
      </div>
    </>
  )
}

ArticlesPage.authenticate = { redirectTo: "/signin" }
ArticlesPage.getLayout = (page) => <Layout>{page}</Layout>

export default ArticlesPage
