type GetTasksResponse = Promise<{
  id: string
  title: string
  color: string
  completed: boolean
}[]>

export async function getTasks(): GetTasksResponse {
  const response = await fetch('http://localhost:3333/tasks');
  const data = await response.json();

  return data;
}
