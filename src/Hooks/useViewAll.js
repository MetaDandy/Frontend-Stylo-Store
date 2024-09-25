import { useEffect, useState } from "react";
import { remove, viewAll } from "../Helpers";

export const useViewAll = (route) => {
  const [data, setData] = useState([]);

  const handleRemove = async (id, toast) => {
    await remove(route, id, toast);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await viewAll(route);
      console.log("fetch", fetch);

      setData(fetch);
    };

    fetchData();
  }, [route]);

  return { data, handleRemove };
};
