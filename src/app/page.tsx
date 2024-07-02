import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import UpcomingWebinars from "./components/UpcomingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <UpcomingWebinars/>
    </main>
  );
}
