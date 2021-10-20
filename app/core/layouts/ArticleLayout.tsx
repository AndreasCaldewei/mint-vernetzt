import { BaseProps } from "../../../components/interface"
import Navbar from "../../../components/atoms/Navbar"
import Sidebar from "../../../components/atoms/Sidebar"
import BigCard from "../../../components/atoms/BigCard"
import DashboardCardRow from "../../../components/molecules/dashboard/DashboardCardRow"

interface Props extends BaseProps {
  title: string
}

const ArticleLayout = (props: Props) => {
  const { title, children } = props

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className="ml-16">
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
