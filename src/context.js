import { createContext, useContext } from "react";

const Context = createContext({});
export const Provider = Context.Provider;

export const useAppContext = () => useContext(Context);
