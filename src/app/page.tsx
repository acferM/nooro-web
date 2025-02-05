'use client'

import { getTasks } from "@/actions/get-tasks";
import { CounterText } from "./components/counter-text";
import { CreateTaskButton } from "./components/create-task-button";
import { TaskList } from "./components/task-list";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce'
import { searchTasks } from "@/actions/search-task";

type Task = {
  id: string
  title: string
  color: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await getTasks()

      setTasks(result)
    }

    fetchTasks()
  }, [])

  const debounced = useDebouncedCallback(async value => {
    const filtered = await searchTasks({ query: value })

    setTasks(filtered)
  }, 1000)

  const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="flex flex-col gap-16 w-full px-[30%]">
      <div className="flex flex-col gap-4">
        <CreateTaskButton />

        <Input placeholder="Search for a task" onChange={(e) => debounced(e.target.value)} />
      </div>

      <main>
        <header className="flex items-center w-full justify-between">
          <CounterText color="blue" count={tasks.length}>Tasks</CounterText>

          <CounterText color="purple" total={tasks.length} count={completedTasks.length}>Completed</CounterText>
        </header>

        <section className="mt-6 w-full border-t border-solid border-t-[#333333] rounded-md">
          <TaskList tasks={tasks} />
        </section>
      </main>
    </div>
  )
}
