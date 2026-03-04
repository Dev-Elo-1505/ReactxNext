import { useState, useEffect, useMemo } from "react";
import type {
  CartItemType,
  ProductType,
} from "../components/custom_hooks/Cart";

export function useCart() {
  const [cart, setCart] = useState<CartItemType[]>(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  //   sync across tabs

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        try {
          const newCart = event.newValue ? JSON.parse(event.newValue) : [];
          setCart(newCart);
        } catch (error) {
          console.error("Error parsing cart from storage event:", error);
        }
      }
      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    };
  }, []);

  const addToCart = (item: ProductType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(quantity, 1) }
          : item,
      ),
    );
  };

  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2),
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
  };
}
