import { T as jsxRuntimeExports, r as reactExports } from "./worker-entry-DlAz7EEQ.js";
import { m as motion, H as Header, F as Footer } from "./proxy-BPaJI9_S.js";
import { c as createLucideIcon, L as Link, T as Thermometer, W as Waves, a as TreePine, Z as Zap, B as Bug, M as Mountain } from "./router-D9PAxtDW.js";
import { A as ArrowRight } from "./arrow-right-DdM_eKCk.js";
import { S as Sparkles } from "./sparkles-DLb1uCeR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const heroEarth = "/assets/hero-earth-JEG1bwaq.jpg";
const stats = [
  { label: "CO₂ Level", value: "426", unit: "ppm", trend: "+2.4/yr", color: "from-earth-coral/20 to-earth-coral/5" },
  { label: "Global Temp Rise", value: "+1.2", unit: "°C", trend: "since 1880", color: "from-earth-amber/20 to-earth-amber/5" },
  { label: "Ice Loss", value: "150", unit: "Gt/yr", trend: "accelerating", color: "from-earth-ocean/20 to-earth-ocean/5" },
  { label: "Species at Risk", value: "44,000", unit: "+", trend: "IUCN Red List", color: "from-earth-violet/20 to-earth-violet/5" }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroEarth,
          alt: "Aerial view of Earth",
          className: "w-full h-full object-cover scale-105",
          width: 1920,
          height: 1080
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-96 h-96 bg-earth-green/15 top-20 -left-48" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-72 h-72 bg-earth-ocean/10 top-40 right-0", style: { animationDelay: "-7s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-80 h-80 bg-earth-violet/8 bottom-20 left-1/3", style: { animationDelay: "-14s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-6xl px-6 text-center pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
              "Awareness · Science · Action"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] text-foreground mb-6", children: [
              "Know Your",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Planet" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-10", children: "Real-time earth science, climate intelligence, and environmental data — because understanding our planet is the first step to protecting it." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/topics",
                  className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
                  children: [
                    "Explore Topics ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/about",
                  className: "inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:bg-white/10",
                  children: "Our Mission"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          className: "mt-16 macos-window max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-titlebar", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-dots", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium ml-2", children: "Earth Vitals — Live Dashboard" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-5 text-center bg-gradient-to-b ${stat.color}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5", children: stat.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl md:text-3xl font-bold text-primary stat-glow", children: [
                    stat.value,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: stat.unit })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: stat.trend })
                ]
              },
              stat.label
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "mt-12",
          animate: { y: [0, 8, 0] },
          transition: { repeat: Infinity, duration: 2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "mx-auto h-5 w-5 text-muted-foreground" })
        }
      )
    ] })
  ] });
}
const articleClimate = "/assets/article-climate-CiyWHgWh.jpg";
const articleForests = "/assets/article-forests-DkOoaNz-.jpg";
const articleOceans = "/assets/article-oceans-BN_Sy18N.jpg";
const articleEnergy = "/assets/article-energy-CnIaCivF.jpg";
const articles = [
  {
    title: "Arctic Ice Hits Record Low for Third Consecutive Year",
    category: "Climate",
    topicId: "climate-change",
    image: articleClimate,
    excerpt: "New satellite data reveals the extent of polar ice loss is accelerating faster than models predicted.",
    date: "Apr 12, 2026",
    featured: true
  },
  {
    title: "Amazon Rainforest: Tipping Points and What They Mean",
    category: "Forests",
    topicId: "forests",
    image: articleForests,
    excerpt: "Scientists warn that deforestation may push the Amazon past a critical threshold.",
    date: "Apr 10, 2026"
  },
  {
    title: "Deep Ocean Currents Show Signs of Slowing",
    category: "Oceans",
    topicId: "oceans",
    image: articleOceans,
    excerpt: "Thermohaline circulation changes could reshape global weather patterns within decades.",
    date: "Apr 8, 2026"
  },
  {
    title: "Renewable Energy Surpasses Fossil Fuels in EU Grid",
    category: "Energy",
    topicId: "clean-energy",
    image: articleEnergy,
    excerpt: "For the first time, renewables generated more electricity than coal and gas combined in the European Union.",
    date: "Apr 6, 2026"
  }
];
function FeaturedArticles() {
  const featured = articles[0];
  const rest = articles.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-80 h-80 bg-earth-ocean/8 -top-20 right-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Latest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mt-2", children: "Featured Stories" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/topics", className: "hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/topics/$topicId",
                params: { topicId: featured.topicId },
                className: "group relative overflow-hidden rounded-2xl glass-card block",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: featured.image,
                      alt: featured.title,
                      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                      loading: "lazy",
                      width: 800,
                      height: 600
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full glass-panel px-3 py-1 text-xs font-semibold text-primary mb-3", children: featured.category }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-2", children: featured.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: featured.excerpt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: featured.date })
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: rest.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/topics/$topicId",
                params: { topicId: article.topicId },
                className: "group flex gap-4 rounded-xl glass-card p-4 block",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: article.image,
                      alt: article.title,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                      loading: "lazy",
                      width: 800,
                      height: 600
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-primary mb-1", children: article.category }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm md:text-base font-bold text-foreground leading-snug line-clamp-2 mb-1", children: article.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 hidden md:block", children: article.excerpt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2", children: article.date })
                  ] })
                ]
              }
            )
          },
          article.title
        )) })
      ] })
    ] })
  ] });
}
const topics = [
  { name: "Climate Change", id: "climate-change", description: "Global warming, temperature data, and climate science", icon: Thermometer, color: "text-earth-coral", glow: "group-hover:shadow-earth-coral/20" },
  { name: "Oceans", id: "oceans", description: "Marine ecosystems, sea levels, and ocean health", icon: Waves, color: "text-earth-ocean", glow: "group-hover:shadow-earth-ocean/20" },
  { name: "Forests", id: "forests", description: "Deforestation, reforestation, and biodiversity", icon: TreePine, color: "text-earth-green", glow: "group-hover:shadow-earth-green/20" },
  { name: "Clean Energy", id: "clean-energy", description: "Renewables, energy transition, and innovation", icon: Zap, color: "text-earth-amber", glow: "group-hover:shadow-earth-amber/20" },
  { name: "Wildlife", id: "wildlife", description: "Endangered species, conservation, and habitats", icon: Bug, color: "text-earth-violet", glow: "group-hover:shadow-earth-violet/20" },
  { name: "Geology", id: "geology", description: "Earth systems, natural resources, and land use", icon: Mountain, color: "text-earth-soil", glow: "group-hover:shadow-earth-soil/20" }
];
function TopicsGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 relative aurora-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Explore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mt-2", children: "Topics We Cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-lg mx-auto", children: "Dive deep into the subjects that matter most for our planet's future." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: topics.map((topic, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/topics/$topicId",
            params: { topicId: topic.id },
            className: `group flex items-start gap-4 rounded-xl glass-card p-6 block ${topic.glow} group-hover:shadow-xl`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(topic.icon, { className: `h-6 w-6 ${topic.color} flex-shrink-0 mt-0.5` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-base font-semibold text-foreground mb-1 flex items-center gap-2", children: [
                  topic.name,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: topic.description })
              ] })
            ]
          }
        )
      },
      topic.name
    )) })
  ] }) });
}
const facts = [
  "The ocean absorbs about 30% of the CO₂ produced by humans.",
  "A single tree can absorb up to 48 pounds of CO₂ per year.",
  "Renewable energy jobs have grown 3x faster than fossil fuel jobs.",
  "75% of all land environments have been severely altered by human activity.",
  "Coral reefs support 25% of all marine species despite covering <1% of the ocean floor.",
  "The Arctic is warming nearly 4 times faster than the rest of the planet."
];
function EarthFacts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-6 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mesh-gradient opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-earth-amber", children: "Did You Know?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mt-2", children: "Earth Facts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: facts.map((fact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06 },
          className: "glass-card rounded-xl p-5 flex gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-earth-amber flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: fact })
          ]
        },
        i
      )) })
    ] })
  ] });
}
function CallToAction() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-6 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mesh-gradient" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-96 h-96 bg-earth-green/10 -bottom-48 left-1/4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-72 h-72 bg-earth-violet/8 top-10 right-1/4", style: { animationDelay: "-10s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Get Involved"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6", children: [
            "Knowledge Is Power.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Action Is Everything." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed", children: "From reducing your carbon footprint to supporting conservation, every action counts. Explore ways to make a tangible difference." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/action",
                className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 hover:gap-3",
                children: [
                  "Take Action ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/resources",
                className: "inline-flex items-center gap-2 rounded-full glass-panel px-8 py-4 text-base font-semibold text-foreground transition-all hover:scale-105 hover:bg-white/10",
                children: "Explore Resources"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
function NewsletterSection() {
  const [email, setEmail] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "macos-window",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-titlebar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-dots", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium ml-2", children: "EarthPulse Newsletter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3", children: [
            "Stay ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Informed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto mb-8 text-sm", children: "Get weekly climate insights, research summaries, and actionable steps delivered to your inbox. No spam, unsubscribe anytime." }),
          submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              className: "glass-panel rounded-full px-6 py-3 inline-flex items-center gap-2 text-primary text-sm font-medium",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary" }),
                " You're on the list!"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex items-center gap-2 max-w-md mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@example.com",
                required: true,
                className: "flex-1 rounded-full glass-panel px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  " Subscribe"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedArticles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopicsGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EarthFacts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CallToAction, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
