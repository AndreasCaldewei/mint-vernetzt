import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import getArticle from "app/articles/queries/getArticle"
import deleteArticle from "app/articles/mutations/deleteArticle"
import ArticleLayout from "../../articles/layouts/ArticleLayout"
import Layout from "../../core/layouts/Layout"
import Button from "../../../components/atoms/Button"

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
          <a className={"cursor-pointer text-primary underline ml-4 pt-10 mb-7"}>
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
          {article.title}
        </h3>
        <p className={"whitespace-pre w-2/3 mb-10 pl-4 whitespace-normal whitespace-pre"}>
          {article.body}
        </p>
        <p>
          <Link href={Routes.ArticlesPage()}>
            <a className={"cursor-pointer text-primary underline ml-4 mt-4 mb-10"}>
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

          <Button
            type="button"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteArticleMutation({ id: article.id })
                router.push(Routes.ArticlesPage())
              }
            }}
            style={{ marginLeft: "0.5rem" }}
          >
            Löschen
          </Button>
        </div>
      </div>
    </>
  )
}

const ShowArticlePage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
