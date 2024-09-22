import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Bs.";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

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

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCarCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
