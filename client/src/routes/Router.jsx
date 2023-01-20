import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../_share/admin/Admin";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Storries from "../pages/storries/Storries";
import Photo from "../pages/photo/Photo";
import Music from "../pages/music/Music";
import General from "../pages/general/General";
import SignUp from "../pages/sign_up/SignUp";
const Router = () => {
  const publicRoutes = () => (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/general" element={<General />}>
        <Route path="home" element={<Home />} />
        <Route path="storries" element={<Storries />} />
        <Route path="photo" element={<Photo />} />
        <Route path="music" element={<Music />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
  return <BrowserRouter>{publicRoutes()}</BrowserRouter>;
};

export default Router;
