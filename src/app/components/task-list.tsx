import { EmptyState } from "./empty-state"
import { Todo } from "./todo"

type TaskListProps = {
  tasks: {
    id: string
    title: string
    color: string
    completed: boolean
  }[]
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyState />
  }

  return (
    <ul className="w-full mt-6 flex flex-col gap-3">
      {tasks.map(task => (<Todo key={task.id} task={task} />))}
    </ul>
  )
}
