import { BaseProps } from "../../../components/interface"
import Sidebar from "../../../components/atoms/Sidebar"
import { Head } from "@blitzjs/core/head"
import { Link, Routes } from "blitz"

interface Props extends BaseProps {
  title?: string
}

const ArticleLayout = (props: Props) => {
  const { title, children } = props

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className={"ml-[3.5rem]"}>
          <div className="mb-4 mx-[1rem]">
            <p className={"mt-4"}>
              <Link href={Routes.ArticlesPage()}>
                <a
                  className={
                    "cursor-pointer text-primary underline pt-10 mb-4 hover:text-secondary"
                  }
                >
                  Zurück zur Artikelübersicht
                </a>
              </Link>
            </p>
            <div className={"rounded bg-white shadow-md p-2 mt-4"}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleLayout
