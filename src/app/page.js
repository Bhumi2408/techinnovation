import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Products from "./components/Products";
import Quality from "./components/Quality";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-0">
        <Hero />
        <Aboutus />
        <Products />
        <Process/>
        <Quality/>
        <WhyChoose/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
