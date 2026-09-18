import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductFilter } from '@/components/products/ProductFilter';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { ProductsAutoScroll } from '@/components/products/ProductsAutoScroll';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: seoData.products.metaTitle,
  description: seoData.products.metaDescription,
};

export default function ProductsPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Header with Breadcrumbs */}
      <PageHeader
        badge="KSHETRAPAL RANGE"
        title="KshetraPal Product Range"
        subtitle="Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* 2. Premium KshetraPal Introduction Section */}
      <Container>
        <Card className="p-6 sm:p-10 bg-gradient-to-br from-agri-pale/90 via-white to-emerald-50/60 border-2 border-agri-accent/30 rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand Statement */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="green" className="text-xs font-bold uppercase tracking-wider">
                  Flagship Product Brand
                </Badge>
                <Badge variant="gold">FCO 1985 & Insecticide 1968 Standards</Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-agri-dark tracking-tight leading-tight">
                The KshetraPal Range
              </h2>

              <p className="text-base sm:text-lg text-agri-muted leading-relaxed font-normal">
                <strong className="text-agri-dark font-bold">The KshetraPal Range:</strong> KshetraPal — meaning <em className="text-agri-primary font-serif font-semibold">&ldquo;Protector of the Field&rdquo;</em> — is Swayur Agrotech&apos;s flagship product brand. Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-agri-dark">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>High Viable Counts (CFU)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>500 ml / 500 gm Packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>100% Residue-Free</span>
                </div>
              </div>
            </div>

            {/* Right Column: KshetraPal Logo & Badges */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-agri-accent/20 shadow-2xs space-y-3 text-center">
              <Image
                src="/images/brand/kshetrapal-official-logo.png"
                alt="KshetraPal Brand Logo"
                width={320}
                height={120}
                priority
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <span className="text-xs font-extrabold text-agri-dark uppercase tracking-wider block">
                ક્ષેત્રપાલ — Protector of the Field
              </span>
              <p className="text-[11px] text-agri-muted">
                Engineered for Indian soils, crops, and sustainable productivity.
              </p>
            </div>
          </div>
        </Card>
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
