import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <div className="logo">
        <h1>QueueLess</h1>
      </div>

      <nav>

        <NavLink
          to="/dashboard"
          className="menu-item"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/myqueue"
          className="menu-item"
        >
          🎟 My Queue
        </NavLink>

        <NavLink
          to="/history"
          className="menu-item"
        >
          📜 History
        </NavLink>

        <NavLink
          to="/profile"
          className="menu-item"
        >
          👤 Profile
        </NavLink>

      </nav>

      <button
        className="logout-btn-side"
        onClick={handleLogout}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;