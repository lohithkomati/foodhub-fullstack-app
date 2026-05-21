import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext =
  createContext();

export const CartProvider = ({
  children,
}) => {

  const [cart, setCart] =
    useState([]);

  // ADD TO CART

  const addToCart = (item) => {

    const existingItem =
      cart.find(
        (cartItem) =>
          cartItem.id === item.id
      );

    if (existingItem) {

      const updatedCart =
        cart.map((cartItem) =>

          cartItem.id === item.id

            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }

            : cartItem
        );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);

    }

  };

  // REMOVE ITEM

  const removeFromCart = (
    id
  ) => {

    const updatedCart =
      cart.filter(
        (item) => item.id !== id
      );

    setCart(updatedCart);

  };

  // CLEAR CART

  const clearCart = () => {

    setCart([]);

  };

  // TOTAL PRICE

  const totalPrice =
    cart.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.quantity,
      0
    );

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};

export const useCart = () =>
  useContext(CartContext);