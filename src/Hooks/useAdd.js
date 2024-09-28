import { useState } from "react";
import { add } from "../Helpers";

export const useAdd = (setter, toast) => {
  const [data, setData] = useState(setter);

  const addData = async (route, e) => {
    e.preventDefault();
    try {
      const response = await add(route, data, toast);

      console.log(response);
      if (response.success) setData(setter);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, setData, addData };
};
