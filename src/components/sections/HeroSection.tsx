'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { productsData } from '@/data/products';

export const HeroSection: React.FC = () => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // The 6 actual KshetraPal products in arranged visual layers
  const heroProducts = [
    {
      id: 'beauveria-bassiana',
      name: 'Beauveria bassiana',
      shortCategory: 'Bioinsecticide',
      packageSize: '500 ml',
      slug: 'beauveria-bassiana',
      image: '/images/products/beauveria-bassiana.jpg',
      accentColor: '#dc2626',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
      zIndex: 10,
      positionClass: 'translate-y-4 lg:translate-y-6',
      sizeClass: 'w-24 sm:w-28 md:w-32 lg:w-36 h-40 sm:h-48 md:h-56 lg:h-60',
    },
    {
      id: 'bio-zsb',
      name: 'Bio-ZSB',
      shortCategory: 'Zinc Solubilizer',
      packageSize: '500 ml',
      slug: 'bio-zsb',
      image: '/images/products/bio-zsb.jpg',
      accentColor: '#d97706',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      zIndex: 20,
      positionClass: '-translate-y-2 lg:-translate-y-4 scale-105',
      sizeClass: 'w-26 sm:w-32 md:w-36 lg:w-40 h-44 sm:h-52 md:h-60 lg:h-68',
    },
    {
      id: 'bio-npk-consortia',
      name: 'Bio-NPK Consortia',
      shortCategory: 'NPK Consortia',
      packageSize: '500 ml',
      slug: 'bio-npk-consortia',
      image: '/images/products/bio-npk-consortia.jpg',
      accentColor: '#15803d',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      zIndex: 30,
      positionClass: '-translate-y-6 lg:-translate-y-8 scale-110',
      sizeClass: 'w-28 sm:w-34 md:w-38 lg:w-44 h-48 sm:h-56 md:h-64 lg:h-72',
    },
    {
      id: 'mycorrhiza',
      name: 'Mycorrhiza',
      shortCategory: 'Endomycorrhiza',
      packageSize: '500 gm',
      slug: 'mycorrhiza',
      image: '/images/products/mycorrhiza.jpg',
      accentColor: '#854d0e',
      badgeBg: 'bg-amber-100/60 text-amber-900 border-amber-300',
      zIndex: 25,
      positionClass: '-translate-y-2 lg:-translate-y-4 scale-105',
      sizeClass: 'w-26 sm:w-32 md:w-36 lg:w-40 h-44 sm:h-52 md:h-60 lg:h-68',
    },
    {
      id: 'trichoderma-viride',
      name: 'Trichoderma viride',
      shortCategory: 'Biofungicide',
      packageSize: '500 ml',
      slug: 'trichoderma-viride',
      image: '/images/products/trichoderma-viride.jpg',
      accentColor: '#0284c7',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
      zIndex: 15,
      positionClass: 'translate-y-3 lg:translate-y-4',
      sizeClass: 'w-24 sm:w-28 md:w-32 lg:w-36 h-40 sm:h-48 md:h-56 lg:h-60',
    },
    {
      id: 'pseudomonas-fluorescens',
      name: 'Pseudomonas fluorescens',
      shortCategory: 'Biocontrol',
      packageSize: '500 ml',
      slug: 'pseudomonas-fluorescens',
      image: '/images/products/pseudomonas-fluorescens.jpg',
      accentColor: '#334155',
      badgeBg: 'bg-slate-100 text-slate-800 border-slate-300',
      zIndex: 10,
      positionClass: 'translate-y-6 lg:translate-y-8',
      sizeClass: 'w-22 sm:w-26 md:w-30 lg:w-34 h-38 sm:h-44 md:h-52 lg:h-56',
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-white to-[#F6FAF8] border-b border-agri-border/70 py-12 lg:py-16">
      {/* 1. Cinematic Agricultural Background with Soft Horizon */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/backgrounds/hero-farm-bg.jpg"
          alt="Lush green agricultural farm landscape - Swayur Agrotech"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 filter saturate-[0.85] brightness-[1.05]"
        />
        {/* Soft light gradients for pristine readability & high-end corporate clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT SIDE: Brand & Core Messaging */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-7 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale border border-agri-accent/25 text-agri-primary text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-agri-accent animate-pulse" />
              <span>SWAYUR AGROTECH LLP</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-agri-dark tracking-tight leading-[1.12]">
                Revitalising Soil.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-primary via-agri-medium to-agri-accent block sm:inline">
                  Empowering Farmers.
                </span>
              </h1>
            </div>

            {/* Supporting line */}
            <p className="text-base sm:text-lg text-agri-muted leading-relaxed font-medium max-w-xl">
              Science-driven microbial solutions for healthier soil, stronger crops and sustainable agriculture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-agri-primary hover:bg-agri-accent text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore KshetraPal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-agri-pale text-agri-dark font-bold text-sm sm:text-base border border-agri-border hover:border-agri-accent/40 shadow-2xs transition-all duration-200"
              >
                <span>About Swayur</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-bold text-agri-muted border-t border-agri-border/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-agri-accent" />
                <span>FCO 1985 & CIB-RC Standard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-agri-accent" />
                <span>High-CFU Viable Microbes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-agri-accent" />
                <span>Anand, Gujarat Facility</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Curated Product Showcase with Interactive Hover & Studio Shadows */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center justify-center">
            {/* Top Eyebrow Tag for Product Showcase */}
            <div className="mb-3 sm:mb-4 px-3 py-1 rounded-full bg-white/90 border border-agri-border/80 shadow-2xs text-[11px] font-bold text-agri-dark uppercase tracking-wider">
              KshetraPal Biological Collection • 6 Products
            </div>

            {/* Layered Product Stage with Natural Wooden Floor Perspective & Studio Depth */}
            <div className="relative w-full max-w-2xl py-6 px-2 flex items-end justify-center min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px]">
              {/* Wooden Table / Ground Pedestal */}
              <div className="absolute bottom-0 inset-x-2 sm:inset-x-6 h-12 sm:h-14 rounded-2xl bg-gradient-to-t from-amber-950/20 via-amber-800/10 to-transparent border-t border-amber-900/10 pointer-events-none" />

              {/* Six Layered Product Bottles/Jars */}
              <div className="relative z-10 flex items-end justify-center -space-x-4 sm:-space-x-6 md:-space-x-8 lg:-space-x-10 w-full">
                {heroProducts.map((p) => {
                  const isHovered = hoveredProductId === p.id;
                  const isAnyHovered = hoveredProductId !== null;
                  const isDimmed = isAnyHovered && !isHovered;

                  return (
                    <div
                      key={p.id}
                      onMouseEnter={() => setHoveredProductId(p.id)}
                      onMouseLeave={() => setHoveredProductId(null)}
                      className={`relative flex flex-col items-center transition-all duration-300 ease-out cursor-pointer ${
                        p.positionClass
                      } ${isHovered ? 'z-40 -translate-y-8 scale-115' : ''} ${
                        isDimmed ? 'opacity-70 scale-95' : 'opacity-100'
                      }`}
                      style={{ zIndex: isHovered ? 50 : p.zIndex }}
                    >
                      {/* Interactive Hover Popup Tooltip Card */}
                      {isHovered && (
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 animate-in fade-in zoom-in-95 duration-200">
                          <Link
                            href={`/products/${p.slug}`}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-agri-dark text-white text-xs font-bold shadow-xl border border-agri-accent/40 hover:bg-agri-primary transition-all"
                          >
                            <span>{p.name}</span>
                            <span className="text-[10px] text-agri-light font-mono font-semibold">
                              ({p.packageSize})
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-agri-light ml-0.5" />
                          </Link>
                        </div>
                      )}

                      {/* Product Image Container */}
                      <Link
                        href={`/products/${p.slug}`}
                        className={`relative ${p.sizeClass} block focus:outline-none transition-transform duration-300`}
                      >
                        <Image
                          src={p.image}
                          alt={`${p.name} - KshetraPal by Swayur Agrotech`}
                          fill
                          sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
                          className={`object-contain transition-all duration-300 ${
                            isHovered ? 'product-hover-shadow' : 'product-studio-shadow'
                          }`}
                        />
                      </Link>

                      {/* Subtle Ground Contact Shadow */}
                      <div className="w-3/4 h-3 bg-black/15 rounded-full blur-sm -mt-1.5 pointer-events-none" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Interaction Guide */}
            <div className="mt-2 text-center text-xs text-agri-muted font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
              <span>Hover or click on any product to inspect specifications & dosage</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
