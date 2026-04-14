import { motion } from "framer-motion";
import heroEarth from "@/assets/hero-earth.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

const stats = [
  { label: "CO₂ Level", value: "426", unit: "ppm", trend: "+2.4/yr", color: "from-earth-coral/20 to-earth-coral/5" },
  { label: "Global Temp Rise", value: "+1.2", unit: "°C", trend: "since 1880", color: "from-earth-amber/20 to-earth-amber/5" },
  { label: "Ice Loss", value: "150", unit: "Gt/yr", trend: "accelerating", color: "from-earth-ocean/20 to-earth-ocean/5" },
  { label: "Species at Risk", value: "44,000", unit: "+", trend: "IUCN Red List", color: "from-earth-violet/20 to-earth-violet/5" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroEarth}
          alt="Aerial view of Earth"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="orb w-96 h-96 bg-earth-green/15 top-20 -left-48" />
      <div className="orb w-72 h-72 bg-earth-ocean/10 top-40 right-0" style={{ animationDelay: "-7s" }} />
      <div className="orb w-80 h-80 bg-earth-violet/8 bottom-20 left-1/3" style={{ animationDelay: "-14s" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Awareness · Science · Action
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] text-foreground mb-6">
            Know Your
            <br />
            <span className="gradient-text">Planet</span>
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
            Real-time earth science, climate intelligence, and environmental data — because understanding our planet is the first step to protecting it.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/topics"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Explore Topics <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:bg-white/10"
            >
              Our Mission
            </Link>
          </div>
        </motion.div>

        {/* Stats ticker - macOS window style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 macos-window max-w-3xl mx-auto"
        >
          <div className="macos-titlebar">
            <div className="macos-dots">
              <span /><span /><span />
            </div>
            <span className="text-xs text-muted-foreground font-medium ml-2">Earth Vitals — Live Dashboard</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`p-5 text-center bg-gradient-to-b ${stat.color}`}
              >
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">{stat.label}</p>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary stat-glow">
                  {stat.value}<span className="text-xs text-muted-foreground ml-1">{stat.unit}</span>
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">{stat.trend}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
