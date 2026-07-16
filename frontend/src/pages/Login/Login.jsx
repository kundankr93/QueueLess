import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      login(data.token, data.user);

navigate("/dashboard", { replace: true });
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-box">

          <h1>Welcome Back 👋</h1>

          <p>Login to your QueueLess account</p>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
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