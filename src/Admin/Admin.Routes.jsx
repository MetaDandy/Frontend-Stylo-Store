import { AdminNavbar, Sidebar } from "./Components/index.js";
import { Routes, Route } from "react-router-dom";
import { AddProduct, ListProduct } from "./Products/Components/index.js";
import { Order } from "./Orders/Components/index.js";

const Admin = () => {
  return (
    <div className="bg-gray-50 min-h-sceen">
      <AdminNavbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="add" element={<AddProduct />} />
            <Route path="list" element={<ListProduct />} />
            <Route path="order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
