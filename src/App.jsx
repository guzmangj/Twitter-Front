import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UserFollowers from "./pages/UserFollowers";
import UserFollowing from "./pages/UserFollowing";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/followers" element={<UserFollowers />} />
        <Route path="/profile/:id/following" element={<UserFollowing />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
