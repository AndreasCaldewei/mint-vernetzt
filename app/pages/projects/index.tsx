import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProjects from "app/projects/queries/getProjects"
import Sidebar from "../../../components/atoms/Sidebar"
import BigCard from "../../../components/atoms/BigCard"
import DashboardProjectsRow from "../../../components/molecules/dashboard/DashboardProjectsRow"
import Fallback from "../../../components/atoms/Fallback"

const ITEMS_PER_PAGE = 100

export const ProjectsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ projects, hasMore }] = usePaginatedQuery(getProjects, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className="ml-16">
          <DashboardProjectsRow label={"Projekte"} cards={projects}></DashboardProjectsRow>
          <DashboardProjectsRow label={"Projekte"} cards={projects}></DashboardProjectsRow>
          <DashboardProjectsRow label={"Projekte"} cards={projects}></DashboardProjectsRow>
        </div>
      </div>
    </div>
  )
}

const ProjectsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>MINTFLIX | Projects</title>
      </Head>

      <div>
        <Suspense fallback={<Fallback />}>
          <ProjectsList />
        </Suspense>
      </div>
    </>
  )
}

ProjectsPage.authenticate = true
ProjectsPage.getLayout = (page) => <Layout>{page}</Layout>

export default ProjectsPage
