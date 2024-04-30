import Providers from "@/app/providers";
import Router from "@/app/router";
import "./styles/index.scss"
import {useTheme} from "@/entities/theme";

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