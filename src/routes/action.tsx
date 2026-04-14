import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Droplets, Bike, ShoppingBag, Vote, Users, ExternalLink, ArrowRight, Calculator } from "lucide-react";

export const Route = createFileRoute("/action")({
  head: () => ({
    meta: [
      { title: "Take Action — Earth Pulse" },
      { name: "description", content: "Practical ways to help protect our planet. From daily habits to systemic change." },
      { property: "og:title", content: "Take Action — Earth Pulse" },
      { property: "og:description", content: "Practical ways to help protect our planet." },
    ],
  }),
  component: ActionPage,
});

const actions = [
  {
    icon: Leaf,
    title: "Reduce Your Carbon Footprint",
    description: "Track and reduce your personal emissions. Start with energy use at home, transportation choices, and diet adjustments.",
    impact: "~2.5 tons CO₂/year savings",
    difficulty: "Medium",
    color: "from-earth-green/15 to-transparent",
  },
  {
    icon: Droplets,
    title: "Conserve Water",
    description: "Fix leaks, take shorter showers, and choose water-efficient appliances. Every drop matters in a warming world.",
    impact: "~30,000 liters/year savings",
    difficulty: "Easy",
    color: "from-earth-ocean/15 to-transparent",
  },
  {
    icon: Bike,
    title: "Rethink Transportation",
    description: "Walk, cycle, use public transit, or carpool. Transportation is one of the largest sources of personal emissions.",
    impact: "~1.5 tons CO₂/year savings",
    difficulty: "Medium",
    color: "from-earth-amber/15 to-transparent",
  },
  {
    icon: ShoppingBag,
    title: "Consume Consciously",
    description: "Buy less, choose sustainable brands, repair instead of replace. The greenest product is the one you didn't buy.",
    impact: "Significant waste reduction",
    difficulty: "Easy",
    color: "from-earth-coral/15 to-transparent",
  },
  {
    icon: Vote,
    title: "Advocate for Policy",
    description: "Contact elected officials, vote for climate-conscious leaders, and support environmental legislation at every level.",
    impact: "Systemic change",
    difficulty: "Varies",
    color: "from-earth-violet/15 to-transparent",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with local environmental groups, participate in cleanups, and amplify collective action in your area.",
    impact: "Community resilience",
    difficulty: "Easy",
    color: "from-earth-green/15 to-transparent",
  },
];

const orgs = [
  { name: "350.org", url: "https://350.org", description: "Global climate movement", color: "hover:border-earth-coral/40" },
  { name: "WWF", url: "https://worldwildlife.org", description: "Wildlife & habitat conservation", color: "hover:border-earth-green/40" },
  { name: "Rainforest Alliance", url: "https://rainforest-alliance.org", description: "Forest protection", color: "hover:border-earth-green/40" },
  { name: "Ocean Conservancy", url: "https://oceanconservancy.org", description: "Marine ecosystem protection", color: "hover:border-earth-ocean/40" },
  { name: "The Nature Conservancy", url: "https://www.nature.org", description: "Land & water conservation", color: "hover:border-earth-amber/40" },
  { name: "Greenpeace", url: "https://www.greenpeace.org", description: "Environmental advocacy", color: "hover:border-earth-violet/40" },
];

const calculators = [
  { name: "EPA Carbon Footprint Calculator", url: "https://www3.epa.gov/carbon-footprint-calculator/", description: "Calculate your household emissions" },
  { name: "Global Footprint Network", url: "https://www.footprintnetwork.org/", description: "Find your ecological footprint" },
  { name: "UN Carbon Offset Platform", url: "https://offset.climateneutralnow.org/", description: "Offset unavoidable emissions" },
];

function ActionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-24 px-6 relative">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-80 h-80 bg-earth-green/8 top-20 right-10" />

        <div className="mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Get Involved</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
              Take <span className="gradient-text">Action</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Knowledge without action is incomplete. Here are practical, science-backed ways to make a difference — from everyday choices to systemic advocacy.
            </p>
          </motion.div>

          {/* Action cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            {actions.map((action, i) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card rounded-xl p-6 bg-gradient-to-br ${action.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl glass-panel p-2.5 flex-shrink-0">
                    <action.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{action.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-primary font-medium glass-panel rounded-full px-3 py-1">{action.impact}</span>
                      <span className="text-xs text-muted-foreground">Difficulty: {action.difficulty}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carbon calculators - macOS window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="macos-window mb-20"
          >
            <div className="macos-titlebar">
              <div className="macos-dots"><span /><span /><span /></div>
              <span className="text-xs text-muted-foreground font-medium ml-2 flex items-center gap-1.5">
                <Calculator className="h-3 w-3" /> Carbon Calculators & Tools
              </span>
            </div>
            <div className="p-6 space-y-3">
              {calculators.map((calc) => (
                <a
                  key={calc.name}
                  href={calc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg glass-card p-4 group"
                >
                  <div>
                    <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{calc.name}</h4>
                    <p className="text-xs text-muted-foreground">{calc.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Organizations to Support
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {orgs.map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card rounded-xl p-5 group ${org.color}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{org.name}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">{org.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
