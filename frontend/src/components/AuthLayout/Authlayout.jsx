import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-container">

      <div className="auth-left">
        {children}
      </div>

      <div className="auth-right">

        <h1>QueueLess</h1>

        <p>
          Join queues digitally, save your time,
          and avoid long waiting lines.
        </p>

        <img
          src="/login-illustration.png"
          alt="QueueLess"
        />

      </div>

    </div>
  );
}

export default AuthLayout;