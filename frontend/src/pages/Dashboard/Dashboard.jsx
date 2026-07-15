import "./Dashboard.css";
import { useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardContent from "../../components/Dashboard/DashboardContent/DashboardContent";

import organizations from "../../data/organizations";

function Dashboard() {

  const [search, setSearch] = useState("");

  const filteredOrganizations = organizations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <DashboardContent
          search={search}
          setSearch={setSearch}
          organizations={filteredOrganizations}
        />

      </div>

    </div>
  );
}

export default Dashboard;