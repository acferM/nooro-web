import { FormFieldContainer } from "@/components/form-field-container";
import { ColorButton } from "./color-button";

type ColorSelectorProps = {
  selectedColor: string | undefined
  onColorChange: (color: string) => void
}

const COLORS = [
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#A2845E"
]

export function ColorSelector({ onColorChange, selectedColor }: ColorSelectorProps) {
  return (
    <>
      <input type="hidden" name="color" value={selectedColor} readOnly />

      <FormFieldContainer title="Color">
        <div className="flex flex-wrap gap-4">
          {COLORS.map(color => (
            <ColorButton
              key={color}
              color={color}
              onClick={onColorChange}
              isSelected={selectedColor === color}
            />
          ))}
        </div>
      </FormFieldContainer>
    </>
  )
}
