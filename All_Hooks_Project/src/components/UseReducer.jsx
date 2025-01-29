import React, { useReducer } from "react";
import './UseReducer.css'

const initialState = { isDarkMode: false };

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isDarkMode: !state.isDarkMode };
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div className={state.isDarkMode ? "app dark" : "app light"}>
      <h1>{state.isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => dispatch({ type: "toggle" })} className="usereduce-button">
        Toggle Theme
      </button>
    </div>
  );
}

export default App;

