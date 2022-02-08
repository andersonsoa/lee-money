import { createContext, useContext, useReducer } from "react";

type StoreContextType = {
  cicle?: string;
  changeCicle: (cicle: string) => void;
};

type State = {
  cicle?: string;
};

type Action = {
  type: string;
  payload: State;
};

const StoreContext = createContext({} as StoreContextType);

const initialState = {
  cicle: undefined,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeCicle = (cicle: string) => {
    dispatch({
      type: "SET_STATE",
      payload: { cicle },
    });
  };

  return (
    <StoreContext.Provider value={{ ...state, changeCicle }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
