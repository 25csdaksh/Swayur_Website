import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck, Sparkles, CheckCircle2, FlaskConical, Sprout } from 'lucide-react';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductFilter } from '@/components/products/ProductFilter';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { ProductsAutoScroll } from '@/components/products/ProductsAutoScroll';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: seoData.products.metaTitle,
  description: seoData.products.metaDescription,
};

export default function ProductsPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* 1. Header with Breadcrumbs */}
      <PageHeader
        badge="KSHETRAPAL RANGE"
        title="KshetraPal Product Range"
        subtitle="Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* 2. Premium KshetraPal Introduction Section */}
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F382C] via-[#174E3C] to-[#0B2A21] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-emerald-500/30 overflow-hidden">
          {/* Background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand Statement */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase tracking-wider">
                  Flagship Product Brand
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-wider">
                  FCO 1985 & Insecticide 1968 Standards
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                The KshetraPal Range
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                <strong className="text-white font-bold">The KshetraPal Range:</strong> KshetraPal — meaning <em className="text-emerald-300 font-serif font-semibold">&ldquo;Protector of the Field&rdquo;</em> — is Swayur Agrotech&apos;s flagship product brand. Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High Viable Counts (CFU)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>500 ml / 500 gm Packaging</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Residue-Free</span>
                </div>
              </div>
            </div>

            {/* Right Column: KshetraPal Logo & Badges */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl space-y-4 text-center">
              <Image
                src="/images/brand/kshetrapal-official-logo.png"
                alt="KshetraPal Brand Logo"
                width={360}
                height={140}
                priority
                className="h-14 sm:h-18 w-auto object-contain"
              />
              <div>
                <span className="text-xs font-black text-agri-dark uppercase tracking-widest block">
                  ક્ષેત્રપાલ — Protector of the Field
                </span>
                <span className="text-[11px] text-agri-muted font-medium block mt-1">
                  Engineered for Indian soils, crops, and sustainable productivity.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. Infinite Products Marquee Banner */}
      <ProductsAutoScroll />

      {/* 4. Products Catalogue with Filter & Detail Cards */}
      <Container>
        <div id="explore-products" className="scroll-mt-24 sm:scroll-mt-28 space-y-8">
          <SectionHeading
            badge="Product Catalogue"
            title="Explore Biological Agricultural Inputs"
            subtitle="Browse our biofertilizers and biopesticides. Click any product to view technical specifications, dosage, and crop compatibility."
          />
          <ProductFilter products={productsData} />
        </div>
      </Container>

      {/* 5. CTA Section */}
      <CTASection
        title="Need Product Advisory for Your Farm?"
        subtitle="Talk to our agronomy team to select the right biological inputs for your crop and soil situation."
      />
    </div>
  );
}
