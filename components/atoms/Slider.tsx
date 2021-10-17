import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import React from "react"
import { BaseProps } from "../interface"

interface Props extends BaseProps {}

const Slider = (props: Props) => {
  const { children } = props

  return (
    <>
      <ScrollMenu>{children ?? ([] as any)}</ScrollMenu>
    </>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </button>
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </button>
  )
}

export default Slider
