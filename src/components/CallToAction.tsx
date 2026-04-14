import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="orb w-96 h-96 bg-earth-green/10 -bottom-48 left-1/4" />
      <div className="orb w-72 h-72 bg-earth-violet/8 top-10 right-1/4" style={{ animationDelay: "-10s" }} />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Get Involved
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Knowledge Is Power.<br />
            <span className="gradient-text">Action Is Everything.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From reducing your carbon footprint to supporting conservation, every action counts. Explore ways to make a tangible difference.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/action"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 hover:gap-3"
            >
              Take Action <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-8 py-4 text-base font-semibold text-foreground transition-all hover:scale-105 hover:bg-white/10"
            >
              Explore Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
