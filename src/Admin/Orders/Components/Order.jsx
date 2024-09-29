import { useViewAll } from "../../../Hooks";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Order = () => {
  const { data } = useViewAll("order");

  const generatePDF = () => {
    const input = document.getElementById("order-list");

    // Espera a que todas las imágenes se carguen
    const images = Array.from(input.getElementsByTagName("img")).map((img) => {
      return new Promise((resolve) => {
        const imgClone = new Image();
        imgClone.src = img.src;
        imgClone.onload = () => resolve(imgClone);
      });
    });

    Promise.all(images).then(() => {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 190; // Ancho de la imagen en mm
        const pageHeight = pdf.internal.pageSize.height; // Altura de la página
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculamos la altura de la imagen
        let heightLeft = imgHeight;

        let position = 0;

        // Agregamos la imagen al PDF
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Si la altura de la imagen excede la altura de la página, se agrega una nueva página
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("orders.pdf"); // Nombre del archivo
      });
    });
  };

  return (
    <div>
      <button
        onClick={generatePDF}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Imprimir
      </button>
      <h3>Order List</h3>
      <div className="" id="order-list">
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
                <p>Pedido para: {order.user.name}</p>
              </div>

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
