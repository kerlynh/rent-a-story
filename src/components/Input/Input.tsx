import { ChangeEvent } from "react";
import * as MuiIcons from "@mui/icons-material";

interface InputProps {
  label?: string;
  icon?: keyof typeof MuiIcons;
  iconPosition?: "left" | "right" | "both";
  value: string;
  name?: string;
  type?: string;
  onChange: (v: string) => void;
  onClick?: (v: any) => void;
}

export function Input({
  label,
  icon,
  iconPosition,
  value,
  name,
  type = "text",
  onChange,
  onClick,
}: InputProps) {
  const IconElement = icon ? MuiIcons[icon] : null;
  const IconElementClick: any =
    iconPosition === "both" ? MuiIcons.Close : IconElement;
  const isBoth = iconPosition === "both";

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="w-full h-auto py-2 px-3 rounded-lg border border-gray-400 flex items-center gap-2">
      {(iconPosition === "left" || isBoth) && IconElement && (
        <IconElement
          data-testid={`left-${icon}`}
          fontSize="small"
          color="action"
        />
      )}
      <input
        id={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={handleChange}
        className="w-full h-ful outline-none"
      />
      {(iconPosition === "right" || (isBoth && !!value)) && IconElement && (
        <button onClick={onClick}>
          <IconElementClick
            data-testid={`right-${isBoth ? "Close" : icon}`}
            fontSize="small"
            color="action"
          />
        </button>
      )}
    </div>
  );
}
