import { useRouter, BlitzPage } from "blitz"
import { LoginForm } from "app/auth/components/LoginForm"
import AuthLayout from "../../core/layouts/AuthLayout"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <LoginForm
      onSuccess={() => {
        const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
        router.push(next)
      }}
    />
  )
}

LoginPage.redirectAuthenticatedTo = "/"
LoginPage.getLayout = (page) => <AuthLayout label="Anmelden">{page}</AuthLayout>

export default LoginPage
