import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../config/site.js";
import { useScrolled } from "../hooks/useScrolled.js";
import { bookingMessage, whatsappLink } from "../lib/whatsapp.js";

export function Header() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const bookHref = whatsappLink(bookingMessage());

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="header__bar">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}images/logo.jpg`} alt="" width="44" height="44" />
          <span className="wordmark">
            snoozi<span>go</span>
          </span>
        </a>

        <nav id="site-nav" className={open ? "nav is-open" : "nav"}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--yellow nav__book"
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>

        <div className="header__actions">
          <a
            className="btn btn--yellow header__book"
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}