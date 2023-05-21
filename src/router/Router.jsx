import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";

const Router = () => {
  return (
    <Routes>
      <Route path="/category/:id" element={<Category />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
