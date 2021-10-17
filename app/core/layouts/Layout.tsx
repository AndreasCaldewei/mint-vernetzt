import { ReactNode } from "react"
import { Head } from "blitz"
import Navbar from "../../../components/atoms/Navbar"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "mint-vernetzt"}</title>
        <Navbar></Navbar>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout
