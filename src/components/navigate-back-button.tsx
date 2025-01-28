'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function NavigateBackButton() {
  const router = useRouter()

  const handleButtonClick = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Button variant="ghost" size="icon" onClick={handleButtonClick}>
      <ArrowLeft />
    </Button>
  )
}
