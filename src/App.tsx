import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleChangeName = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const handleChangeTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  const handleChangeQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <ExpandableText text="Hello World" collapsedTextCount={4} />
    </>
  );
}
export default App;
