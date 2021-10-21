import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideo from "app/videos/queries/getVideo"
import updateVideo from "app/videos/mutations/updateVideo"
import { VideoForm, FORM_ERROR } from "app/videos/components/VideoForm"
import VideoLayout from "../../../videos/layouts/VideoLayout"

export const EditVideo = () => {
  const router = useRouter()
  const videoId = useParam("videoId", "number")
  const [video, { setQueryData }] = useQuery(
    getVideo,
    { id: videoId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateVideoMutation] = useMutation(updateVideo)

  return (
    <>
      <Head>
        <title>MINTFLIX | Edit Video {video.title}</title>
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
          Video <q>{video.title}</q> bearbeiten
        </h3>

        <div className={"ml-4"}>
          <VideoForm
            submitText="Video aktualisieren"
            // TODO use a zod schema for form validation
            //  - Tip: extract mutation's schema into a shared `validations.ts` file and
            //         then import and use it here
            // schema={UpdateVideo}
            initialValues={video}
            onSubmit={async (values) => {
              try {
                const updated = await updateVideoMutation({
                  id: video.id,
                  ...values,
                })
                await setQueryData(updated)
                router.push(Routes.ShowVideoPage({ videoId: updated.id }))
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

const EditVideoPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditVideo />
      </Suspense>
    </div>
  )
}

EditVideoPage.authenticate = true
EditVideoPage.getLayout = (page) => (
  <Layout>
    <VideoLayout>{page}</VideoLayout>
  </Layout>
)

export default EditVideoPage
