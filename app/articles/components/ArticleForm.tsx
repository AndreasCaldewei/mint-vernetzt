import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import LabeledTextarea from "../../core/components/LabeledTextarea"
export { FORM_ERROR } from "app/core/components/Form"

export function ArticleForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Titel" placeholder="Titel" />
      <LabeledTextarea name="body" label="Inhalt" placeholder="Inhalt" rows={10} />
    </Form>
  )
}
