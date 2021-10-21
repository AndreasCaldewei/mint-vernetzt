import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideo from "app/videos/queries/getVideo"
import deleteVideo from "app/videos/mutations/deleteVideo"
import VideoLayout from "../../videos/layouts/VideoLayout"
import Button from "../../../components/atoms/Button"
import Fallback from "../../../components/atoms/Fallback"

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

      <div>
        <div className={"-ml-2 -mr-2 -mt-2"}>
          <iframe
            className={"w-full h-[600px] rounded-tl rounded-tr"}
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className={"mt-4"}>
          <Link href={Routes.VideosPage()}>
            <a
              className={
                "cursor-pointer text-primary underline ml-4 pt-10 mb-7 hover:text-secondary"
              }
            >
              Zurück zur Videoübersicht
            </a>
          </Link>
        </p>

        <h3
          className={
            "font-montserrat text-primary font-bold text-5xl w-1/3 bg-primary5 -mx-2 mb-5 mt-5 py-4 pl-10 rounded-tr-full rounded-br-full"
          }
        >
          {video.title} aus {video.projectId}
        </h3>
        <p
          className={
            "whitespace-pre mb-10 pl-4 w-1/5 pr-1 line-clamp-1 whitespace-normal whitespace-pre bg-successlight text-success -mx-2 pl-6 rounded-tr-full rounded-br-full"
          }
        >
          #Video #HardCoded #NotDynamic
        </p>
        <p className={"whitespace-pre w-2/3 mb-10 pl-4 whitespace-normal whitespace-pre"}>
          {video.body}
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
          <Link href={Routes.VideosPage()}>
            <a
              className={
                "cursor-pointer text-primary underline ml-4 mt-4 mb-10 hover:text-secondary"
              }
            >
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

          <button
            type="button"
            className="inline-grid max-w-[300px] flex justify-center py-2 px-4 bg-transparent hover:bg-danger text-danger font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            onClick={async () => {
              if (window.confirm("This will be deleted")) {
                await deleteVideoMutation({ id: video.id })
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

const ShowVideoPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<Fallback />}>
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
