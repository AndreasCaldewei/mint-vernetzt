import { Link, useRouter, useMutation, BlitzPage, Routes, Head } from "blitz"
import Layout from "app/core/layouts/Layout"
import createVideo from "app/videos/mutations/createVideo"
import { VideoForm, FORM_ERROR } from "app/videos/components/VideoForm"
import VideoLayout from "../../videos/layouts/VideoLayout"

const NewVideoPage: BlitzPage = () => {
  const router = useRouter()
  const [createVideoMutation] = useMutation(createVideo)

  return (
    <div>
      <Head>
        <title>MINTFLIX | Create Video</title>
      </Head>

      <p className={"mt-3"}>
        <Link href={Routes.VideosPage()}>
          <a
            className={"cursor-pointer text-primary underline ml-4 pt-10 mb-7 hover:text-secondary"}
          >
            Zurück zur Videoübersicht
          </a>
        </Link>
      </p>

      <h3
        className={
          "font-montserrat text-primary font-bold text-5xl bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10"
        }
      >
        Video erstellen
      </h3>

      <div className={"ml-4"}>
        <VideoForm
          submitText="Video veröffentlichen"
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
      </div>
    </div>
  )
}

NewVideoPage.authenticate = true
NewVideoPage.getLayout = (page) => (
  <Layout title={"MINTFLIX | Neues Video erstellen"}>
    <VideoLayout>{page}</VideoLayout>
  </Layout>
)

export default NewVideoPage
