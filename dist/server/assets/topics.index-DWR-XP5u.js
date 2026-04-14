import { T as jsxRuntimeExports } from "./worker-entry-DlAz7EEQ.js";
import { T as Thermometer, W as Waves, a as TreePine, Z as Zap, B as Bug, M as Mountain, L as Link } from "./router-D9PAxtDW.js";
import { H as Header, m as motion, F as Footer } from "./proxy-BPaJI9_S.js";
import { A as ArrowRight } from "./arrow-right-DdM_eKCk.js";
import { B as BookOpen } from "./book-open-7wO0o8ZA.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const topicData = [{
  id: "climate-change",
  name: "Climate Change",
  icon: Thermometer,
  color: "text-earth-coral",
  bg: "from-earth-coral/15 to-earth-coral/5",
  articles: 42,
  description: "Track global temperature anomalies, greenhouse gas concentrations, and the latest IPCC findings. Understand how climate change affects weather patterns, agriculture, and human health."
}, {
  id: "oceans",
  name: "Oceans",
  icon: Waves,
  color: "text-earth-ocean",
  bg: "from-earth-ocean/15 to-earth-ocean/5",
  articles: 38,
  description: "From coral bleaching to rising sea levels, explore the challenges facing our marine ecosystems. Learn about ocean acidification, plastic pollution, and deep-sea conservation."
}, {
  id: "forests",
  name: "Forests",
  icon: TreePine,
  color: "text-earth-green",
  bg: "from-earth-green/15 to-earth-green/5",
  articles: 31,
  description: "Deforestation rates, reforestation efforts, and the critical role forests play as carbon sinks. Discover how indigenous communities protect biodiversity hotspots."
}, {
  id: "clean-energy",
  name: "Clean Energy",
  icon: Zap,
  color: "text-earth-amber",
  bg: "from-earth-amber/15 to-earth-amber/5",
  articles: 27,
  description: "The renewable energy revolution: solar, wind, hydrogen, and nuclear. Follow the global transition away from fossil fuels and the innovations driving it."
}, {
  id: "wildlife",
  name: "Wildlife",
  icon: Bug,
  color: "text-earth-violet",
  bg: "from-earth-violet/15 to-earth-violet/5",
  articles: 24,
  description: "Endangered species, habitat loss, and conservation success stories. From pollinators to apex predators, understand the web of life we depend on."
}, {
  id: "geology",
  name: "Geology & Land",
  icon: Mountain,
  color: "text-earth-soil",
  bg: "from-earth-soil/15 to-earth-soil/5",
  articles: 19,
  description: "Earth's geological processes, soil health, mining impacts, and land use change. Explore how we manage the finite resources beneath our feet."
}];
function TopicsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-28 pb-24 px-6 relative aurora-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Topics" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl", children: "Deep dives into the environmental subjects shaping our planet's future. Each topic is backed by the latest peer-reviewed science." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: topicData.map((topic, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 15
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: i * 0.08
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/topics/$topicId", params: {
        topicId: topic.id
      }, className: "group rounded-xl glass-card p-6 md:p-8 block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl bg-gradient-to-b ${topic.bg} p-3.5 flex-shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(topic.icon, { className: `h-6 w-6 ${topic.color}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground flex items-center gap-2", children: [
              topic.name,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground glass-panel rounded-full px-3 py-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
              " ",
              topic.articles,
              " articles"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: topic.description })
        ] })
      ] }) }) }, topic.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  TopicsPage as component
};
