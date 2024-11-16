import * as MuiIcons from "@mui/icons-material";
import { useState } from "react";

interface ButtonProps {
  text?: string;
  variant: "default" | "outline" | "ghost";
  color?: "primary" | "secondary";
  icon?: keyof typeof MuiIcons;
  iconPosition?: "left" | "right" | "only";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  text,
  variant,
  color = "primary",
  icon,
  iconPosition = "left",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  const IconElement = icon ? MuiIcons[icon] : null;

  const bgColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const borderColor = {
    primary: "border-primary",
    secondary: "border-secondary",
  };

  const variantType = {
    default: `${bgColor[color]} bg-opacity-80 text-white hover:bg-opacity-100 ${disabled && "bg-opacity-40 hover:bg-opacity-40 cursor-not-allowed"}`,
    outline: `border ${borderColor[color]} text-[#333333] ${hover && bgColor[color]} hover:text-white hover:bg-opacity-60`,
    ghost: `text-[#333333] hover:${bgColor[color]} hover:text-white hover:bg-opacity-70 ${hover && bgColor[color]}`,
  };

  return (
    <button
      className={`p-3 w-auto h-auto rounded-lg ${variantType[variant]} flex items-center justify-center gap-1`}
      data-testid="button"
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (type === "button" && onClick) onClick();
      }}
    >
      {iconPosition === "left" && IconElement && (
        <IconElement data-testid={`left-${icon}`} fontSize="small" />
      )}
      {iconPosition === "only"
        ? IconElement && (
            <IconElement data-testid={`only-${icon}`} fontSize="small" />
          )
        : text}
      {iconPosition === "right" && IconElement && (
        <IconElement data-testid={`right-${icon}`} fontSize="small" />
      )}
    </button>
  );
}
