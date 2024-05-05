import type {FC} from "react"
import * as classes from "./Spinner.module.scss";

const Spinner: FC = () => {
    return (
        <div className={classes.spinner}/>
    )
}

export default Spinner