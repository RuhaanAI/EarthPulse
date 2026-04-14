import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import articleClimate from "@/assets/article-climate.jpg";
import articleForests from "@/assets/article-forests.jpg";
import articleOceans from "@/assets/article-oceans.jpg";
import articleEnergy from "@/assets/article-energy.jpg";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Arctic Ice Hits Record Low for Third Consecutive Year",
    category: "Climate",
    topicId: "climate-change",
    image: articleClimate,
    excerpt: "New satellite data reveals the extent of polar ice loss is accelerating faster than models predicted.",
    date: "Apr 12, 2026",
    featured: true,
  },
  {
    title: "Amazon Rainforest: Tipping Points and What They Mean",
    category: "Forests",
    topicId: "forests",
    image: articleForests,
    excerpt: "Scientists warn that deforestation may push the Amazon past a critical threshold.",
    date: "Apr 10, 2026",
  },
  {
    title: "Deep Ocean Currents Show Signs of Slowing",
    category: "Oceans",
    topicId: "oceans",
    image: articleOceans,
    excerpt: "Thermohaline circulation changes could reshape global weather patterns within decades.",
    date: "Apr 8, 2026",
  },
  {
    title: "Renewable Energy Surpasses Fossil Fuels in EU Grid",
    category: "Energy",
    topicId: "clean-energy",
    image: articleEnergy,
    excerpt: "For the first time, renewables generated more electricity than coal and gas combined in the European Union.",
    date: "Apr 6, 2026",
  },
];

export function FeaturedArticles() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section className="py-24 px-6 relative">
      <div className="orb w-80 h-80 bg-earth-ocean/8 -top-20 right-10" />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Latest</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Featured Stories</h2>
          </div>
          <Link to="/topics" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/topics/$topicId"
              params={{ topicId: featured.topicId }}
              className="group relative overflow-hidden rounded-2xl glass-card block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block rounded-full glass-panel px-3 py-1 text-xs font-semibold text-primary mb-3">
                  {featured.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{featured.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-3">{featured.date}</p>
              </div>
            </Link>
          </motion.div>

          {/* Side articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to="/topics/$topicId"
                  params={{ topicId: article.topicId }}
                  className="group flex gap-4 rounded-xl glass-card p-4 block"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
                      {article.category}
                    </span>
                    <h3 className="font-display text-sm md:text-base font-bold text-foreground leading-snug line-clamp-2 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 hidden md:block">{article.excerpt}</p>
                    <p className="text-[10px] text-muted-foreground mt-2">{article.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
