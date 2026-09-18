import React from 'react';
import { Metadata } from 'next';
import { seoData } from '@/data/seo';
import { HeroSection } from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: seoData.home.metaTitle,
  description: seoData.home.metaDescription,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Brand Introduction */}
      <HeroSection />
    </div>
  );
}
