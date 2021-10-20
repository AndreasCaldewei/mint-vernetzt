import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getArticles from "app/articles/queries/getArticles"
import ArticleLayout from "../../articles/layouts/ArticleLayout"

const ITEMS_PER_PAGE = 100

export const ArticlesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ articles, hasMore }] = usePaginatedQuery(getArticles, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <h3 className={"font-montserrat text-primary font-bold text-2xl"}>Artikel</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={Routes.ShowArticlePage({ articleId: article.id })}>
              <a>{article.title}</a>
            </Link>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Vorherige Seite
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Nächste Seite
      </button>
    </div>
  )
}

const ArticlesPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewArticlePage()}>
            <a>Artikel schreiben</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ArticlesList />
        </Suspense>
      </div>
    </>
  )
}

ArticlesPage.authenticate = true
ArticlesPage.getLayout = (page) => (
  <Layout>
    <ArticleLayout>{page}</ArticleLayout>
  </Layout>
)

export default ArticlesPage
