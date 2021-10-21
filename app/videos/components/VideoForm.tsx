import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import { Field } from "react-final-form"
import React, { useState } from "react"
import { useQuery } from "blitz"
import getProjects from "../../projects/queries/getProjects"
import { useCurrentUser } from "../../core/hooks/useCurrentUser"
export { FORM_ERROR } from "app/core/components/Form"

export function VideoForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const [value, setValue] = useState("**Hello world!!!**")
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write")
  const user = useCurrentUser()!

  const [{ projects }] = useQuery(getProjects, { where: { userId: user.id } })
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="url"
        label="Video Url"
        placeholder="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
      <LabeledTextField name="title" label="Titel" placeholder="Titel" />
      <LabeledTextField name="body" label="Text" placeholder="Text" />

      <Field name="favoriteColor" component="select">
        <option />
        {projects.map((project: any) => (
          <option value={project} key={project.id}>
            {project.name}
          </option>
        ))}
      </Field>
    </Form>
  )
}
