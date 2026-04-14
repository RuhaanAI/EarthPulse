import { Link } from "@tanstack/react-router";
import { Globe, Mail, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-surface/50 glass-panel py-16 relative">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">
                Earth<span className="gradient-text">Pulse</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-4">
              Delivering critical earth science, climate data, and environmental awareness.
              Knowledge is the first step toward meaningful change.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              Founded by <span className="text-foreground font-medium">Ruhaan Mukherjee</span>
              <Heart className="h-3 w-3 text-earth-coral inline" />
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navigate</h4>
            <div className="space-y-2.5">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/topics" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Topics</Link>
              <Link to="/resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Resources</Link>
              <Link to="/action" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Take Action</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2.5">
              <a
                href="mailto:ruhaanmukherjee@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" /> ruhaanmukherjee@gmail.com
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Topics</h4>
              <div className="flex flex-wrap gap-2">
                {["Climate", "Oceans", "Forests", "Energy", "Wildlife"].map((t) => (
                  <span key={t} className="text-xs rounded-full glass-panel px-3 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EarthPulse. Built with purpose for our planet.
          </p>
          <p className="text-xs text-muted-foreground">
            Data sourced from NASA, NOAA, IPCC, and IUCN
          </p>
        </div>
      </div>
    </footer>
  );
}
