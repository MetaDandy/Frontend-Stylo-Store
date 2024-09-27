import { useEffect, useState } from "react";
import { useViewAll } from "../../Hooks";
import { assets } from "../../assets/assets.js";

const PaymentMethod = ({ setter }) => {
  const { data = [] } = useViewAll("payment");

  const [method, setMethod] = useState(null);

  useEffect(() => {
    if (data.length > 0 && !method) {
      setMethod(data[0].name); // Inicializa el primer método de pago cuando los datos estén disponibles
    }
  }, [data]);

  useEffect(() => {
    if (method && data.length > 0) {
      const selectedPayment = data.find((item) => item.name === method);
      if (selectedPayment) {
        setter((prev) => ({
          ...prev,
          paymentId: selectedPayment.id, // Solo enviar el ID del método de pago
        }));
      }
    }
  }, [method, data, setter]);

  return (
    <div className="flex gap-3 flex-col lg:flex-row">
      {data.map((payment) => (
        <div
          key={payment.id}
          onClick={() => setMethod(payment.name)}
          className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
        >
          <p
            className={`min-w-3.5 h-3.5 border rounded-full ${
              method === payment.name ? "bg-green-400" : ""
            }`}
          ></p>
          {payment.name === "Stripe" || payment.name === "Razorpay" ? (
            <img
              src={
                payment.name === "Stripe"
                  ? assets.stripe_logo
                  : assets.razorpay_logo
              }
              className="h-5 mx-4"
              alt={`${payment.name} logo`}
            />
          ) : (
            <p className="text-gray-500 text-sm font-medium mx-4">
              {payment.name.toUpperCase()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentMethod;
