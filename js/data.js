/* Kestrel catalogue + the drawn product art. Everything here is sample data for a demo storefront. */

const SHADOW = '<ellipse cx="100" cy="178" rx="56" ry="6" fill="var(--ink)" opacity=".10"/>';

function svg(inner) {
  return '<svg viewBox="0 0 200 200" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' + inner + "</svg>";
}

/* Each illustration is drawn from theme tokens, so it reads on either background. */
const ART = {
  headphones: () =>
    svg(
      SHADOW +
        '<path d="M44 108V92a56 56 0 0 1 112 0v16" fill="none" stroke="var(--ink)" stroke-width="9" stroke-linecap="round"/>' +
        '<rect x="28" y="100" width="30" height="58" rx="14" fill="var(--ink)"/>' +
        '<rect x="142" y="100" width="30" height="58" rx="14" fill="var(--ink)"/>' +
        '<rect x="34" y="110" width="18" height="38" rx="9" fill="var(--accent)" opacity=".55"/>' +
        '<rect x="148" y="110" width="18" height="38" rx="9" fill="var(--accent)" opacity=".55"/>' +
        '<circle cx="100" cy="46" r="4" fill="var(--accent)"/>'
    ),
  earbuds: () =>
    svg(
      SHADOW +
        '<rect x="46" y="86" width="108" height="66" rx="24" fill="var(--ink)"/>' +
        '<rect x="46" y="86" width="108" height="16" rx="8" fill="var(--accent)" opacity=".5"/>' +
        '<circle cx="74" cy="60" r="20" fill="var(--ink)"/>' +
        '<circle cx="126" cy="60" r="20" fill="var(--ink)"/>' +
        '<circle cx="74" cy="60" r="8" fill="var(--accent)"/>' +
        '<circle cx="126" cy="60" r="8" fill="var(--accent)"/>' +
        '<rect x="88" y="124" width="24" height="5" rx="2.5" fill="var(--paper)" opacity=".7"/>'
    ),
  soundbar: () =>
    svg(
      SHADOW +
        '<rect x="20" y="88" width="160" height="42" rx="12" fill="var(--ink)"/>' +
        '<g fill="var(--paper)" opacity=".28">' +
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
          .map((i) => '<rect x="' + (34 + i * 11) + '" y="98" width="4" height="22" rx="2"/>')
          .join("") +
        "</g>" +
        '<circle cx="164" cy="109" r="5" fill="var(--accent)"/>' +
        '<rect x="56" y="130" width="12" height="10" rx="3" fill="var(--ink)" opacity=".6"/>' +
        '<rect x="132" y="130" width="12" height="10" rx="3" fill="var(--ink)" opacity=".6"/>'
    ),
  speaker: () =>
    svg(
      SHADOW +
        '<rect x="62" y="40" width="76" height="126" rx="34" fill="var(--ink)"/>' +
        '<ellipse cx="100" cy="40" rx="38" ry="12" fill="var(--ink)" opacity=".75"/>' +
        '<g stroke="var(--paper)" stroke-width="3" opacity=".22">' +
        [0, 1, 2, 3, 4, 5]
          .map((i) => '<line x1="70" y1="' + (74 + i * 15) + '" x2="130" y2="' + (74 + i * 15) + '"/>')
          .join("") +
        "</g>" +
        '<rect x="86" y="150" width="28" height="4" rx="2" fill="var(--accent)"/>'
    ),
  watch: () =>
    svg(
      SHADOW +
        '<path d="M78 44h44v-14a8 8 0 0 0-8-8H86a8 8 0 0 0-8 8z" fill="var(--ink)" opacity=".55"/>' +
        '<path d="M78 156h44v14a8 8 0 0 1-8 8H86a8 8 0 0 1-8-8z" fill="var(--ink)" opacity=".55"/>' +
        '<rect x="60" y="44" width="80" height="112" rx="26" fill="var(--ink)"/>' +
        '<rect x="70" y="54" width="60" height="92" rx="19" fill="var(--paper)" opacity=".1"/>' +
        '<circle cx="100" cy="100" r="26" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round" stroke-dasharray="118 45" transform="rotate(-90 100 100)"/>' +
        '<rect x="90" y="94" width="20" height="4" rx="2" fill="var(--paper)" opacity=".8"/>' +
        '<rect x="92" y="104" width="16" height="4" rx="2" fill="var(--paper)" opacity=".45"/>' +
        '<rect x="140" y="88" width="6" height="18" rx="3" fill="var(--accent)"/>'
    ),
  tracker: () =>
    svg(
      SHADOW +
        '<path d="M100 36c35 0 56 28 56 64s-21 64-56 64-56-28-56-64 21-64 56-64z" fill="none" stroke="var(--ink)" stroke-width="14"/>' +
        '<rect x="80" y="76" width="40" height="48" rx="14" fill="var(--ink)"/>' +
        '<rect x="88" y="88" width="24" height="4" rx="2" fill="var(--accent)"/>' +
        '<rect x="88" y="98" width="18" height="4" rx="2" fill="var(--paper)" opacity=".6"/>' +
        '<rect x="88" y="108" width="22" height="4" rx="2" fill="var(--paper)" opacity=".35"/>'
    ),
  keyboard: () =>
    svg(
      SHADOW +
        '<path d="M26 118l18-44h112l18 44a8 8 0 0 1-8 10H34a8 8 0 0 1-8-10z" fill="var(--ink)"/>' +
        '<g fill="var(--paper)" opacity=".3">' +
        [0, 1, 2, 3]
          .map((row) =>
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
              .map(
                (col) =>
                  '<rect x="' +
                  (46 + col * 11 - row * 1.5) +
                  '" y="' +
                  (80 + row * 11) +
                  '" width="8" height="8" rx="2"/>'
              )
              .join("")
          )
          .join("") +
        "</g>" +
        '<rect x="70" y="124" width="60" height="7" rx="3" fill="var(--accent)" opacity=".8"/>' +
        '<rect x="44" y="130" width="112" height="6" rx="3" fill="var(--ink)" opacity=".45"/>'
    ),
  mouse: () =>
    svg(
      SHADOW +
        '<path d="M100 44c26 0 42 22 42 56s-16 56-42 56-42-22-42-56 16-56 42-56z" fill="var(--ink)"/>' +
        '<path d="M100 44c26 0 42 22 42 56H58c0-34 16-56 42-56z" fill="var(--paper)" opacity=".08"/>' +
        '<rect x="96" y="60" width="8" height="26" rx="4" fill="var(--accent)"/>' +
        '<line x1="100" y1="100" x2="100" y2="44" stroke="var(--paper)" stroke-width="2" opacity=".3"/>'
    ),
  monitor: () =>
    svg(
      SHADOW +
        '<rect x="22" y="42" width="156" height="94" rx="10" fill="var(--ink)"/>' +
        '<rect x="30" y="50" width="140" height="78" rx="5" fill="var(--accent)" opacity=".28"/>' +
        '<rect x="42" y="62" width="54" height="6" rx="3" fill="var(--paper)" opacity=".6"/>' +
        '<rect x="42" y="76" width="92" height="5" rx="2.5" fill="var(--paper)" opacity=".3"/>' +
        '<rect x="42" y="88" width="72" height="5" rx="2.5" fill="var(--paper)" opacity=".3"/>' +
        '<rect x="88" y="136" width="24" height="24" fill="var(--ink)" opacity=".7"/>' +
        '<rect x="62" y="158" width="76" height="9" rx="4.5" fill="var(--ink)"/>'
    ),
  lamp: () =>
    svg(
      SHADOW +
        '<circle cx="100" cy="100" r="46" fill="var(--accent)" opacity=".14"/>' +
        '<path d="M58 164h52" stroke="var(--ink)" stroke-width="10" stroke-linecap="round"/>' +
        '<path d="M84 160V96a26 26 0 0 1 26-26h8" fill="none" stroke="var(--ink)" stroke-width="9" stroke-linecap="round"/>' +
        '<path d="M112 48h40l12 34h-64z" fill="var(--ink)"/>' +
        '<ellipse cx="132" cy="82" rx="32" ry="6" fill="var(--accent)"/>' +
        '<path d="M132 92v16" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity=".6"/>'
    ),
  camera: () =>
    svg(
      SHADOW +
        '<rect x="30" y="68" width="140" height="86" rx="14" fill="var(--ink)"/>' +
        '<path d="M74 68l10-16h32l10 16z" fill="var(--ink)"/>' +
        '<circle cx="100" cy="112" r="34" fill="var(--paper)" opacity=".1"/>' +
        '<circle cx="100" cy="112" r="26" fill="none" stroke="var(--accent)" stroke-width="7"/>' +
        '<circle cx="100" cy="112" r="11" fill="var(--accent)" opacity=".7"/>' +
        '<rect x="142" y="80" width="18" height="6" rx="3" fill="var(--paper)" opacity=".5"/>' +
        '<circle cx="50" cy="84" r="5" fill="var(--signal)"/>'
    ),
  drone: () =>
    svg(
      SHADOW +
        '<g stroke="var(--ink)" stroke-width="9" stroke-linecap="round">' +
        '<line x1="66" y1="76" x2="134" y2="124"/><line x1="134" y1="76" x2="66" y2="124"/>' +
        "</g>" +
        '<g fill="none" stroke="var(--accent)" stroke-width="5">' +
        '<ellipse cx="54" cy="70" rx="24" ry="7"/><ellipse cx="146" cy="70" rx="24" ry="7"/>' +
        '<ellipse cx="54" cy="130" rx="24" ry="7"/><ellipse cx="146" cy="130" rx="24" ry="7"/>' +
        "</g>" +
        '<rect x="78" y="86" width="44" height="30" rx="10" fill="var(--ink)"/>' +
        '<circle cx="100" cy="122" r="11" fill="var(--ink)"/>' +
        '<circle cx="100" cy="122" r="5" fill="var(--accent)"/>'
    ),
  charger: () =>
    svg(
      SHADOW +
        '<rect x="56" y="62" width="88" height="88" rx="20" fill="var(--ink)"/>' +
        '<rect x="74" y="44" width="10" height="20" rx="4" fill="var(--ink)" opacity=".6"/>' +
        '<rect x="116" y="44" width="10" height="20" rx="4" fill="var(--ink)" opacity=".6"/>' +
        '<rect x="76" y="118" width="20" height="9" rx="4.5" fill="var(--accent)"/>' +
        '<rect x="104" y="118" width="20" height="9" rx="4.5" fill="var(--accent)"/>' +
        '<path d="M100 78l-12 22h10l-4 16 16-24h-10z" fill="var(--paper)" opacity=".75"/>'
    ),
  powerbank: () =>
    svg(
      SHADOW +
        '<rect x="58" y="40" width="84" height="126" rx="18" fill="var(--ink)"/>' +
        '<rect x="72" y="58" width="56" height="10" rx="5" fill="var(--paper)" opacity=".12"/>' +
        '<g fill="var(--accent)">' +
        '<rect x="74" y="88" width="12" height="28" rx="3"/><rect x="92" y="88" width="12" height="28" rx="3"/>' +
        '<rect x="110" y="88" width="12" height="28" rx="3" opacity=".3"/>' +
        "</g>" +
        '<rect x="80" y="136" width="18" height="8" rx="4" fill="var(--paper)" opacity=".4"/>' +
        '<rect x="104" y="136" width="18" height="8" rx="4" fill="var(--paper)" opacity=".4"/>'
    ),
};

