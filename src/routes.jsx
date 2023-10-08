import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Error from "./pages/Error";
import { ProtectedRoute } from "./ProtectedRoutes/ProtectedRoutes";
import Collection from "./pages/Categories";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/category/:id" element={<Collection/>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
};