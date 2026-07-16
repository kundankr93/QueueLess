import "./DashboardHeader.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function DashboardHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div className="dashboard-header">

      <div className="header-left">
        <h1>
          {greeting},{" "}
          <span>{user?.name || "User"}</span> 👋
        </h1>

        <p>
          Manage your queues without standing in one.
        </p>
      </div>

      <div className="header-right">

        <button className="notification-btn">
          🔔
        </button>

        <div className="profile-box">
          <div className="avatar">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div>
            <strong>{user?.name}</strong>
            <p>{user?.email}</p>
          </div>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default DashboardHeader;