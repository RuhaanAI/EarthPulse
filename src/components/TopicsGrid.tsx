import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Thermometer, Waves, TreePine, Zap, Bug, Mountain, ArrowRight } from "lucide-react";

const topics = [
  { name: "Climate Change", id: "climate-change", description: "Global warming, temperature data, and climate science", icon: Thermometer, color: "text-earth-coral", glow: "group-hover:shadow-earth-coral/20" },
  { name: "Oceans", id: "oceans", description: "Marine ecosystems, sea levels, and ocean health", icon: Waves, color: "text-earth-ocean", glow: "group-hover:shadow-earth-ocean/20" },
  { name: "Forests", id: "forests", description: "Deforestation, reforestation, and biodiversity", icon: TreePine, color: "text-earth-green", glow: "group-hover:shadow-earth-green/20" },
  { name: "Clean Energy", id: "clean-energy", description: "Renewables, energy transition, and innovation", icon: Zap, color: "text-earth-amber", glow: "group-hover:shadow-earth-amber/20" },
  { name: "Wildlife", id: "wildlife", description: "Endangered species, conservation, and habitats", icon: Bug, color: "text-earth-violet", glow: "group-hover:shadow-earth-violet/20" },
  { name: "Geology", id: "geology", description: "Earth systems, natural resources, and land use", icon: Mountain, color: "text-earth-soil", glow: "group-hover:shadow-earth-soil/20" },
];

export function TopicsGrid() {
  return (
    <section className="py-24 px-6 relative aurora-bg">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Explore</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Topics We Cover</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Dive deep into the subjects that matter most for our planet's future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/topics/$topicId"
                params={{ topicId: topic.id }}
                className={`group flex items-start gap-4 rounded-xl glass-card p-6 block ${topic.glow} group-hover:shadow-xl`}
              >
                <topic.icon className={`h-6 w-6 ${topic.color} flex-shrink-0 mt-0.5`} />
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-foreground mb-1 flex items-center gap-2">
                    {topic.name}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
