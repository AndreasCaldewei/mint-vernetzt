interface Props {
  title: string
  body?: string
}

const BigCard = (props: Props) => {
  const { title, body } = props

  return (
    <>
      <div className={"cursor-pointer"}>
        <div className={"rounded bg-white shadow-md mt-6 p-0 mr-6 ml-6"}>
          <div>
            <iframe
              className="w-full h-[600px] rounded-tl rounded-tr"
              src="https://www.youtube.com/embed/BAcXr9O4UHo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* <img className="rounded w-full max-h-[300px]" src={"https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"}/>  */}
          <div className={"p-2"}>
            <h3 className={"font-montserrat text-primary font-bold text-2xl"}>{title}</h3>
            <p className={"font-montserrat line-clamp-3"}>{body}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BigCard
