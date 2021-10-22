import { BaseProps } from "../../interface"
import Slider from "../../atoms/Slider"
import Card from "../../atoms/Card"

export interface DashboardVideoCard {
  url?: string
  metadata?: any
  id: number
  title: string
  body?: string
}

interface Props extends BaseProps {
  label: string
  cards: DashboardVideoCard[]
}

const DashboardCardRow = (props: Props) => {
  const { children, label, cards } = props

  return (
    <>
      <div className="mb-2">
        <h1 className="mt-16 mb-4 ml-6 text-primary m-auto text-6xl font-title">{label}</h1>
        <Slider>
          {cards.map((card, index) => (
            <Card
              key={index}
              url={card.url}
              id={card.id}
              title={card.title}
              type={"video"}
              body={card.body}
            ></Card>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default DashboardCardRow
