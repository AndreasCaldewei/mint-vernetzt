import { Link, useRouter, useMutation, BlitzPage, Routes, Head } from "blitz"
import Layout from "app/core/layouts/Layout"
import createArticle from "app/articles/mutations/createArticle"
import { ArticleForm, FORM_ERROR } from "app/articles/components/ArticleForm"
import ArticleLayout from "../../articles/layouts/ArticleLayout"

const NewArticlePage: BlitzPage = () => {
  const router = useRouter()
  const [createArticleMutation] = useMutation(createArticle)

  return (
    <div>
      <Head>
        <title>MINTFLIX | Artikel schreiben</title>
      </Head>

      <h3
        className={
          "font-montserrat text-primary font-bold text-5xl bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10"
        }
      >
        Artikel schreiben
      </h3>

      <div className={"ml-4"}>
        <ArticleForm
          submitText="Artikel veröffentlichen"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={CreateArticle}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const article = await createArticleMutation(values)
              router.push(Routes.ShowArticlePage({ articleId: article.id }))
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
  )
}

NewArticlePage.authenticate = { redirectTo: "/signin" }

NewArticlePage.getLayout = (page) => (
  <Layout title={"MINTFLIX | Neuen Artikle schreiben"}>
    <ArticleLayout>{page}</ArticleLayout>
  </Layout>
)

export default NewArticlePage
