import { BaseProps } from "../../interface"
import Slider from "../../atoms/Slider"
import Card from "../../atoms/Card"

export interface DashboardCard {
  imageUrl?: string
  metadata?: any
  title: string
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
        <h1 className="ml-1 text-xl font-bold">{label}</h1>
        <Slider>
          {cards.map((card, index) => (
            <Card key={index} title={card.title}></Card>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default DashboardCardRow
