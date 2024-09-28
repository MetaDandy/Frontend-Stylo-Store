import { Route, Routes } from "react-router-dom";
import { AddBrand, ListBrand } from "../Components";

const Brand = () => {
  return (
    <Routes>
      <Route path="add" element={<AddBrand />} />
      <Route path="list" element={<ListBrand />} />
    </Routes>
  );
};

export default Brand;
