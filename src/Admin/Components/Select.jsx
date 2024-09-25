import { useViewAll } from "../../Hooks/index.js";

const Select = ({ title, route, sOnChange, sName, sValue }) => {
  const { data } = useViewAll(route);

  return (
    <div>
      <p className="mb-2">{title}</p>
      <select
        name={sName}
        value={sValue}
        id=""
        className="w-full px-3 py-2"
        onChange={sOnChange}
      >
        {data.map((item, i) => (
          <option value={item.id} key={i}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
