import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import ShopComponent from "@/components/ShopComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopComponent />}>
          <Route path="drugs" element={<div>DRUGS</div>} />
          <Route path="pharmacy" element={<div>PHARMACY</div>} />
          <Route path="syrops" element={<div>SYROPS</div>} />
        </Route>
        <Route path="shopCart" element={<div>ShoppingCart</div>} />
      </Route>
    </Routes>
  );
};

export default App;
