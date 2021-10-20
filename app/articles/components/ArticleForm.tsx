import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"
import "react-mde/lib/styles/css/react-mde-all.css"
import React, { useState } from "react"
import ReactMde from "react-mde"

export function ArticleForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const [value, setValue] = useState("**Hello world!!!**")
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write")

  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />

      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
    </Form>
  )
}
