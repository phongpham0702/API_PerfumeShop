import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import AppLayOut from "./ui/AppLayOut";
import UserAccount from "./pages/UserAccount";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="brands" element={<Brands />} />
          <Route path="shop" element={<Shop />}>
            <Route index element={<Navigate replace to="1" />} />
            <Route path=":page" element={<ProductList />} />
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="account" element={<UserAccount />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
