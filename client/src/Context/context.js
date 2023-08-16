import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

const INITIAL_STATE = {
  user: null,
  authToken: null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch({ type: "SET_USER", payload: JSON.parse(localStorage.getItem("user")) });
    }
    if (localStorage.getItem("authToken")) {
      dispatch({ type: "SET_AUTH_TOKEN", payload: JSON.parse(localStorage.getItem("authToken")) });
    }
  }, []);
  

  return (
    <Context.Provider
      value={{
        user: state.user,
        authToken: state.authToken,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
