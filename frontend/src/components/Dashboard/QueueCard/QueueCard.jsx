import "./QueueCard.css";
import { useNavigate } from "react-router-dom";
import { joinQueue } from "../../../services/queueService";

function QueueCard({ organizations = [] }) {
  const navigate = useNavigate();

  const getEmoji = (type) => {
    switch (type) {
      case "Hospital":
        return "🏥";
      case "Bank":
        return "🏦";
      case "College":
        return "🎓";
      case "Government":
        return "🏛";
      default:
        return "🏢";
    }
  };

  const handleJoinQueue = async (organization) => {
    try {
      const res = await joinQueue(organization._id);

      navigate("/myqueue", {
        state: res.queue,
      });
    } catch (err) {
      if (
        err.response?.data?.message ===
        "You already joined this queue"
      ) {
        navigate("/myqueue");
        return;
      }

      alert(
        err.response?.data?.message ||
        "Unable to join queue"
      );
    }
  };

  return (
    <div className="queue-grid">
      {organizations.map((org) => (
        <div className="queue-card" key={org._id}>

          <div className="queue-image">
            {org.image ? (
              <img src={org.image} alt={org.name} />
            ) : (
              <div className="queue-placeholder">
                {getEmoji(org.type)}
              </div>
            )}
          </div>

          <div className="queue-content">

            <h2>
              {getEmoji(org.type)} {org.name}
            </h2>

            <p className="address">
              📍 {org.address}
            </p>

            <div className="queue-info">

              <div>
                <span>Waiting</span>
                <strong>{org.waiting}</strong>
              </div>

              <div>
                <span>Avg Time</span>
                <strong>{org.avgTime} min</strong>
              </div>

            </div>

            <button
              className="join-btn"
              onClick={() => handleJoinQueue(org)}
            >
              Join Queue
            </button>

          </div>

        </div>
      ))}
    </div>
  );
}

export default QueueCard;