import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login
    // Later we'll verify user from backend

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* Left Section */}
      <div className="login-left">

        <div className="login-box">

          <h1>Welcome Back 👋</h1>

          <p>Login to your QueueLess account</p>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          <p className="bottom-text">
            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="login-right">

        <img
          src="/queueless.png"
          alt="QueueLess"
        />

        <h2>Skip the Queue.</h2>

        <p>
          Join digitally and save your valuable time.
        </p>

      </div>

    </div>
  );
}

export default Login;