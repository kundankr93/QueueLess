import "./QueueCard.css";
import { useNavigate } from "react-router-dom";

function QueueCard({ organizations }) {

  const navigate = useNavigate();

  const handleJoinQueue = (item) => {

    console.log("Joining:", item.name);

    navigate("/myqueue", {
      state: item,
    });

  };

  return (

    <div className="queue-grid">

      {organizations.map((item) => (

        <div className="queue-card" key={item.id}>

          <h2>
            {item.icon} {item.name}
          </h2>

          <p>
            Current Queue :
            <strong> {item.waiting}</strong>
          </p>

          <p>
            Estimated Wait :
            <strong> {item.time}</strong>
          </p>

          <button
            onClick={() => handleJoinQueue(item)}
          >
            Join Queue
          </button>

        </div>

      ))}

    </div>

  );

}

export default QueueCard;