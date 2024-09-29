import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { useAdd } from "../../../Hooks";

const AddSize = () => {
  const { data, setData, addData } = useAdd(
    {
      id: "",
      name: "",
      description: "",
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("size", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="SIZE" />
      <div className="w-full">
        <p className="mb-2">Size acronyms</p>
        <input
          type="text"
          placeholder="Max 5 characters"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="id"
          value={data.id}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Size name</p>
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
        <p className="mb-2">Size description</p>
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
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddSize;
