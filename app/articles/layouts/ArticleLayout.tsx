import { BaseProps } from "../../../components/interface"
import Sidebar from "../../../components/atoms/Sidebar"
import { Head } from "@blitzjs/core/head"

interface Props extends BaseProps {
  title?: string
}

const ArticleLayout = (props: Props) => {
  const { title, children } = props

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className="ml-16 mb-20">
          <div className={"rounded bg-white shadow-md p-2 mt-14 mr-2"}>
            <h3 className={"font-montserrat text-primary font-bold text-2xl"}>{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleLayout
