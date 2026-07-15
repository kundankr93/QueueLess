import "./MyQueue.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function MyQueue() {

  const navigate = useNavigate();
  const location = useLocation();

  // Organization received from Dashboard
  const organization = location.state;
  

  // If user directly opens /myqueue without selecting an organization
  if (!organization) {
    return (
      <div className="myqueue">
        <div className="token-card">
          <h2>No Queue Selected</h2>
          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const totalPeople = organization.waiting;

  const [peopleAhead, setPeopleAhead] = useState(totalPeople);

  // 2 minutes per person
  const waitTime = peopleAhead * 2;

  useEffect(() => {

    const timer = setInterval(() => {

      setPeopleAhead((prev) => {

        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;

      });

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  const progress =
    ((totalPeople - peopleAhead) / totalPeople) * 100;

  return (

    <div className="myqueue">

      <div className="token-card">

        <h1>🎉 Queue Joined Successfully</h1>

       <h2 style={{ color: "red" }}>
  {organization.icon} {organization.name}
</h2>



        <div
          className={`status ${
            peopleAhead === 0 ? "served" : "waiting"
          }`}
        >
          {peopleAhead === 0
            ? "🎉 It's Your Turn!"
            : "⏳ Waiting..."}
        </div>

        <h3>Your Token</h3>

        <div className="token">
          {organization.tokenPrefix}-101
        </div>

        <div className="progress-container">

          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <p>
          👥 People Ahead :
          <strong> {peopleAhead}</strong>
        </p>

        <p>
          ⏱ Estimated Wait :
          <strong> {waitTime} mins</strong>
        </p>

        <div className="button-group">

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

          <button
            className="track-btn"
            onClick={() =>
              alert("Live Tracking Coming Soon 🚀")
            }
          >
            Track Queue
          </button>

        </div>

      </div>

    </div>

  );
}

export default MyQueue;