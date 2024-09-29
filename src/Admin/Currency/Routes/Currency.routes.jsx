import { Route, Routes } from "react-router-dom";
import { AddCurrency, ListCurrency } from "../Components";

const Currency = () => {
  return (
    <Routes>
      <Route path="add" element={<AddCurrency />} />
      <Route path="list" element={<ListCurrency />} />
    </Routes>
  );
};

export default Currency;
