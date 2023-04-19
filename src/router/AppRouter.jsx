import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooTer from "../components/FooTer";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";

import NewBlog from "../pages/NewBlog";
import MyBlog from "../pages/MyBlog";
import Register from "../pages/Register";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="Profile" element={<Profile />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="MyBlog/detail/:id" element={<Detail />} />
          <Route path="/NewBlog" element={<NewBlog />} />
          <Route path="/MyBlog" element={<MyBlog />} />
        </Route>
      </Routes>
      <FooTer />
    </Router>
  );
};

export default AppRouter;
