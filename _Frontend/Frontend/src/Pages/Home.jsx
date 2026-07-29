import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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
import ProgramHighlights from "../components/ProgramHighlights";
import LiveSession from "../components/LiveSession";
import Outcomes from "../components/Outcomes";
import FeatureStrip from "../components/FeatureStrip";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProgramHighlights />
      <LiveSession />
      <FeatureStrip />
      <section id="problem">
        <Problem />
      </section>
      <Approach />
      <Audience />
      <Outcomes />
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