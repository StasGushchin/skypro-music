import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Favorites from "./pages/Favorites/Favorites";
import CategoryPage1 from "./pages/CategoryPage1/CategoryPage1";
import CategoryPage2 from "./pages/CategoryPage2/CategoryPage2";
import CategoryPage3 from "./pages/CategoryPage3/CategoryPage3";
import Login from "./pages/Login/Login";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Error from "./pages/Error/Error";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/category1" element={<CategoryPage1/>} />
      <Route path="/category2" element={<CategoryPage2/>} />
      <Route path="/category3" element={<CategoryPage3/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<RegistrationPage/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
};