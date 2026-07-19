export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "kismama",
    name: "Kismama",
    description: "A várandósság csodájának megörökítése gyengéd, nőies képekben.",
    image: "/images/kismama.jpg",
  },
  {
    slug: "csaladi",
    name: "Családi",
    description: "Önfeledt, természetes pillanatok az egész családdal.",
    image: "/images/csaladi.jpg",
  },
  {
    slug: "eskuvoi",
    name: "Esküvői",
    description: "A nagy nap minden érzelme, az első pillantástól az első táncig.",
    image: "/images/eskuvoi.jpg",
  },
  {
    slug: "ujszulott",
    name: "Újszülött",
    description: "Az első napok törékeny szépsége, biztonságos, nyugodt fotózáson.",
    image: "/images/ujszulott.jpg",
  },
  {
    slug: "paros",
    name: "Páros",
    description: "Kettőtök története képekben – szerelem, nevetés, összetartozás.",
    image: "/images/paros.jpg",
  },
  {
    slug: "kutyas",
    name: "Kutyás",
    description: "Négylábú családtagok, ahogy még sosem láttad őket.",
    image: "/images/kutyas.jpg",
  },
  {
    slug: "lovas",
    name: "Lovas",
    description: "Erő és elegancia – különleges fotók lovakkal, szabadban.",
    image: "/images/lovas.jpg",
  },
];

export const contactEmail = "ktothmarcsiphotographer@gmail.com";
export const location = "Mezőkövesd, Magyarország";
