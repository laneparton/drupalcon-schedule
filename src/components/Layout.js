import React from "react";
import "../styles/global.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col justify-between h-screen">
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
