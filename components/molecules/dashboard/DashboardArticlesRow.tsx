import { BaseProps } from "../../interface"
import Slider from "../../atoms/Slider"
import Card from "../../atoms/Card"

export interface DashboardArticleCard {
  url?: string | undefined | null
  metadata?: any
  id: number
  title: string
  body: string
}

interface Props extends BaseProps {
  label: string
  cards: DashboardArticleCard[]
}

const DashboardCardRow = (props: Props) => {
  const { children, label, cards } = props

  return (
    <>
      <div className="mb-2">
        <h1 className="mt-16 mb-3 ml-6 text-primary m-auto text-6xl font-title">{label}</h1>
        <Slider>
          {cards.map((card, index) => (
            <Card
              key={index}
              url={card.url}
              id={card.id}
              title={card.title}
              body={card.body}
              type={"article"}
            ></Card>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default DashboardCardRow
