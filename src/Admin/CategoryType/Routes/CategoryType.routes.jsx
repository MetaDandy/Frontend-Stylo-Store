import { Route, Routes } from "react-router-dom";
import { AddCategoryType, ListCategoryType } from "../Components";

const CategoryType = () => {
  return (
    <Routes>
      <Route path="add" element={<AddCategoryType />} />
      <Route path="list" element={<ListCategoryType />} />
    </Routes>
  );
};

export default CategoryType;
