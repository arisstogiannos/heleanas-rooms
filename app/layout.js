import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothContainer from "@/components/global/SmoothContainer";
import Cursor from "@/components/global/Cursor";
import Footer from "@/components/footer/Footer";
import FooterMobile from "@/components/footer/FooterMobile";

export const metadata = {
  title: "Helena's Rooms",
  description: "Nestled in the heart of Kassiopi, our apartments offer a perfect mix of tradition and comfort. With a welcoming terrace and just a short walk to Corfu’s sandy shores, you'll enjoy a relaxing escape",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={playfair.style} className="bg-mwhite  ">
      

        <SmoothContainer>
        <Navbar />

        {children}
        
        <FooterMobile/>
        <Footer/>
        </SmoothContainer>
        <Cursor/>
      </body>
    </html>
  );
}
