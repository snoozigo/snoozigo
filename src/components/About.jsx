import { site } from "../config/site.js";

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <div>
          <p className="kicker">About us</p>
          <h2 className="section-title">A dormitory you can actually live in</h2>
          <p className="section-lead">
            {site.name} is a daily-rental dormitory and co-living space in{" "}
            {site.city}. Beds are made, the air-con is on, and the lounge is
            where the day usually starts.
          </p>
          <p className="about__copy">
            The house is for backpackers, travelers, nomads, students,
            professionals, and locals. Stay a night between trains, or keep the
            bed while you figure out the city.
          </p>
          <blockquote className="mission">
            <p>
              Quality, affordable accommodation — social when you want it,
              quiet when you don’t.
            </p>
          </blockquote>
        </div>
        <figure className="about__frame">
          <img
            src="/images/dorm.jpg"
            alt="snoozigo dormitory bunks with orange frames and black bedding"
            loading="lazy"
          />
          <figcaption>AC bunks · {site.city}</figcaption>
        </figure>
      </div>
    </section>
  );
}
