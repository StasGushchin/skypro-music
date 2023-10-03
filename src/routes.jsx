import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Favorites } from "./pages/Favorites";
import { CategoryPage1 } from "./pages/CategoryPage1";
import { CategoryPage2 } from "./pages/CategoryPage2";
import { CategoryPage3 } from "./pages/CategoryPage3";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/category1" element={<CategoryPage1/>} />
      <Route path="/category2" element={<CategoryPage2/>} />
      <Route path="/category3" element={<CategoryPage3/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
};