import { Route, Routes } from "react-router-dom";
import Home from "./HomePage/Pages/Home";
import Collection from "./Collection/Pages/Collection";
import About from "./About/Pages/About";
import Contact from "./Contact/Pages/Contact";
import Product from "./Product/Pages/Product";
import Cart from "./Cart/Pages/Cart";
import Login from "./Login/Pages/Login";
import { Orders, PlaceOrder } from "./Orders/Pages";
import { Footer, Navbar } from "./Generals/Components";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
      <Navbar />
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
