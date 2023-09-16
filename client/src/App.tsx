import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Home from "layouts/home/user_index";
import HomeLayout from "layouts/home";
import AboutUs from "layouts/about";
import ContactUs from "layouts/contact";
import EventCard from "layouts/eventcardPage";
import Login from "components/login";
import Register from "components/register";
import Checkout from "components/checkout";
import PaymentConfirmation from "components/PaymentConformation";
const App = () => {
  return (
    <Routes>
      <Route path="home/*" element={< Home/>} />
      <Route path="home/user" element={<EventCard/>} />
      <Route path="home/about" element={<AboutUs/>} />
  <Route path="home/contact" element={<ContactUs/>} />
  <Route path="home/login" element={<Login/>} />
  <Route path="home/register" element={<Register/>} />
      <Route path="home/landing" element={<HomeLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="home/user/checkout" element={<Checkout />} />
      <Route path="home/user/checkout/payment" element={<PaymentConfirmation />} />
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
