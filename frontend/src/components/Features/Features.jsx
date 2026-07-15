import "./Features.css";
import {
  FaQrcode,
  FaClock,
  FaBell,
  FaChartBar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaQrcode />,
    title: "Digital Token",
    description: "Generate a queue token instantly from your phone.",
  },
  {
    icon: <FaClock />,
    title: "Live Queue Tracking",
    description: "Track your queue position in real time.",
  },
  {
    icon: <FaBell />,
    title: "Smart Notifications",
    description: "Get notified when your turn is near.",
  },
  {
    icon: <FaChartBar />,
    title: "Queue Analytics",
    description: "Monitor queue performance and waiting times.",
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2>Powerful Features</h2>
        <p>
          Everything you need to manage queues efficiently.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;