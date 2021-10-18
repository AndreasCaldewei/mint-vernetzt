import { BaseProps } from "../../interface"
import Slider from "../../atoms/Slider"
import Card from "../../atoms/Card"

export interface DashboardCard {
  imageUrl?: string
  metadata?: any
  title: string
  description: string
}

interface Props extends BaseProps {
  label: string
  cards: DashboardCard[]
}

const DashboardCardRow = (props: Props) => {
  const { children, label, cards } = props

  return (
    <>
      <div className="mb-2">
        <h1 className="mt-16 mb-3 ml-2 text-primary m-auto text-6xl font-title">{label}</h1>
        <Slider>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description}></Card>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default DashboardCardRow
