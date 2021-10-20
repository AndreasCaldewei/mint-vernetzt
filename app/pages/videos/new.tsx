import { Link, useRouter, useMutation, BlitzPage, Routes, Head } from "blitz"
import Layout from "app/core/layouts/Layout"
import createVideo from "app/videos/mutations/createVideo"
import { VideoForm, FORM_ERROR } from "app/videos/components/VideoForm"

const NewVideoPage: BlitzPage = () => {
  const router = useRouter()
  const [createVideoMutation] = useMutation(createVideo)

  return (
    <div>
      <Head>
        <title>MINTFLIX | Create Video</title>
      </Head>

      <h1>Create New Video</h1>

      <VideoForm
        submitText="Create Video"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateVideo}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const video = await createVideoMutation(values)
            router.push(Routes.ShowVideoPage({ videoId: video.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.VideosPage()}>
          <a>Videos</a>
        </Link>
      </p>
    </div>
  )
}

NewVideoPage.authenticate = true
NewVideoPage.getLayout = (page) => <Layout title={"Create New Video"}>{page}</Layout>

export default NewVideoPage
