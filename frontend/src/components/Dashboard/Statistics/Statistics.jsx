import "./Statistics.css";

function Statistics({ organizations }) {
  const totalOrganizations = organizations.length;

  const totalWaiting = organizations.reduce(
    (sum, org) => sum + org.waiting,
    0
  );

  const averageWait =
    totalOrganizations > 0
      ? Math.round(
          organizations.reduce(
            (sum, org) => sum + org.avgTime,
            0
          ) / totalOrganizations
        )
      : 0;

  return (
    <div className="stats-grid">

      <div className="stat-card">
        <h2>🏥</h2>
        <h3>{totalOrganizations}</h3>
        <p>Organizations</p>
      </div>

      <div className="stat-card">
        <h2>👥</h2>
        <h3>{totalWaiting}</h3>
        <p>Total Waiting</p>
      </div>

      <div className="stat-card">
        <h2>⏱</h2>
        <h3>{averageWait} min</h3>
        <p>Average Wait</p>
      </div>

      <div className="stat-card">
        <h2>🚀</h2>
        <h3>QueueLess</h3>
        <p>Smart Queue</p>
      </div>

    </div>
  );
}

export default Statistics;