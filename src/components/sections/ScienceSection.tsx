'use client';

import React from 'react';
import Link from 'next/link';
import {
  Dna,
  Leaf,
  Sparkles,
  Sprout,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const ScienceSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Beneficial Microbes',
      desc: 'Selected bacterial and fungal strains (Azotobacter, PSB, KMB, Trichoderma, Beauveria) isolated for high CFU potency.',
      icon: Dna,
      accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    },
    {
      step: '02',
      title: 'Soil Microbiome',
      desc: 'Microorganisms populate the rhizosphere, breaking down organic compounds and restoring living biological activity.',
      icon: Leaf,
      accent: 'border-teal-200 bg-teal-50 text-teal-700',
    },
    {
      step: '03',
      title: 'Nutrient Solubilization',
      desc: 'Naturally fixes atmospheric nitrogen, converts bound phosphorus into soluble ions, and mobilizes potash and zinc.',
      icon: Sparkles,
      accent: 'border-cyan-200 bg-cyan-50 text-cyan-700',
    },
    {
      step: '04',
      title: 'Root Development',
      desc: 'Stimulates dense lateral root branching and mycorrhizal hyphal networks for deeper moisture and mineral absorption.',
      icon: Sprout,
      accent: 'border-amber-200 bg-amber-50 text-amber-800',
    },
    {
      step: '05',
      title: 'Vigorous Crop Growth',
      desc: 'Enhanced photosynthesis, systemic disease resistance, uniform fruit setting, and higher market-grade harvest yields.',
      icon: TrendingUp,
      accent: 'border-green-200 bg-green-50 text-green-700',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F2F7F4] via-white to-[#F2F7F4] border-b border-agri-border/70 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-agri-accent/30 text-agri-primary text-xs font-extrabold uppercase tracking-widest shadow-2xs">
            <Dna className="w-3.5 h-3.5 text-agri-accent" />
            <span>BIOTECHNOLOGY & SOIL REGENERATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-agri-dark">
            Science Behind Better Soil
          </h2>

          <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
            Swayur Agrotech replaces chemical degradation with biological regeneration. Explore how our microbial formulations restore soil vitality from the root zone up.
          </p>
        </div>

        {/* 5-Step Visual Storytelling Flowchart */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-green-300 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-agri-border/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className="space-y-4">
                    {/* Step badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.accent} transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-black text-agri-muted">
                        STEP {item.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-agri-dark group-hover:text-agri-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-agri-muted leading-relaxed mt-2 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Flow indicator */}
                  <div className="pt-4 mt-2 border-t border-agri-border/60 flex items-center gap-1.5 text-[11px] font-bold text-agri-accent">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Biological Mechanism</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Scientific Stats & Link */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-agri-border/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-extrabold text-agri-dark">
              Guaranteed 1.5 × 10⁸ CFU/ml Viability
            </h4>
            <p className="text-xs sm:text-sm text-agri-muted">
              Every batch manufactured in Anand, Gujarat is verified for shelf stability and live strain purity.
            </p>
          </div>

          <Link
            href="/crop-solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-agri-primary hover:bg-agri-accent text-white text-xs sm:text-sm font-bold transition-all shrink-0 shadow-2xs"
          >
            <span>Explore Crop Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
