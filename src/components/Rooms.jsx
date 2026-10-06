import { Check } from "lucide-react";
import { formatPrice, rooms } from "../config/site.js";
import { bookingMessage, whatsappLink } from "../lib/whatsapp.js";
import { Carousel } from "./Carousel.jsx";

export function Rooms() {
  return (
    <section className="rooms" id="rooms">
      <div className="wrap">
        <p className="kicker kicker--light">Rooms</p>
        <h2 className="section-title">Our dormitory options</h2>
        <p className="section-lead">
          Two rooms, one price. Both come with a locker, a curtain, and the
          lounge downstairs.
        </p>
        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.id}>
              <div className="room-card__media">
                <span className="room-card__badge">{room.badge}</span>
                <Carousel images={room.images} label={`${room.name} photos`} />
              </div>
              <div className="room-card__body">
                <div className="room-card__heading">
                  <h3>{room.name}</h3>
                  <p className="room-card__price">
                    <strong>{formatPrice()}</strong>
                    <span>/ night</span>
                  </p>
                </div>
                <p className="room-card__summary">{room.summary}</p>
                <ul className="room-card__features">
                  {room.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="btn btn--yellow btn--block"
                  href={whatsappLink(bookingMessage(room.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Select Room
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
