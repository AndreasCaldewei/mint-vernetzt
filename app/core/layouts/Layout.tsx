import { ReactNode, Suspense } from "react"
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

      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </>
  )
}

export default Layout
