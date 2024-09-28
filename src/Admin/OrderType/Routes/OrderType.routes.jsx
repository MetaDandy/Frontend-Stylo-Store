import { Route, Routes } from "react-router-dom";
import { AddOrderType, ListOrderType } from "../Components";

const OrderType = () => {
  return (
    <Routes>
      <Route path="add" element={<AddOrderType />} />
      <Route path="list" element={<ListOrderType />} />
    </Routes>
  );
};

export default OrderType;
