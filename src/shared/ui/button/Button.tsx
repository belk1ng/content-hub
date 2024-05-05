import type {FC} from "react";
import clsx from "clsx";
import type {ButtonProps} from "./Button.props";
import * as classes from "./Button.module.scss";

const Button: FC<ButtonProps> = ({variant = "contained", size = "small", icon, className, type = "button", children, ...rest}) => {
    return (
        <button
            type={type}
            className={clsx(classes.button, classes[`button_${variant}`], classes[`button_${size}`], className)}
            {...rest}
        >
            {icon && icon}
            {children}
        </button>
    )
}

export default Button;
