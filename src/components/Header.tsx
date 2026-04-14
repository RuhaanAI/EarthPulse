import { Link } from "@tanstack/react-router";
import { Globe, Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/topics", label: "Topics" },
  { to: "/resources", label: "Resources" },
  { to: "/action", label: "Take Action" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Globe className="h-7 w-7 text-primary transition-all duration-500 group-hover:rotate-45 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Earth<span className="gradient-text">Pulse</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-white/5"
              activeProps={{ className: "relative px-4 py-2 text-sm font-medium text-primary rounded-lg bg-primary/10" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:ruhaanmukherjee@gmail.com"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:scale-105"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden glass-panel mx-4 mb-4 rounded-2xl px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
              activeProps={{ className: "block text-sm font-medium text-primary px-3 py-2.5 rounded-lg bg-primary/10" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:ruhaanmukherjee@gmail.com"
            className="flex items-center gap-2 text-sm font-medium text-primary px-3 py-2.5"
          >
            <Mail className="h-3.5 w-3.5" /> Contact
          </a>
        </nav>
      )}
    </header>
  );
}
