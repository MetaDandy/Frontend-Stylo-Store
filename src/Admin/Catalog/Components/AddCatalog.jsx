import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { Select } from "../../Components";
import { useAdd } from "../../../Hooks";

const AddCatalog = () => {
  const { data, setData, addData } = useAdd(
    {
      name: "",
      seasonId: 1,
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("catalog", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="CATALOG" />
      <div className="w-full">
        <p className="mb-2">Catalog name</p>
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
      <Select
        title="Seasons"
        route="season"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="seasonId"
        sValue={data.seasonId}
      />
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddCatalog;
