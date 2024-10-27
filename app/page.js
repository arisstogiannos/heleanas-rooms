import About from "@/components/about/About";
import Apartments from "@/components/apartments/Apartments";
import Guide from "@/components/guide/Guide";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {

  
  return (
   <main className="colorChanger ">
    <Hero/>
    <About/>
    <Apartments/>
    <Guide/>
    <Testimonials/>
   
   </main>
  );
}
