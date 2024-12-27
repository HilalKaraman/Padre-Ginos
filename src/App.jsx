import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";
import { StrictMode, useState } from "react";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);