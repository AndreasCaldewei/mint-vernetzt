import { AuthenticationError, Link, useMutation, Routes, Head } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import Button from "components/atoms/Button"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation, { isLoading }] = useMutation(login)

  return (
    <div>
      <Form
        className="space-y-6"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            props.onSuccess?.()
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Email und Passwort stimmen nicht überein." }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email Adresse"></LabeledTextField>

        <LabeledTextField name="password" label="Passwort" type="password"></LabeledTextField>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Eingeloggt bleiben
            </label>
          </div>

          <div className="text-sm">
            <Link href={Routes.SignupPage()}>
              <a className="font-medium text-primary hover:text-secondary">
                Noch nicht registriert?
              </a>
            </Link>
          </div>
        </div>

        <div>
          <Button type="submit" isLoading={isLoading}>
            Einloggen
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
