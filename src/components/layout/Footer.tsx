'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B291E] text-white pt-16 pb-12 border-t border-agri-accent/30 selection:bg-emerald-500/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white block">
                {companyData.name}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mt-0.5">
                Product Brand: {companyData.brand} ({companyData.brandGujarati})
              </span>
            </Link>

            <p className="text-sm text-slate-300 italic font-serif">
              &ldquo;{companyData.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Swayur Agrotech LLP is an agricultural biotechnology company based in Anand, Gujarat. We develop and formulate high-CFU biological agricultural inputs to revitalize soil health and sustain farmer livelihoods.
            </p>

            <div className="pt-2 text-xs font-mono text-emerald-300/90 space-y-1">
              <div>LLPIN: {companyData.llpin}</div>
              <div>GSTIN: {companyData.gstin}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition-colors">
                  About Swayur
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-300 transition-colors">
                  KshetraPal Range
                </Link>
              </li>
              <li>
                <Link href="/crop-solutions" className="hover:text-emerald-300 transition-colors">
                  Crop Solutions
                </Link>
              </li>
              <li>
                <Link href="/about#commitment" className="hover:text-emerald-300 transition-colors">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact?inquiry=dealer" className="hover:text-emerald-300 transition-colors">
                  Dealer Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate Info & Facility Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">
              Corporate Office & R&D
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-emerald-300">
                  {companyData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-emerald-300">
                  {companyData.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 leading-relaxed">
              <span className="text-emerald-400 font-bold block">Nature of Business:</span>
              {companyData.businessNature}
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Formulated under FCO, 1985 & Insecticide 1968 Standards</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
