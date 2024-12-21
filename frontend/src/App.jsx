import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import OtherLayout from "./layout/OtherLayout";
import AdminDashboard from "./pages/admin dashboard/Page";
import AllBlogs from "./pages/all blogs/Page";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<OtherLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
