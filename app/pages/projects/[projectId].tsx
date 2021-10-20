import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProject from "app/projects/queries/getProject"
import deleteProject from "app/projects/mutations/deleteProject"
import ProjectLayout from "../../projects/layouts/ArticleLayout"
import Button from "../../../components/atoms/Button"

export const Project = () => {
  const router = useRouter()
  const projectId = useParam("projectId", "number")
  const [deleteProjectMutation] = useMutation(deleteProject)
  const [project] = useQuery(getProject, { id: projectId })

  return (
    <>
      <Head>
        <title>MINTFLIX | {project.title}</title>
      </Head>

      <p className={"mt-3"}>
        <Link href={Routes.ProjectsPage()}>
          <a className={"cursor-pointer text-primary underline ml-4 pt-10 mb-7"}>
            Zurück zur Projektübersicht
          </a>
        </Link>
      </p>

      <div>
        <h3
          className={
            "font-montserrat text-primary font-bold text-5xl bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10"
          }
        >
          {project.title}
        </h3>
        <p className={"whitespace-pre w-2/3 mb-10 pl-4 whitespace-normal whitespace-pre"}>
          {project.body}
        </p>
        <p>
          <Link href={Routes.ProjectsPage()}>
            <a className={"cursor-pointer text-primary underline ml-4 mt-4 mb-10"}>
              Weitere Projekte
            </a>
          </Link>
        </p>

        <div className={"ml-3 mt-3 mb-1 w-1/3"}>
          <Link href={Routes.EditProjectPage({ projectId: project.id })} passHref>
            <Button type={"button"}>
              <a>Bearbeiten</a>
            </Button>
          </Link>

          <Button
            type="button"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteProjectMutation({ id: project.id })
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

const ShowProjectPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Project />
      </Suspense>
    </div>
  )
}

ShowProjectPage.authenticate = true
ShowProjectPage.getLayout = (page) => (
  <Layout>
    <ProjectLayout>{page}</ProjectLayout>
  </Layout>
)

export default ShowProjectPage
