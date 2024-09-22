import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Bs.";
  const delivery_Fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (id, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let data = structuredClone(cartItems);

    if (data[id]) {
      if (data[id][size]) {
        data[id][size] += 1;
      } else data[id][size] = 1;
    } else {
      data[id] = {};
      data[id][size] = 1;
    }

    setCartItems(data);
  };

  const getCarCount = () => {
    let total = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item]) {
            total += cartItems[items][item];
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    }
    return total;
  };

  const updateQuantity = async (id, size, quantity) => {
    let data = structuredClone(cartItems);

    data[id][size] = quantity;

    setCartItems(data);
  };

  const getCartAmount = () => {
    let total = 0;
    for (const items in cartItems) {
      let info = products.find((p) => p._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0)
            total += info.price * cartItems[items][item];
        } catch (error) {
          console.error("Error: ", error);
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
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
