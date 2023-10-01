import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Photography from "./components/Photography";
import Certificate from "./components/Certificate";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <About />
      <Certificate />
      <Blog />
      <Photography />
      <Testimonial />
      <Cta />
      <BackToTopBtn />
      <Footer />
    </main>
  );
}
