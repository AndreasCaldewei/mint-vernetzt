import { forwardRef } from "react"
import { BaseProps } from "components/interface"

interface Props extends BaseProps {
  type: "button" | "submit" | "reset" | undefined
  isLoading?: boolean
  href?: string
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isLoading, type, href } = props

  return (
    <button
      ref={ref}
      type={type}
      className="inline-grid max-w-[300px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-primary3"
    >
      {isLoading && <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>}
      <a href={href}>{props.children}</a>
    </button>
  )
})

export default Button
