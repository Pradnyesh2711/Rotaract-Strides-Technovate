import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import HomeLayout from "layouts/home";
import AboutUs from "layouts/about";
import ContactUs from "layouts/contact";
const App = () => {
  return (
    <Routes>
<Route path="home/about" element={<AboutUs/>} />
<Route path="home/contact" element={<ContactUs/>} />
      <Route path="home/landing" element={<HomeLayout />} />
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
