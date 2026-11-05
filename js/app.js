/* Kestrel storefront — views, cart and filters. No framework; one render pass per view change. */

const ICON = {
  logo: '<svg class="logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 20V4l8 7 4-4 6 13H3z" fill="currentColor"/><circle cx="18.5" cy="5.5" r="2.5" fill="currentColor" opacity=".55"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="2"/><path d="m16 16 4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  cart:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 5h2.2l2 11h11l2-8H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.6" fill="currentColor"/><circle cx="17.5" cy="20" r="1.6" fill="currentColor"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5-7.5 9.6-7.5 9.6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  heartFull:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5-7.5 9.6-7.5 9.6z" fill="currentColor"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  moon:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.8 6.3.8-4.6 4.4 1.2 6.2L12 17.3 6.4 20.2l1.2-6.2L3 9.6l6.3-.8z" fill="currentColor"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 12.5 5 5L20 6.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  truck:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 7h10v9H2zM12 10h5l3 3v3h-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="6" cy="18" r="1.8" stroke="currentColor" stroke-width="2"/><circle cx="16.5" cy="18" r="1.8" stroke="currentColor" stroke-width="2"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 2.5v6c0 4.5-3 7.6-7 9.5-4-1.9-7-5-7-9.5v-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  rotate:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  headset:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 15v-3a7 7 0 0 1 14 0v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="13" width="4" height="7" rx="2" stroke="currentColor" stroke-width="2"/><rect x="17" y="13" width="4" height="7" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="width:15px;height:15px"><path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  filter:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style="width:15px;height:15px"><path d="M4 7h16M7 12h10m-7 5h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  audio: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 15v-4a7 7 0 0 1 14 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="13" width="4" height="7" rx="2" fill="currentColor"/><rect x="17" y="13" width="4" height="7" rx="2" fill="currentColor"/></svg>',
  wearables: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="7" y="6" width="10" height="12" rx="3.5" stroke="currentColor" stroke-width="2"/><path d="M9.5 6V3.8h5V6M9.5 18v2.2h5V18" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',
  desk: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 20h8M12 16v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  vision: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="7" width="18" height="12" rx="3" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="3.4" stroke="currentColor" stroke-width="2"/><path d="M9 7l1.4-2.4h3.2L15 7" stroke="currentColor" stroke-width="2"/></svg>',
  power: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 3 7 13h4l-1 8 7-11h-4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
};

const KEY = "kestrel.v1";
const state = {
  view: "home",
  productId: null,
  query: "",
  cats: new Set(),
  brands: new Set(),
  maxPrice: 1400,
  inStockOnly: false,
  saleOnly: false,
  sort: "featured",
  filtersOpen: false,
  cart: [],
  wish: new Set(),
  promo: null,
  theme: null,
  drawer: false,
  pdp: { qty: 1, color: 0, tab: "overview" },
  order: null,
};

/* ---------- storage ---------- */
function save() {
  try {
    localStorage.setItem(
      KEY,
      JSON.stringify({ cart: state.cart, wish: [...state.wish], promo: state.promo, theme: state.theme })
    );
  } catch (e) {
    /* private window or blocked storage — the page still works, it just forgets. */
  }
}
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (Array.isArray(d.cart)) state.cart = d.cart;
    if (Array.isArray(d.wish)) state.wish = new Set(d.wish);
    if (d.promo && PROMOS[d.promo]) state.promo = d.promo;
    if (d.theme === "dark" || d.theme === "light") state.theme = d.theme;
  } catch (e) {
    /* ignore unreadable storage */
  }
}

/* ---------- helpers ---------- */
const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function stars(rating) {
  return (
    '<span class="stars">' +
    [1, 2, 3, 4, 5]
      .map((i) => '<span style="opacity:' + (i <= Math.round(rating) ? 1 : 0.25) + '">' + ICON.star + "</span>")
      .join("") +
    "</span>"
  );
}
function art(p) {
  return (ART[p.art] || ART.headphones)();
}
function stockLine(p) {
  if (p.stock === 0) return '<span class="stock stock--low">Sold out</span>';
  if (p.stock <= 10) return '<span class="stock stock--low">Only ' + p.stock + " left</span>";
  return '<span class="stock">In stock</span>';
}

/* ---------- cart maths ---------- */
const cartCount = () => state.cart.reduce((n, l) => n + l.qty, 0);
const subtotal = () => state.cart.reduce((n, l) => n + byId(l.id).price * l.qty, 0);
function totals() {
  const sub = subtotal();
  const discount = state.promo ? sub * PROMOS[state.promo] : 0;
  const net = sub - discount;
  const ship = state.cart.length === 0 || net >= FREE_SHIP_OVER ? 0 : SHIP_FLAT;
  const tax = net * TAX_RATE;
  return { sub, discount, ship, tax, total: net + ship + tax };
}

