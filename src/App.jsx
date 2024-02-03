import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserInfo from "./pages/UserInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/userInfo/:id" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
