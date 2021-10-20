import { Link, Routes } from "blitz"

interface Props {
  imageUrl?: string
  id: number
  title: string
  body?: string
}

const Card = (props: Props) => {
  const { imageUrl, id, title, body } = props

  if (imageUrl) {
    return (
      <>
        <div className="cursor-pointer">
          <div className="rounded bg-white shadow-md w-[500px] m-1 p-0">
            <div>
              <img
                className={"rounded-tl rounded-tr h-[200px] w-full object-cover"}
                src={imageUrl}
              />
            </div>
            <div className={"p-2"}>
              <h3 className="font-montserrat text-primary font-bold text-2xl line-clamp-1">
                {title}
              </h3>
              <p className="font-montserrat line-clamp-7">{body}</p>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <div className="rounded bg-white shadow-md w-[500px] m-1 p-0 h-[416px]">
            <div className={"p-2"}>
              <h3 className="cursor-pointer font-montserrat text-primary font-bold text-2xl line-clamp-1 underline hover:text-primary2">
                <Link href={Routes.ShowArticlePage({ articleId: id })}>
                  <a>{title}</a>
                </Link>
              </h3>
              <p className="font-montserrat line-clamp-15">{body}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Card
