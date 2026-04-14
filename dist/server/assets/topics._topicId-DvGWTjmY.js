import { T as jsxRuntimeExports } from "./worker-entry-DlAz7EEQ.js";
import { c as createLucideIcon, R as Route, L as Link, t as topicContent } from "./router-D9PAxtDW.js";
import { H as Header, m as motion, F as Footer } from "./proxy-BPaJI9_S.js";
import { B as BookOpen } from "./book-open-7wO0o8ZA.js";
import { E as ExternalLink } from "./external-link-daypFgz8.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function TopicDetailPage() {
  const {
    topicId
  } = Route.useParams();
  const topic = topicContent[topicId];
  if (!topic) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Topic Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/topics", className: "text-primary hover:underline", children: "← Back to Topics" })
    ] }) });
  }
  const Icon = topic.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pt-24 relative overflow-hidden`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-b ${topic.gradient}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-96 h-96 bg-primary/8 -top-48 right-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/topics", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All Topics"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl glass-panel p-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-8 w-8 ${topic.color}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground", children: topic.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: topic.tagline })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "macos-window mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-titlebar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-dots", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium ml-2", children: "Overview" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: topic.overview }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2
      }, className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-primary" }),
          " Key Facts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: topic.keyFacts.map((fact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-xl p-4 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-6 rounded-full bg-gradient-to-b ${topic.gradient} flex items-center justify-center text-xs font-bold ${topic.color} flex-shrink-0`, children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: fact })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Latest Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: topic.articles.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.article, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.3 + i * 0.08
        }, className: "glass-card rounded-xl p-6 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
              " ",
              article.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              " ",
              article.readTime,
              " read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: article.sourceUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-1.5 text-xs text-primary hover:underline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
              " ",
              article.source
            ] })
          ] })
        ] }) }) }, article.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.5
      }, className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-3", children: "Want to learn more?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Explore other topics or take direct action to make a difference." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/topics", className: "rounded-full glass-panel px-6 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all", children: "All Topics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/action", className: "rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-105 transition-all", children: "Take Action" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  TopicDetailPage as component
};
