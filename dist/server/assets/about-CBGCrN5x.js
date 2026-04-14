import { T as jsxRuntimeExports } from "./worker-entry-DlAz7EEQ.js";
import { H as Header, m as motion, G as Globe, a as Heart, M as Mail, F as Footer } from "./proxy-BPaJI9_S.js";
import { c as createLucideIcon } from "./router-D9PAxtDW.js";
import { U as Users } from "./users-C0waMXiC.js";
import { S as Sparkles } from "./sparkles-DLb1uCeR.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const values = [{
  icon: Eye,
  title: "Clarity",
  description: "We translate complex science into clear, visual stories anyone can understand."
}, {
  icon: Globe,
  title: "Global Perspective",
  description: "Every ecosystem matters. We cover environmental issues across all continents and biomes."
}, {
  icon: Heart,
  title: "Purpose-Driven",
  description: "We exist to raise awareness and inspire action — not to sell ads or push agendas."
}, {
  icon: Target,
  title: "Data-Backed",
  description: "Every claim is sourced from peer-reviewed research and trusted scientific institutions."
}];
const milestones = [{
  year: "2026",
  event: "EarthPulse founded by Ruhaan Mukherjee"
}, {
  year: "2026",
  event: "Launched coverage of 6 core environmental topics"
}, {
  year: "2026",
  event: "Partnered with data from NASA, NOAA, IPCC, and IUCN"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-28 pb-24 px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mesh-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-96 h-96 bg-earth-green/10 top-20 -left-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb w-72 h-72 bg-earth-violet/8 top-60 right-0", style: {
        animationDelay: "-8s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "About Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-6", children: [
            "Awareness Through",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Understanding" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-lg leading-relaxed space-y-5 max-w-3xl mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "EarthPulse is an independent editorial platform dedicated to making earth science, climate data, and environmental information accessible to everyone." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We believe that informed citizens make better decisions. We curate peer-reviewed research, satellite data, and expert analysis into compelling stories that reveal what's really happening to our planet." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No corporate sponsors. No spin. Just science, presented beautifully." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-16", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2 + i * 0.08
        }, className: "glass-card rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-7 w-7 text-primary mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-2", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: v.description })
        ] }, v.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.4
        }, className: "macos-window mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-titlebar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "macos-dots", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium ml-2", children: "About the Founder" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6 flex-col md:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-earth-green/30 to-earth-ocean/30 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-8 w-8 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground mb-1", children: "Ruhaan Mukherjee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mb-4", children: "Founder & Editor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "An incoming undergraduate student with a deep conviction that the defining challenge of our generation is sustainability. Ruhaan founded EarthPulse out of a frustration with how scattered and inaccessible environmental information often is. He believes that young people need a single, beautiful, science-backed platform to understand the state of our planet — not through doom and gloom, but through clarity, data, and empowered action. EarthPulse is his contribution to building a more informed, more responsible generation of global citizens." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:ruhaanmukherjee@gmail.com", className: "inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
                " ruhaanmukherjee@gmail.com"
              ] }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.5
        }, className: "glass-card rounded-2xl p-8 md:p-12 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary" }),
            " Our Approach"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-2", children: "Data-First Reporting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every article we publish is grounded in verified data from NASA, NOAA, ESA, IPCC, and leading research institutions. We show our sources, always." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-2", children: "Visual Storytelling" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Complex environmental data deserves beautiful presentation. We use interactive charts, satellite imagery, and infographics to make science feel alive." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-2", children: "Youth-First Perspective" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Built by and for young people who will inherit this planet. We prioritize clarity, accessibility, and actionable takeaways in everything we publish." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-2", children: "Open & Independent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No paywalls, no corporate influence. EarthPulse is free forever because environmental literacy should be a right, not a privilege." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-6", children: "Our Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary glass-panel rounded-full px-3 py-1 flex-shrink-0", children: m.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: m.event })
          ] }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
