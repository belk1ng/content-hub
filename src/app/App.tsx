import Providers from "@/app/providers";
import Router from "@/app/router";
import "./styles/index.scss"

const App = () => {
    return (
        <Providers>
            <Router/>
        </Providers>
    )
}

export default App