/* ---------- actions ---------- */
function go(view, opts = {}) {
  state.view = view;
  if (opts.id) state.productId = opts.id;
  if (view === "product") state.pdp = { qty: 1, color: 0, tab: "overview" };
  state.drawer = false;
  render();
  window.scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
}
function addToCart(id, qty = 1, color = 0) {
  const p = byId(id);
  if (!p || p.stock === 0) return;
  const variant = p.colors[color] ? p.colors[color].name : "Standard";
  const line = state.cart.find((l) => l.id === id && l.variant === variant);
  if (line) line.qty = Math.min(line.qty + qty, 10);
  else state.cart.push({ id, variant, qty });
  save();
  toast(p.name + " added to cart");
  render();
}
function setQty(i, delta) {
  const line = state.cart[i];
  if (!line) return;
  line.qty += delta;
  if (line.qty < 1) state.cart.splice(i, 1);
  else line.qty = Math.min(line.qty, 10);
  save();
  render();
}
function toggleWish(id) {
  if (state.wish.has(id)) {
    state.wish.delete(id);
    toast("Removed from saved");
  } else {
    state.wish.add(id);
    toast("Saved for later");
  }
  save();
  render();
}
function toast(msg) {
  const host = document.getElementById("toasts");
  if (!host) return;
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = ICON.check + "<span>" + esc(msg) + "</span>";
  host.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}
