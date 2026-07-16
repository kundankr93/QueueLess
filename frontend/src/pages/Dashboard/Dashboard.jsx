import "./Dashboard.css";
import { useEffect, useState } from "react";
import API from "../../api/api";

import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import SearchBar from "../../components/Dashboard/SearchBar/SearchBar";
import QueueCard from "../../components/Dashboard/QueueCard/QueueCard";
import Statistics from "../../components/Dashboard/Statistics/Statistics";

function Dashboard() {
  const [organizations, setOrganizations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchOrganizations();
  }, []);

  useEffect(() => {
    const result = organizations.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(result);
  }, [search, organizations]);

  const fetchOrganizations = async () => {
    try {
      const { data } = await API.get("/organizations");

      setOrganizations(data.organizations);
      setFiltered(data.organizations);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-right">

        <DashboardHeader />

<Statistics organizations={organizations} />
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <QueueCard
          organizations={filtered}
        />

      </div>

    </div>
  );
}

export default Dashboard;