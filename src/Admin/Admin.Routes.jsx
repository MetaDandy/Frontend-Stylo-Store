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
      </div>
      <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
        <Routes>
          <Route to="/add" element={<AddProduct />} />
          <Route to="/List" element={<ListProduct />} />
          <Route to="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
