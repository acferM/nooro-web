'use client'

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function CreateTaskButton() {
  const router = useRouter()

  const handleButtonClick = useCallback(() => {
    router.push('/create-task')
  }, [router])

  return (
    <Button
      className="w-full flex gap-2 text-[#F2F2F2] font-bold bg-[#1E6F9F] h-14 mt-[-1.75rem] hover:bg-[#15557A]"
      onClick={handleButtonClick}
    >
      Create Task
      <CirclePlus />
    </Button>
  )
}
