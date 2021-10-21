import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import getArticle from "app/articles/queries/getArticle"
import deleteArticle from "app/articles/mutations/deleteArticle"
import ArticleLayout from "../../articles/layouts/ArticleLayout"
import Layout from "../../core/layouts/Layout"
import Button from "../../../components/atoms/Button"
import Fallback from "../../../components/atoms/Fallback"

export const Article = () => {
  const router = useRouter()
  const articleId = useParam("articleId", "number")
  const [deleteArticleMutation] = useMutation(deleteArticle)
  const [article] = useQuery(getArticle, { id: articleId })

  return (
    <>
      <Head>
        <title>MINTFLIX | {article.title}</title>
      </Head>

      <p className={"mt-3"}>
        <Link href={Routes.ArticlesPage()}>
          <a
            className={"cursor-pointer text-primary underline ml-4 pt-10 mb-7 hover:text-secondary"}
          >
            Zurück zur Artikelübersicht
          </a>
        </Link>
      </p>
      <div>
        <h3
          className={
            "font-montserrat text-primary font-bold text-5xl bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10"
          }
        >
          {article.title} aus {article.projectId}
        </h3>
        <p className={"whitespace-pre w-2/3 mb-10 pl-4 whitespace-normal whitespace-pre"}>
          {article.body}
        </p>
        <p>
          <Link href={Routes.ArticlesPage()}>
            <a
              className={
                "cursor-pointer text-primary underline ml-4 mt-4 mb-10 hover:text-secondary"
              }
            >
              Weitere Artikel
            </a>
          </Link>
        </p>

        <div className={"ml-3 mt-3 mb-1 w-1/3"}>
          <Link href={Routes.EditArticlePage({ articleId: article.id })} passHref>
            <Button type={"button"}>
              <a>Bearbeiten</a>
            </Button>
          </Link>

          <button
            type="button"
            className="inline-grid max-w-[300px] flex justify-center py-2 px-4 bg-transparent hover:bg-danger text-danger font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteArticleMutation({ id: article.id })
                router.push(Routes.ArticlesPage())
              }
            }}
            style={{ marginLeft: "0.5rem" }}
          >
            Löschen
          </button>
        </div>
      </div>
    </>
  )
}

const ShowArticlePage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <Article />
      </Suspense>
    </div>
  )
}

ShowArticlePage.authenticate = true
ShowArticlePage.getLayout = (page) => (
  <Layout>
    <ArticleLayout>{page}</ArticleLayout>
  </Layout>
)

export default ShowArticlePage
