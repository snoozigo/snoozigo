import { formatPrice, site } from "../config/site.js";

export function whatsappLink(message) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(roomName) {
  if (!roomName) {
    return `Hi ${site.name}, I'd like to book a bed in ${site.city}.`;
  }
  return `Hi ${site.name}, I'd like to book the ${roomName} (${formatPrice()}/night) in ${site.city}.`;
}
