import{ReactNode, createContext, useState} from "react";

type ThemeContextProps = {
    theme: "temaClaro" | "temaEscuro";
    setTheme: (theme: "temaClaro" | "temaEscuro") => void;
    toggleSwitch: () => void;
};

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>(
    {} as ThemeContextProps
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
   //Lógica
   const [theme, setTheme] = useState<"temaClaro" | "temaEscuro">("temaEscuro");
   const [user, setUser] = useState("Muleke");
   const toggleSwitch = () => setTheme(theme === "temaClaro" ? "temaEscuro" : "temaClaro");
 ;

return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleSwitch }}>
        {children}
    </ThemeContext.Provider>
)
};