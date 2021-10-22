import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProject from "app/projects/queries/getProject"
import deleteProject from "app/projects/mutations/deleteProject"
import ProjectLayout from "../../projects/layouts/ProjectLayout"
import Button from "../../../components/atoms/Button"
import Fallback from "../../../components/atoms/Fallback"

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
          <a
            className={"cursor-pointer text-primary underline ml-4 pt-10 mb-7 hover:text-secondary"}
          >
            Zurück zur Projektübersicht
          </a>
        </Link>
      </p>

      <div>
        <h3
          className={
            "font-montserrat text-primary font-bold text-5xl w-1/3 bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10 rounded-tr-full rounded-br-full"
          }
        >
          {project.title}
        </h3>
        <p
          className={
            "whitespace-pre mb-10 pl-4 w-1/5 pr-1 line-clamp-1 whitespace-normal whitespace-pre bg-successlight text-success -mx-2 pl-6 rounded-tr-full rounded-br-full"
          }
        >
          #Projekt #HardCoded #NotDynamic
        </p>
        <p className={"whitespace-pre w-2/3 mb-10 pl-4 whitespace-normal whitespace-pre"}>
          {project.body}
        </p>
        <h3
          className={
            "font-montserrat text-secondary font-bold text-5xl w-2/3 bg-secondarylight -mx-2 mb-4 mt-4 py-4 pl-10 rounded-tr-full rounded-br-full"
          }
        >
          Autor
          <p className={"whitespace-pre w-5/6 mb-4 whitespace-normal whitespace-pre text-base"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </h3>
        <p>
          <Link href={Routes.ProjectsPage()}>
            <a
              className={
                "cursor-pointer text-primary underline ml-4 mt-4 mb-10 hover:text-secondary"
              }
            >
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

          <button
            type="button"
            className="inline-grid max-w-[300px] flex justify-center py-2 px-4 bg-transparent hover:bg-danger text-danger font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteProjectMutation({ id: project.id })
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

const ShowProjectPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
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
