import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import LabeledTextField from "../../core/components/LabeledTextField"
import Form from "../../core/components/Form"
import AuthLayout from "../../core/layouts/AuthLayout"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <LoginForm
        onSuccess={() => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          router.push(next)
        }}
      />
    </>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <AuthLayout label="Sign in to your account">{page}</AuthLayout>

export default LoginPage
