import {createRoot} from 'react-dom/client';
import {StrictMode} from "react";
import App from "./app/App";
import {ThemeProvider} from "@/entities/theme/ui/Theme.provider";

const container = document.getElementById("root");
if (!container) {
    throw new Error("Mount container not found");
}

const root = createRoot(container);
root.render(
    <StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </StrictMode>
)
