import Providers from "@/app/providers";
import Router from "@/app/router";
import "./styles/index.scss"
import {useTheme} from "@/entities/theme";
import cn from "@/shared/lib/cn"

const appCn = cn("app");

const App = () => {
    const {theme} = useTheme();

    return (
        <Providers>
            <div className={appCn({[theme]: true})}>
                <Router/>
            </div>
        </Providers>
    )
}

export default App