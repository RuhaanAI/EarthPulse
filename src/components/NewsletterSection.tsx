import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="macos-window"
        >
          <div className="macos-titlebar">
            <div className="macos-dots">
              <span /><span /><span />
            </div>
            <span className="text-xs text-muted-foreground font-medium ml-2">EarthPulse Newsletter</span>
          </div>
          <div className="p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Stay <span className="gradient-text">Informed</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm">
              Get weekly climate insights, research summaries, and actionable steps delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel rounded-full px-6 py-3 inline-flex items-center gap-2 text-primary text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-primary" /> You're on the list!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 rounded-full glass-panel px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2"
                >
                  <Send className="h-4 w-4" /> Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
