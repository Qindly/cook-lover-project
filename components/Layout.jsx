// FILEPATH: d:/frontend/cook-lover-project/components/Layout.jsx
"use client";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { UserProvider, useUserContext } from "../context/UserContext";

const LayoutContent = ({ children }) => {
  const { showLoginModal } = useUserContext();

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
      {showLoginModal && <Login />}
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <UserProvider>
      <LayoutContent>{children}</LayoutContent>
    </UserProvider>
  );
};

export default Layout;