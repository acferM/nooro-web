
type SearchTasksResponse = Promise<{
  id: string
  title: string
  color: string
  completed: boolean
}[]>

type SearchTaskParams = {
  query: string
}

export async function searchTasks({ query }: SearchTaskParams): SearchTasksResponse {
  const response = await fetch(`http://localhost:3333/tasks/search?query=${query}`);
  const data = await response.json();

  return data;
}
