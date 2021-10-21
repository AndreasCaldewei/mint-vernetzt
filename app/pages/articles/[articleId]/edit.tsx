import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getArticle from "app/articles/queries/getArticle"
import updateArticle from "app/articles/mutations/updateArticle"
import { ArticleForm, FORM_ERROR } from "app/articles/components/ArticleForm"
import ArticleLayout from "../../../articles/layouts/ArticleLayout"
import Fallback from "../../../../components/atoms/Fallback"

export const EditArticle = () => {
  const router = useRouter()
  const articleId = useParam("articleId", "number")
  const [article, { setQueryData }] = useQuery(
    getArticle,
    { id: articleId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateArticleMutation] = useMutation(updateArticle)

  return (
    <>
      <Head>
        <title>MINTFLIX | Edit Article {article.title}</title>
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
          Artikel <q>{article.title}</q> bearbeiten
        </h3>

        <div className={"ml-4"}>
          <ArticleForm
            submitText="Artikel aktualisieren"
            // TODO use a zod schema for form validation
            //  - Tip: extract mutation's schema into a shared `validations.ts` file and
            //         then import and use it here
            // schema={UpdateArticle}
            initialValues={article}
            onSubmit={async (values) => {
              try {
                const updated = await updateArticleMutation({
                  id: article.id,
                  ...values,
                })
                await setQueryData(updated)
                router.push(Routes.ShowArticlePage({ articleId: updated.id }))
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </div>
      </div>
    </>
  )
}

const EditArticlePage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <EditArticle />
      </Suspense>
    </div>
  )
}

EditArticlePage.authenticate = true
EditArticlePage.getLayout = (page) => (
  <Layout>
    <ArticleLayout>{page}</ArticleLayout>
  </Layout>
)

export default EditArticlePage
