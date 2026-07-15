import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-box">

          <h1>Create Account 🚀</h1>

          <p>Create your QueueLess account</p>

          <form>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />

            <button type="submit">
              Register
            </button>

          </form>

          <p className="bottom-text">
            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

      <div className="login-right">

        <img
          src="/queueless.png"
          alt="QueueLess"
        />


        <p>
          Create your account and manage queues from anywhere.
        </p>

      </div>

    </div>
  );
}

export default Register;