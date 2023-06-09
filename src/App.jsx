import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Error404 from "./pages/Error404";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/followers" element={<Followers />} />
        <Route path="/profile/:id/following" element={<Following />} />
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
