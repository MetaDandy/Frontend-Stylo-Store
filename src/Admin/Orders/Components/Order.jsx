import { useViewAll } from "../../../Hooks";

const Order = () => {
  const { data } = useViewAll("order");

  return (
    <div>
      <h3>Order List</h3>
      <div className="">
        {data &&
          data.map((order) => (
            <div key={order.id} className="border rounded-md p-4 mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Pedido #{order.id} - {order.orderStatus[0].description}
                </h2>
                <p className="text-sm text-gray-500">
                  Fecha: {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Monto total: ${order.amount}
              </p>

              <div className="mb-4">
                <p className="font-medium">
                  Método de Entrega: {order.orderStatus[0].orderType.name}
                </p>
                <p>Dirección de Entrega: {order.delivery[0].direction}</p>
              </div>

              {order.cart.slice(0, 3).map((item, i) => (
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
                        <p className="text-lg">${item.product.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Tamaño: {item.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-between"></div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Order;
