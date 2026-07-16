import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Queue from "./pages/Queue/Queue";
import Admin from "./pages/Admin/Admin";
import MyQueue from "./pages/MyQueue/MyQueue";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/queue"
        element={
          <ProtectedRoute>
            <Queue />
          </ProtectedRoute>
        }
      />

      <Route
        path="/myqueue"
        element={
          <ProtectedRoute>
            <MyQueue />
          </ProtectedRoute>
        }
      />
      <Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;