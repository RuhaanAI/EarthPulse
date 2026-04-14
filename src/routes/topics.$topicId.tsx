import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ExternalLink, BookOpen, Thermometer, Waves, TreePine, Zap, Bug, Mountain } from "lucide-react";

const topicContent: Record<string, {
  name: string;
  icon: typeof Thermometer;
  color: string;
  gradient: string;
  tagline: string;
  overview: string;
  keyFacts: string[];
  articles: { title: string; excerpt: string; date: string; readTime: string; source: string; sourceUrl: string }[];
}> = {
  "climate-change": {
    name: "Climate Change",
    icon: Thermometer,
    color: "text-earth-coral",
    gradient: "from-earth-coral/20 via-earth-coral/5 to-transparent",
    tagline: "Understanding the science behind our warming world",
    overview: "Climate change refers to long-term shifts in global temperatures and weather patterns. While natural cycles have always existed, human activities — primarily the burning of fossil fuels — have been the main driver since the industrial era. The global average temperature has risen by approximately 1.2°C since 1880, with the last decade being the warmest on record.",
    keyFacts: [
      "CO₂ levels have risen from 280 ppm (pre-industrial) to over 426 ppm today",
      "2023 was the hottest year in 125,000 years of recorded climate data",
      "The Arctic is warming nearly 4x faster than the global average",
      "Sea levels have risen about 21-24 cm since 1880",
      "Extreme weather events have increased 5x over the past 50 years",
    ],
    articles: [
      { title: "Arctic Ice Hits Record Low for Third Consecutive Year", excerpt: "New satellite data reveals the extent of polar ice loss is accelerating faster than models predicted. Scientists say the current trajectory could lead to ice-free Arctic summers by 2040.", date: "Apr 12, 2026", readTime: "6 min", source: "NASA Earth Observatory", sourceUrl: "https://earthobservatory.nasa.gov" },
      { title: "IPCC Sixth Assessment: What the Latest Report Tells Us", excerpt: "The most comprehensive climate report ever published confirms that human influence has warmed the atmosphere, ocean, and land at an unprecedented rate.", date: "Apr 5, 2026", readTime: "8 min", source: "IPCC", sourceUrl: "https://www.ipcc.ch" },
      { title: "The Carbon Budget: How Much Time Do We Really Have?", excerpt: "At current emission rates, the remaining carbon budget for limiting warming to 1.5°C could be exhausted within this decade.", date: "Mar 28, 2026", readTime: "5 min", source: "Global Carbon Project", sourceUrl: "https://www.globalcarbonproject.org" },
      { title: "Methane's Outsized Role in Near-Term Warming", excerpt: "Methane is 80x more potent than CO₂ over a 20-year period. Reducing methane emissions is the fastest lever to slow warming.", date: "Mar 20, 2026", readTime: "4 min", source: "UNEP", sourceUrl: "https://www.unep.org" },
    ],
  },
  "oceans": {
    name: "Oceans",
    icon: Waves,
    color: "text-earth-ocean",
    gradient: "from-earth-ocean/20 via-earth-ocean/5 to-transparent",
    tagline: "Exploring the health of our blue planet",
    overview: "Oceans cover 71% of Earth's surface and regulate our climate, produce over half the world's oxygen, and support billions of people's livelihoods. Yet they face unprecedented threats from warming, acidification, overfishing, and pollution. Understanding ocean health is critical to understanding planetary health.",
    keyFacts: [
      "Oceans have absorbed 90% of excess heat from greenhouse gases",
      "Ocean acidity has increased 30% since the industrial revolution",
      "8 million tonnes of plastic enter the ocean every year",
      "50-80% of all life on Earth is found under the ocean surface",
      "Coral reefs support 25% of marine biodiversity on less than 1% of the ocean floor",
    ],
    articles: [
      { title: "Deep Ocean Currents Show Signs of Slowing", excerpt: "Thermohaline circulation changes could reshape global weather patterns within decades. The Atlantic Meridional Overturning Circulation (AMOC) has weakened by 15% since the mid-20th century.", date: "Apr 8, 2026", readTime: "7 min", source: "NOAA", sourceUrl: "https://www.noaa.gov" },
      { title: "The Great Barrier Reef: Recovery or Requiem?", excerpt: "After back-to-back mass bleaching events, scientists debate whether the world's largest coral system can survive another decade of warming.", date: "Apr 2, 2026", readTime: "6 min", source: "ARC Centre of Excellence", sourceUrl: "https://www.coralcoe.org.au" },
      { title: "Microplastics Found in Deepest Ocean Trenches", excerpt: "Researchers have discovered plastic fragments at depths exceeding 10,000 meters, revealing the true extent of ocean contamination.", date: "Mar 25, 2026", readTime: "5 min", source: "Nature Geoscience", sourceUrl: "https://www.nature.com" },
    ],
  },
  "forests": {
    name: "Forests",
    icon: TreePine,
    color: "text-earth-green",
    gradient: "from-earth-green/20 via-earth-green/5 to-transparent",
    tagline: "The lungs of our planet under threat",
    overview: "Forests cover about 31% of Earth's land area and are the most important terrestrial carbon sinks. They absorb roughly 2.6 billion tonnes of CO₂ annually — about one-third of human emissions. Yet deforestation continues at alarming rates, especially in tropical regions, threatening biodiversity and accelerating climate change.",
    keyFacts: [
      "We lose approximately 10 million hectares of forest per year",
      "The Amazon rainforest produces 20% of the world's oxygen",
      "Tropical forests contain about 25% of all terrestrial carbon",
      "80% of terrestrial biodiversity lives in forests",
      "Indigenous-managed forests have 36% lower deforestation rates",
    ],
    articles: [
      { title: "Amazon Rainforest: Tipping Points and What They Mean", excerpt: "Scientists warn that deforestation may push the Amazon past a critical threshold where the forest transitions to savanna, releasing billions of tonnes of stored carbon.", date: "Apr 10, 2026", readTime: "7 min", source: "Nature Climate Change", sourceUrl: "https://www.nature.com" },
      { title: "Reforestation at Scale: What's Working and What Isn't", excerpt: "From China's Great Green Wall to community-led projects in Kenya, a look at which reforestation strategies are delivering real results.", date: "Apr 3, 2026", readTime: "6 min", source: "World Resources Institute", sourceUrl: "https://www.wri.org" },
      { title: "Old-Growth Forests: Why Age Matters for Carbon", excerpt: "New research shows that ancient forests store carbon at rates far exceeding young plantations, challenging simple tree-planting narratives.", date: "Mar 22, 2026", readTime: "5 min", source: "Global Forest Watch", sourceUrl: "https://www.globalforestwatch.org" },
    ],
  },
  "clean-energy": {
    name: "Clean Energy",
    icon: Zap,
    color: "text-earth-amber",
    gradient: "from-earth-amber/20 via-earth-amber/5 to-transparent",
    tagline: "Powering the transition to a sustainable future",
    overview: "The clean energy revolution is reshaping how we power civilization. Solar and wind are now the cheapest sources of new electricity in most of the world, and the transition away from fossil fuels is accelerating. Yet the pace of change must triple to meet Paris Agreement targets.",
    keyFacts: [
      "Solar energy costs have dropped 90% in the last decade",
      "Renewables generated 30% of global electricity in 2023",
      "Wind and solar are now cheaper than coal in 90% of the world",
      "The clean energy sector employs over 13 million people globally",
      "Battery storage capacity is growing at 40% per year",
    ],
    articles: [
      { title: "Renewable Energy Surpasses Fossil Fuels in EU Grid", excerpt: "For the first time, renewables generated more electricity than coal and gas combined in the European Union, marking a historic milestone.", date: "Apr 6, 2026", readTime: "5 min", source: "Ember Climate", sourceUrl: "https://ember-climate.org" },
      { title: "Green Hydrogen: The Missing Piece of the Puzzle?", excerpt: "Could hydrogen produced from renewable energy decarbonize heavy industry, aviation, and shipping? The technology is promising but faces cost challenges.", date: "Mar 30, 2026", readTime: "7 min", source: "IEA", sourceUrl: "https://www.iea.org" },
      { title: "The Nuclear Question: Is Fission Part of the Solution?", excerpt: "As SMRs (Small Modular Reactors) promise safer, cheaper nuclear power, the debate over nuclear's role in the energy transition intensifies.", date: "Mar 18, 2026", readTime: "6 min", source: "World Nuclear Association", sourceUrl: "https://world-nuclear.org" },
    ],
  },
  "wildlife": {
    name: "Wildlife",
    icon: Bug,
    color: "text-earth-violet",
    gradient: "from-earth-violet/20 via-earth-violet/5 to-transparent",
    tagline: "Protecting the web of life we depend on",
    overview: "We are living through the sixth mass extinction. Species are disappearing at 1,000 times the natural background rate, driven by habitat loss, climate change, pollution, and overexploitation. Wildlife isn't just beautiful — it's essential for ecosystem services that sustain human civilization.",
    keyFacts: [
      "1 million species are currently at risk of extinction",
      "Wildlife populations have declined 69% on average since 1970",
      "Insects — critical for pollination — have declined by 45% globally",
      "Only 15% of the world's land area is formally protected",
      "The illegal wildlife trade is worth up to $23 billion annually",
    ],
    articles: [
      { title: "The Insect Apocalypse: Why Pollinator Decline Threatens Food Security", excerpt: "Without insects, global food production would collapse. New studies reveal the alarming scale of pollinator decline across continents.", date: "Apr 4, 2026", readTime: "6 min", source: "IUCN", sourceUrl: "https://www.iucn.org" },
      { title: "30×30: Can We Protect 30% of Earth by 2030?", excerpt: "The COP15 biodiversity framework set an ambitious target. Here's how nations are — and aren't — delivering.", date: "Mar 27, 2026", readTime: "7 min", source: "Convention on Biological Diversity", sourceUrl: "https://www.cbd.int" },
      { title: "Rewilding Europe: From Theory to Practice", excerpt: "How reintroducing apex predators and restoring ecosystems is transforming landscapes from Portugal to Romania.", date: "Mar 15, 2026", readTime: "5 min", source: "Rewilding Europe", sourceUrl: "https://rewildingeurope.com" },
    ],
  },
  "geology": {
    name: "Geology & Land",
    icon: Mountain,
    color: "text-earth-soil",
    gradient: "from-earth-soil/20 via-earth-soil/5 to-transparent",
    tagline: "Understanding the ground beneath our feet",
    overview: "Earth's geological processes shape everything from climate to biodiversity. Soil — often overlooked — is a living ecosystem that takes centuries to form and can be destroyed in years. How we manage land, extract resources, and interact with geological systems determines the sustainability of human civilization.",
    keyFacts: [
      "We lose 24 billion tonnes of fertile soil every year",
      "Soil stores more carbon than the atmosphere and all plant life combined",
      "Mining directly impacts over 50 million hectares of land globally",
      "Only 3% of Earth's water is freshwater, mostly locked in ice and groundwater",
      "Groundwater depletion threatens agriculture for 2 billion people",
    ],
    articles: [
      { title: "The Hidden Crisis: Why Soil Loss Matters More Than You Think", excerpt: "Soil degradation threatens global food security, yet it receives a fraction of the attention given to other environmental issues.", date: "Apr 1, 2026", readTime: "5 min", source: "FAO", sourceUrl: "https://www.fao.org" },
      { title: "Critical Minerals for the Green Transition: The Mining Dilemma", excerpt: "The clean energy revolution requires massive amounts of lithium, cobalt, and rare earth metals. But mining them creates its own environmental costs.", date: "Mar 24, 2026", readTime: "7 min", source: "USGS", sourceUrl: "https://www.usgs.gov" },
      { title: "Groundwater: The Invisible Resource We're Draining Dry", excerpt: "Satellite data reveals that 21 of the world's 37 largest aquifers are past sustainability tipping points, with no plan for recovery.", date: "Mar 12, 2026", readTime: "6 min", source: "NASA GRACE", sourceUrl: "https://grace.jpl.nasa.gov" },
    ],
  },
};

