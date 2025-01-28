type CreateTaskValues = {
  title: string
  color: string
}

type CreateTaskParams = FormData

export async function createTask(data: CreateTaskParams) {
  const task = Object.fromEntries(data.entries()) as CreateTaskValues

  await fetch('http://localhost:3333/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: task.title,
      color: task.color
    })
  })
}
