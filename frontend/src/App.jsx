import { Routes, Route } from "react-router-dom";
import MyQueue from "./pages/MyQueue/MyQueue";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Queue from "./pages/Queue/Queue";
import Admin from "./pages/Admin/Admin";

function App() {

  return (

    <Routes>

      <Route path="/myqueue" element={<MyQueue />} />

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/queue" element={<Queue />} />

      <Route path="/admin" element={<Admin />} />

    </Routes>

  );

}

export default App;