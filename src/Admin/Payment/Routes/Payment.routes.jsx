import { Route, Routes } from "react-router-dom";
import { AddPayment, ListPayment } from "../Components";

const Payment = () => {
  return (
    <Routes>
      <Route path="add" element={<AddPayment />} />
      <Route path="list" element={<ListPayment />} />
    </Routes>
  );
};

export default Payment;
