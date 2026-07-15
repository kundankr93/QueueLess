import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-logo">
        QueueLess
      </h2>

      <ul>

        <li>🏠 Dashboard</li>

        <li>🎟 My Queue</li>

        <li>📜 History</li>

        <li>👤 Profile</li>

        <li>🚪 Logout</li>

      </ul>

    </div>
  );
}

export default Sidebar;