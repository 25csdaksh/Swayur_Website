'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Microscope, Building2, MapPin, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { companyData } from '@/data/company';

export const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-agri-border/70 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Brand & Anand Facility Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-agri-border aspect-[4/3]">
              <Image
                src="/images/backgrounds/hero-farm-bg.jpg"
                alt="Swayur Agrotech Biotechnology Facility & Farmland"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/80 via-agri-dark/20 to-transparent" />

              {/* Floating Anand Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 text-agri-dark shadow-md flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-agri-pale flex items-center justify-center text-agri-primary shrink-0 border border-agri-accent/20">
                  <MapPin className="w-5 h-5 text-agri-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-agri-dark">
                    Anand, Gujarat, India
                  </h4>
                  <p className="text-[11px] text-agri-muted font-medium">
                    Agricultural Biotechnology R&D & Formulation Facility
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Discover Swayur CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale border border-agri-accent/25 text-agri-primary text-xs font-extrabold uppercase tracking-widest">
              <Microscope className="w-3.5 h-3.5 text-agri-accent" />
              <span>ABOUT SWAYUR AGROTECH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight leading-tight">
              Built on Microbial Science
            </h2>

            <p className="text-base sm:text-lg text-agri-muted leading-relaxed font-medium">
              Swayur Agrotech LLP is an agricultural biotechnology company based in Anand, Gujarat. We engineer high-potency biofertilizers and biopesticides designed specifically for Indian soil conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-agri-pale/50 border border-agri-border space-y-1">
                <h4 className="text-sm font-extrabold text-agri-dark">
                  Microbial Expertise
                </h4>
                <p className="text-xs text-agri-muted leading-relaxed">
                  Formulated by experienced microbiologists to guarantee shelf life and field efficacy.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-agri-pale/50 border border-agri-border space-y-1">
                <h4 className="text-sm font-extrabold text-agri-dark">
                  Residue-Free Agriculture
                </h4>
                <p className="text-xs text-agri-muted leading-relaxed">
                  100% biological inputs compliant with FCO 1985 and Insecticide 1968 standards.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-agri-primary hover:bg-agri-accent text-white text-sm font-extrabold shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Discover Swayur</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
