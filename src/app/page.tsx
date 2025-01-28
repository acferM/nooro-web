import { getTasks } from "@/actions/get-tasks";
import { CounterText } from "./components/counter-text";
import { CreateTaskButton } from "./components/create-task-button";
import { TaskList } from "./components/task-list";

export default async function Home() {
  const tasks = await getTasks()

  const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="flex flex-col gap-16 w-full px-[30%]">
      <CreateTaskButton />

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
