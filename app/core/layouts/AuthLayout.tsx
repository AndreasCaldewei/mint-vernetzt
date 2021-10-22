import { BaseProps } from "../../../components/interface"
import Navbar from "../../../components/atoms/Navbar"

interface Props extends BaseProps {
  label: string
}

const AuthLayout = (props: Props) => {
  const { label, children } = props

  return (
    <>
      <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="flex justify-center text-8xl text-primary font-title">MINTFLIX</h1>
        </div>

        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 pt-7">
            <h2 className="mb-7 text-center text-3xl font-extrabold text-gray-900">{label}</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthLayout
