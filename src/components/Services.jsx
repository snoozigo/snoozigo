import {
  AirVent,
  Car,
  Gamepad2,
  HeartPulse,
  Lock,
  PartyPopper,
  Shirt,
  ShowerHead,
  Wifi,
} from "lucide-react";
import { services } from "../config/site.js";

const icons = {
  wifi: Wifi,
  ac: AirVent,
  parking: Car,
  shower: ShowerHead,
  locker: Lock,
  laundry: Shirt,
  aid: HeartPulse,
  events: PartyPopper,
  games: Gamepad2,
};

export function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <p className="kicker">Services</p>
        <h2 className="section-title">What is included</h2>
        <p className="section-lead">
          The practical things, lined up. Scroll sideways to see the full list.
        </p>
      </div>
      <div className="services__scroller">
        <ul className="services__track">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <li className="service" key={service.id}>
                <span className="service__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
