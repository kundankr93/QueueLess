import DashboardHeader from "../DashboardHeader/DashboardHeader";
import SearchBar from "../SearchBar/SearchBar";
import QueueCard from "../QueueCard/QueueCard";

function DashboardContent({
  search,
  setSearch,
  organizations,
}) {
  return (
    <>
      <DashboardHeader />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <QueueCard
        organizations={organizations}
      />
    </>
  );
}

export default DashboardContent;