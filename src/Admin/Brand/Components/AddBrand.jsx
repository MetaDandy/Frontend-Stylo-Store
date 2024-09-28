import { toast } from "react-toastify";
import { useAdd } from "../../../Hooks";
import { handleOnChange } from "../../../Helpers";
import { Title } from "../../../Generals/Components";

const AddBrand = () => {
  const { data, setData, addData } = useAdd(
    {
      name: "",
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("brand", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="BRAND" />
      <div className="w-full">
        <p className="mb-2">Brand name</p>
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
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddBrand;
