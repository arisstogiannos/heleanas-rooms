import About from "@/components/about/About";
import Apartments from "@/components/apartments/Apartments";
import Cursor from "@/components/global/Cursor";
import Loader from "@/components/global/Loader";
import Guide from "@/components/guide/Guide";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {

  
  return (
   <main className="colorChanger ">
    <Loader/>
    <Hero/>
    <About/>
    <Apartments/>
    <Guide/>
    <Testimonials/>
   
   </main>
  );
}
