interface Props {
  imageUrl?: string
  title: string
  description: string
}

const Card = (props: Props) => {
  const { imageUrl } = props
  const { title } = props
  const { description } = props

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
              <p className="font-montserrat line-clamp-7">{description}</p>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="cursor-pointer">
          <div className="rounded bg-white shadow-md w-[500px] m-1 p-0 h-[416px]">
            <div className={"p-2"}>
              <h3 className="font-montserrat text-primary font-bold text-2xl line-clamp-1">
                {title}
              </h3>
              <p className="font-montserrat line-clamp-15">{description}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Card
