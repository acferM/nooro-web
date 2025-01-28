type GetTaskParams = {
  id: string
}

type GetTaskResponse = {
  id: string
  title: string
  color: string
  completed: boolean
}

export async function getTask({ id }: GetTaskParams): Promise<GetTaskResponse> {
  const response = await fetch(`http://localhost:3333/tasks/${id}`)

  const task = await response.json()

  return task
}
