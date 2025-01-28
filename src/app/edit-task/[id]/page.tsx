import { getTask } from "@/actions/get-task";
import { NavigateBackButton } from "@/components/navigate-back-button";
import { TaskForm } from "@/components/task-form";

type EditTaskProps = {
  params: Promise<{
    id: string
  }>
}

export default async function EditTask({ params }: EditTaskProps) {
  const { id } = await params

  const task = await getTask({ id })

  return (
    <div className="w-full px-[30%] flex flex-col mt-20 gap-12">
      <NavigateBackButton />

      <TaskForm
        type='edit'
        defaultValues={task}
      />
    </div>
  )
}
