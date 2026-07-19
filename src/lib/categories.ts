export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  gallery: string[];
};

/** A kártyakép + további sorszámozott képek: pl. kismama-2.jpg, kismama-3.jpg… */
function galleryFor(slug: string, count = 4): string[] {
  return [
    `/images/${slug}.jpg`,
    ...Array.from({ length: count - 1 }, (_, i) => `/images/${slug}-${i + 2}.jpg`),
  ];
}

const baseCategories = [
  {
    slug: "kismama",
    name: "Kismama",
    description: "A várandósság csodájának megörökítése gyengéd, nőies képekben.",
  },
  {
    slug: "csaladi",
    name: "Családi",
    description: "Önfeledt, természetes pillanatok az egész családdal.",
  },
  {
    slug: "eskuvoi",
    name: "Esküvői",
    description: "A nagy nap minden érzelme, az első pillantástól az első táncig.",
  },
  {
    slug: "ujszulott",
    name: "Újszülött",
    description: "Az első napok törékeny szépsége, biztonságos, nyugodt fotózáson.",
  },
  {
    slug: "paros",
    name: "Páros",
    description: "Kettőtök története képekben – szerelem, nevetés, összetartozás.",
  },
  {
    slug: "kutyas",
    name: "Kutyás",
    description: "Négylábú családtagok, ahogy még sosem láttad őket.",
  },
  {
    slug: "lovas",
    name: "Lovas",
    description: "Erő és elegancia – különleges fotók lovakkal, szabadban.",
  },
];

export const categories: Category[] = baseCategories.map((cat) => ({
  ...cat,
  image: `/images/${cat.slug}.jpg`,
  gallery: galleryFor(cat.slug),
}));

export const contactEmail = "ktothmarcsiphotographer@gmail.com";
export const location = "Mezőkövesd, Magyarország";
