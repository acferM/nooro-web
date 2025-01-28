type EditTaskInvisibleInputsProps = {
  shouldRender: boolean
  values: {
    id?: string
    completed?: boolean
  }

}

export function EditTaskInvisibleInputs({ shouldRender, values }: EditTaskInvisibleInputsProps) {
  if (!shouldRender) {
    return null
  }

  return (
    <>
      <input type="hidden" value={values.id} name="id" />
      <input type="hidden" value={String(values.completed)} name="completed" />
    </>
  )

}
