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
  lat: 47.002829510535584,
  lng: 28.870189427709615,
} as const;

export const SITE: SiteConfig = {
  name: "Vet Med",

  logo: "/images/vet-med--logo.png",
  ogImage: "/images/vet-med-og-image-final.jpg",

  phone: "+373 079 337 300",

  social: {
    fb: "https://www.facebook.com/ClinicaVeterinaraVetMed",
    insta: "",
  },

  address: "Muncești 79, Chișinău, Moldova",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 3.7,
  reviews: 78,

  schedule: {
    Mon: "08:30 – 17:30",
    Tue: "08:30 – 17:30",
    Wed: "08:30 – 17:30",
    Thu: "08:30 – 17:30",
    Fri: "08:30 – 17:30",
    Sat: "09:00 – 15:00",
    Sun: "closed",
    // Sun: "09:00 – 14:00",
  },
};
