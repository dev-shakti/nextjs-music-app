import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
