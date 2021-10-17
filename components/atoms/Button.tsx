import { forwardRef } from "react"
import { BaseProps } from "../interface"

interface Props extends BaseProps {
  type: "button" | "submit" | "reset" | undefined
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isLoading, type } = props

  return (
    <button
      ref={ref}
      type={type}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {isLoading && <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>}

      {props.children}
    </button>
  )
})

export default Button
