import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useViewAll } from "../Hooks";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Bs.";
  const delivery_Fee = 10;
  const backendrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const { data: products } = useViewAll("product");

  const addToCart = async (id, size) => {
    try {
      if (!size) {
        toast.error("Select Product Size");
        return;
      }

      let data = structuredClone(cartItems);
      const product = products.find((p) => p.id === id);

      if (!product) {
        toast.error("Product not found");
        return;
      }

      if (data[id]) {
        if (data[id][size]) {
          data[id][size].quantity += 1; // Aumenta la cantidad
        } else {
          // Almacena el tamaño y la cantidad junto con el precio
          data[id][size] = { quantity: 1, price: product.price };
        }
      } else {
        // Inicializa el producto con el tamaño, cantidad y precio
        data[id] = {
          [size]: { quantity: 1, price: product.price },
        };
      }

      setCartItems(data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const getCarCount = () => {
    let total = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        try {
          if (cartItems[items][size]?.quantity > 0) {
            total += cartItems[items][size].quantity; // Sumar cantidad de productos
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
    return total;
  };

  const updateQuantity = async (id, size, quantity) => {
    let data = structuredClone(cartItems);

    if (data[id] && data[id][size]) {
      if (quantity <= 0) {
        delete data[id][size]; // Eliminar tamaño si la cantidad es cero
      } else {
        data[id][size].quantity = quantity; // Actualiza la cantidad
      }
      if (Object.keys(data[id]).length === 0) {
        delete data[id]; // Elimina el producto si no hay tamaños
      }
    }

    setCartItems(data);
  };

  const getCartAmount = () => {
    let total = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        try {
          const item = cartItems[items][size];
          if (item.quantity > 0) {
            total += item.price * item.quantity; // Utiliza el precio almacenado
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
    return total;
  };

  const value = {
    products,
    currency,
    delivery_Fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCarCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendrl,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
