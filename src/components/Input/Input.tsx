import { ChangeEvent } from "react";
import * as MuiIcons from "@mui/icons-material";

export interface InputProps {
  label?: string;
  icon?: keyof typeof MuiIcons;
  iconPosition?: "left" | "right" | "both";
  value: string;
  name?: string;
  type?: string;
  isSearch?: boolean;
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
  isSearch,
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
    <div
      className={`w-full h-auto py-2 px-3 rounded-lg ${isSearch ? "border-y border-l rounded-e-none" : "border"} border-gray-400 flex items-center gap-2 bg-white`}
    >
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
      <div className="w-5 h-auto">
        {(iconPosition === "right" || isBoth) &&
          (isSearch ? !!value : true) &&
          IconElement && (
            <button onClick={onClick} type="button">
              <IconElementClick
                data-testid={`right-${isBoth ? "Close" : icon}`}
                fontSize="small"
                color="action"
              />
            </button>
          )}
      </div>
    </div>
  );
}
