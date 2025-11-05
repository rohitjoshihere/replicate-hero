import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import ImpactSection from "@/components/ImpactSection";
import WorkSection from "@/components/WorkSection";
import WhySection from "@/components/WhySection";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyLogos />
        <ImpactSection />
        <WorkSection />
        <WhySection />
        <ApproachSection />
        <ProcessSection />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default Index;
