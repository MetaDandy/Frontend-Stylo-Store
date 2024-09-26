import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Title } from "../../Generals/Components";
import { assets } from "../../assets/assets";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const { quantity } = cartItems[productId][size]; // Accedemos a la cantidad desde el nuevo objeto
        if (quantity > 0) {
          temp.push({
            id: productId,
            size: size,
            quantity: quantity,
          });
        }
      }
    }
    setData(temp);
  }, [cartItems]);

  console.log("data", data);
  console.log(products);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div className="">
        {data.length > 0 ? ( // Condicional para renderizar solo si hay datos en el carrito
          data.map((item, i) => {
            const pData = products.find((p) => p.id === Number(item.id)); // Buscamos el producto en la lista

            console.log("dentro del map", pData);

            if (!pData) return null; // Si el producto no existe, no lo renderizamos

            return (
              <div
                className="py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                key={i}
              >
                <div className="flex items-start gap-6">
                  <img
                    src={pData.photo[0].path}
                    className="w-16 sm:w-20"
                    alt=""
                  />
                  <div className="">
                    <p className="text-xs sm:text-lg font-medium">
                      {pData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {pData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 ">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item.id, // Corregimos el uso de "item._id" por "item.id"
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />
                <img
                  src={assets.bin_icon}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  alt="Eliminar"
                  onClick={() => updateQuantity(item.id, item.size, 0)} // Corregimos "item._id" por "item.id"
                />
              </div>
            );
          })
        ) : (
          <p>Your cart is empty</p> // Mensaje en caso de que el carrito esté vacío
        )}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
