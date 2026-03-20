import Benefits from "./components/landing/Benefits";
import Calculator from "./components/landing/Calculator";
import FinalCTA from "./components/landing/FinalCTA";
import Footer from "./components/landing/Footer";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
export default function HomePage() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Calculator />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
}