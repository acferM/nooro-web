type Task = {
  id: string
  title: string
  color: string
  completed: string
}

type UpdateTaskParams = FormData

export async function updateTask(data: UpdateTaskParams) {
  const task = Object.fromEntries(data.entries()) as Task

  await fetch(`http://localhost:3333/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: task.title,
      color: task.color,
      completed: task.completed === 'true'
    })
  })
}
