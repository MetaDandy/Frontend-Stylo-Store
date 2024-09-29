import { useState } from "react";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { Select } from "../../Components";
import { toast } from "react-toastify";

const AddProductCatalog = () => {
  const [data, setData] = useState({
    productId: 1,
    catalogId: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/catalog/addproduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.msg);
        throw new Error(`Create product catalog failed`);
      }

      const aData = await response.json();
      toast.success(aData.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="Category" />
      <Select
        title="Product"
        route="product"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="productId"
        sValue={data.productId}
      />
      <Select
        title="Catalog"
        route="catalog"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="catalogId"
        sValue={data.catalogId}
      />
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddProductCatalog;
