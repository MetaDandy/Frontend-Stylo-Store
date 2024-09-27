import { useContext, useEffect, useState } from "react";
import CartTotal from "../../Cart/Components/CartTotal";
import { Title } from "../../Generals/Components";
import { ShopContext } from "../../Context/ShopContext";
import { Select } from "../../Admin/Components";
import PaymentMethod from "../Components/PaymentMethod";
import { add, handleOnChange } from "../../Helpers";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [order, setOrder] = useState({
    paymentId: 1,
    orderDescription: "",
    direction: "",
    orderTypeId: 1,
    cartItems: [],
    total: 0,
  });

  const { navigate, getCartAmount, cartItems } = useContext(ShopContext);

  useEffect(() => {
    const setCart = () => {
      const ttotal = getCartAmount();
      const cart = [];

      Object.entries(cartItems).forEach(([productId, sizes]) => {
        Object.entries(sizes).forEach(([size, { quantity }]) => {
          cart.push({
            id: parseInt(productId), // Aseguramos que el id sea un número
            size: size,
            quantity: quantity,
          });
        });
      });

      console.log(cart);

      setOrder((prev) => ({
        ...prev,
        total: ttotal,
        cartItems: cart,
      }));
    };

    setCart();
  }, [cartItems, getCartAmount]);

  console.log(order);

  const orderCart = async () => {
    try {
      const response = await add("order", order, toast);

      console.log(response);
      if (response.success) navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ----------- Left Side ----------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text'xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <input
          type="text"
          placeholder="Direction"
          name="direction"
          value={order.direction}
          onChange={(e) => handleOnChange(e, setOrder)}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
        />
        <input
          type="text"
          placeholder="Order Description"
          value={order.orderDescription}
          name="orderDescription"
          onChange={(e) => handleOnChange(e, setOrder)}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full "
        />
        <Select
          title="Order Type"
          route="orderType"
          sName="orderTypeId"
          sValue={order.orderTypeId}
          sOnChange={(e) => handleOnChange(e, setOrder)}
        />
      </div>
      {/* ----------- Right Side ----------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          {/* ----------- Payment Method Selection ----------- */}

          <PaymentMethod setter={setOrder} />
          <div className="w-full text-end mt-8">
            <button
              onClick={() => {
                orderCart();
              }}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
