import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideo from "app/videos/queries/getVideo"
import deleteVideo from "app/videos/mutations/deleteVideo"
import VideoLayout from "../../videos/layouts/VideoLayout"
import Button from "../../../components/atoms/Button"

export const Video = () => {
  const router = useRouter()
  const videoId = useParam("videoId", "number")
  const [deleteVideoMutation] = useMutation(deleteVideo)
  const [video] = useQuery(getVideo, { id: videoId })

  return (
    <>
      <Head>
        <title>MINTFLIX | Video {video.title}</title>
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
          {video.title}
        </h3>
        <p>
          <Link href={Routes.VideosPage()}>
            <a className={"cursor-pointer text-primary underline ml-4 mt-4 mb-10"}>
              Weitere Videos
            </a>
          </Link>
        </p>

        <div className={"ml-3 mt-3 mb-1 w-1/3"}>
          <Link href={Routes.EditVideoPage({ videoId: video.id })} passHref>
            <Button type={"button"}>
              <a>Bearbeiten</a>
            </Button>
          </Link>

          <Button
            type="button"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteVideoMutation({ id: video.id })
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

const ShowVideoPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Video />
      </Suspense>
    </div>
  )
}

ShowVideoPage.authenticate = true
ShowVideoPage.getLayout = (page) => (
  <Layout>
    <VideoLayout>{page}</VideoLayout>
  </Layout>
)

export default ShowVideoPage
