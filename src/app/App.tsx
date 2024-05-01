import Providers from "@/app/providers";
import Router from "@/app/router";
import {useTheme} from "@/entities/theme";
import "./styles/index.scss"

const App = () => {
    const {theme} = useTheme();

    return (
        <Providers>
            <div className={`app app_${theme}`}>
                <Router/>
            </div>
        </Providers>
    )
}

export default App