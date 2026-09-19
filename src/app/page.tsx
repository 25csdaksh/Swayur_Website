import React from 'react';
import { Metadata } from 'next';
import { seoData } from '@/data/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { KshetraPalShowcase } from '@/components/sections/KshetraPalShowcase';
import { ScienceSection } from '@/components/sections/ScienceSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { AgriculturalSolutionsSection } from '@/components/sections/AgriculturalSolutionsSection';
import { DealerCTASection } from '@/components/sections/DealerCTASection';

export const metadata: Metadata = {
  title: `${seoData.home.metaTitle}`,
  description: seoData.home.metaDescription,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFDFB]">
      {/* 1. Visually Powerful Hero (Agricultural background, Brand messaging, 6 Authentic KshetraPal Products with Interactive Lift) */}
      <HeroSection />

      {/* 2. Flagship KshetraPal Product Range (Editorial showcase with large spotlight & 6 products) */}
      <KshetraPalShowcase />

      {/* 3. Science Behind Better Soil (Visual Flowchart) */}
      <ScienceSection />

      {/* 4. Built on Microbial Science (About Preview & Anand Facility) */}
      <AboutPreviewSection />

      {/* 5. Targeted Agricultural Solutions (Crop-specific biological benefits) */}
      <AgriculturalSolutionsSection />

      {/* 6. Commercial Dealership & Advisory CTA */}
      <DealerCTASection />
    </div>
  );
}
