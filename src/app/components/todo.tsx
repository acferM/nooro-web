'use client'

import { deleteTask } from "@/actions/delete-task"
import { updateTask } from "@/actions/update-task"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Check, Pencil, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { DeleteTodoModal } from "./delete-todo-modal"

type TodoProps = {
  task: {
    id: string
    title: string
    color: string
    completed: boolean
  }
}

const CheckboxButton = ({ task }: { task: TodoProps['task'] }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()

  const router = useRouter()

  const handleButtonClick = useCallback(async (completed: boolean) => {
    setIsLoading(true)

    const data = new FormData()

    Object.entries(task).forEach(([key, value]) => {
      data.append(key, String(value))
    })

    data.set('completed', String(completed))

    await updateTask(data)

    setIsLoading(false)

    toast({
      title: 'Task updated!',
      description: 'Task has been successfully updated.',
    })

    router.refresh()
  }, [router, task, toast])

  if (task.completed) {
    return (
      <Button
        className="h-6 min-w-6 bg-transparent border-[2px] border-[#5E60CE] bg-[#5E60CE] text-white rounded-full p-0 hover:bg-[#333480]"
        disabled={isLoading}
        onClick={() => handleButtonClick(false)}
      >
        <Check />
      </Button>
    )
  }

  return (
    <Button
      className="h-6 min-w-6 bg-transparent border-[2px] border-[#4EA8DE] rounded-full p-0 hover:bg-[#3c8cbd]"
      disabled={isLoading}
      onClick={() => handleButtonClick(true)}
    />
  )
}

export function Todo({ task }: TodoProps) {
  const router = useRouter()

  const { toast } = useToast()

  const handleDeleteTask = useCallback(async () => {
    await deleteTask({ id: task.id })

    router.refresh()

    toast({
      title: 'Task deleted!',
      description: 'Task has been successfully deleted.',
    })
  }, [router, task.id, toast])


  const textStyle = cn('text-[#F2F2F2] text-sm', {
    'line-through text-[#808080]': task.completed
  })

  return (
    <li className="w-full bg-[#262626] drop-shadow-todo border border-[#333333] rounded-md p-4 flex items-center justify-between gap-2">
      <div className="flex items-start gap-4">
        <CheckboxButton task={task} />

        <p className={textStyle}>
          {task.title}
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-[#0f0f0f] px-2"
          onClick={() => router.push(`/edit-task/${task.id}`)}
        >
          <Pencil />
        </Button>

        <DeleteTodoModal onConfirm={handleDeleteTask} />
      </div>
    </li>
  )
}
