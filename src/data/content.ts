import { images } from "./images";

export const trustBadges = [
  "Official registered guide",
  "Real local knowledge",
  "Custom private trips",
  "References available",
  "Safety-aware route planning",
];

export const routes = [
  {
    title: "Bamako City and Culture",
    image: images.bamako,
    alt: "Bamako city life, markets, and culture",
    bestFor: "Arrival days, short stays, and first-time visitors.",
    note: "A good standalone option or first step before travelling further.",
    feasibility: "Open to visitors",
    feasColor: "rgba(31,76,59,0.85)",
    topic: "Bamako City and Culture",
    ideaUrl: "/tours/#bamako",
  },
  {
    title: "Djenné and Mopti",
    image: images.djenne,
    alt: "Djenné mud mosque and Mopti river town",
    bestFor: "Travellers interested in heritage towns and river culture.",
    note: "Only advised when current local conditions make the route realistic.",
    feasibility: "Conditions permitting",
    feasColor: "rgba(196,154,58,0.90)",
    topic: "Djenné and Mopti",
    ideaUrl: "/tours/#djenne-mopti",
  },
  {
    title: "Dogon Country",
    image: images.dogon,
    alt: "Dogon Country cliffs and traditional villages",
    bestFor: "Cultural heritage travellers with flexible plans.",
    note: "Dogon routes are assessed case by case with current local advice.",
    feasibility: "Feasibility checked first",
    feasColor: "rgba(184,88,50,0.90)",
    topic: "Dogon Country",
    ideaUrl: "/tours/#dogon",
  },
  {
    title: "Timbuktu and Desert Routes",
    image: images.timbuktu,
    alt: "Timbuktu and northern Mali desert landscape",
    bestFor: "Experienced travellers who understand plans may need adjustment.",
    note: "Never promised blindly — feasibility is checked before plans are confirmed.",
    feasibility: "Feasibility checked first",
    feasColor: "rgba(184,88,50,0.90)",
    topic: "Timbuktu and Desert Routes",
    ideaUrl: "/tours/#timbuktu",
  },
  {
    title: "Mali and Burkina Faso",
    image: images.westAfrica,
    alt: "West Africa cross-border route planning",
    bestFor: "Flexible travellers planning selected West Africa routes.",
    note: "Designed around current border, transport, and security conditions.",
    feasibility: "Conditions permitting",
    feasColor: "rgba(196,154,58,0.90)",
    topic: "a Mali and Burkina Faso route",
    ideaUrl: "/west-africa/",
  },
  {
    title: "West Africa Custom Route",
    image: images.about,
    alt: "Custom West Africa private guiding route",
    bestFor: "Travellers with specific dates, interests, or countries in mind.",
    note: "Send dates, group size, interests, and the countries you hope to include.",
    feasibility: "Open to visitors",
    feasColor: "rgba(31,76,59,0.85)",
    topic: "a custom West Africa route",
    ideaUrl: "/custom-trip/",
  },
];

// Legacy alias for backward compatibility
export const tours = routes;

export const features = [
  {
    title: "Official Local Guide",
    text: "Djibril is an official and registered guide in Mali, with experience helping travellers understand the country beyond surface-level tourism.",
  },
  {
    title: "Real Local Knowledge",
    text: "Local language, cultural context, trusted contacts, and day-to-day problem solving make a meaningful difference on the road.",
  },
  {
    title: "Safer Logistics",
    text: "Routes are planned with current local conditions, practical timing, transport realities, and safety considerations in mind.",
  },
  {
    title: "Fairer Prices",
    text: "A local guide can help reduce the stress of negotiating transport, services, and visits alone.",
  },
  {
    title: "Custom Itineraries",
    text: "Plans are built around your dates, interests, budget level, preferred language, and places you want to visit.",
  },
  {
    title: "West Africa Experience",
    text: "Djibril and his network can support selected routes across Mali, Burkina Faso, Ivory Coast, Guinea, and nearby countries.",
  },
];

export const planningItems = [
  "Travel dates",
  "Number of travellers",
  "Arrival city",
  "Places you want to visit",
  "Interests and travel pace",
  "Preferred language",
  "Budget level",
  "Help needed with hotels, transport, permits, borders, or onward travel",
];

export const planningSteps = [
  {
    n: "1",
    text: "Send your dates, group size, language preference, and places of interest on WhatsApp.",
  },
  {
    n: "2",
    text: "Djibril checks timing, transport, current feasibility, and route options.",
  },
  {
    n: "3",
    text: "You agree a private plan that fits your pace and practical conditions on the ground.",
  },
];

export const safetyPoints = [
  { title: "Current local advice", body: "Routes are assessed against the latest ground-level information, not outdated guides." },
  { title: "Routes assessed case by case", body: "Each request is judged individually — no blanket promises about what is or isn't accessible." },
  { title: "Transport and timing checked", body: "Practical factors like road conditions, transport links, and seasonal timing all affect the plan." },
  { title: "Alternative plans when needed", body: "If a route is not realistic, Djibril will suggest what is — not just say no." },
];
