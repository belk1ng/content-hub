import type {FC} from "react";
import Spinner from "@/shared/ui/spinner";
import * as classes from "./Loader.module.scss"

const Loader: FC = () => {
    return (
        <section className={classes.loader}>
            <Spinner/>
        </section>
    )
}

export default Loader