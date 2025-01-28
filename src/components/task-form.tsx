'use client'

import { FormFieldContainer } from "@/components/form-field-container"
import { Input } from "@/components/ui/input"
import { ColorSelector } from "./color-selector"
import { Button } from "@/components/ui/button"
import { Check, Loader2, PlusCircle } from "lucide-react"
import { useCallback, useState } from "react"
import { updateTask } from "@/actions/update-task"
import { useRouter } from "next/navigation"
import { EditTaskInvisibleInputs } from "@/app/edit-task/[id]/components/edit-task-invisible-inputs"
import { createTask } from "@/actions/create-task"
import { useToast } from "@/hooks/use-toast"

type TaskFormProps = {
  type: 'edit' | 'create'
  defaultValues?: {
    id: string
    title: string
    color: string
    completed: boolean
  },
}

function SubmitButton({ type, isLoading }: { type: TaskFormProps['type']; isLoading: boolean }) {
  if (isLoading) {
    return (
      <Button
        type="submit"
        disabled
        className="text-[#F2F2F2] bg-[#1E6F9F] mt-6"
      >
        <Loader2 className="animate-spin" />
      </Button>
    )
  }

  if (type === 'edit') {
    return (
      <Button
        type="submit"
        className="text-[#F2F2F2] bg-[#1E6F9F] hover:bg-[#15557A] mt-6 font-bold"
      >
        Save

        <Check />
      </Button>

    )
  }

  return (
    <Button
      type="submit"
      className="text-[#F2F2F2] bg-[#1E6F9F] hover:bg-[#15557A] mt-6 font-bold"
    >
      Add Task

      <PlusCircle />
    </Button>

  )
}

export function TaskForm({ defaultValues, type }: TaskFormProps) {
  const router = useRouter()

  const { toast } = useToast()

  const [inputValue, setInputValue] = useState<string>(defaultValues?.title || '')
  const [selectedColor, setSelectedColor] = useState<string | undefined>(defaultValues?.color)

  const [isLoading, setIsLoading] = useState(false)

  const handleFormAction = useCallback(async (formData: FormData) => {
    setIsLoading(true)

    if (type === 'edit') {
      await updateTask(formData)

      setIsLoading(false)

      toast({
        title: 'Task updated!',
        description: 'Task has been successfully updated.',
      })

      router.replace('/')
      return
    }

    await createTask(formData)

    setIsLoading(false)

    toast({
      title: 'Task created!',
      description: 'Task has been successfully created.',
    })

    router.replace('/')
  }, [router, toast, type])

  return (
    <form className="flex flex-col gap-6" action={handleFormAction}>
      <FormFieldContainer title="Title" labelId="title">
        <EditTaskInvisibleInputs
          shouldRender={type === 'edit'}
          values={{
            id: defaultValues?.id,
            completed: defaultValues?.completed
          }}
        />

        <Input
          className="bg-[#262626] border border-[#333333]"
          name="title"
          placeholder="Ex. Brush your teeth"
          id="title"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
      </FormFieldContainer>

      <ColorSelector onColorChange={setSelectedColor} selectedColor={selectedColor} />

      <SubmitButton type={type} isLoading={isLoading} />
    </form>
  )
}
