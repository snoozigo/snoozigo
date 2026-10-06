import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Rooms } from "./components/Rooms.jsx";
import { Services } from "./components/Services.jsx";
import { Enquiry } from "./components/Enquiry.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppIcon } from "./components/BrandIcons.jsx";
import { bookingMessage, whatsappLink } from "./lib/whatsapp.js";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Enquiry />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={whatsappLink(bookingMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
