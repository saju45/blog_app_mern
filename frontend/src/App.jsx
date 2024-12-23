import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddBlog from "./components/admin components/add blog/AddBlog";
import ADashboard from "./components/admin components/dashboard/AdminDashboard";
import UpdateBlog from "./components/admin components/edit blog/compo/UpdateBlog";
import EditBlog from "./components/admin components/edit blog/editBlog";
import DashBoard from "./components/profile/DashBoard";
import Favourites from "./components/profile/Favourites";
import LikedBlogs from "./components/profile/LikedBlogs";
import MainLayout from "./layout/MainLayout";
import OtherLayout from "./layout/OtherLayout";
import AdminDashboard from "./pages/admin dashboard/Page";
import AdminLogin from "./pages/Admin login/AdminLogin";
import AllBlogs from "./pages/all blogs/Page";
import Categories from "./pages/categories/Page";
import Description from "./pages/description/Page";
import Home from "./pages/Home/Page";
import Login from "./pages/Login/Page";
import Profile from "./pages/profile/Page";
import SignUp from "./pages/sign up/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<Description />} />
          <Route path="/cat/:id" element={<Categories />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<DashBoard />} />
            <Route path="/profile/liked-blogs" element={<LikedBlogs />} />
            <Route path="/profile/favourites" element={<Favourites />} />
          </Route>
        </Route>

        <Route element={<OtherLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<ADashboard />} />
            <Route path="/admin-dashboard/add-blog" element={<AddBlog />} />
            <Route path="/admin-dashboard/edit-blog" element={<EditBlog />} />
            <Route
              path="/admin-dashboard/update-blog/:id"
              element={<UpdateBlog />}
            />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
