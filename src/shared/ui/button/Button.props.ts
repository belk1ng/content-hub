import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "contained" | "outlined" | "light" | "action";

type ButtonSize = "small" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
