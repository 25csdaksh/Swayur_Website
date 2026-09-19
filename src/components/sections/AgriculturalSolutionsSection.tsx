'use client';

import React from 'react';
import Link from 'next/link';
import { Sprout, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const AgriculturalSolutionsSection: React.FC = () => {
  const cropSolutions = [
    {
      category: 'Cereals & Grains',
      crops: 'Wheat, Paddy (Rice), Maize, Bajra, Jowar',
      benefit: 'High early root initiation, active nitrogen fixation, and reduced urea/DAP dependency.',
      recommended: 'Bio-NPK Consortia + Mycorrhiza',
    },
    {
      category: 'Cash & Fiber Crops',
      crops: 'Cotton, Sugarcane, Groundnut, Soybean',
      benefit: 'Protection against bollworm/sucking pests and improved boll weight & sugar recovery.',
      recommended: 'Bio-ZSB + Beauveria bassiana',
    },
    {
      category: 'Horticulture & Vegetables',
      crops: 'Chilli, Tomato, Onion, Potato, Brinjal, Cumin',
      benefit: 'Suppression of soil-borne damping-off, wilt, and root-rot pathogens for export-grade quality.',
      recommended: 'Trichoderma viride + Pseudomonas',
    },
    {
      category: 'Fruit Orchards & Spices',
      crops: 'Banana, Mango, Pomegranate, Citrus, Cardamom',
      benefit: 'Deep hyphal root reach, stress tolerance against drought, and uniform fruit sizing.',
      recommended: 'Mycorrhiza + Bio-NPK Consortia',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-agri-pale/30 to-white border-b border-agri-border/70">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale border border-agri-accent/25 text-agri-primary text-xs font-extrabold uppercase tracking-widest">
            <Sprout className="w-3.5 h-3.5 text-agri-accent" />
            <span>CROP ADVISORY & SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
            Targeted Agricultural Solutions
          </h2>

          <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
            Every crop family has unique nutrient requirements and pest pressures. KshetraPal biological formulations provide specialized microbial support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cropSolutions.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-agri-border/90 p-6 sm:p-8 shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-agri-border/70">
                  <h3 className="text-lg sm:text-xl font-black text-agri-dark group-hover:text-agri-primary transition-colors">
                    {item.category}
                  </h3>
                  <span className="text-xs font-mono font-bold text-agri-accent">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-bold text-agri-muted">
                  <span className="text-agri-dark">Crops: </span>
                  {item.crops}
                </div>

                <p className="text-xs sm:text-sm text-agri-muted leading-relaxed font-normal">
                  {item.benefit}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-agri-border/60 flex items-center justify-between text-xs">
                <div className="font-bold text-agri-primary flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-agri-accent" />
                  <span>{item.recommended}</span>
                </div>
                <Link
                  href="/crop-solutions"
                  className="font-extrabold text-agri-accent hover:underline flex items-center gap-1"
                >
                  <span>Protocol</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
