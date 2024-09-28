import { Route, Routes } from "react-router-dom";
import { AddCategory, ListCategory } from "../Components";

const Category = () => {
  return (
    <Routes>
      <Route path="add" element={<AddCategory />} />
      <Route path="list" element={<ListCategory />} />
    </Routes>
  );
};

export default Category;
