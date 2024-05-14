import clsx from "clsx";
import type { ChangeEvent, FC } from "react";

import * as classes from "./Input.module.scss";
import type { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  startIcon,
  helperText,
  className,
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <fieldset className={classes.input}>
      {label && <legend className={classes.input__title}>{label}</legend>}
      <label className={classes.input__container}>
        {startIcon && startIcon}
        <input
          className={clsx(classes.input__field, className)}
          onChange={handleChange}
          type={type}
          value={value}
          {...rest}
        />
      </label>
      {helperText && (
        <span className={classes.input__helper}>{helperText}</span>
      )}
    </fieldset>
  );
};

export default Input;
