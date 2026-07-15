import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p className="badge">
    🚀 Smart Digital Queue Management
</p>

       <h1>
  Skip the Queue,
  <span> Save Your Time.</span>
</h1>

        <p>
  Join virtual queues from anywhere and receive live updates
  about your turn. Save time and avoid standing in long lines.
</p>

        <div className="hero-buttons">
          <button className="join-btn">
            Join Queue
          </button>

          <button className="learn-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-right">

        <img src="/hero.png" alt="Hero"/>

      </div>

    </section>
  );
}

export default Hero;