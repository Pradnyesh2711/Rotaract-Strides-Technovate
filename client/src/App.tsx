import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import HomeLayout from "layouts/home";
const App = () => {
  return (
    <Routes>
      <Route path="home/*" element={<HomeLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route
        path="/"
        element={
          localStorage.getItem("token") ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Navigate to="/auth" replace />
          )
        }
      />
    </Routes>
  );
};
export default App;
