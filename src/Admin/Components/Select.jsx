import { useEffect, useState } from "react";
import { viewAll } from "../../Helpers/index.js";

const Select = ({ title, route, sOnChange, sName, sValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await viewAll(route);
      console.log("fetch", fetch);

      setData(fetch);
    };

    fetchData();
  }, [route]);

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
