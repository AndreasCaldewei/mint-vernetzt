interface Props {
  title: string
}

const Card = (props: Props) => {
  const { title } = props

  return (
    <>
      <div className="  cursor-pointer  ">
        <div className="rounded bg-white shadow-md w-[220px] h-[120px] m-1 p-2	">
          <div>{title}</div>
        </div>
      </div>
    </>
  )
}

export default Card
