import { Route, Routes } from "react-router-dom";
import { AddCatalog, AddProductCatalog, ListCatalog } from "../Components";

const Catalog = () => {
  return (
    <Routes>
      <Route path="add" element={<AddCatalog />} />
      <Route path="list" element={<ListCatalog />} />
      <Route path="product" element={<AddProductCatalog />} />
    </Routes>
  );
};

export default Catalog;
