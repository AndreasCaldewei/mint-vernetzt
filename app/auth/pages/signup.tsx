import { useRouter, BlitzPage, Routes } from "blitz"
import { SignupForm } from "app/auth/components/SignupForm"
import AuthLayout from "../../core/layouts/AuthLayout"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return <SignupForm onSuccess={() => router.push(Routes.Home())} />
}

SignupPage.redirectAuthenticatedTo = "/"
SignupPage.getLayout = (page) => <AuthLayout label="Registrieren">{page}</AuthLayout>

export default SignupPage