export const Route = createFileRoute("/topics/$topicId")({
  head: ({ params }) => {
    const topic = topicContent[params.topicId];
    const name = topic?.name ?? "Topic";
    return {
      meta: [
        { title: `${name} — Earth Pulse` },
        { name: "description", content: topic?.tagline ?? "Explore this environmental topic." },
        { property: "og:title", content: `${name} — Earth Pulse` },
        { property: "og:description", content: topic?.tagline ?? "Explore this environmental topic." },
      ],
    };
  },
  component: TopicDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Topic Not Found</h1>
        <Link to="/topics" className="text-primary hover:underline">← Back to Topics</Link>
      </div>
    </div>
  ),
});

function TopicDetailPage() {
  const { topicId } = Route.useParams();
  const topic = topicContent[topicId];

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Topic Not Found</h1>
          <Link to="/topics" className="text-primary hover:underline">← Back to Topics</Link>
        </div>
      </div>
    );
  }

  const Icon = topic.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero area */}
      <div className={`pt-24 relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${topic.gradient}`} />
        <div className="orb w-96 h-96 bg-primary/8 -top-48 right-0" />

        <div className="relative z-10 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/topics"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All Topics
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`rounded-2xl glass-panel p-4`}>
                  <Icon className={`h-8 w-8 ${topic.color}`} />
                </div>
                <div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{topic.name}</h1>
                  <p className="text-muted-foreground mt-1">{topic.tagline}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Overview - macOS window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="macos-window mb-10"
          >
            <div className="macos-titlebar">
              <div className="macos-dots"><span /><span /><span /></div>
              <span className="text-xs text-muted-foreground font-medium ml-2">Overview</span>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">{topic.overview}</p>
            </div>
          </motion.div>

          {/* Key Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" /> Key Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topic.keyFacts.map((fact, i) => (
                <div key={i} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <span className={`w-6 h-6 rounded-full bg-gradient-to-b ${topic.gradient} flex items-center justify-center text-xs font-bold ${topic.color} flex-shrink-0`}>
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Latest Articles
            </h2>
            <div className="space-y-4">
              {topic.articles.map((article, i) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass-card rounded-xl p-6 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {article.readTime} read
                        </span>
                        <a
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" /> {article.source}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Want to learn more?</h3>
              <p className="text-sm text-muted-foreground mb-6">Explore other topics or take direct action to make a difference.</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  to="/topics"
                  className="rounded-full glass-panel px-6 py-2.5 text-sm font-medium text-foreground hover:bg-white/10 transition-all"
                >
                  All Topics
                </Link>
                <Link
                  to="/action"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-105 transition-all"
                >
                  Take Action
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
