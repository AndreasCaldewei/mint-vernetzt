import { Link, useRouter, useMutation, BlitzPage, Routes, Head } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProject from "app/projects/mutations/createProject"
import { ProjectForm, FORM_ERROR } from "app/projects/components/ProjectForm"
import ProjectLayout from "../../projects/layouts/ProjectLayout"

const NewProjectPage: BlitzPage = () => {
  const router = useRouter()
  const [createProjectMutation] = useMutation(createProject)

  return (
    <div>
      <Head>
        <title>MINTFLIX | Create Project</title>
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

      <h3
        className={
          "font-montserrat text-primary font-bold text-5xl bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10"
        }
      >
        Projekt erstellen
      </h3>

      <div className={"ml-4"}>
        <ProjectForm
          submitText="Projekt veröffentlichen"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={CreateProject}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const project = await createProjectMutation(values)
              router.push(Routes.ShowProjectPage({ projectId: project.id }))
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

NewProjectPage.authenticate = true
NewProjectPage.getLayout = (page) => (
  <Layout title={"MINTFLIX | Neues Projekt erstellen"}>
    <ProjectLayout>{page}</ProjectLayout>
  </Layout>
)

export default NewProjectPage
