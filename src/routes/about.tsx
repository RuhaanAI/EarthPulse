import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, Eye, Heart, Mail, Sparkles, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Earth Pulse" },
      { name: "description", content: "Our mission is to make earth science accessible, urgent, and actionable." },
      { property: "og:title", content: "About — Earth Pulse" },
      { property: "og:description", content: "Making earth science accessible, urgent, and actionable for everyone." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Eye, title: "Clarity", description: "We translate complex science into clear, visual stories anyone can understand." },
  { icon: Globe, title: "Global Perspective", description: "Every ecosystem matters. We cover environmental issues across all continents and biomes." },
  { icon: Heart, title: "Purpose-Driven", description: "We exist to raise awareness and inspire action — not to sell ads or push agendas." },
  { icon: Target, title: "Data-Backed", description: "Every claim is sourced from peer-reviewed research and trusted scientific institutions." },
];

const milestones = [
  { year: "2026", event: "EarthPulse founded by Ruhaan Mukherjee" },
  { year: "2026", event: "Launched coverage of 6 core environmental topics" },
  { year: "2026", event: "Partnered with data from NASA, NOAA, IPCC, and IUCN" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-24 px-6 relative">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-96 h-96 bg-earth-green/10 top-20 -left-48" />
        <div className="orb w-72 h-72 bg-earth-violet/8 top-60 right-0" style={{ animationDelay: "-8s" }} />

        <div className="mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-6">
              Awareness Through<br />
              <span className="gradient-text">Understanding</span>
            </h1>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-5 max-w-3xl mb-16">
              <p>
                EarthPulse is an independent editorial platform dedicated to making earth science, climate data, and environmental information accessible to everyone.
              </p>
              <p>
                We believe that informed citizens make better decisions. We curate peer-reviewed research, satellite data, and expert analysis into compelling stories that reveal what's really happening to our planet.
              </p>
              <p>
                No corporate sponsors. No spin. Just science, presented beautifully.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="glass-card rounded-xl p-6"
              >
                <v.icon className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Founder section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="macos-window mb-16"
          >
            <div className="macos-titlebar">
              <div className="macos-dots"><span /><span /><span /></div>
              <span className="text-xs text-muted-foreground font-medium ml-2">About the Founder</span>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-earth-green/30 to-earth-ocean/30 flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">Ruhaan Mukherjee</h3>
                  <p className="text-sm text-primary font-medium mb-4">Founder & Editor</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    An incoming undergraduate student with a deep conviction that the defining challenge of our generation is sustainability. Ruhaan founded EarthPulse out of a frustration with how scattered and inaccessible environmental information often is. He believes that young people need a single, beautiful, science-backed platform to understand the state of our planet — not through doom and gloom, but through clarity, data, and empowered action. EarthPulse is his contribution to building a more informed, more responsible generation of global citizens.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href="mailto:ruhaanmukherjee@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-all"
                    >
                      <Mail className="h-3.5 w-3.5" /> ruhaanmukherjee@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" /> Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Data-First Reporting</h4>
                <p>Every article we publish is grounded in verified data from NASA, NOAA, ESA, IPCC, and leading research institutions. We show our sources, always.</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Visual Storytelling</h4>
                <p>Complex environmental data deserves beautiful presentation. We use interactive charts, satellite imagery, and infographics to make science feel alive.</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Youth-First Perspective</h4>
                <p>Built by and for young people who will inherit this planet. We prioritize clarity, accessibility, and actionable takeaways in everything we publish.</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-2">Open & Independent</h4>
                <p>No paywalls, no corporate influence. EarthPulse is free forever because environmental literacy should be a right, not a privilege.</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Our Journey</h2>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-primary glass-panel rounded-full px-3 py-1 flex-shrink-0">{m.year}</span>
                  <p className="text-sm text-muted-foreground">{m.event}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
