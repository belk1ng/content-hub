import type { Dispatch, InputHTMLAttributes, ReactNode } from "react";

type InputBaseProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export interface InputProps extends InputBaseProps {
  value?: string;
  onChange?: Dispatch<string>;
  helperText?: string;
  label?: string;
  startIcon?: ReactNode;
}
