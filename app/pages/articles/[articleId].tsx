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
    <div>
      <h3 className={"font-montserrat text-primary font-bold text-2xl"}>{article.title}</h3>
      <p>{article.body}</p>

      <Link href={Routes.EditArticlePage({ articleId: article.id })}>
        <a>Bearbeiten</a>
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
  )
}

const ShowArticlePage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.ArticlesPage()}>
          <a>Weitere Artikel</a>
        </Link>
      </p>

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
