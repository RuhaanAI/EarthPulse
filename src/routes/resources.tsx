import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Database, BookOpen, Film, GraduationCap, ExternalLink, Podcast, Globe } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Earth Pulse" },
      { name: "description", content: "Curated resources for understanding our planet: datasets, documentaries, courses, and more." },
      { property: "og:title", content: "Resources — Earth Pulse" },
      { property: "og:description", content: "Curated resources for understanding our planet." },
    ],
  }),
  component: ResourcesPage,
});

const categories = [
  {
    title: "Open Datasets",
    icon: Database,
    color: "text-earth-ocean",
    gradient: "from-earth-ocean/15 to-transparent",
    items: [
      { name: "NASA Earthdata", url: "https://earthdata.nasa.gov", description: "Satellite observations, climate models, and geophysical data" },
      { name: "NOAA Climate Data Online", url: "https://www.ncdc.noaa.gov/cdo-web/", description: "Historical weather and climate data" },
      { name: "Global Forest Watch", url: "https://www.globalforestwatch.org", description: "Real-time monitoring of forests worldwide" },
      { name: "Our World in Data", url: "https://ourworldindata.org/environmental-impacts", description: "Research and data on environmental trends" },
      { name: "IPCC Data Center", url: "https://www.ipcc-data.org", description: "Climate scenarios and assessment data" },
    ],
  },
  {
    title: "Must-Watch Documentaries",
    icon: Film,
    color: "text-earth-coral",
    gradient: "from-earth-coral/15 to-transparent",
    items: [
      { name: "Our Planet (Netflix)", url: "https://www.netflix.com/title/80049832", description: "Stunning visuals of Earth's ecosystems and the threats they face" },
      { name: "Chasing Ice", url: "https://chasingice.com", description: "A photographer's mission to document glacial retreat" },
      { name: "Before the Flood", url: "https://www.beforetheflood.com", description: "Leonardo DiCaprio explores the impact of climate change" },
      { name: "A Life on Our Planet", url: "https://www.netflix.com/title/80216393", description: "David Attenborough's witness statement for the natural world" },
      { name: "Kiss the Ground", url: "https://kissthegroundmovie.com", description: "How regenerative agriculture could reverse climate change" },
    ],
  },
  {
    title: "Free Courses",
    icon: GraduationCap,
    color: "text-earth-green",
    gradient: "from-earth-green/15 to-transparent",
    items: [
      { name: "Climate Science (MIT OpenCourseWare)", url: "https://ocw.mit.edu/courses/12-340-global-warming-science-spring-2012/", description: "University-level climate science, free" },
      { name: "SDG Academy", url: "https://www.edx.org/school/sdgacademyx", description: "Courses on sustainable development from the UN" },
      { name: "Coursera: Climate Change", url: "https://www.coursera.org/learn/climate-change", description: "Introduction to climate science and policy" },
      { name: "Khan Academy: Ecology", url: "https://www.khanacademy.org/science/ap-biology/ecology-ap", description: "Free ecology and environmental biology lessons" },
    ],
  },
  {
    title: "Essential Reading",
    icon: BookOpen,
    color: "text-earth-amber",
    gradient: "from-earth-amber/15 to-transparent",
    items: [
      { name: "The Uninhabitable Earth — David Wallace-Wells", url: "https://www.penguinrandomhouse.com/books/586541/the-uninhabitable-earth-by-david-wallace-wells/", description: "A vivid portrait of our future if we fail to act" },
      { name: "Drawdown — Paul Hawken", url: "https://drawdown.org/the-book", description: "The most comprehensive plan to reverse global warming" },
      { name: "The Sixth Extinction — Elizabeth Kolbert", url: "https://www.elizabethkolbert.com/the-sixth-extinction", description: "A Pulitzer Prize-winning book on mass extinction" },
      { name: "Silent Spring — Rachel Carson", url: "https://www.rachelcarson.org/SilentSpring.aspx", description: "The book that launched the modern environmental movement" },
    ],
  },
  {
    title: "Podcasts",
    icon: Podcast,
    color: "text-earth-violet",
    gradient: "from-earth-violet/15 to-transparent",
    items: [
      { name: "How to Save a Planet", url: "https://gimletmedia.com/shows/howtosaveaplanet", description: "Actionable climate solutions from Gimlet Media" },
      { name: "Outrage + Optimism", url: "https://www.outrageandoptimism.org/", description: "Climate action with Christiana Figueres" },
      { name: "The Climate Question (BBC)", url: "https://www.bbc.co.uk/programmes/w13xtvb8", description: "Exploring the big climate stories" },
    ],
  },
  {
    title: "Live Monitoring",
    icon: Globe,
    color: "text-earth-ocean",
    gradient: "from-earth-ocean/15 to-transparent",
    items: [
      { name: "Climate Reanalyzer", url: "https://climatereanalyzer.org", description: "Real-time global temperature maps and anomalies" },
      { name: "Windy.com", url: "https://www.windy.com", description: "Interactive global weather visualization" },
      { name: "Copernicus Climate Change Service", url: "https://climate.copernicus.eu", description: "European climate monitoring and forecasting" },
      { name: "Earth.nullschool.net", url: "https://earth.nullschool.net", description: "Beautiful visualization of global weather and ocean conditions" },
    ],
  },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-24 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="orb w-80 h-80 bg-earth-ocean/8 top-40 -left-20" />
        <div className="orb w-64 h-64 bg-earth-violet/6 bottom-40 right-0" style={{ animationDelay: "-12s" }} />

        <div className="mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Learn</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Curated tools, datasets, documentaries, courses, and reading to deepen your understanding of our planet. All free or freely accessible.
            </p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 }}
              >
                <div className="macos-window">
                  <div className="macos-titlebar">
                    <div className="macos-dots"><span /><span /><span /></div>
                    <span className={`text-xs font-medium ml-2 flex items-center gap-1.5 ${cat.color}`}>
                      <cat.icon className="h-3.5 w-3.5" /> {cat.title}
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    {cat.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-start justify-between gap-4 rounded-lg p-4 group glass-card bg-gradient-to-r ${cat.gradient}`}
                      >
                        <div className="min-w-0">
                          <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
