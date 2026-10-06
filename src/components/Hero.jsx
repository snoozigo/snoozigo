import { formatPrice, site } from "../config/site.js";
import { bookingMessage, whatsappLink } from "../lib/whatsapp.js";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <img
          src={`${import.meta.env.BASE_URL}images/lounge.jpg`}
          alt="The snoozigo lounge, with a mural and yellow cushions"
          fetchPriority="high"
        />
      </div>
      <div className="wrap hero__content">
        <p className="hero__kicker">
          {site.city} · Daily stays from {formatPrice()}
        </p>
        <h1>
          Your budget&#8209;friendly
          <br />
          <em>home</em> awaits
        </h1>
        <p className="hero__lead">
          Premium dormitory and co-living for backpackers, travelers, students,
          and everyone. Make friends, explore, and call {site.city} your home.
        </p>
        <div className="hero__actions">
          <a
            className="btn btn--yellow"
            href={whatsappLink(bookingMessage())}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <a className="btn btn--ghost" href="#rooms">
            See rooms
          </a>
        </div>
        <ul className="hero__stats">
          <li>
            <strong>{formatPrice()}</strong>
            <span>per night</span>
          </li>
          <li>
            <strong>AC dorms</strong>
            <span>mixed and female only</span>
          </li>
          <li>
            <strong>Free Wi-Fi</strong>
            <span>and a real lounge</span>
          </li>
        </ul>
      </div>
    </section>
  );
}