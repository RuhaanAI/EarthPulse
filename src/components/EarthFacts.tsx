import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const facts = [
  "The ocean absorbs about 30% of the CO₂ produced by humans.",
  "A single tree can absorb up to 48 pounds of CO₂ per year.",
  "Renewable energy jobs have grown 3x faster than fossil fuel jobs.",
  "75% of all land environments have been severely altered by human activity.",
  "Coral reefs support 25% of all marine species despite covering <1% of the ocean floor.",
  "The Arctic is warming nearly 4 times faster than the rest of the planet.",
];

export function EarthFacts() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-earth-amber">Did You Know?</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Earth Facts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-xl p-5 flex gap-3"
            >
              <Lightbulb className="h-5 w-5 text-earth-amber flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{fact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
