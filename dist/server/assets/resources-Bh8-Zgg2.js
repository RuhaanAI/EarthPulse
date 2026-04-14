import { T as jsxRuntimeExports } from "./worker-entry-DlAz7EEQ.js";
import { H as Header, m as motion, G as Globe, F as Footer } from "./proxy-BPaJI9_S.js";
import { c as createLucideIcon } from "./router-D9PAxtDW.js";
import { B as BookOpen } from "./book-open-7wO0o8ZA.js";
import { E as ExternalLink } from "./external-link-daypFgz8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
];
const Film = createLucideIcon("film", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
const __iconNode = [
  [
    "path",
    { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z", fill: "currentColor", key: "x1mxqr" }
  ],
  ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0", key: "d71mpg" }],
  ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
  ["circle", { cx: "12", cy: "11", r: "1", fill: "currentColor", key: "vqiwd" }]
];
const Podcast = createLucideIcon("podcast", __iconNode);
const categories = [{
  title: "Open Datasets",
  icon: Database,
  color: "text-earth-ocean",
  gradient: "from-earth-ocean/15 to-transparent",
  items: [{
    name: "NASA Earthdata",
    url: "https://earthdata.nasa.gov",
    description: "Satellite observations, climate models, and geophysical data"
  }, {
    name: "NOAA Climate Data Online",
    url: "https://www.ncdc.noaa.gov/cdo-web/",
    description: "Historical weather and climate data"
  }, {
    name: "Global Forest Watch",
    url: "https://www.globalforestwatch.org",
    description: "Real-time monitoring of forests worldwide"
  }, {
    name: "Our World in Data",
    url: "https://ourworldindata.org/environmental-impacts",
    description: "Research and data on environmental trends"
  }, {
    name: "IPCC Data Center",
    url: "https://www.ipcc-data.org",
    description: "Climate scenarios and assessment data"
  }]
}, {
  title: "Must-Watch Documentaries",
  icon: Film,
  color: "text-earth-coral",
  gradient: "from-earth-coral/15 to-transparent",
  items: [{
    name: "Our Planet (Netflix)",
    url: "https://www.netflix.com/title/80049832",
    description: "Stunning visuals of Earth's ecosystems and the threats they face"
  }, {
    name: "Chasing Ice",
    url: "https://chasingice.com",
    description: "A photographer's mission to document glacial retreat"
  }, {
    name: "Before the Flood",
    url: "https://www.beforetheflood.com",
    description: "Leonardo DiCaprio explores the impact of climate change"
  }, {
    name: "A Life on Our Planet",
    url: "https://www.netflix.com/title/80216393",
    description: "David Attenborough's witness statement for the natural world"
  }, {
    name: "Kiss the Ground",
    url: "https://kissthegroundmovie.com",
    description: "How regenerative agriculture could reverse climate change"
  }]
}, {
  title: "Free Courses",
  icon: GraduationCap,
  color: "text-earth-green",
  gradient: "from-earth-green/15 to-transparent",
  items: [{
    name: "Climate Science (MIT OpenCourseWare)",
    url: "https://ocw.mit.edu/courses/12-340-global-warming-science-spring-2012/",
    description: "University-level climate science, free"
  }, {
    name: "SDG Academy",
    url: "https://www.edx.org/school/sdgacademyx",
    description: "Courses on sustainable development from the UN"
  }, {
    name: "Coursera: Climate Change",
    url: "https://www.coursera.org/learn/climate-change",
    description: "Introduction to climate science and policy"
  }, {
    name: "Khan Academy: Ecology",
    url: "https://www.khanacademy.org/science/ap-biology/ecology-ap",
    description: "Free ecology and environmental biology lessons"
  }]
}, {
  title: "Essential Reading",
  icon: BookOpen,
  color: "text-earth-amber",
  gradient: "from-earth-amber/15 to-transparent",
  items: [{
    name: "The Uninhabitable Earth — David Wallace-Wells",
    url: "https://www.penguinrandomhouse.com/books/586541/the-uninhabitable-earth-by-david-wallace-wells/",
    description: "A vivid portrait of our future if we fail to act"
  }, {
    name: "Drawdown — Paul Hawken",
    url: "https://drawdown.org/the-book",
    description: "The most comprehensive plan to reverse global warming"
  }, {
    name: "The Sixth Extinction — Elizabeth Kolbert",
    url: "https://www.elizabethkolbert.com/the-sixth-extinction",
    description: "A Pulitzer Prize-winning book on mass extinction"
  }, {
    name: "Silent Spring — Rachel Carson",
    url: "https://www.rachelcarson.org/SilentSpring.aspx",
    description: "The book that launched the modern environmental movement"
  }]
}, {
  title: "Podcasts",
  icon: Podcast,
  color: "text-earth-violet",
  gradient: "from-earth-violet/15 to-transparent",
  items: [{
    name: "How to Save a Planet",
    url: "https://gimletmedia.com/shows/howtosaveaplanet",
    description: "Actionable climate solutions from Gimlet Media"
  }, {
    name: "Outrage + Optimism",
    url: "https://www.outrageandoptimism.org/",
    description: "Climate action with Christiana Figueres"
  }, {
    name: "The Climate Question (BBC)",
    url: "https://www.bbc.co.uk/programmes/w13xtvb8",
    description: "Exploring the big climate stories"
  }]
}, {
  title: "Live Monitoring",
  icon: Globe,
  color: "text-earth-ocean",
  gradient: "from-earth-ocean/15 to-transparent",
  items: [{
    name: "Climate Reanalyzer",
    url: "https://climatereanalyzer.org",
    description: "Real-time global temperature maps and anomalies"
  }, {
    name: "Windy.com",
    url: "https://www.windy.com",
    description: "Interactive global weather visualization"
  }, {
    name: "Copernicus Climate Change Service",
    url: "https://climate.copernicus.eu",
    description: "European climate monitoring and forecasting"
  }, {
    name: "Earth.nullschool.net",
    url: "https://earth.nullschool.net",
    description: "Beautiful visualization of global weather and ocean conditions"
  }]
}];
function ResourcesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-28 pb-24 px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mesh-gradient opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-80 h-80 bg-earth-ocean/8 top-40 -left-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-64 h-64 bg-earth-violet/6 bottom-40 right-0", style: {
        animationDelay: "-12s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Learn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Resources" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl", children: "Curated tools, datasets, documentaries, courses, and reading to deepen your understanding of our planet. All free or freely accessible." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: categories.map((cat, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: ci * 0.1
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-window", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-titlebar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-dots", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-medium ml-2 flex items-center gap-1.5 ${cat.color}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(cat.icon, { className: "h-3.5 w-3.5" }),
              " ",
              cat.title
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-2", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: `flex items-start justify-between gap-4 rounded-lg p-4 group glass-card bg-gradient-to-r ${cat.gradient}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" })
          ] }, item.name)) })
        ] }) }, cat.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ResourcesPage as component
};
