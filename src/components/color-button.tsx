import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ColorButtonProps = {
  color: string
  isSelected: boolean
  onClick: (color: string) => void
}

export function ColorButton({ color, isSelected, onClick }: ColorButtonProps) {
  const styles = cn({
    'border-[2px] border-white': isSelected
  }, `min-w-14 min-h-14 rounded-full bg-${color}`)

  return (
    <Button
      className={styles}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
      type="button"
    />
  )
}
