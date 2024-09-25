import { useContext } from "react";
import { useViewAll } from "../../../Hooks";
import { ShopContext } from "../../../Context/ShopContext";
import { toast } from "react-toastify";

const ListProduct = () => {
  const { data, handleRemove } = useViewAll("product");
  const arr = [
    "photo",
    "name",
    "price",
    "category",
    "season",
    "brand",
    "Sizes",
    "Actions",
  ];

  const { currency } = useContext(ShopContext);

  return (
    <div>
      <p className="mb-2">All products list</p>
      <div className="flex flex-col gap-2">
        {/* ---------------- List table title -------------- */}
        <div className="hidden md:grid grid-cols-8 items-center py-1 px-2 border bg-gray-100 text-sm">
          {arr.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
        {/* ----------- Product List ----------- */}
        {data.map((item, i) => (
          <div
            className="grid grid-cols-8 items-center gap-2 py-1 px-2 border text-sm"
            key={i}
          >
            {item.photo && item.photo[0] && (
              <img
                className="w-12"
                src={item.photo[0].path}
                alt={item.name || "Product"}
              />
            )}
            <p>{item.name}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p>{item.category.name}</p>
            <p>{item.season.name}</p>
            <p>{item.brand.name}</p>
            {item.productSize && item.productSize.length > 0 ? (
              <p>{item.productSize.map((size) => size.sizeId).join(", ")}</p>
            ) : (
              <p>No sizes available</p>
            )}
            <p
              onClick={() => handleRemove(item.id, toast)}
              className="text-right md:text-center cursor-pointer text-lg "
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