function setTheme(next) {
  state.theme = next;
  document.documentElement.setAttribute("data-theme", next);
  save();
  render();
}
function currentTheme() {
  if (state.theme) return state.theme;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/* ---------- filtering ---------- */
function visibleProducts() {
  const q = state.query.trim().toLowerCase();
  let out = PRODUCTS.filter((p) => {
    if (state.cats.size && !state.cats.has(p.cat)) return false;
    if (state.brands.size && !state.brands.has(p.brand)) return false;
    if (p.price > state.maxPrice) return false;
    if (state.inStockOnly && p.stock === 0) return false;
    if ((state.saleOnly || state.view === "deals") && !p.was) return false;
    if (q) {
      const hay = (p.name + " " + p.brand + " " + p.blurb + " " + p.cat).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  const s = state.sort;
  if (s === "price-asc") out.sort((a, b) => a.price - b.price);
  if (s === "price-desc") out.sort((a, b) => b.price - a.price);
  if (s === "rating") out.sort((a, b) => b.rating - a.rating);
  if (s === "new") out.sort((a, b) => (b.tag === "new") - (a.tag === "new"));
  return out;
}

/* ---------- components ---------- */
function cardHtml(p) {
  const saved = state.wish.has(p.id);
  return (
    '<article class="card">' +
    (p.tag === "sale"
      ? '<span class="badge badge--sale">Save ' + money(p.was - p.price).replace(".00", "") + "</span>"
      : p.tag === "new"
      ? '<span class="badge badge--new">New</span>'
      : "") +
    '<button class="wish" data-act="wish" data-id="' +
    p.id +
    '" aria-pressed="' +
    saved +
    '" aria-label="' +
    (saved ? "Remove " + esc(p.name) + " from saved" : "Save " + esc(p.name) + " for later") +
    '">' +
    (saved ? ICON.heartFull : ICON.heart) +
    "</button>" +
    '<button class="card-art" data-act="open" data-id="' +
    p.id +
    '" aria-label="View ' +
    esc(p.name) +
    '">' +
    art(p) +
    "</button>" +
    '<div class="card-body">' +
    '<span class="kicker">' +
    esc(p.brand) +
    " · " +
    esc(p.cat) +
    "</span>" +
    '<button class="card-title" data-act="open" data-id="' +
    p.id +
    '">' +
    esc(p.name) +
    "</button>" +
    '<div class="rating">' +
    stars(p.rating) +
    "<span>" +
    p.rating.toFixed(1) +
    " (" +
    p.reviews.toLocaleString("en-US") +
    ")</span></div>" +
    stockLine(p) +
    '<div class="card-foot"><div><span class="price">' +
    money(p.price) +
    "</span>" +
    (p.was ? '<span class="was">' + money(p.was) + "</span>" : "") +
    "</div>" +
    '<button class="add-mini" data-act="add" data-id="' +
    p.id +
    '"' +
    (p.stock === 0 ? " disabled" : "") +
    ">" +
    (p.stock === 0 ? "Sold out" : "Add") +
    "</button></div>" +
    "</div></article>"
  );
}

function headerHtml() {
  const n = cartCount();
  const nav = [
    ["home", "Home"],
    ["shop", "Shop"],
    ["deals", "Deals"],
    ["about", "About"],
  ];
  return (
    '<div class="ticker"><div class="rail">' +
    "<span>Free shipping over $150</span><span>30-day returns, no questions</span><span>2-year warranty on every item</span><span>Code KESTREL10 — 10% off</span>" +
    "</div></div>" +
    '<div class="rail header-bar">' +
    '<button class="logo" data-act="nav" data-view="home" aria-label="Kestrel home">' +
    ICON.logo +
    "<span>Kestrel</span></button>" +
    '<nav class="nav" aria-label="Main">' +
    nav
      .map(
        ([v, label]) =>
          '<button data-act="nav" data-view="' +
          v +
          '"' +
          (state.view === v || (v === "shop" && state.view === "product") ? ' aria-current="page"' : "") +
          ">" +
          label +
          "</button>"
      )
      .join("") +
    "</nav>" +
    '<div class="header-tools">' +
    '<label class="search"><span class="sr-only" style="position:absolute;left:-9999px">Search products</span>' +
    ICON.search +
    '<input id="q" type="search" placeholder="Search gear" value="' +
    esc(state.query) +
    '" autocomplete="off"></label>' +
    '<button class="icon-btn" data-act="theme" aria-label="Switch to ' +
    (currentTheme() === "dark" ? "light" : "dark") +
    ' theme">' +
    (currentTheme() === "dark" ? ICON.sun : ICON.moon) +
    "</button>" +
    '<button class="icon-btn" data-act="drawer" aria-label="Cart, ' +
    n +
    ' items">' +
    ICON.cart +
    (n ? '<span class="cart-count">' + n + "</span>" : "") +
    "</button>" +
    "</div></div>"
  );
}

function footerHtml() {
  const cols = [
    [
      "Shop",
      CATEGORIES.map((c) => ['nav-cat:' + c.id, c.name]).concat([["nav:deals", "Deals"]]),
    ],
    [
      "Support",
      [
        ["", "Shipping and delivery"],
        ["", "Returns and exchanges"],
        ["", "Warranty claims"],
        ["", "Track an order"],
      ],
    ],
    [
      "Company",
      [
        ["nav:about", "About Kestrel"],
        ["", "Repair programme"],
        ["", "Trade-in"],
        ["", "Press kit"],
      ],
    ],
  ];
  return (
    '<div class="rail">' +
    '<div class="fcol"><div class="logo">' +
    ICON.logo +
    "<span>Kestrel</span></div>" +
    '<p>Gear chosen for how it holds up, not how it looks in a render. Showroom at 14 Harbour Row, open Thursday to Sunday.</p>' +
    '<p class="note">support@kestrel.example · +1 (555) 014-2200</p>' +
    "</div>" +
    cols
      .map(
        ([title, links]) =>
          '<div class="fcol"><h4>' +
          title +
          "</h4>" +
          links
            .map(([target, label]) => {
              if (target.startsWith("nav-cat:"))
                return '<a href="#" data-act="cat-link" data-cat="' + target.slice(8) + '">' + label + "</a>";
              if (target.startsWith("nav:"))
                return '<a href="#" data-act="nav" data-view="' + target.slice(4) + '">' + label + "</a>";
              return '<a href="#" data-act="noop">' + label + "</a>";
            })
            .join("") +
          "</div>"
      )
      .join("") +
    "</div>" +
    '<div class="legal"><div class="rail"><span>© 2026 Kestrel Supply Co. A demo storefront — no real orders are placed.</span><span>Built with HTML, CSS and vanilla JS</span></div></div>'
  );
}

/* ---------- views ---------- */
function homeView() {
  const hero = byId("arc-one");
  const featured = ["slate-75", "vector-m2", "drift-pro", "aperture-27"].map(byId);
  const popular = ["mono-50", "cell-100", "mono-s", "skylark-3"].map(byId);
  const values = [
    [ICON.truck, "Shipped in 24 hours", "Orders placed before 4pm leave the same working day from Rotterdam or Newark."],
    [ICON.rotate, "30 days to change your mind", "Return anything unused, with the box, and we pay the label."],
    [ICON.shield, "Two-year warranty", "Covered parts and labour, plus paid repairs after that for as long as parts exist."],
    [ICON.headset, "People who use the gear", "Our support team keeps a unit of everything we sell on their own desks."],
  ];
  return (
    '<section class="hero"><div class="rail">' +
    '<div class="hero-copy">' +
    '<span class="eyebrow">New · Autumn range</span>' +
    "<h1>Gear that earns its place on the desk.</h1>" +
    '<p class="hero-lede">We stock a short list instead of a long one. Every item here was used for a month before it made the shelf, and the specs below are measured, not quoted from a box.</p>' +
    '<div class="hero-actions">' +
    '<button class="btn btn--lg" data-act="nav" data-view="shop">Shop the range ' +
    ICON.arrow +
    "</button>" +
    '<button class="btn btn--ghost btn--lg" data-act="open" data-id="arc-one">See the Arc One</button>' +
    "</div>" +
    '<div class="hero-specs">' +
    ['<span class="chip">52 h battery</span>', '<span class="chip">40 mm driver</span>', '<span class="chip">268 g</span>', '<span class="chip">Replaceable cable</span>'].join("") +
    "</div></div>" +
    '<div class="hero-stage"><div class="stage-art">' +
    art(hero) +
    "</div>" +
    '<div class="stage-meta"><div><span class="eyebrow">Editor pick</span><br><strong>' +
    hero.name +
    ' Headphones</strong></div><span class="price">' +
    money(hero.price) +
    "</span></div></div>" +
    "</div></section>" +
    '<section class="section"><div class="rail">' +
    '<div class="section-head"><div><h2>Browse by category</h2><p>Five shelves, nothing filler. Counts update as stock moves.</p></div></div>' +
    '<div class="cats">' +
    CATEGORIES.map(
      (c) =>
        '<button class="cat" data-act="cat-link" data-cat="' +
        c.id +
        '">' +
        (ICON[c.id] || ICON.desk) +
        "<strong>" +
        c.name +
        "</strong><span>" +
        PRODUCTS.filter((p) => p.cat === c.id).length +
        " products · " +
        c.note +
        "</span></button>"
    ).join("") +
    "</div></div></section>" +
    '<section class="section" style="padding-top:0"><div class="rail">' +
    '<div class="section-head"><div><h2>Featured this month</h2><p>What the team actually reaches for.</p></div>' +
    '<button class="link-btn" data-act="nav" data-view="shop">All products ' +
    ICON.arrow +
    "</button></div>" +
    '<div class="grid">' +
    featured.map(cardHtml).join("") +
    "</div></div></section>" +
    '<section class="band"><div class="rail">' +
    values
      .map(([icon, title, body]) => '<div class="value">' + icon + "<strong>" + title + "</strong><p>" + body + "</p></div>")
      .join("") +
    "</div></section>" +
    '<section class="section"><div class="rail">' +
    '<div class="section-head"><div><h2>Selling fast</h2><p>Low stock moves first — these are the current five.</p></div>' +
    '<button class="link-btn" data-act="nav" data-view="deals">See deals ' +
    ICON.arrow +
    "</button></div>" +
    '<div class="grid">' +
    popular.map(cardHtml).join("") +
    "</div></div></section>" +
    newsletterHtml()
  );
}

function newsletterHtml() {
  return (
    '<section class="news"><div class="rail">' +
    '<div><h2>One email a month. New stock, nothing else.</h2><p>Restock alerts, repair guides and the occasional teardown. Unsubscribe in one click.</p></div>' +
    '<form id="news-form"><input id="news-email" type="email" placeholder="you@example.com" aria-label="Email address" required><button class="btn btn--lg" type="submit">Subscribe</button></form>' +
    "</div></section>"
  );
}

function filtersHtml() {
  const brands = [...new Set(PRODUCTS.map((p) => p.brand))].sort();
  return (
    '<aside class="filters" data-collapsed="' +
    (!state.filtersOpen) +
    '" aria-label="Filters">' +
    '<div class="filter-group"><h3>Category</h3>' +
    CATEGORIES.map(
      (c) =>
        '<label class="check"><input type="checkbox" data-act="filter-cat" data-cat="' +
        c.id +
        '"' +
        (state.cats.has(c.id) ? " checked" : "") +
        "><span>" +
        c.name +
        '</span><span class="count">' +
        PRODUCTS.filter((p) => p.cat === c.id).length +
        "</span></label>"
    ).join("") +
    "</div>" +
    '<div class="filter-group"><h3>Brand</h3>' +
    brands
      .map(
        (b) =>
          '<label class="check"><input type="checkbox" data-act="filter-brand" data-brand="' +
          b +
          '"' +
          (state.brands.has(b) ? " checked" : "") +
          "><span>" +
          b +
          '</span><span class="count">' +
          PRODUCTS.filter((p) => p.brand === b).length +
          "</span></label>"
      )
      .join("") +
    "</div>" +
    '<div class="filter-group"><h3>Max price</h3><div class="range">' +
    '<input id="price" type="range" min="79" max="1400" step="10" value="' +
    state.maxPrice +
    '" data-act="filter-price">' +
    "<output>Up to " +
    money(state.maxPrice) +
    "</output></div></div>" +
    '<div class="filter-group"><h3>Availability</h3>' +
    '<label class="check"><input type="checkbox" data-act="filter-stock"' +
    (state.inStockOnly ? " checked" : "") +
    "><span>In stock only</span></label>" +
    '<label class="check"><input type="checkbox" data-act="filter-sale"' +
    (state.saleOnly ? " checked" : "") +
    "><span>On sale</span></label></div>" +
    '<button class="btn btn--ghost" data-act="filter-clear">Clear filters</button>' +
    "</aside>"
  );
}

function shopView(title, lede) {
  const items = visibleProducts();
  return (
    '<div class="rail shop">' +
    filtersHtml() +
    "<section>" +
    '<div class="shop-head"><div><h1>' +
    title +
    '</h1><span class="result-count">' +
    items.length +
    " of " +
    PRODUCTS.length +
    " products" +
    (state.query ? ' matching "' + esc(state.query) + '"' : "") +
    "</span></div>" +
    '<div style="display:flex;gap:8px;align-items:center">' +
    '<button class="btn btn--ghost filter-toggle" data-act="filters-toggle">' +
    ICON.filter +
    (state.filtersOpen ? "Hide filters" : "Filters") +
    "</button>" +
    '<label class="sr-only" for="sort" style="position:absolute;left:-9999px">Sort by</label>' +
    '<select id="sort" data-act="sort">' +
    [
      ["featured", "Featured"],
      ["price-asc", "Price: low to high"],
      ["price-desc", "Price: high to low"],
      ["rating", "Best rated"],
      ["new", "Newest"],
    ]
      .map(([v, l]) => '<option value="' + v + '"' + (state.sort === v ? " selected" : "") + ">" + l + "</option>")
      .join("") +
    "</select></div></div>" +
    (lede ? '<p class="muted" style="margin-bottom:20px;max-width:60ch">' + lede + "</p>" : "") +
    (items.length
      ? '<div class="grid">' + items.map(cardHtml).join("") + "</div>"
      : '<div class="empty"><h3>Nothing matches those filters</h3><p class="muted">Try a wider price range, or clear the filters and start again.</p><button class="btn" data-act="filter-clear">Clear filters</button></div>') +
    "</section></div>"
  );
}

function productView() {
  const p = byId(state.productId) || PRODUCTS[0];
  const sel = state.pdp;
  const related = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const panels = {
    overview:
      "<p><strong>" +
      esc(p.name) +
      ".</strong> " +
      esc(p.blurb) +
      "</p><p>We kept a unit on the bench for four weeks before stocking it. It arrives with the cable, the case and a printed quick-start card; the serial on the box matches the one on the body, so a warranty claim takes one photo.</p><p>Bought together most often with the Cell 100W charger.</p>",
    specs:
      '<table class="specs"><tbody>' +
      Object.entries(p.specs)
        .map(([k, v]) => "<tr><th>" + esc(k) + "</th><td>" + esc(v) + "</td></tr>")
        .join("") +
      "</tbody></table>",
    shipping:
      '<ul class="ship-list">' +
      [
        "Free standard shipping over $150, otherwise a flat $12.",
        "Order before 4pm on a working day and it leaves the same day.",
        "Two-year warranty covering parts and labour, extendable to four.",
        "Return it unused within 30 days and we pay for the label.",
      ]
        .map((l) => "<li><span>" + l + "</span></li>")
        .join("") +
      "</ul>",
  };
  return (
    '<div class="rail"><div class="crumbs"><button data-act="nav" data-view="home">Home</button><span>/</span><button data-act="cat-link" data-cat="' +
    p.cat +
    '">' +
    p.cat +
    "</button><span>/</span><span>" +
    esc(p.name) +
    "</span></div>" +
    '<div class="pdp">' +
    '<div class="gallery"><div class="gallery-main">' +
    art(p) +
    "</div>" +
    '<div class="thumbs">' +
    [0, 1, 2, 3]
      .map(
        (i) =>
          '<button class="thumb" data-act="thumb" data-i="' +
          i +
          '" aria-pressed="' +
          (sel.thumb === i || (!sel.thumb && i === 0)) +
          '" aria-label="View ' +
          ["front", "angle", "detail", "in use"][i] +
          '" style="opacity:' +
          (sel.thumb === i || (!sel.thumb && i === 0) ? 1 : 0.72) +
          '">' +
          art(p) +
          "</button>"
      )
      .join("") +
    "</div></div>" +
    '<div class="pdp-info">' +
    '<span class="eyebrow">' +
    esc(p.brand) +
    " · " +
    esc(p.cat) +
    "</span>" +
    "<h1>" +
    esc(p.name) +
    "</h1>" +
    '<div class="rating">' +
    stars(p.rating) +
    "<span>" +
    p.rating.toFixed(1) +
    " · " +
    p.reviews.toLocaleString("en-US") +
    " reviews</span></div>" +
    '<div class="pdp-price"><span class="price">' +
    money(p.price) +
    "</span>" +
    (p.was ? '<span class="was">' + money(p.was) + '</span><span class="chip" style="color:var(--signal);border-color:var(--signal)">Save ' + money(p.was - p.price).replace(".00", "") + "</span>" : "") +
    "</div>" +
    '<p class="muted" style="max-width:52ch">' +
    esc(p.blurb) +
    "</p>" +
    '<div><span class="eyebrow">Finish</span><div class="swatches" style="margin-top:8px">' +
    p.colors
      .map(
        (c, i) =>
          '<button class="swatch" data-act="color" data-i="' +
          i +
          '" aria-pressed="' +
          (sel.color === i) +
          '"><i style="background:' +
          c.hex +
          '"></i>' +
          c.name +
          "</button>"
      )
      .join("") +
    "</div></div>" +
    '<div class="buy-row">' +
    '<div class="qty"><button data-act="pdp-qty" data-d="-1" aria-label="Decrease quantity">−</button><output aria-live="polite">' +
    sel.qty +
    '</output><button data-act="pdp-qty" data-d="1" aria-label="Increase quantity">+</button></div>' +
    '<button class="btn btn--lg" data-act="pdp-add"' +
    (p.stock === 0 ? " disabled" : "") +
    ">" +
    (p.stock === 0 ? "Sold out" : "Add to cart · " + money(p.price * sel.qty)) +
    "</button>" +
    '<button class="icon-btn" data-act="wish" data-id="' +
    p.id +
    '" aria-pressed="' +
    state.wish.has(p.id) +
    '" aria-label="Save for later" style="width:46px;height:46px' +
    (state.wish.has(p.id) ? ";color:var(--signal);border-color:var(--signal)" : "") +
    '">' +
    (state.wish.has(p.id) ? ICON.heartFull : ICON.heart) +
    "</button></div>" +
    '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
    stockLine(p) +
    '<span class="note">· Ships today if ordered before 4pm · ' +
    (p.price >= FREE_SHIP_OVER ? "Free shipping" : "$12 shipping") +
    "</span></div>" +
    '<div class="tabs" role="tablist">' +
    [
      ["overview", "Overview"],
      ["specs", "Specifications"],
      ["shipping", "Shipping and returns"],
    ]
      .map(
        ([v, l]) =>
          '<button role="tab" data-act="tab" data-tab="' + v + '" aria-selected="' + (sel.tab === v) + '">' + l + "</button>"
      )
      .join("") +
    "</div>" +
    '<div class="tab-panel" role="tabpanel">' +
    panels[sel.tab] +
    "</div>" +
    "</div></div>" +
    (related.length
      ? '<section class="section" style="padding-top:12px"><div class="section-head"><div><h2>Others in ' +
        p.cat +
        "</h2></div></div>" +
        '<div class="grid">' +
        related.map(cardHtml).join("") +
        "</div></section>"
      : "") +
    "</div>"
  );
}

function cartView() {
  const t = totals();
  if (!state.cart.length) {
    return (
      '<div class="rail"><div class="empty" style="margin-block:56px">' +
      "<h2>Your cart is empty</h2>" +
      '<p class="muted">Add something from the range and it will wait here, even if you close the tab.</p>' +
      '<button class="btn" data-act="nav" data-view="shop">Browse products</button></div></div>'
    );
  }
  return (
    '<div class="rail cart-wrap">' +
    "<section>" +
    '<div class="shop-head"><h1>Cart</h1><span class="result-count">' +
    cartCount() +
    " item" +
    (cartCount() === 1 ? "" : "s") +
    "</span></div>" +
    '<div class="lines">' +
    state.cart
      .map((l, i) => {
        const p = byId(l.id);
        return (
          '<div class="line">' +
          '<div class="line-art">' +
          art(p) +
          "</div>" +
          '<div class="line-meta"><strong>' +
          esc(p.name) +
          '</strong><span class="variant">' +
          esc(p.brand) +
          " · " +
          esc(l.variant) +
          "</span>" +
          stockLine(p) +
          "</div>" +
          '<div class="line-right"><span class="price" style="font-size:16px">' +
          money(p.price * l.qty) +
          "</span>" +
          '<div class="qty"><button data-act="line-qty" data-i="' +
          i +
          '" data-d="-1" aria-label="Decrease">−</button><output>' +
          l.qty +
          '</output><button data-act="line-qty" data-i="' +
          i +
          '" data-d="1" aria-label="Increase">+</button></div>' +
          '<button class="remove" data-act="line-remove" data-i="' +
          i +
          '">Remove</button></div></div>'
        );
      })
      .join("") +
    "</div></section>" +
    summaryHtml(t, true) +
    "</div>"
  );
}

function summaryHtml(t, withPromo) {
  return (
    '<aside class="summary"><h2>Order summary</h2>' +
    '<div class="sum-row"><span>Subtotal</span><span>' +
    money(t.sub) +
    "</span></div>" +
    (t.discount
      ? '<div class="sum-row" style="color:var(--ok)"><span>Discount (' + state.promo + ")</span><span>−" + money(t.discount) + "</span></div>"
      : "") +
    '<div class="sum-row"><span>Shipping</span><span>' +
    (t.ship ? money(t.ship) : "Free") +
    "</span></div>" +
    '<div class="sum-row"><span>Estimated tax</span><span>' +
    money(t.tax) +
    "</span></div>" +
    '<div class="sum-row sum-total"><span>Total</span><span class="price">' +
    money(t.total) +
    "</span></div>" +
    (withPromo
      ? '<form class="promo" id="promo-form"><input id="promo-code" placeholder="Promo code" aria-label="Promo code" value="' +
        (state.promo || "") +
        '"><button class="btn btn--quiet" type="submit">Apply</button></form>' +
        '<p class="note">Try KESTREL10 for 10% off.</p>'
      : "") +
    (t.sub < FREE_SHIP_OVER
      ? '<p class="note">Add ' + money(FREE_SHIP_OVER - t.sub) + " for free shipping.</p>"
      : '<p class="note">Free shipping applied.</p>') +
    '<button class="btn btn--block btn--lg" data-act="nav" data-view="checkout">Checkout ' +
    ICON.arrow +
    "</button>" +
    '<p class="note">Demo store — the checkout does not take payment.</p>' +
    "</aside>"
  );
}

function checkoutView() {
  const t = totals();
  if (!state.cart.length) return cartView();
  return (
    '<div class="rail checkout">' +
    '<div class="checkout-main">' +
    "<h1>Checkout</h1>" +
    '<div class="steps">' +
    [
      ["1", "Contact"],
      ["2", "Shipping"],
      ["3", "Payment"],
    ]
      .map(([n, l], i) => '<span class="step"' + (i === 0 ? ' aria-current="step"' : "") + "><i>" + n + "</i>" + l + "</span>")
      .join("") +
    "</div>" +
    '<form id="checkout-form" class="checkout-main">' +
    '<section><h2 style="font-size:19px;margin-bottom:14px">Contact</h2><div class="form-grid">' +
    '<div class="field field--full"><label for="co-email">Email</label><input id="co-email" type="email" required placeholder="you@example.com"></div>' +
    '<div class="field"><label for="co-first">First name</label><input id="co-first" required placeholder="Alex"></div>' +
    '<div class="field"><label for="co-last">Last name</label><input id="co-last" required placeholder="Moreau"></div>' +
    "</div></section>" +
    '<section><h2 style="font-size:19px;margin-bottom:14px">Shipping address</h2><div class="form-grid">' +
    '<div class="field field--full"><label for="co-addr">Street and number</label><input id="co-addr" required placeholder="14 Harbour Row"></div>' +
    '<div class="field"><label for="co-city">City</label><input id="co-city" required placeholder="Rotterdam"></div>' +
    '<div class="field"><label for="co-zip">Postcode</label><input id="co-zip" required placeholder="3011 AB"></div>' +
    '<div class="field field--full"><label for="co-country">Country</label><select id="co-country"><option>Netherlands</option><option>Germany</option><option>United Kingdom</option><option>United States</option><option>Pakistan</option></select></div>' +
    "</div></section>" +
    '<section><h2 style="font-size:19px;margin-bottom:14px">Payment</h2><div class="pay-methods">' +
    [
      ["card", "Card", "Visa, Mastercard, Amex"],
      ["ideal", "iDEAL", "Dutch bank transfer"],
      ["invoice", "Invoice", "Business accounts, 14 days"],
    ]
      .map(
        ([v, l, note], i) =>
          '<button type="button" class="pay" data-act="pay" data-pay="' +
          v +
          '" aria-pressed="' +
          (i === 0) +
          '"><strong>' +
          l +
          '</strong><span class="note">' +
          note +
          "</span></button>"
      )
      .join("") +
    "</div>" +
    '<p class="note" style="margin-top:10px">This is a demo storefront. No card fields are shown and no payment is taken.</p>' +
    "</section>" +
    '<button class="btn btn--lg" type="submit">Place order · ' +
    money(t.total) +
    "</button>" +
    "</form></div>" +
    summaryHtml(t, false) +
    "</div>"
  );
}

function confirmView() {
  return (
    '<div class="rail"><div class="confirm">' +
    '<div class="confirm-mark">' +
    ICON.check +
    "</div>" +
    "<h1>Order placed</h1>" +
    '<p class="muted" style="max-width:46ch">A confirmation is on its way. You can track the parcel from the link in that email once it leaves the warehouse.</p>' +
    '<p class="order-no">Order ' +
    esc(state.order || "KES-000000") +
    " · arriving in 2–4 working days</p>" +
    '<div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><button class="btn" data-act="nav" data-view="shop">Keep shopping</button><button class="btn btn--ghost" data-act="nav" data-view="home">Back home</button></div>' +
    "</div></div>"
  );
}

function aboutView() {
  const facts = [
    ["2019", "Started as a repair bench in a Rotterdam bike shop."],
    ["41", "Products tested this year. Fourteen made the shelf."],
    ["4 weeks", "Minimum time we live with a product before stocking it."],
    ["86%", "Of warranty claims resolved by repair instead of replacement."],
  ];
  return (
    '<div class="rail" style="padding-block:48px;display:grid;gap:36px;max-width:900px">' +
    '<div style="display:grid;gap:16px"><span class="eyebrow">About</span>' +
    "<h1 style=\"font-size:clamp(30px,4.4vw,48px)\">We would rather sell you one thing twice than two things once.</h1>" +
    '<p style="font-size:17.5px;color:var(--ink-2);max-width:62ch">Kestrel began as a repair bench. That is still how we pick stock: if a product cannot be opened, if the battery is glued in, or if the maker will not sell us a spare part, it does not go on the shelf — however well it reviews elsewhere.</p></div>' +
    '<div class="band" style="border-radius:var(--r-lg);border:1px solid var(--line)"><div class="rail">' +
    facts
      .map(
        ([n, l]) =>
          '<div class="value"><strong class="price" style="font-size:30px;font-family:var(--display)">' +
          n +
          "</strong><p>" +
          l +
          "</p></div>"
      )
      .join("") +
    "</div></div>" +
    '<div style="display:grid;gap:14px;max-width:62ch"><h2 style="font-size:26px">How we test</h2>' +
    '<p class="muted">Headphones get 40 hours of listening and a measured battery run-down. Keyboards get a week of real work and a sound recording. Cameras go on an actual job. We publish the numbers we measured, even when they are lower than the box claims.</p>' +
    '<h2 style="font-size:26px;margin-top:10px">Repairs</h2>' +
    '<p class="muted">Bring anything we sold back to the Harbour Row bench and we will quote a repair before we quote a replacement. Out-of-warranty work is charged at cost of parts plus one hour of labour.</p></div>' +
    '<div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn" data-act="nav" data-view="shop">See the range</button><button class="btn btn--ghost" data-act="nav" data-view="deals">Current deals</button></div>' +
    "</div>"
  );
}

/* ---------- render ---------- */
function mainHtml() {
  switch (state.view) {
    case "shop":
      return shopView("All products", "Fourteen products across five categories. Filter on the left, sort on the right.");
    case "deals":
      return shopView("Deals", "Price cuts running this month. Stock on sale items is not replaced once it goes.");
    case "product":
      return productView();
    case "cart":
      return cartView();
    case "checkout":
      return checkoutView();
    case "confirm":
      return confirmView();
    case "about":
      return aboutView();
    default:
      return homeView();
  }
}

function drawerHtml() {
  if (!state.drawer) return "";
  const t = totals();
  return (
    '<button class="scrim" data-act="drawer-close" aria-label="Close cart"></button>' +
    '<aside class="drawer" role="dialog" aria-label="Cart">' +
    '<div class="drawer-head"><h2>Cart · ' +
    cartCount() +
    '</h2><button class="icon-btn" data-act="drawer-close" aria-label="Close">' +
    ICON.close +
    "</button></div>" +
    '<div class="drawer-body">' +
    (state.cart.length
      ? state.cart
          .map((l, i) => {
            const p = byId(l.id);
            return (
              '<div class="line"><div class="line-art">' +
              art(p) +
              '</div><div class="line-meta"><strong>' +
              esc(p.name) +
              '</strong><span class="variant">' +
              esc(l.variant) +
              " · " +
              money(p.price) +
              '</span><div class="qty" style="margin-top:4px"><button data-act="line-qty" data-i="' +
              i +
              '" data-d="-1" aria-label="Decrease">−</button><output>' +
              l.qty +
              '</output><button data-act="line-qty" data-i="' +
              i +
              '" data-d="1" aria-label="Increase">+</button></div></div>' +
              '<div class="line-right"><span class="price">' +
              money(p.price * l.qty) +
              '</span><button class="remove" data-act="line-remove" data-i="' +
              i +
              '">Remove</button></div></div>'
            );
          })
          .join("")
      : '<p class="muted">Nothing here yet. Add something from the range.</p>') +
    "</div>" +
    '<div class="drawer-foot">' +
    '<div class="sum-row sum-total" style="border:0;padding:0"><span>Subtotal</span><span class="price">' +
    money(t.sub) +
    "</span></div>" +
    '<button class="btn btn--block" data-act="nav" data-view="cart"' +
    (state.cart.length ? "" : " disabled") +
    ">View cart</button>" +
    '<button class="btn btn--ghost btn--block" data-act="nav" data-view="checkout"' +
    (state.cart.length ? "" : " disabled") +
    ">Checkout</button>" +
    "</div></aside>"
  );
}

function render() {
  const focusId = document.activeElement && document.activeElement.id;
  const caret = focusId === "q" ? document.activeElement.selectionStart : null;
  document.getElementById("header").innerHTML = headerHtml();
  document.getElementById("main").innerHTML = mainHtml();
  document.getElementById("footer").innerHTML = footerHtml();
  document.getElementById("overlay").innerHTML = drawerHtml();
  if (focusId === "q") {
    const q = document.getElementById("q");
    if (q) {
      q.focus();
      if (caret !== null) q.setSelectionRange(caret, caret);
    }
  }
}

/* ---------- events ---------- */
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const act = el.dataset.act;
  if (el.tagName === "A") e.preventDefault();
  switch (act) {
    case "nav":
      go(el.dataset.view);
      break;
    case "open":
      go("product", { id: el.dataset.id });
      break;
    case "add":
      addToCart(el.dataset.id);
      break;
    case "wish":
      toggleWish(el.dataset.id);
      break;
    case "theme":
      setTheme(currentTheme() === "dark" ? "light" : "dark");
      break;
    case "drawer":
      state.drawer = true;
      render();
      break;
    case "drawer-close":
      state.drawer = false;
      render();
      break;
    case "cat-link":
      state.cats = new Set([el.dataset.cat]);
      state.query = "";
      go("shop");
      break;
    case "filters-toggle":
      state.filtersOpen = !state.filtersOpen;
      render();
      break;
    case "filter-clear":
      state.cats = new Set();
      state.brands = new Set();
      state.maxPrice = 1400;
      state.inStockOnly = false;
      state.saleOnly = false;
      state.query = "";
      render();
      break;
    case "pdp-qty": {
      const next = state.pdp.qty + Number(el.dataset.d);
      state.pdp.qty = Math.min(10, Math.max(1, next));
      render();
      break;
    }
    case "pdp-add":
      addToCart(state.productId, state.pdp.qty, state.pdp.color);
      break;
    case "color":
      state.pdp.color = Number(el.dataset.i);
      render();
      break;
    case "thumb":
      state.pdp.thumb = Number(el.dataset.i);
      render();
      break;
    case "tab":
      state.pdp.tab = el.dataset.tab;
      render();
      break;
    case "line-qty":
      setQty(Number(el.dataset.i), Number(el.dataset.d));
      break;
    case "line-remove":
      state.cart.splice(Number(el.dataset.i), 1);
      save();
      toast("Removed from cart");
      render();
      break;
    case "pay":
      document.querySelectorAll('[data-act="pay"]').forEach((b) => b.setAttribute("aria-pressed", b === el));
      break;
    case "noop":
      toast("Demo page — not wired up");
      break;
  }
});

document.addEventListener("change", (e) => {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const act = el.dataset.act;
  if (act === "filter-cat") {
    el.checked ? state.cats.add(el.dataset.cat) : state.cats.delete(el.dataset.cat);
    render();
  }
  if (act === "filter-brand") {
    el.checked ? state.brands.add(el.dataset.brand) : state.brands.delete(el.dataset.brand);
    render();
  }
  if (act === "filter-stock") {
    state.inStockOnly = el.checked;
    render();
  }
  if (act === "filter-sale") {
    state.saleOnly = el.checked;
    render();
  }
  if (act === "sort") {
    state.sort = el.value;
    render();
  }
});

document.addEventListener("input", (e) => {
  if (e.target.id === "q") {
    state.query = e.target.value;
    if (state.view !== "shop" && state.view !== "deals") state.view = "shop";
    render();
  }
  if (e.target.dataset && e.target.dataset.act === "filter-price") {
    state.maxPrice = Number(e.target.value);
    const out = e.target.parentElement.querySelector("output");
    if (out) out.textContent = "Up to " + money(state.maxPrice);
    clearTimeout(window.__priceT);
    window.__priceT = setTimeout(render, 220);
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  if (form.id === "promo-form") {
    const code = (document.getElementById("promo-code").value || "").trim().toUpperCase();
    if (PROMOS[code]) {
      state.promo = code;
      save();
      toast(code + " applied — " + PROMOS[code] * 100 + "% off");
    } else {
      toast("That code is not valid");
    }
    render();
  }
  if (form.id === "news-form") {
    const input = document.getElementById("news-email");
    toast("Subscribed " + (input.value || "you") + " — one email a month");
    input.value = "";
  }
  if (form.id === "checkout-form") {
    state.order = "KES-" + String(Math.floor(100000 + Math.random() * 900000));
    state.cart = [];
    state.promo = null;
    save();
    go("confirm");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.drawer) {
    state.drawer = false;
    render();
  }
});

/* ---------- boot ---------- */
load();
if (state.theme) document.documentElement.setAttribute("data-theme", state.theme);
render();
