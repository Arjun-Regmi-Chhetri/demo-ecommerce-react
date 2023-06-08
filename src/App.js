import Navbar from "./component/Navbar";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import CategoryProduct from "./category/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* This is the index or main page */}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/category/:product" element={<CategoryProduct />} />

          {/* This is About page */}
          <Route path="/about" element={<About />} />

          {/* This is product page */}
          <Route path="/product" element={<Product list="Product List" />} />

          {/* Navigate to product Detail page */}
          <Route
            path="/productDetail/:productId"
            element={<ProductDetail name="Product Detail" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
