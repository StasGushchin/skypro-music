import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Error from "./pages/Error";
import { ProtectedRoute } from "./ProtectedRoutes/ProtectedRoutes";
import Collection from "./pages/Categories";


export const AppRoutes = () => {

  const [user, setUser] = useState(localStorage.getItem("user"))

  const setAuth = () => {
    localStorage.setItem("user", "Stas")
    setUser(localStorage.getItem("user"))
  }

  const removeAuth = () => {
    localStorage.removeItem("user")
    setUser(false)
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/" element={<MainPage/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/category/:id" element={<Collection/>} />
      </Route>
      <Route path="/login" element={<Login setAuth={setAuth}/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
};