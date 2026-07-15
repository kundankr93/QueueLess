import "./Statistics.css";

const stats = [
  {
    number: "5000+",
    title: "Happy Users",
  },
  {
    number: "120+",
    title: "Organizations",
  },
  {
    number: "10 min",
    title: "Average Waiting Time",
  },
  {
    number: "99%",
    title: "Customer Satisfaction",
  },
];

function Statistics() {
  return (
    <section className="statistics">

      <div className="statistics-heading">
        <h2>Trusted by Thousands</h2>

        <p>
          QueueLess is helping organizations reduce waiting time and improve customer experience.
        </p>
      </div>

      <div className="statistics-container">

        {stats.map((item, index) => (
          <div className="statistics-card" key={index}>
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Statistics;