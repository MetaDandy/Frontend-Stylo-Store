import { AdminNavbar, Sidebar } from "./Components/index.js";
import { Routes, Route } from "react-router-dom";
import { Order } from "./Orders/Components/index.js";
import Products from "./Products/Routes/Products.routes.jsx";
import Brand from "./Brand/Routes/brand.routes.jsx";
import Category from "./Category/Routes/Category.routes.jsx";
import CategoryType from "./CategoryType/Routes/CategoryType.routes.jsx";
import Season from "./Season/Routes/Season.routes.jsx";
import User from "./User/Routes/User.routes.jsx";
import OrderType from "./OrderType/Routes/OrderType.routes.jsx";
import Payment from "./Payment/Routes/Payment.routes.jsx";
import Role from "./Role/Routes/Role.routes.jsx";

const Admin = () => {
  return (
    <div className="bg-gray-50 min-h-sceen">
      <AdminNavbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
          <Routes>
            <Route path="product/*" element={<Products />} />
            <Route path="order/list" element={<Order />} />
            <Route path="brand/*" element={<Brand />} />
            <Route path="category/*" element={<Category />} />
            <Route path="categoryType/*" element={<CategoryType />} />
            <Route path="season/*" element={<Season />} />
            <Route path="user/*" element={<User />} />
            <Route path="orderType/*" element={<OrderType />} />
            <Route path="payment/*" element={<Payment />} />
            <Route path="role/*" element={<Role />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
