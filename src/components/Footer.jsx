import { navLinks, site } from "../config/site.js";
import { bookingMessage, whatsappLink } from "../lib/whatsapp.js";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons.jsx";

const footerLinks = navLinks.filter((link) => link.id !== "home");
const year = new Date().getFullYear();

export function Footer() {

  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <a className="brand brand--footer" href="#home">
            <img src={`${import.meta.env.BASE_URL}images/logo.jpg`} alt="" width="44" height="44" />
            <span className="wordmark">
              snoozi<span>go</span>
            </span>
          </a>
          <p className="footer__about">
            {site.tagline} in {site.city}. A clean bed, a locker, and a lounge
            for travelers, students, and everyone else passing through.
          </p>
        </div>
        <div>
          <h2>Quick links</h2>
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>About {site.name}</h2>
          <ul className="footer__links">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(bookingMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {site.address}
              </a>
            </li>
          </ul>
          <div className="social">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappLink(bookingMessage())}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="wrap footer__bar">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
