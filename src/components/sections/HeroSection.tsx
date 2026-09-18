import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Leaf, Dna, Sprout, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const HeroSection: React.FC = () => {
  const pillars = [
    { label: 'Agriculture', icon: Sprout, desc: 'Empowering Indian farmers' },
    { label: 'Soil Health', icon: Leaf, desc: 'Restoring natural vitality' },
    { label: 'Biotechnology', icon: Dna, desc: 'Microbial science & R&D' },
    { label: 'Sustainability', icon: ShieldCheck, desc: 'Chemical-free longevity' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* 1. High-Quality Green Agricultural/Farm Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/hero-farm-bg.jpg"
          alt="Lush green agricultural farm - Swayur Agrotech"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.88] contrast-[1.05]"
        />
        {/* Elegant multi-layer gradient overlay for pristine contrast and premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-emerald-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/50" />
      </div>

      {/* 2. Main Hero Content Container */}
      <Container className="relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Prominent Swayur Agrotech LLP Logo Card */}
          <div className="inline-flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl transition-transform hover:scale-[1.02]">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech LLP Logo"
              width={500}
              height={180}
              priority
              className="h-14 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Tagline & Headline */}
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Agricultural Biotechnology • Anand, Gujarat</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] text-white">
              Revitalising Soil.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300">
                Empowering Farmers.
              </span>{' '}
              Sustaining Life.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
              We develop science-backed biofertilizers, biopesticides, and microbial solutions formulated for Indian agro-climatic conditions — restoring natural soil vitality and driving sustainable agricultural productivity.
            </p>
          </div>

          {/* 4 Core Pillars: Agriculture + Soil + Biotechnology + Sustainability */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-2">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center text-center space-y-1.5 shadow-sm hover:bg-white/15 transition-all"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    {item.label}
                  </strong>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-tight">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/products"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black shadow-xl px-8"
            >
              Explore KshetraPal Range
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md px-8"
            >
              About Swayur Agrotech
            </Button>

            <WhatsAppButton
              text="WhatsApp Inquiry"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
