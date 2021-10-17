import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import Card from "../../components/atoms/Card"
import Slider from "../../components/atoms/Slider"
import Header from "../../components/atoms/Header"
import DashboardCardRow, {
  DashboardCard,
} from "../../components/molecules/dashboard/DashboardCardRow"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const dummyCards: DashboardCard[] = [
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
  { title: "Hello World" },
]

const Home: BlitzPage = () => {
  return (
    <>
      <div>
        <Header></Header>

        <div className="md:ml-12 ml-2">
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
          <DashboardCardRow label={"Neues"} cards={dummyCards}></DashboardCardRow>
        </div>
      </div>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
