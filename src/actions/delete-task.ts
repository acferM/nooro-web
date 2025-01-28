type DeleteTaskParams = {
  id: string
}

export async function deleteTask({ id }: DeleteTaskParams): Promise<void> {
  await fetch(`http://localhost:3333/tasks/${id}`, {
    method: 'DELETE'
  })
}
