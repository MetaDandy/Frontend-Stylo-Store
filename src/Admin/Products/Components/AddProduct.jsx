import { useState } from "react";
import { assets } from "../../../assets/admin_assets/assets.js";
import { Select } from "../../Components/index.js";
import { add, handleOnChange } from "../../../Helpers";
import { toast } from "react-toastify";
import { useViewAll } from "../../../Hooks/index.js";

const AddProduct = () => {
  const [images, setImages] = useState([null, null, null, null]);

  const [data, setData] = useState({
    name: "",
    description: "",
    categoryId: 1,
    brandId: 1,
    seasonId: 1,
    price: 25,
    bestSeller: false,
    size: [],
  });

  const { data: sizez } = useViewAll("size");

  const handleImageChange = (index) => (e) => {
    const file = e.target.files[0];
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleSizeToggle = (sizeValue) => {
    setData((prevData) => {
      // Si la talla ya está en el array, la quitamos
      if (prevData.size.includes(sizeValue)) {
        return {
          ...prevData,
          size: prevData.size.filter((size) => size !== sizeValue),
        };
      } else {
        // Si no está en el array, la agregamos
        return {
          ...prevData,
          size: [...prevData.size, sizeValue],
        };
      }
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("categoryId", data.categoryId);
      formData.append("brandId", data.brandId);
      formData.append("seasonId", data.seasonId);
      formData.append("bestSeller", data.bestSeller);
      formData.append("size", JSON.stringify(data.size)); // Si es un array, lo pasamos a JSON string

      // Añadir los archivos (solo si existen)
      if (images[0]) formData.append("image1", images[0]);
      if (images[1]) formData.append("image2", images[1]);
      if (images[2]) formData.append("image3", images[2]);
      if (images[3]) formData.append("image4", images[3]);

      // Puedes verificar el contenido de 'formData' si lo deseas (esto es solo para debug)
      for (let pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      const response = await add("product", formData, toast);
      console.log(response);

      if (response.success) {
        setData({
          name: "",
          description: "",
          categoryId: 1,
          brandId: 1,
          seasonId: 1,
          price: 25,
          bestSeller: false,
          size: [],
        });

        setImages([null, null, null, null]);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creating the product.");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div className="">
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {images.map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className="w-20"
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt=""
              />
              <input
                onChange={handleImageChange(index)}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="name"
          value={data.name}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          type="text"
          placeholder="Write here"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="description"
          value={data.description}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <Select
          title="Product category"
          route="category"
          sOnChange={(e) => handleOnChange(e, setData)}
          sName="categoryId"
          sValue={data.categoryId}
        />
        <Select
          title="Product brand"
          route="brand"
          sOnChange={(e) => handleOnChange(e, setData)}
          sName="brandId"
          sValue={data.brandId}
        />
        <Select
          title="Product season"
          route="season"
          sOnChange={(e) => handleOnChange(e, setData)}
          sName="seasonId"
          sValue={data.seasonId}
        />
      </div>
      <div className="">
        <p className="mb-2">Product Price</p>
        <input
          type="number"
          placeholder="25"
          onChange={(e) => handleOnChange(e, setData)}
          className="w-full px-3 py-2 sm:w-[120px]"
          name="price"
          value={data.price}
        />
      </div>
      <div className="">
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {sizez.map((size) => (
            <div className="" key={size}>
              <p
                className={`bg-slate-200 px-3 py-1 cursor-pointer ${
                  data.size.includes(size.id) ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleSizeToggle(size.id)}
              >
                {size.id}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={(e) => handleOnChange(e, setData)}
          name="bestSeller"
          checked={data.bestSeller}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddProduct;
