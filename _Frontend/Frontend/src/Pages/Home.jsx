import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LiveSession from "../components/LiveSession";
import Marq from "../components/Marq";
import Problem from "../components/Problem";
import Approach from "../components/Approach";
import Audience from "../components/Audience";
import Difference from "../components/Difference";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveSession />
      <Marq />
      <Problem />
      <Approach />
      <Audience />
      <Difference />
      <Process />
      <Portfolio />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}