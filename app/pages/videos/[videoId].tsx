import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getVideo from "app/videos/queries/getVideo"
import deleteVideo from "app/videos/mutations/deleteVideo"

export const Video = () => {
  const router = useRouter()
  const videoId = useParam("videoId", "number")
  const [deleteVideoMutation] = useMutation(deleteVideo)
  const [video] = useQuery(getVideo, { id: videoId })

  return (
    <>
      <Head>
        <title>Video {video.id}</title>
      </Head>

      <div>
        <h1>Video {video.id}</h1>
        <pre>{JSON.stringify(video, null, 2)}</pre>

        <Link href={Routes.EditVideoPage({ videoId: video.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteVideoMutation({ id: video.id })
              router.push(Routes.VideosPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowVideoPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.VideosPage()}>
          <a>Videos</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Video />
      </Suspense>
    </div>
  )
}

ShowVideoPage.authenticate = true
ShowVideoPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowVideoPage
