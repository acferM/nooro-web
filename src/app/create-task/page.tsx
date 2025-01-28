'use client'

import { NavigateBackButton } from "@/components/navigate-back-button";
import { TaskForm } from "@/components/task-form";

export default function CreateTask() {
  return (
    <div className="w-full px-[30%] flex flex-col mt-20 gap-12">
      <NavigateBackButton />

      <TaskForm
        type='create'
      />
    </div>
  )
}
