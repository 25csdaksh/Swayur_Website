'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Eye,
} from 'lucide-react';
import { productsData } from '@/data/products';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';

export const ProductSlidingGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Biofertilizers', 'Biopesticides', 'Biological Inputs'];

  const filteredProducts = productsData.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Biofertilizers') {
      return p.category.toLowerCase().includes('biofertilizer') || p.category.toLowerCase().includes('zinc');
    }
    if (selectedCategory === 'Biopesticides') {
      return (
        p.category.toLowerCase().includes('biopesticide') ||
        p.category.toLowerCase().includes('biofungicide') ||
        p.category.toLowerCase().includes('bioinsecticide')
      );
    }
    return true;
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-agri-pale/40 to-white text-agri-text overflow-hidden border-b border-agri-border/70">
      {/* Subtle light ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header (Light Mode) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>KshetraPal Product Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-agri-dark">
              Interactive Product Sliding Gallery
            </h2>
            <p className="text-sm sm:text-base text-agri-muted max-w-2xl font-normal">
              Swipe or slide through our complete suite of certified biofertilizers and biopesticides. Formulated for maximum CFU potency and tested across Indian farmlands.
            </p>
          </div>

          {/* Controls: Category Filter + Next/Prev Arrow Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter Pills (Light Mode) */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-agri-border shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-agri-primary text-white shadow-xs'
                      : 'text-agri-muted hover:text-agri-dark hover:bg-agri-pale/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Navigation Buttons (Light Mode) */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Previous product"
                className="p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-agri-dark border border-agri-border hover:border-emerald-300 transition-all shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next product"
                className="p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-agri-dark border border-agri-border hover:border-emerald-300 transition-all shadow-xs active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Sliding Track (Light Mode Cards) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[300px] sm:w-[340px] shrink-0 snap-start rounded-2xl bg-white border border-agri-border/90 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group overflow-hidden flex flex-col justify-between"
            >
              {/* Product Visual Top Area */}
              <div className="relative h-60 w-full bg-gradient-to-b from-agri-pale/50 via-white to-agri-pale/20 overflow-hidden flex items-center justify-center p-4 border-b border-agri-border/50">
                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/80 text-[10px] font-extrabold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                {/* Packaging Size Top Right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-agri-pale border border-agri-border text-[11px] font-mono text-agri-dark font-bold">
                    {product.netContent}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative w-40 h-44 transition-transform duration-500 group-hover:scale-108">
                  <Image
                    src={product.image || '/images/products/bio-npk-consortia.jpg'}
                    alt={product.name}
                    fill
                    sizes="200px"
                    className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>

              {/* Product Information Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-agri-dark group-hover:text-agri-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-agri-muted line-clamp-2 leading-relaxed font-normal">
                    {product.tagline}
                  </p>
                </div>

                {/* Key specs highlight */}
                <div className="space-y-1.5 pt-2 border-t border-agri-border/60">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-agri-muted">Formulation</span>
                    <span className="font-bold text-agri-dark">{product.formulation}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-agri-muted">Dosage</span>
                    <span className="font-bold text-emerald-700">{product.dosage}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-agri-muted">Standard</span>
                    <span className="font-bold text-teal-800">FCO 1985 Compliant</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-agri-pale hover:bg-agri-pale/80 text-agri-dark text-xs font-bold transition-all border border-agri-border hover:border-agri-accent/40"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </Link>

                  <a
                    href={`https://wa.me/91${companyData.phone.replace(/[^0-9]/g, '')}?text=Hello%20Swayur%20Agrotech,%20I%20want%20to%20order%20or%20inquire%20about%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs hover:shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire / Buy</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator & Explore All CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-agri-border/70">
          <div className="flex items-center gap-2 text-xs font-semibold text-agri-muted">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Showing {filteredProducts.length} bio-certified products</span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-agri-primary hover:text-agri-accent transition-colors group"
          >
            <span>Explore Full Catalog, Dosage Charts & 3D Viewer</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
