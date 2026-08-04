"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsPressoSection } from "@/components/sections/WhatIsPressoSection";
import { HorizontalTimelineSection } from "@/components/sections/HorizontalTimelineSection";
import { PressoInActionSection } from "@/components/sections/PressoInActionSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { OnePlatformBrandedSection } from "@/components/sections/OnePlatformBrandedSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ExperienceArchitectureSection } from "@/components/sections/ExperienceArchitectureSection";
import { WhoIsPressoForSection } from "@/components/sections/WhoIsPressoForSection";
import { StopwatchComparisonSection } from "@/components/sections/StopwatchComparisonSection";
import { CampaignGallerySection } from "@/components/sections/CampaignGallerySection";
import { InteractiveDemoSection } from "@/components/sections/InteractiveDemoSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";
import { VideoGallerySection } from "@/components/sections/VideoGallerySection";
import { SocialProofStripSection } from "@/components/sections/SocialProofStripSection";
import { CTASection } from "@/components/sections/CTASection";
import { DemoModal } from "@/components/ui/DemoModal";
import { VideoModal } from "@/components/ui/VideoModal";
import { BrochureModal } from "@/components/ui/BrochureModal";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF6A00] selection:text-[#050505] overflow-x-hidden">
      {/* Global Navigation Header */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Main Storytelling Page Flow */}
      <main>
        {/* 1. Hero Section ("Turn Product Demonstrations Into Crowds.") */}
        <HeroSection
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onOpenVideoModal={() => setVideoModalOpen(true)}
          onOpenBrochureModal={() => setBrochureModalOpen(true)}
        />

        {/* 2. What is PRESSO? (6 Core Cards) */}
        <WhatIsPressoSection />

        {/* 3. Social Proof & Trust Strip */}
        <SocialProofStripSection />

        {/* 4. How PRESSO Works (Horizontal Interactive Timeline) */}
        <HorizontalTimelineSection />

        {/* 5. PRESSO in Action (Real Customer Deployment Showcase) */}
        <PressoInActionSection onOpenVideoModal={() => setVideoModalOpen(true)} />

        {/* 6. Meet PRESSO - Official Product Photography Showcase */}
        <ProductSection />

        {/* 7. ONE PLATFORM. ENDLESS BRANDS. (Bosch, IKEA, Pepsi, Decathlon Mockups) */}
        <OnePlatformBrandedSection />

        {/* 7. Flagship Case Study: FIXTO @ IMTEX FORMING */}
        <CaseStudySection
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onOpenBrochureModal={() => setBrochureModalOpen(true)}
        />

        {/* 8. Experience Architecture System Flow */}
        <ExperienceArchitectureSection />

        {/* 9. WHO IS PRESSO FOR? (10-Sector Grid) */}
        <WhoIsPressoForSection />

        {/* 10. WHY NOT JUST USE A STOPWATCH? Comparison Table */}
        <StopwatchComparisonSection />

        {/* 11. Ready-to-Deploy Campaign Ideas Showcase */}
        <CampaignGallerySection
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onOpenBrochureModal={() => setBrochureModalOpen(true)}
        />

        {/* 12. Interactive Physical Button Simulator & Live Leaderboard */}
        <InteractiveDemoSection />

        {/* 13. Why Experiential Agencies Pitch PRESSO */}
        <AgenciesSection />

        {/* 14. Netflix-Style Video Gallery Showcase */}
        <VideoGallerySection
          onOpenVideoModal={() => setVideoModalOpen(true)}
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onOpenBrochureModal={() => setBrochureModalOpen(true)}
        />

        {/* 15. Final Conversion CTA */}
        <CTASection
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onOpenVideoModal={() => setVideoModalOpen(true)}
          onOpenBrochureModal={() => setBrochureModalOpen(true)}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Conversion Floating CTA */}
      <FloatingCTA onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Interactive Modals */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
      <BrochureModal isOpen={brochureModalOpen} onClose={() => setBrochureModalOpen(false)} />
    </div>
  );
}
