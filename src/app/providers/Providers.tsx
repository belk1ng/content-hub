import type {FC, PropsWithChildren} from "react";
import {ThemeProvider} from "@/entities/theme";
import {StrictMode} from "react";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <StrictMode>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </StrictMode>
    )
}

export default Providers;
