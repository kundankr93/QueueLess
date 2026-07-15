import "./HowItWorks.css";
import {
  FaUserPlus,
  FaTicketAlt,
  FaMobileAlt,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Join Queue",
    description: "Select the organization and join the queue online.",
  },
  {
    icon: <FaTicketAlt />,
    title: "Get Token",
    description: "Receive a unique digital token instantly.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Track Position",
    description: "Check your live queue position anytime.",
  },
  {
    icon: <FaBell />,
    title: "Get Notification",
    description: "Receive an alert when your turn is near.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Visit Counter",
    description: "Arrive only when your number is called.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="section-title">
        <h2>How QueueLess Works</h2>

        <p>
          Join the queue digitally and save valuable time.
        </p>
      </div>

      <div className="steps">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;