import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { useState } from "react";
import { Select } from "../../Components";

const AddInventory = () => {
  const [data, setData] = useState({
    branchId: 1,
    productId: 1,
    stock: 0,
  });

  const addData = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found. Please log in again.");

      console.log(data);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/branch/addinventory`, // Cambia a tu endpoint real
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${token}`,
          },
          body: JSON.stringify(data), // Enviar los datos del estado
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg);
      }

      const result = await response.json();
      toast.success("Datos enviados correctamente");
      console.log(result);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={(e) => addData(e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD PRODUCT TO" text2="INVENTORY" />
      <div className="w-full">
        <p className="mb-2">Product Stock</p>
        <input
          type="number"
          placeholder="Max 5 characters"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="stock"
          value={data.stock}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <Select
        title="Branch"
        route="branch"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="branchId"
        sValue={data.branchId}
      />
      <Select
        title="Product"
        route="product"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="productId"
        sValue={data.productId}
      />
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddInventory;
