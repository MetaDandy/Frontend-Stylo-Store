import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { useAdd } from "../../../Hooks";

const AddBranch = () => {
  const { data, setData, addData } = useAdd(
    {
      name: "",
      direction: "",
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("branch", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="BRANCH" />
      <div className="w-full">
        <p className="mb-2">Branch name</p>
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
        <p className="mb-2">Branch direction</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="direction"
          value={data.direction}
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

export default AddBranch;
