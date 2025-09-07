import { createContext, useContext } from "react";

const Context = createContext({});
export const ThemeProvider = Context.Provider;

 const useTheme = () => useContext(Context);
 export default useTheme;
