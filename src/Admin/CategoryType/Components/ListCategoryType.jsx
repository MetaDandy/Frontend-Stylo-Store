import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { useViewAll } from "../../../Hooks";

const ListCategoryType = () => {
  const { data, handleRemove } = useViewAll("categoryType");

  const arr = ["id", "name", "description", "remove"];
  return (
    <div>
      <Title text1="CATEGORY'S TYPE" text2="LIST" />
      <div className="flex flex-col gap-2">
        {/* ---------------- List table title -------------- */}
        <div className="hidden md:grid grid-cols-4 items-center py-1 px-2 border bg-gray-100 text-sm">
          {arr.map((item) => (
            <b key={item}>{item}</b>
          ))}
        </div>
        {/* ----------- Product List ----------- */}
        {data.map((item, i) => (
          <div
            className="grid grid-cols-4 items-center gap-2 py-1 px-2 border text-sm"
            key={i}
          >
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
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

export default ListCategoryType;
