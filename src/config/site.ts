export const site = {
  siteName: "Your Mali Guides",
  guideName: "Djibril Kassogue",
  whatsappNumber: "22374482693",
  whatsappUrl: "https://wa.me/22374482693",
  whatsappMessage:
    "Hello Djibril, I am interested in planning a private trip in Mali. My dates are: _____. Number of travellers: _____. Places I am interested in: _____. Preferred language: _____. Could you advise what is realistic and safe?",
  facebookUrl: "https://www.facebook.com/djibril.kassogue",
  instagramUrl: "https://www.instagram.com/djibril_kassogue/",
  email: "",
  baseUrl: "https://yourmaliguides.com",
  defaultMetaDescription:
    "Plan a private Mali trip with Djibril Kassogue, an official local guide for Bamako visits, cultural tours, heritage routes, transport help, and safety-aware travel planning.",
  defaultOgImage: "/images/your-mali-guides-og.jpg",
  defaultOgImageAlt:
    "Your Mali Guides — private cultural tours with local guide Djibril Kassogue",
  mainNav: [
    { label: "Home", href: "/" },
    { label: "About Djibril", href: "/about/" },
    { label: "Mali Tours", href: "/tours/" },
    { label: "West Africa", href: "/west-africa/" },
    { label: "Photos", href: "/photos/" },
    { label: "Contact", href: "/contact/" },
  ],
  // Secondary "Plan your trip" links — surfaces pages that are otherwise only
  // reachable from in-page CTAs, improving internal linking and crawlability.
  planNav: [
    { label: "Custom Trip Planning", href: "/custom-trip/" },
    { label: "Travel Plans", href: "/travel-plans/" },
    { label: "Safety & Practical Info", href: "/safety/" },
    { label: "Malian Cloth & Textiles", href: "/cloth/" },
    { label: "Community Projects", href: "/community-projects/" },
  ],
  // Human-readable labels per URL slug, used to build breadcrumb trails.
  pageLabels: {
    about: "About Djibril",
    tours: "Mali Tours",
    "west-africa": "West Africa",
    photos: "Photos",
    contact: "Contact",
    "custom-trip": "Custom Trip Planning",
    "travel-plans": "Travel Plans",
    safety: "Safety & Practical Info",
    cloth: "Malian Cloth & Textiles",
    "community-projects": "Community Projects",
  } as Record<string, string>,
};
