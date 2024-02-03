import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<UserManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/userInfo/:id" element={<UserInfo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
