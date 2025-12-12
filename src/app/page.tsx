import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/sections/AboutSection';
import TopicsSection from '@/components/sections/TopicsSection';
import DatesSection from '@/components/sections/DatesSection';
import OrganizersSection from '@/components/sections/OrganizersSection';
import SubmissionSection from '@/components/sections/SubmissionSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <Hero />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <AboutSection />
          <TopicsSection />
          <DatesSection />
          <OrganizersSection />
          <SubmissionSection />
          <SponsorsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}