// Business details live here. Update this file when the street
// address, inbox, or Instagram handle is confirmed.

export const site = {
  name: "snoozigo",
  tagline: "Daily rental dormitory stay",
  city: "Kochi",
  address:
    "K K Padmanabhan Rd, Kacheripady, Kochi, Ernakulam, Keralam 682018",
  phoneDisplay: "+91 8075 05 1515",
  phoneE164: "918075051515",
  email: "snoozigo@gmail.com",
  instagram: "https://www.instagram.com/snoozigo",
  instagramHandle: "@snoozigo",
  mapsUrl: "https://maps.app.goo.gl/Rdo4dswNwRZRPXnt5",
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
  price: 599,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "rooms", label: "Rooms" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const photo = (file) => `${import.meta.env.BASE_URL}images/${file}`;

const dormPhoto = {
  src: photo("dorm.jpg"),
  alt: "Orange-framed bunks with black bedding at snoozigo",
};

const loungePhoto = {
  src: photo("lounge.jpg"),
  alt: "Lounge with a mural, grey sofa, and yellow cushions",
};

const roomFeatures = [
  "4–8 bed dorm",
  "AC & fans",
  "Lockers & storage",
  "Shared bathroom",
  "Privacy curtains",
  "Free Wi-Fi",
];

export const rooms = [
  {
    id: "mixed",
    name: "Mixed Dormitory",
    badge: "Shared",
    summary: "A shared bunk room for travelers, students, and professionals.",
    images: [dormPhoto, loungePhoto],
    features: roomFeatures,
  },
  {
    id: "female",
    name: "Female-Only Dormitory",
    badge: "Women only",
    summary: "The same bunk setup, reserved for women guests.",
    images: [
      {
        src: photo("dorm.jpg"),
        alt: "Dormitory bunks at snoozigo, used for the women-only room",
      },
      loungePhoto,
    ],
    features: roomFeatures,
  },
];

export const services = [
  { id: "wifi", title: "Free Wi-Fi", text: "High-speed internet in the rooms and lounge." },
  { id: "ac", title: "A/C", text: "Air conditioning and fans while you sleep." },
  { id: "parking", title: "Parking", text: "A place to leave the bike or car." },
  { id: "shower", title: "Shower", text: "Shared bathrooms, cleaned through the day." },
  { id: "locker", title: "Locker", text: "Lockable storage for your bag." },
  { id: "laundry", title: "Laundry", text: "Wash clothes without leaving the house." },
  { id: "aid", title: "First aid", text: "A basic kit when something small goes wrong." },
  { id: "events", title: "Events", text: "Easy evenings with the people staying over." },
  { id: "games", title: "Games", text: "Something to do between plans in the city." },
];

export function formatPrice(amount = site.price) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
