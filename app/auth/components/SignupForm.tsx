import { Head, Link, Routes, useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import Button from "../../../components/atoms/Button"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation, { isLoading }] = useMutation(signup)

  return (
    <div>
      <Form
        schema={Signup}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values)
            props.onSuccess?.()
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "Diese Email ist bereits vergeben." }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email Adresse"></LabeledTextField>

        <LabeledTextField name="password" label="Passwort" type="password"></LabeledTextField>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link href={Routes.LoginPage()}>
              <a className="font-medium text-primary hover:text-secondary">
                Du hast bereits ein Konto?
              </a>
            </Link>
          </div>
        </div>

        <div>
          <Button type="submit">Konto erstellen</Button>
        </div>
      </Form>
    </div>
  )
}

export default SignupForm
