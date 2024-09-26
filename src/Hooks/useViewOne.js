import { useEffect, useState } from "react";
import { viewOne } from "../Helpers";

export const useViewOne = (route, id) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetch = await viewOne(id, route);
      console.log("fetch", fetch);
      setData(fetch);
    };

    fetchData();
  }, [route, id]);

  console.log(data);
  return { data };
};
