import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PrivateLayout from "./layouts/PrivateLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/chats" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/chats" element={<PrivateLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
