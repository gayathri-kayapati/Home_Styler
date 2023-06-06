import { createContext, useState } from "react";

export const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const handleCartItems = (product) => {
    console.log(product);
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const handleRemoveCartItem = (product) => {
    const filteredCartItems = cart.filter((item) => item.id !== product.id);
    setCart(filteredCartItems);
  };
  const handleIncreaseQuantity = (id) => {
    const cartData = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(cartData);
  };
  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      const cartData = cart.map((item) =>
        product.id === item.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(cartData);
    } else {
      const cartData = cart.filter((item) => item.id !== product.id);
      setCart(cartData);
    }
  };

  // export default function CartContextProvider({ children }) {
  //   const [cart, setCart] = useState([]);
  //
  //   const getCartData = async () => {
  //     try {
  //       const response = await fetch("/api/user/cart");
  //       const data = await response.json();
  //       setCart(data.cart);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //
  //   useEffect(() => {
  //     getCartData();
  //   }, []);
  //   const handleCartItems = (product) => {
  //     setCart([...cart, product]);
  //   };
  return (
    <div>
      <CartContext.Provider
        value={{
          cart,
          handleCartItems,
          handleRemoveCartItem,
          handleIncreaseQuantity,
          handleDecreaseQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}
