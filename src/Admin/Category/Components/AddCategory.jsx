import { toast } from "react-toastify";
import { useAdd } from "../../../Hooks";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { Select } from "../../Components";

const AddCategory = () => {
  const { data, setData, addData } = useAdd(
    {
      name: "",
      description: "",
      typeCategoryId: 1,
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("category", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="Category" />
      <div className="w-full">
        <p className="mb-2">Category name</p>
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
        <p className="mb-2">Category description</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="description"
          value={data.description}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <Select
        title="Category's types"
        route="categoryType"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="typeCategoryId"
        sValue={data.typeCategoryId}
      />
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddCategory;
