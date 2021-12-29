import React, { useReducer } from "react";
import { View } from "react-native";

export default (reducer, actions) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [
      { title: "POST_TEXT", content: "TEST_CONTEST", id: 1 },
    ]);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