const CATEGORIES = [
  { id: "audio", name: "Audio", note: "Headphones, buds, rooms" },
  { id: "wearables", name: "Wearables", note: "Watches and bands" },
  { id: "desk", name: "Desk", note: "Input and displays" },
  { id: "vision", name: "Vision", note: "Cameras and flight" },
  { id: "power", name: "Power", note: "Charge and carry" },
];

const PRODUCTS = [
  {
    id: "arc-one",
    name: "Arc One",
    brand: "Kestrel",
    cat: "audio",
    art: "headphones",
    price: 349,
    was: 399,
    rating: 4.8,
    reviews: 1284,
    stock: 23,
    tag: "sale",
    blurb: "Closed-back studio headphones with a 40mm beryllium-coated driver and a replaceable cable.",
    specs: {
      Driver: "40 mm beryllium-coated",
      "Frequency response": "5 Hz – 40 kHz",
      Impedance: "32 Ω",
      Battery: "52 h ANC on / 80 h off",
      Weight: "268 g",
      Connection: "Bluetooth 5.3 · USB-C · 3.5 mm",
    },
    colors: [
      { name: "Graphite", hex: "#2A2F3A" },
      { name: "Bone", hex: "#E8E3D9" },
      { name: "Cobalt", hex: "#1C3FD4" },
    ],
  },
  {
    id: "drift-pro",
    name: "Drift Pro",
    brand: "Kestrel",
    cat: "audio",
    art: "earbuds",
    price: 189,
    rating: 4.6,
    reviews: 2470,
    stock: 61,
    tag: "new",
    blurb: "Open-fit earbuds that stay put through a run and still take a call in wind.",
    specs: {
      Driver: "11 mm dynamic",
      "ANC depth": "38 dB adaptive",
      Battery: "8 h buds / 32 h case",
      Rating: "IPX5 sweat resistant",
      Charging: "USB-C and Qi",
      Latency: "58 ms game mode",
    },
    colors: [
      { name: "Chalk", hex: "#F2F1ED" },
      { name: "Moss", hex: "#3C4A33" },
    ],
  },
  {
    id: "mono-s",
    name: "Harbor Mono S",
    brand: "Harbor",
    cat: "audio",
    art: "speaker",
    price: 259,
    rating: 4.5,
    reviews: 612,
    stock: 14,
    blurb: "A single-column speaker that fills a room from a shelf corner. Room correction in 20 seconds.",
    specs: {
      Drivers: "1 × 4″ woofer, 2 × 20 mm tweeter",
      Output: "80 W RMS",
      Inputs: "Wi-Fi 6 · Bluetooth · optical",
      "Room tuning": "Mic-based, automatic",
      Height: "41 cm",
      Finish: "Powder-coated aluminium",
    },
    colors: [
      { name: "Slate", hex: "#434A55" },
      { name: "Sand", hex: "#D8CBB4" },
    ],
  },
  {
    id: "loom-7",
    name: "Loom Bar 7",
    brand: "Harbor",
    cat: "audio",
    art: "soundbar",
    price: 429,
    was: 489,
    rating: 4.4,
    reviews: 338,
    stock: 7,
    tag: "sale",
    blurb: "Seven drivers across one bar, with a dialogue channel you can raise on its own.",
    specs: {
      Channels: "5.1.2 virtual",
      Drivers: "7 (2 up-firing)",
      HDMI: "eARC, 4K/120 passthrough",
      "Dialogue lift": "3 steps",
      Width: "104 cm",
      Mount: "Wall plate included",
    },
    colors: [{ name: "Black oak", hex: "#262423" }],
  },
  {
    id: "vector-m2",
    name: "Vector M2",
    brand: "Vector",
    cat: "wearables",
    art: "watch",
    price: 299,
    rating: 4.7,
    reviews: 1902,
    stock: 38,
    blurb: "A training watch with dual-band GPS and a screen you can read in direct sun.",
    specs: {
      Display: "1.4″ AMOLED, 2000 nits",
      GPS: "Dual-band L1 + L5",
      Battery: "14 days / 28 h GPS",
      Sensors: "HR, SpO₂, altimeter, compass",
      Case: "Titanium, 42 mm",
      Water: "10 ATM",
    },
    colors: [
      { name: "Titanium", hex: "#A8A6A1" },
      { name: "Midnight", hex: "#1B1F2A" },
    ],
  },
  {
    id: "band-lite",
    name: "Vector Band Lite",
    brand: "Vector",
    cat: "wearables",
    art: "tracker",
    price: 119,
    rating: 4.3,
    reviews: 874,
    stock: 92,
    blurb: "Sleep and steps for people who do not want a second screen on their wrist.",
    specs: {
      Display: "0.9″ OLED",
      Battery: "21 days",
      Sensors: "HR, skin temperature",
      Weight: "22 g",
      Water: "5 ATM",
      Strap: "Recycled nylon, 2 sizes",
    },
    colors: [
      { name: "Fog", hex: "#C9CDD4" },
      { name: "Clay", hex: "#A6563C" },
    ],
  },
  {
    id: "slate-75",
    name: "Slate 75",
    brand: "Slate",
    cat: "desk",
    art: "keyboard",
    price: 179,
    was: 209,
    rating: 4.9,
    reviews: 3140,
    stock: 4,
    tag: "sale",
    blurb: "A 75% board with gasket mounting, hot-swap sockets and a plate that stays quiet.",
    specs: {
      Layout: "75% (82 keys)",
      Switches: "Hot-swap, 5-pin",
      Mount: "Gasket, FR4 plate",
      Connection: "USB-C · 2.4 GHz · Bluetooth",
      Battery: "4000 mAh",
      Weight: "1.21 kg",
    },
    colors: [
      { name: "Ink", hex: "#1D212B" },
      { name: "Milk", hex: "#EFEFEA" },
      { name: "Cobalt", hex: "#1C3FD4" },
    ],
  },
  {
    id: "glide",
    name: "Slate Glide",
    brand: "Slate",
    cat: "desk",
    art: "mouse",
    price: 89,
    rating: 4.5,
    reviews: 1455,
    stock: 47,
    blurb: "58 grams, a 4 kHz polling rate and a scroll wheel with a free-spin release.",
    specs: {
      Sensor: "26 000 DPI optical",
      Polling: "4 000 Hz wireless",
      Weight: "58 g",
      Battery: "90 h",
      Buttons: "6 programmable",
      Feet: "PTFE, spare set included",
    },
    colors: [
      { name: "Ink", hex: "#1D212B" },
      { name: "Milk", hex: "#EFEFEA" },
    ],
  },
  {
    id: "aperture-27",
    name: "Aperture 27",
    brand: "Aperture",
    cat: "desk",
    art: "monitor",
    price: 649,
    rating: 4.6,
    reviews: 509,
    stock: 11,
    tag: "new",
    blurb: "A 4K panel calibrated at the factory, with a report in the box and one cable to the laptop.",
    specs: {
      Panel: "27″ IPS Black, 4K 144 Hz",
      Colour: "99% DCI-P3, ΔE < 1",
      Brightness: "500 nits, HDR 600",
      Ports: "USB-C 96 W, 2 × HDMI 2.1, DP",
      Stand: "Height, tilt, pivot, VESA 100",
      "Calibration report": "Included per unit",
    },
    colors: [{ name: "Graphite", hex: "#2A2F3A" }],
  },
  {
    id: "pivot-lamp",
    name: "Pivot Task Lamp",
    brand: "Pivot",
    cat: "desk",
    art: "lamp",
    price: 139,
    rating: 4.4,
    reviews: 288,
    stock: 26,
    blurb: "An asymmetric head that lights the desk and not the screen. Dims to 1% without flicker.",
    specs: {
      Output: "1 100 lm max",
      "Colour temperature": "2 700 – 5 000 K",
      Dimming: "1 – 100%, flicker-free",
      CRI: "Ra 95",
      Reach: "62 cm",
      Clamp: "Desk up to 60 mm",
    },
    colors: [
      { name: "White", hex: "#F4F4F1" },
      { name: "Ink", hex: "#1D212B" },
    ],
  },
  {
    id: "mono-50",
    name: "Mono 50",
    brand: "Mono",
    cat: "vision",
    art: "camera",
    price: 1299,
    rating: 4.8,
    reviews: 203,
    stock: 3,
    blurb: "A fixed 35mm full-frame camera with physical dials and no menu diving.",
    specs: {
      Sensor: "36 × 24 mm BSI, 44 MP",
      Lens: "35 mm f/2 aspherical",
      Stabilisation: "5-axis, 6.5 stops",
      ISO: "64 – 51 200",
      Video: "6K open gate, 10-bit",
      Weight: "612 g with battery",
    },
    colors: [
      { name: "Black", hex: "#1A1A1C" },
      { name: "Silver", hex: "#C6C7C9" },
    ],
  },
  {
    id: "skylark-3",
    name: "Skylark 3",
    brand: "Skylark",
    cat: "vision",
    art: "drone",
    price: 899,
    rating: 4.5,
    reviews: 417,
    stock: 9,
    blurb: "Folds to the size of a water bottle, holds position in 38 km/h wind.",
    specs: {
      Camera: "1″ CMOS, 20 MP",
      Video: "5.4K 60 fps, D-Log",
      "Flight time": "42 min",
      "Wind resistance": "Level 5 (38 km/h)",
      Range: "15 km O4 link",
      "Folded size": "180 × 90 × 80 mm",
    },
    colors: [{ name: "Ash", hex: "#8E9299" }],
  },
  {
    id: "cell-100",
    name: "Cell 100W",
    brand: "Cell",
    cat: "power",
    art: "charger",
    price: 79,
    rating: 4.7,
    reviews: 2210,
    stock: 120,
    blurb: "Three ports, 100 watts and a body small enough to leave in the bag.",
    specs: {
      Output: "100 W total",
      Ports: "2 × USB-C, 1 × USB-A",
      Protocols: "PD 3.1, PPS, QC 4+",
      Size: "62 × 62 × 32 mm",
      Plug: "Folding, 3 adapters",
      Warranty: "5 years",
    },
    colors: [
      { name: "White", hex: "#F4F4F1" },
      { name: "Ink", hex: "#1D212B" },
    ],
  },
  {
    id: "cell-pack-20k",
    name: "Cell Pack 20k",
    brand: "Cell",
    cat: "power",
    art: "powerbank",
    price: 99,
    rating: 4.6,
    reviews: 1630,
    stock: 54,
    blurb: "A 20 000 mAh pack that charges a laptop and shows exact watts on the display.",
    specs: {
      Capacity: "20 000 mAh / 72 Wh",
      Output: "140 W max",
      Display: "Watts, volts, time left",
      Recharge: "100 W in 55 min",
      Airline: "Under the 100 Wh limit",
      Weight: "498 g",
    },
    colors: [
      { name: "Ink", hex: "#1D212B" },
      { name: "Fog", hex: "#C9CDD4" },
    ],
  },
];

const PROMOS = { KESTREL10: 0.1, WELCOME5: 0.05 };
const FREE_SHIP_OVER = 150;
const SHIP_FLAT = 12;
const TAX_RATE = 0.08;
