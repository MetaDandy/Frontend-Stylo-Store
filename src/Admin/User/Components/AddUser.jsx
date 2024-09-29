import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { handleOnChange } from "../../../Helpers";
import { useAdd } from "../../../Hooks";
import { Select } from "../../Components";

const AddUser = () => {
  const { data, setData, addData } = useAdd(
    {
      name: "",
      email: "",
      password: "",
      phone: 0,
      roleId: 1,
    },
    toast
  );

  return (
    <form
      onSubmit={(e) => addData("user", e)}
      className="flex flex-col w-full items-start gap-3"
    >
      <Title text1="ADD" text2="SIZE" />
      <div className="w-full">
        <p className="mb-2">User name</p>
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
        <p className="mb-2">User email</p>
        <input
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="email"
          value={data.email}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">User password</p>
        <input
          type="password"
          placeholder="Min 8 characters"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="password"
          value={data.password}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">User phone</p>
        <input
          type="number"
          placeholder="Phone"
          onChange={(e) => handleOnChange(e, setData)}
          required
          name="phone"
          value={data.phone}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <Select
        title="Roles"
        route="role"
        sOnChange={(e) => handleOnChange(e, setData)}
        sName="roleId"
        sValue={data.roleId}
      />
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddUser;
