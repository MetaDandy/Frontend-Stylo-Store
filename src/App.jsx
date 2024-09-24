import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./HomePage/Pages/Home";
import Collection from "./Collection/Pages/Collection";
import About from "./About/Pages/About";
import Contact from "./Contact/Pages/Contact";
import Product from "./Product/Pages/Product";
import Cart from "./Cart/Pages/Cart";
import Login from "./Login/Pages/Login";
import { Orders, PlaceOrder } from "./Orders/Pages";
import { Footer, Navbar, SearchBar } from "./Generals/Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Admin/Admin.Routes";
import ProtectedRoute from "./Admin/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/managment");

  return (
    <div
      className={`${
        isAdminRoute ? "" : "px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]"
      }`}
    >
      <ToastContainer />
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <SearchBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/managment/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
