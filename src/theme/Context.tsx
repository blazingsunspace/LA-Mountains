import type { ThemeContext, Theme, ThemeProviderProps } from "../types/theme";
import { createContext, useContext, useState } from "react";
import { LightTheme, DarkTheme } from "../theme/Themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Mode } from "../types/theme";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const initialValue = {
    changeMode: () => { },
    mode: Mode.Light
};

const AppThemeContext = createContext<ThemeContext>(initialValue);

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(LightTheme);
    const [mode, setMode] = useState<Mode>(Mode.Light);

    const customTheme = useSelector(
        (state: RootState) => state.reducer.theme
    );
    const changeMode = (mode: Mode) => {

        switch (mode) {
            case Mode.Light:
                console.log('light mode 1 ')
                setTheme(LightTheme);
                break;
            case Mode.Dark:
                console.log('dark mode 2 ')
                setTheme(DarkTheme);
                break;
            case Mode.Custom:
                console.log('custom mode 3')
                setTheme({
                    colors: {
                        background: customTheme.colors.background,
                        tabBackground: customTheme.colors.background,
                        containerHistoryBackground: customTheme.colors.background,
                        carouselBackground: customTheme.colors.background,
                        text: "white",
                        primary: "white",
                        bodyText: customTheme.colors.background,
                        border: '1px solid white',
                        languageContainerOutline: '1px solid white',
                        dropCapPColor: 'white',
                        dropCapPDecoraterColor: 'white'
                    }
                });
                break;

        }
        setMode(mode);
    };

    return (
        <AppThemeContext.Provider value={{ mode, changeMode }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
