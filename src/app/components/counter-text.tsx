import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type CounterTextProps = PropsWithChildren & {
  color: 'purple' | 'blue'
  count: number
  total?: number
}

export function CounterText({ color, count, total, children }: CounterTextProps) {
  const styles = cn({
    'text-[#4EA8DE]': color === 'blue',
    'text-[#8284FA]': color === 'purple',
  }, 'flex gap-2 items-center leading-2')

  return (
    <strong className={styles}>
      {children}

      <span className="px-2 py-[2px] text-[#D9D9D9] bg-[#333333] rounded-full text-xs leading-[14px]">{count}{total && ` de ${total}`}</span>
    </strong>
  )
}
