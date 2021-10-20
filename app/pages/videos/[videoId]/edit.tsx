import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideo from "app/videos/queries/getVideo"
import updateVideo from "app/videos/mutations/updateVideo"
import { VideoForm, FORM_ERROR } from "app/videos/components/VideoForm"

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

      <div>
        <h1>Edit Video {video.id}</h1>
        <pre>{JSON.stringify(video, null, 2)}</pre>

        <VideoForm
          submitText="Update Video"
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
    </>
  )
}

const EditVideoPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditVideo />
      </Suspense>

      <p>
        <Link href={Routes.VideosPage()}>
          <a>Videos</a>
        </Link>
      </p>
    </div>
  )
}

EditVideoPage.authenticate = true
EditVideoPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditVideoPage
