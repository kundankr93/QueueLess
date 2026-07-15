import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Statistics from "../../components/Statistics/Statistics";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Statistics />
      <Footer />
    </>
  );
}

export default Home;