import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { assets } from "../../assets/assets";
import RelatedProduct from "../Components/RelatedProduct";
import { useViewOne } from "../../Hooks/index.js";

const Product = () => {
  const { id } = useParams();

  const { currency, addToCart } = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const { data } = useViewOne("product", Number(id));

  console.log(size);

  useEffect(() => {
    if (data && data.photo.length > 0) {
      setImage(data.photo[0].path); // Establece la imagen inicial
    }
  }, [data]);

  if (!data) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ------- Product Data ------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ------- Product Images ------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {data.photo.map((item, i) => (
              <img
                src={item}
                key={i}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
                onClick={() => setImage(item.path)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* ------- Product Information ------- */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{data.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {data.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{data.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {data.productSize.map((item, i) => (
                <button
                  onClick={() =>
                    setSize((prev) => (item.sizeId === prev ? "" : item.sizeId))
                  }
                  className={`border py-2 px-4 bg-gray-100 ${
                    item.sizeId === size ? "border-orange-500" : ""
                  }`}
                  key={i}
                >
                  {item.sizeId}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(data.id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-s text-gray-500 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on felivery is available on this product</p>
          </div>
        </div>
      </div>
      {/* ----------- Description & Review Section ------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122) </p>
        </div>
        <div className="flex flex-col gap-4 p-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            cumque sint rerum voluptas ut assumenda eaque odit ipsum minus.
            Natus magni qui commodi debitis ut id adipisci fugiat ab modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            mollitia repellendus, voluptas eveniet, recusandae, fuga ratione
            nemo provident soluta inventore veniam! Ut, tenetur dolore! Quidem
            ducimus quaerat ipsa cumque dolorum?
          </p>
        </div>
      </div>
      {/* ----------- Display related products ------------------- */}
      <RelatedProduct category={data.category} subcategory={data.subCategory} />
    </div>
  );
};

export default Product;
