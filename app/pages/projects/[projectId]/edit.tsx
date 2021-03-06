import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProject from "app/projects/queries/getProject"
import updateProject from "app/projects/mutations/updateProject"
import { ProjectForm, FORM_ERROR } from "app/projects/components/ProjectForm"
import ProjectLayout from "../../../projects/layouts/ProjectLayout"
import Fallback from "../../../../components/atoms/Fallback"

export const EditProject = () => {
  const router = useRouter()
  const projectId = useParam("projectId", "number")
  const [project, { setQueryData }] = useQuery(
    getProject,
    { id: projectId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateProjectMutation] = useMutation(updateProject)

  return (
    <>
      <Head>
        <title>MINTFLIX | Edit Project {project.title}</title>
      </Head>

      <div>
        <h3
          className={
            "font-montserrat text-primary font-bold text-5xl bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10"
          }
        >
          Projekt <q>{project.title}</q> bearbeiten
        </h3>

        <div className={"ml-4"}>
          <ProjectForm
            submitText="Projekt aktualisieren"
            // TODO use a zod schema for form validation
            //  - Tip: extract mutation's schema into a shared `validations.ts` file and
            //         then import and use it here
            // schema={UpdateProject}
            initialValues={project}
            onSubmit={async (values) => {
              try {
                const updated = await updateProjectMutation({
                  id: project.id,
                  ...values,
                })
                await setQueryData(updated)
                router.push(Routes.ShowProjectPage({ projectId: updated.id }))
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

const EditProjectPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
        <EditProject />
      </Suspense>
    </div>
  )
}

EditProjectPage.authenticate = { redirectTo: "/signin" }
EditProjectPage.getLayout = (page) => (
  <Layout>
    <ProjectLayout>{page}</ProjectLayout>
  </Layout>
)

export default EditProjectPage
