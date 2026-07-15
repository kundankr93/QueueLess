import "./Footer.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">
          <h2>QueueLess</h2>

          <p>
            Smart Digital Queue Management System that saves time,
            reduces waiting, and improves customer experience.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-column">
          <h3>Quick Links</h3>
          <footer id="contact"></footer>

          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}

        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Hospitals</li>
            <li>Banks</li>
            <li>Government Offices</li>
            <li>Colleges</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-column">
          <h3>Contact</h3>

          <p><FaEnvelope /> support@queueless.com</p>

          <p><FaPhoneAlt /> +91 9876543210</p>

          <p><FaMapMarkerAlt /> Raipur, India</p>

        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 QueueLess. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;