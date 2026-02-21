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
  lat: 47.037095516063154,
  lng: 28.860814336195958,
} as const;

export const SITE: SiteConfig = {
  name: "Terra Vet",

  logo: "/images/terra-vet-logo.png",
  ogImage: "/images/terra-vet-og-image.jpg",

  phone: "+373 69 154 942",

  social: {
    fb: "",
    insta: "",
  },

  address: "Strada Tudor Vladimirescu 20, Chișinău, Молдова",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.8,
  reviews: 33,

  schedule: {
    Mon: "09:00 – 17:00",
    Tue: "09:00 – 17:00",
    Wed: "09:00 – 17:00",
    Thu: "09:00 – 17:00",
    Fri: "09:00 – 17:00",
    Sat: "09:00 – 17:00",
    Sun: "closed",
  },
};
