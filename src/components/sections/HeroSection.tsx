import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Dna,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  Award,
  FlaskConical,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const HeroSection: React.FC = () => {
  const pillars = [
    {
      label: 'Agriculture',
      subtitle: 'Farmer Empowerment',
      icon: Sprout,
      desc: 'Formulated for Indian agro-climatic zones and diverse crop systems.',
      color: 'from-emerald-500/30 to-green-500/10',
      border: 'border-emerald-400/30',
      iconBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      label: 'Soil Health',
      subtitle: 'Natural Vitality',
      icon: Leaf,
      desc: 'Restoring natural microbial activity, organic carbon, and soil fertility.',
      color: 'from-teal-500/30 to-emerald-500/10',
      border: 'border-teal-400/30',
      iconBg: 'bg-teal-500/20 text-teal-300',
    },
    {
      label: 'Biotechnology',
      subtitle: 'Microbial Science',
      icon: Dna,
      desc: 'High-CFU viable bacterial and fungal strains with proven efficacy.',
      color: 'from-cyan-500/30 to-teal-500/10',
      border: 'border-cyan-400/30',
      iconBg: 'bg-cyan-500/20 text-cyan-300',
    },
    {
      label: 'Sustainability',
      subtitle: 'Residue-Free Future',
      icon: ShieldCheck,
      desc: '100% biological inputs reducing chemical dependency for future generations.',
      color: 'from-amber-500/30 to-emerald-500/10',
      border: 'border-amber-400/30',
      iconBg: 'bg-amber-500/20 text-amber-300',
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* 1. Ultra-High Resolution Cinematic Farm Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/hero-farm-bg.jpg"
          alt="Lush green agricultural farm - Swayur Agrotech"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.82] contrast-[1.08] scale-100 transition-transform duration-1000 ease-out hover:scale-105"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-emerald-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/60" />
        {/* Subtle radial ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Main Hero Content Container */}
      <Container className="relative z-10 text-white">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 text-center">
          {/* Top Floating Badge & Official Brand Container */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agricultural Biotechnology • Anand, Gujarat</span>
            </div>

            {/* Elevated Frosted Glass Logo Pedestal */}
            <div className="p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl transition-all duration-300 hover:shadow-emerald-500/20 hover:scale-[1.02]">
              <Image
                src="/images/brand/swayur-agrotech-official-logo.png"
                alt="Swayur Agrotech LLP Logo"
                width={520}
                height={190}
                priority
                className="h-14 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>

          {/* Main Headline / Tagline */}
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] text-white">
              Revitalising Soil.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300">
                Empowering Farmers.
              </span>{' '}
              <br className="hidden sm:inline" />
              Sustaining Life.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto">
              Swayur Agrotech LLP harnesses the power of beneficial microorganisms to formulate high-potency biofertilizers and biopesticides engineered specifically for Indian agro-climatic conditions.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/products"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow-xl hover:shadow-emerald-500/30 px-8 py-3.5 transition-all duration-200"
            >
              Explore KshetraPal Range
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md px-8 py-3.5"
            >
              About Swayur Agrotech
            </Button>

            <WhatsAppButton
              text="WhatsApp Advisory"
              size="lg"
              className="w-full sm:w-auto shadow-lg"
            />
          </div>

          {/* 4 Interactive Core Pillars: Agriculture + Soil + Biotechnology + Sustainability */}
          <div className="pt-6 sm:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative p-5 sm:p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border ${item.border} hover:border-emerald-300/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
                  >
                    {/* Subtle top gradient glow */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-11 h-11 rounded-2xl ${item.iconBg} border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-extrabold text-slate-400 uppercase tracking-widest">
                          0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                          {item.subtitle}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                          {item.label}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Floating Trust Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">FCO 1985 & Insecticide 1968 Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Up to 1.5×10⁸ CFU/ml Guaranteed Count</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">100% Residue-Free Biologicals</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
