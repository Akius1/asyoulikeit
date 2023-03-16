import * as React from "react";
import { Counter } from "./Components/Counter";
import Pokedex from "./Components/pokedex";
import Toggle from "./Components/Toggle";

const App = () => {
  return (
    <div className="text-red-300">
      <Toggle />
      <Counter />
      <Pokedex />
    </div>
  );
};

export default App;
