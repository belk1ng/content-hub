import clsx from "clsx";
import type { FC } from "react";

import * as classes from "./Button.module.scss";
import type { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({
  variant = "contained",
  size = "small",
  icon,
  className,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        classes.button,
        classes[`button_${variant}`],
        classes[`button_${size}`],
        className
      )}
      type={type}
      {...rest}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
