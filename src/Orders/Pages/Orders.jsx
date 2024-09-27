import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Title } from "../../Generals/Components";

const Orders = () => {
  const { currency } = useContext(ShopContext);

  const [data, setData] = useState();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/order/viewUser`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Error al obtener los pedidos");

        const dato = await response.json();
        setData(dato.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  console.log(data);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div className="">
        {data &&
          data.map((order) => (
            <div key={order.id}>
              <h2>Pedido #{order.id}</h2>
              {order.cart.map((item, i) => (
                <div
                  className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  key={i}
                >
                  <div className="flex items-start gap-6 text-sm">
                    <img
                      src={item.product.photo[0].path}
                      className="w-16 sm:w-20"
                      alt={item.product.name}
                    />
                    <div>
                      <p className="sm:text-base font-medium">
                        {item.product.name}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                        <p className="text-lg">
                          {currency}
                          {item.product.price || "Precio no disponible"}
                        </p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>
                      <p className="mt-2">
                        Date:{" "}
                        <span className="text-gray-400">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                      <p className="text-sm md:text-base ">
                        {order.orderStatus[0].description}
                      </p>
                    </div>
                    <p className="text-sm md:text-base ">
                      {order.orderStatus[0].orderType.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Orders;
