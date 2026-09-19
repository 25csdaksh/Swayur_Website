import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Sparkles, ShieldCheck, Leaf } from 'lucide-react';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductFilter } from '@/components/products/ProductFilter';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData.products.metaTitle,
  description: seoData.products.metaDescription,
};

export default function ProductsPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-[#FBFDFB]">
      {/* 1. Page Header */}
      <PageHeader
        badge="KSHETRAPAL PRODUCT RANGE"
        title="KshetraPal Range"
        subtitle="Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* 2. Premium KshetraPal Introduction Banner */}
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-agri-pale/80 via-white to-emerald-50/50 border border-agri-border p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand Statement */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-agri-primary text-white text-xs font-extrabold uppercase tracking-wider shadow-2xs">
                  Flagship Product Brand
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-agri-border text-agri-dark text-xs font-bold uppercase tracking-wider">
                  FCO 1985 & Insecticide 1968 Standards
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-agri-dark tracking-tight leading-tight">
                The KshetraPal Range
              </h2>

              <p className="text-base sm:text-lg text-agri-muted leading-relaxed font-normal">
                <strong className="text-agri-dark font-bold">KshetraPal — meaning &ldquo;Protector of the Field&rdquo;</strong> is Swayur Agrotech&apos;s flagship product brand. Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-agri-dark">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-agri-border shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>High Viable Counts (CFU)</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-agri-border shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>500 ml / 500 gm Packaging</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-agri-border shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>100% Residue-Free</span>
                </div>
              </div>
            </div>

            {/* Right Column: KshetraPal Official Brand Pedestal */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-white border border-agri-border/90 shadow-sm space-y-3 text-center">
              <Image
                src="/images/brand/kshetrapal-official-logo.png"
                alt="KshetraPal Brand Logo"
                width={360}
                height={140}
                priority
                className="h-12 sm:h-16 w-auto object-contain"
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

      {/* 3. Products Catalogue with Filter & Detail Cards */}
      <Container>
        <div id="explore-products" className="space-y-6 pt-4 scroll-mt-24">
          <ProductFilter products={productsData} />
        </div>
      </Container>

      {/* 4. Dealership & Technical Inquiry CTA */}
      <CTASection
        title="Looking for KshetraPal Products or Dealership?"
        subtitle="We partner with agricultural distributors, dealers, and farmer producer companies (FPOs) across Gujarat and India."
      />
    </div>
  );
}
