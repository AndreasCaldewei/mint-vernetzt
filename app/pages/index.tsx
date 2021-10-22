import { BlitzPage, usePaginatedQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import BigCard from "../../components/atoms/BigCard"
import Sidebar from "../../components/atoms/Sidebar"
import getArticles from "../articles/queries/getArticles"
import DashboardArticlesRow, {
  DashboardArticleCard,
} from "../../components/molecules/dashboard/DashboardArticlesRow"
import getVideos from "../videos/queries/getVideos"
import DashboardVideosRow from "../../components/molecules/dashboard/DashboardVideosRow"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  const [{ articles }] = usePaginatedQuery(getArticles, {
    orderBy: { id: "asc" },
  })
  const [{ videos }] = usePaginatedQuery(getVideos, {
    orderBy: { id: "asc" },
  })

  return (
    <div>
      <Sidebar></Sidebar>
      <div className={"w-full"}>
        <div className="ml-14">
          <BigCard
            title={"Was ist MINTvernetzt überhaupt?"}
            body={
              "MINTvernetzt ist die Service- und Anlaufstelle für die Community der MINT-Akteur:innen in Deutschland.\n" +
              "\n" +
              "Diese werden durch Vernetzungsräume, Transferangebote und Innovationsimpulse unterstützt, innovative und nachhaltige MINT-Bildungsangebote zu machen, die noch breitere und diversere Zielgruppen ansprechen. Hierzu zählen insbesondere Mädchen und junge Frauen. \n" +
              "\n" +
              "MINTvernetzt wird vom Bundesministerium für Bildung und Forschung (BMBF) gefördert und von Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, dem Nationalen MINT Forum e.V., der Universität Regensburg und dem Stifterverband gemeinsam umgesetzt. "
            }
          ></BigCard>
          <DashboardVideosRow label={"Videos"} cards={videos}></DashboardVideosRow>
          <DashboardArticlesRow label={"Artikel"} cards={articles}></DashboardArticlesRow>
        </div>
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
