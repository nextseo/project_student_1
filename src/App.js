import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import RedirectIfAuthenticated from "./utils/RedirectIfAuthenticated";
import Login from "./pages/Login";
import EmployeePage from "./pages/employee/Page";
import Customer from "./pages/customer/Page";
import User from "./pages/user/Page";

import Home from "./pages/Home";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/home/Contact";
import Layout from "./components/home/Layout";
import CustomerLayout from "./layout/CustomerLayout";
import EmployeeLayout from "./layout/EmployeeLayout";
import EmployeeData from "./pages/employee/EmployeeData";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ToastContainer autoClose={2000} theme="colored" />

          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <RedirectIfAuthenticated>
                  <Layout />
                </RedirectIfAuthenticated>
              }
            >
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* Login Route */}
            <Route
              path="/login"
              element={
                <RedirectIfAuthenticated>
                  <Login />
                </RedirectIfAuthenticated>
              }
            />

            {/* Employee Dashboard */}

            <Route
              path="/employee"
              element={<ProtectedRoute allowedRoles={["employee"]} />}
            >
              <Route element={<EmployeeLayout />}>
                <Route index element={<EmployeePage />} />
                <Route path="employee_data" element={<EmployeeData />} />
                <Route path="*" element={<Navigate to="/employee" />} />
              </Route>
            </Route>

            {/* Customer Dashboard */}
            <Route
              path="/customer"
              element={<ProtectedRoute allowedRoles={["customer"]} />}
            >
              <Route element={<CustomerLayout />}>
                <Route index element={<Customer />} />
                <Route path="*" element={<Navigate to="/customer" />} />
              </Route>
            </Route>

            {/* User Dashboard */}
            <Route
              path="/user"
              element={<ProtectedRoute allowedRoles={["user"]} />}
            >
              <Route index element={<User />} />
              <Route path="*" element={<Navigate to="/user" />} />
            </Route>

            {/* Redirect for Undefined Routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
