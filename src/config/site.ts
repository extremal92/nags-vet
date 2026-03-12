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
  lat: 46.998644216567286,
  lng: 28.86225007699222,
} as const;

export const SITE: SiteConfig = {
  name: "Vet Exotica",

  logo: "/images/vet-exotica-logo.jpg",
  ogImage: "/images/vet-exotica-og-image.png",

  phone: "+373 069 678 414",

  social: {
    fb: "https://www.facebook.com/profile.php?id=100063733892528",
    insta: "https://www.instagram.com/vetexotica/",
  },

  address: "Strada Minsk 47, Chișinău, Молдова",
  geo: GEO,

  mapEmbedUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d${GEO.lng}!3d${GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDAyJzU2LjAiTiAyOMKwNTEnMjIuMSJF!5e0!3m2!1sro!2smd!4v1702300000000!5m2!1sro!2smd`,

  rating: 4.3,
  reviews: 436,

  schedule: {
    Mon: "08:30 – 19:00",
    Tue: "08:30 – 19:00",
    Wed: "08:30 – 19:00",
    Thu: "08:30 – 19:00",
    Fri: "08:30 – 19:00",
    Sat: "09:00 – 17:00",
    Sun: "09:00 – 14:00",
    // Sun: "closed",
  },
};
