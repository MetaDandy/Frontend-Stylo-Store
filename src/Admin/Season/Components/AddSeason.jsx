import { toast } from "react-toastify";
import { useAdd } from "../../../Hooks";
import { handleOnChange } from "../../../Helpers";
import { Title } from "../../../Generals/Components";

const AddSeason = () => {
  const { data, setData, addData } = useAdd(
    {
      name: "",
      description: "",
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("season", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="SEASON" />
      <div className="w-full">
        <p className="mb-2">Season name</p>
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
        <p className="mb-2">Season description</p>
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

export default AddSeason;
