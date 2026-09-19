'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, Mail, Building2, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { companyData } from '@/data/company';

export const DealerCTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-agri-border/70 overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-agri-pale/80 via-white to-emerald-50/50 border-2 border-agri-accent/30 p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden text-center space-y-6">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-agri-accent/30 text-agri-primary text-xs font-extrabold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
              <span>COMMERCIAL & DEALERSHIP OPPORTUNITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight leading-tight">
              Partner with Swayur Agrotech
            </h2>

            <p className="text-base sm:text-lg text-agri-muted leading-relaxed font-normal">
              Join our growing distribution network across Gujarat and India. We provide high-CFU biological formulations, promotional agronomy collateral, and direct technical farmer support.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?inquiry=dealer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-agri-primary hover:bg-agri-accent text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Submit Dealer Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/919924838410?text=${encodeURIComponent(
                'Hello Swayur Agrotech, I am interested in dealership / commercial inquiry for KshetraPal products.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-agri-pale text-agri-dark font-bold text-sm sm:text-base border border-agri-border shadow-2xs transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>

          <div className="relative z-10 pt-6 border-t border-agri-border/70 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-bold text-agri-muted">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2 hover:text-agri-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-agri-accent" />
              <span>{companyData.phone}</span>
            </a>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center gap-2 hover:text-agri-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-agri-accent" />
              <span>{companyData.email}</span>
            </a>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-agri-accent" />
              <span>Anand, Gujarat</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
