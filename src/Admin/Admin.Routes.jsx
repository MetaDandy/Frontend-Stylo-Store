import { AdminNavbar, Sidebar } from "./Components/index.js";
import { Routes, Route } from "react-router-dom";
import { Order } from "./Orders/Components/index.js";
import Products from "./Products/Routes/Products.routes.jsx";
import Brand from "./Brand/Routes/Brand.routes.jsx";
import Category from "./Category/Routes/Category.routes.jsx";
import CategoryType from "./CategoryType/Routes/CategoryType.routes.jsx";
import Season from "./Season/Routes/Season.routes.jsx";
import User from "./User/Routes/User.routes.jsx";
import OrderType from "./OrderType/Routes/OrderType.routes.jsx";
import Payment from "./Payment/Routes/Payment.routes.jsx";
import Role from "./Role/Routes/Role.routes.jsx";
import Currency from "./Currency/Routes/Currency.routes.jsx";
import Branch from "./Branch/Routes/Branch.routes.jsx";
import Size from "./Size/Routes/Size.routes.jsx";
import Inventory from "./Inventory/Routes/Inventory.routes.jsx";
import Catalog from "./Catalog/Routes/Catalog.routes.jsx";

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
            <Route path="currency/*" element={<Currency />} />
            <Route path="branch/*" element={<Branch />} />
            <Route path="size/*" element={<Size />} />
            <Route path="inventory/*" element={<Inventory />} />
            <Route path="catalog/*" element={<Catalog />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
