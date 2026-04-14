import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { TopicsGrid } from "@/components/TopicsGrid";
import { EarthFacts } from "@/components/EarthFacts";
import { CallToAction } from "@/components/CallToAction";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedArticles />
      <TopicsGrid />
      <EarthFacts />
      <CallToAction />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
