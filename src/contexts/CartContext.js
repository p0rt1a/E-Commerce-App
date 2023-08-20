import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (deletedItem) => {
    var filtered = cartItems.filter((item) => item.id !== deletedItem.id);

    setCartItems(filtered);
  };

  const values = {
    cartItems,
    setCartItems,
    removeItem,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
