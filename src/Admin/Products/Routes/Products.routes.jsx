import { Route, Routes } from "react-router-dom";
import { AddProduct, ListProduct } from "../Components";

const Products = () => {
  return (
    <Routes>
      <Route path="add" element={<AddProduct />} />
      <Route path="list" element={<ListProduct />} />
    </Routes>
  );
};

export default Products;
