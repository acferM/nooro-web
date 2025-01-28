import { PropsWithChildren } from "react"

type FormFieldContainerProps = PropsWithChildren & {
  title: string
  labelId?: string
}

export function FormFieldContainer({ title, labelId, children }: FormFieldContainerProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[#4EA8DE] font-bold text-sm leading-4" htmlFor={labelId ?? ""}>{title}</label>

      {children}
    </div>
  )
}
