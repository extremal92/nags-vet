export type SiteScheduleKey =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

export type SiteConfig = {
  name: string;
  logo: string;
  ogImage: string;
  phone: string;
  social: {
    fb: string;
    insta: string;
  };
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
  mapEmbedUrl: string;
  rating: number;
  reviews: number;
  schedule: Record<SiteScheduleKey, string>;
};

const GEO = {
  lat: 47.054480600592115,
  lng: 28.891345573471487,
} as const;

export const SITE: SiteConfig = {
  name: "OPTIM - VET",

  logo: "/images/optim-vet-logo.png",
  ogImage: "/images/terra-vet-og-image.jpg",

  phone: "+373 078 150 263",

  social: {
    fb: "https://www.facebook.com/clinicaveterinaraoptimvet",
    insta: "https://www.instagram.com/clinica_veterinara_optimvet/",
  },

  address: "Bulevardul Mircea cel Bătrîn 34/6, MD-2075, Chișinău, Молдова",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.6,
  reviews: 559,

  schedule: {
    Mon: "08:00 – 22:00",
    Tue: "08:00 – 22:00",
    Wed: "08:00 – 22:00",
    Thu: "08:00 – 22:00",
    Fri: "08:00 – 22:00",
    Sat: "08:00 – 15:30",
    Sun: "08:00 – 15:30",
    // Sun: "closed",
  },
};
