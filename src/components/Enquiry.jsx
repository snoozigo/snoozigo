import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "../config/site.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { InstagramIcon } from "./BrandIcons.jsx";

export function Enquiry() {
  return (
    <section className="enquiry" id="contact">
      <div className="wrap wrap--narrow">
        <div className="enquiry__panel">
          <p className="kicker">Contact</p>
          <h2 className="section-title">Enquire or book</h2>
          <p className="section-lead">
            Message us on WhatsApp and we will confirm a bed.
          </p>

          <ul className="contact-list">
            <li>
              <div className="contact-row">
                <span className="contact-row__icon">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>Address</small>
                  <strong>{site.address}</strong>
                </span>
              </div>
            </li>
            <li>
              <a
                className="contact-row"
                href={whatsappLink(
                  `Hi ${site.name}, I have a question about a stay in ${site.city}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-row__icon">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>Phone · WhatsApp</small>
                  <strong>{site.phoneDisplay}</strong>
                </span>
              </a>
            </li>
            <li>
              <a className="contact-row" href={`mailto:${site.email}`}>
                <span className="contact-row__icon">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>Email</small>
                  <strong>{site.email}</strong>
                </span>
              </a>
            </li>
            <li>
              <div className="contact-row">
                <span className="contact-row__icon">
                  <Clock size={18} aria-hidden="true" />
                </span>
                <span>
                  <small>Check-in / check-out</small>
                  <strong>
                    {site.checkIn} · {site.checkOut}
                  </strong>
                </span>
              </div>
            </li>
            <li>
              <a
                className="contact-row"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-row__icon">
                  <InstagramIcon size={18} />
                </span>
                <span>
                  <small>Instagram</small>
                  <strong>{site.instagramHandle}</strong>
                </span>
              </a>
            </li>
          </ul>

          <a
            className="btn btn--yellow"
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={18} aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
