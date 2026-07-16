import "./MyQueue.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getMyQueue,
  leaveQueue,
} from "../../services/queueService";

function MyQueue() {
  const navigate = useNavigate();

  const [queue, setQueue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyQueue();
  }, []);

  const fetchMyQueue = async () => {
    try {
      const data = await getMyQueue();

      if (data.queues && data.queues.length > 0) {
        setQueue(data.queues[0]);
      } else {
        setQueue(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLeaveQueue = async () => {
    const confirmLeave = window.confirm(
      "Are you sure you want to leave this queue?"
    );

    if (!confirmLeave) return;

    try {
      await leaveQueue(queue._id);

      alert("Queue Left Successfully");

      setQueue(null);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to leave queue"
      );
    }
  };

  if (loading) {
    return (
      <div className="myqueue">
        <h2 className="loading">
          Loading...
        </h2>
      </div>
    );
  }

  if (!queue) {
    return (
      <div className="myqueue">
        <div className="token-card no-queue">
          <h2>No Active Queue</h2>

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            Join Queue
          </button>
        </div>
      </div>
    );
  }

  const progress =
    queue.tokenNumber > 0
      ? ((queue.tokenNumber - queue.position) /
          queue.tokenNumber) *
        100
      : 0;

  return (
    <div className="myqueue">
      <div className="token-card">
        <h1>🎉 My Queue</h1>

        <h2>{queue.organization.name}</h2>

        <p className="location">
          📍 {queue.organization.address}
        </p>

        <div
          className={`status ${queue.status.toLowerCase()}`}
        >
          {queue.status}
        </div>

        <h3 className="token-title">
          Your Token
        </h3>

        <div className="token">
          #{queue.tokenNumber}
        </div>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <div className="queue-info">
          <p>
            👥 Position :
            <strong> {queue.position}</strong>
          </p>

          <p>
            ⏱ Estimated Wait :
            <strong>
              {" "}
              {queue.estimatedTime} mins
            </strong>
          </p>
        </div>

        <div className="button-group">
          <button
            className="back-btn"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Dashboard
          </button>

          {queue.status === "Waiting" && (
  <button
    className="leave-btn"
    onClick={handleLeaveQueue}
  >
    Leave Queue
  </button>
)}
        </div>
      </div>
    </div>
  );
}

export default MyQueue;