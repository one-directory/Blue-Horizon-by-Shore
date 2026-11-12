import { imageMeta } from "./image-meta.generated";

export type Photo = { id: string; src: string; alt: string; label: string; w: number; h: number; blur: string };

const photo = (id: string, label: string, alt: string): Photo => ({
  id,
  alt,
  label,
  src: `/images/${id}.webp`,
  ...imageMeta[id],
});

/** Every distinct photo of the property. Near-identical shots were dropped on purpose. */
export const photos = {
  entrance: photo("hero-entrance", "The entrance", "Blue Horizon by Shore guesthouse entrance: a bright blue building with a glass facade, wooden gate and palm trees"),
  side: photo("exterior-side", "Courtyard and stairs", "Blue guesthouse building with a staircase, courtyard and tiled parking area"),
  corridor: photo("corridor", "Upper-floor corridor", "Bright upper-floor corridor with floor-to-ceiling windows looking out over palm trees"),
  corridor2: photo("corridor-2", "Corridor and marble wall", "Long corridor with a marble feature wall and glass windows facing the coconut palms"),
  teak: photo("room-teak-bed", "Teak bed room", "Double bedroom with a carved teak bed, pink bedding, wardrobe and window"),
  window: photo("room-window", "Spacious double room", "Spacious double bedroom with a teak bed, dressing mirror and white marble floor"),
  dresser: photo("room-dresser", "Room with dressing mirror", "Double bedroom with a teak bed, dressing mirror and bench on a marble floor"),
  wide: photo("room-wide", "Airy double room", "Airy double bedroom with a wide bed, ceiling fan and wall-mounted air conditioner"),
  crimson: photo("room-crimson", "Crimson room", "Double bedroom with a crimson bedspread, ceiling fan and polished floor"),
  bright: photo("room-bright", "Sunlit room", "Sunlit double bedroom with dark curtains and a comfortable double bed"),
  curtain: photo("room-curtain", "Room with curtains", "Double bedroom with a dark wood bed, pink bedding and brown curtains"),
  door: photo("room-door", "Room from the doorway", "Double bedroom with a dark wood bed and ceiling fan, seen from the doorway"),
  corner: photo("room-corner", "Room with side table", "Double bedroom with a pink bed, side table and chair by the window"),
  ruby: photo("room-ruby", "Ruby room", "Double bedroom with a ruby-red bedspread, side table and chair"),
  bathMarble: photo("bathroom-marble", "Marble bathroom", "Clean bathroom with marble tiles, rain shower and wash basin"),
  bathTile: photo("bathroom-tile", "Tiled bathroom", "Bathroom with a rain shower, western toilet and a bright tiled wall"),
  bathWhite: photo("bathroom-white", "White bathroom", "Bright white bathroom with rain shower, wash basin and western toilet"),
};

type Item = { photo: Photo; span: "tall" | "wide" | "std" };

/** Everything, for the home page gallery. `span` classes are defined in globals.css. */
export const galleryOrder: Item[] = [
  { photo: photos.entrance, span: "wide" },
  { photo: photos.side, span: "tall" },
  { photo: photos.teak, span: "std" },
  { photo: photos.corridor, span: "tall" },
  { photo: photos.crimson, span: "std" },
  { photo: photos.window, span: "wide" },
  { photo: photos.bathMarble, span: "tall" },
  { photo: photos.ruby, span: "std" },
  { photo: photos.bright, span: "std" },
  { photo: photos.dresser, span: "wide" },
  { photo: photos.bathWhite, span: "tall" },
  { photo: photos.wide, span: "std" },
  { photo: photos.door, span: "std" },
  { photo: photos.corridor2, span: "tall" },
  { photo: photos.curtain, span: "wide" },
  { photo: photos.bathTile, span: "tall" },
  { photo: photos.corner, span: "std" },
];

/** Rooms and bathrooms, for the Rooms page. */
export const roomGallery: Item[] = [
  { photo: photos.teak, span: "wide" },
  { photo: photos.bathMarble, span: "tall" },
  { photo: photos.crimson, span: "std" },
  { photo: photos.window, span: "std" },
  { photo: photos.dresser, span: "wide" },
  { photo: photos.bathWhite, span: "tall" },
  { photo: photos.ruby, span: "std" },
  { photo: photos.bright, span: "std" },
  { photo: photos.curtain, span: "wide" },
  { photo: photos.bathTile, span: "tall" },
  { photo: photos.wide, span: "std" },
  { photo: photos.door, span: "std" },
  { photo: photos.corner, span: "wide" },
];
