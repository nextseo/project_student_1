import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import RedirectIfAuthenticated from "./utils/RedirectIfAuthenticated";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import User from "./pages/User";
import Home from "./pages/Home";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/home/Header";
import { ContainerWithChildren } from "postcss/lib/container";
import Contact from "./pages/home/Contact";
import Layout from "./components/home/Layout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={2000} theme="colored" />
        <Routes>
          {/* ป้องกันผู้ใช้ที่ล็อกอินแล้วเข้าถึงหน้า / และ /login */}
          <Route
            path="/"
            element={
              <RedirectIfAuthenticated>
                <Layout />
              </RedirectIfAuthenticated>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route
            path="/login"
            element={
              <RedirectIfAuthenticated>
                <Login />
              </RedirectIfAuthenticated>
            }
          />

          
          {/* ป้องกันการเข้าถึงหน้าตามสิทธิ์ */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRoute allowedRoles={["employee"]}>
                <Employee />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
