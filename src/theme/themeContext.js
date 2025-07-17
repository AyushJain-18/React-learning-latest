import { createContext, useContext } from "react";

const Context = createContext({});
export const ThemeProvider = Context.Provider;

export default useTheme = () => useContext(Context);
