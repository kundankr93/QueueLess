import "./History.css";
import { useEffect, useState } from "react";
import { getHistory } from "../../services/queueService";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getHistory();
      setHistory(data.history);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="history-page">
        <h1>📜 Queue History</h1>
        <div className="empty-history">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="history-page">
      <h1>📜 Queue History</h1>

      {history.length === 0 ? (
        <div className="empty-history">
          <h2>No Queue History Yet</h2>

          <p>
            Your completed and cancelled queues will appear here.
          </p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div className="history-card" key={item._id}>
              <div className="history-header">
                <h2>{item.organization.name}</h2>

                <span
                  className={`status ${
                    item.status === "Completed"
                      ? "completed"
                      : "cancelled"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="history-body">
                <div className="info-box">
                  <div className="info-title">
                    Token Number
                  </div>

                  <div className="info-value">
                    #{item.tokenNumber}
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-title">
                    Location
                  </div>

                  <div className="info-value">
                    {item.organization.address}
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-title">
                    Visited On
                  </div>

                  <div className="info-value">
                    {new Date(item.updatedAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;