import { Link, Routes } from "blitz"

interface Props {
  type: "article" | "video" | "project"
  url?: string | undefined | null
  id: number
  title: string
  body?: string
}

const Card = (props: Props) => {
  let { url, id, title, body, type } = props

  if (url) {
    return (
      <>
        <div className="cursor-pointer">
          <div className="rounded bg-white shadow-md w-[500px] h-[320px] ml-6 p-0">
            <div>
              {!url.includes("https://www.youtube.com/embed/") && (
                <img className={"rounded-tl rounded-tr h-[200px] w-full object-cover"} src={url} />
              )}
              {url.includes("https://www.youtube.com/embed/") && (
                <div className={"-ml-2 -mr-2 -mt-2"}>
                  <iframe
                    className={
                      "rounded-tl rounded-tr h-[200px] w-[500px] ml-2 object-cover rounded-tl rounded-tr"
                    }
                    src={url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className={"p-2"}>
              <h3 className="cursor-pointer font-montserrat text-primary font-bold text-2xl line-clamp-1 underline hover:text-secondary">
                {type == "article" && (
                  <Link href={Routes.ShowArticlePage({ articleId: id })}>
                    <a>{title}</a>
                  </Link>
                )}
                {type == "video" && (
                  <Link href={Routes.ShowVideoPage({ videoId: id })}>
                    <a>{title}</a>
                  </Link>
                )}
                {type == "project" && (
                  <Link href={Routes.ShowProjectPage({ projectId: id })}>
                    <a>{title}</a>
                  </Link>
                )}
              </h3>
              <p className="font-montserrat line-clamp-3">{body}</p>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <div className="rounded bg-white shadow-md w-[500px] ml-6 p-0 h-[320px]">
            <div className={"p-2"}>
              <h3 className="cursor-pointer font-montserrat text-primary font-bold text-2xl line-clamp-1 underline hover:text-secondary">
                {type == "article" && (
                  <Link href={Routes.ShowArticlePage({ articleId: id })}>
                    <a>{title}</a>
                  </Link>
                )}
                {type == "video" && (
                  <Link href={Routes.ShowVideoPage({ videoId: id })}>
                    <a>{title}</a>
                  </Link>
                )}
                {type == "project" && (
                  <Link href={Routes.ShowProjectPage({ projectId: id })}>
                    <a>{title}</a>
                  </Link>
                )}
              </h3>
              <p className="font-montserrat line-clamp-11">{body}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Card
