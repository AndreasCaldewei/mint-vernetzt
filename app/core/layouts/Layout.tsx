import { ReactNode, Suspense } from "react"
import { Head } from "blitz"
import Navbar from "../../../components/atoms/Navbar"
import Fallback from "../../../components/atoms/Fallback"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "MINTFLIX"}</title>
        <Navbar></Navbar>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Suspense fallback={<Fallback />}>{children}</Suspense>
    </>
  )
}

export default Layout
