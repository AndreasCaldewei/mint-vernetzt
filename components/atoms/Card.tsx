interface Props {
  title: string
  description: string
}

const Card = (props: Props) => {
  const { title } = props
  const { description } = props

  return (
    <>
      <div className="cursor-pointer">
        <div className="rounded bg-white shadow-md w-[500px] m-1 p-2">
          <h3 className="font-montserrat text-primary font-bold text-2xl">{title}</h3>
          <p className="font-montserrat line-clamp-7">{description}</p>
        </div>
      </div>
    </>
  )
}

export default Card
