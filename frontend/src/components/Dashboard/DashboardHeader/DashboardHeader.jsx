import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <div className="dashboard-header">

      <div>
        <h1>Welcome Back 👋</h1>
        <p>Find an organization and join a queue.</p>
      </div>

      <button className="logout-btn">
        Logout
      </button>

    </div>
  );
}

export default DashboardHeader;