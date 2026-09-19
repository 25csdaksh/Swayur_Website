'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Dna,
  MessageCircle,
} from 'lucide-react';
import { productsData } from '@/data/products';
import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';

export const KshetraPalShowcase: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('bio-npk-consortia');

  const selectedProduct =
    productsData.find((p) => p.id === selectedProductId) || productsData[0];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-agri-border/70">
      <Container>
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale border border-agri-accent/30 text-agri-primary text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            <span>FLAGSHIP PRODUCT PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-agri-dark">
            The KshetraPal Range
          </h2>

          <p className="text-base sm:text-lg font-bold text-agri-primary">
            KshetraPal — meaning &ldquo;Protector of the Field&rdquo; — is Swayur Agrotech&apos;s flagship product brand.
          </p>

          <p className="text-sm sm:text-base text-agri-muted leading-relaxed max-w-3xl mx-auto font-normal">
            Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO, 1985 and Insecticide 1968 standard.
          </p>
        </div>

        {/* Editorial Showcase Layout: Featured Large Product Spotlight + 6 Product Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Featured Product Spotlight (Large Visual Area) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-agri-pale/60 via-white to-agri-pale/30 border border-agri-border p-6 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
            {/* Background ambient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Category & Package Pill */}
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full bg-agri-primary text-white text-xs font-extrabold uppercase tracking-wide shadow-2xs">
                  {selectedProduct.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-agri-border text-agri-dark text-xs font-mono font-bold">
                  Net: {selectedProduct.netContent}
                </span>
              </div>

              {/* Large Product Image with Studio Shadow */}
              <div className="relative h-64 sm:h-80 w-full flex items-center justify-center my-4">
                <div className="relative w-48 sm:w-60 h-60 sm:h-72 transition-transform duration-500 hover:scale-105">
                  <Image
                    src={selectedProduct.image || '/images/products/bio-npk-consortia.jpg'}
                    alt={selectedProduct.name}
                    fill
                    sizes="(max-width: 768px) 240px, 320px"
                    className="object-contain product-studio-shadow"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-agri-dark tracking-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-agri-border/70">
                <div className="flex items-center gap-2 text-xs font-bold text-agri-dark">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>Dosage: {selectedProduct.dosage}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-agri-dark">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>FCO 1985 Schedule I</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-agri-border/70">
              <Link
                href={`/products/${selectedProduct.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-agri-primary hover:bg-agri-accent text-white text-sm font-extrabold transition-all shadow-sm"
              >
                <span>View Complete Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/919924838410?text=Hello%20Swayur%20Agrotech,%20I%20am%20interested%20in%20${encodeURIComponent(
                  selectedProduct.name
                )}%20(${selectedProduct.netContent})`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-agri-pale text-agri-dark text-sm font-bold border border-agri-border transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Interactive 6-Product Selection Tiles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productsData.map((product) => {
              const isSelected = selectedProductId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`group cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-agri-pale/80 border-agri-accent shadow-md ring-1 ring-agri-accent/30'
                      : 'bg-white hover:bg-agri-pale/40 border-agri-border/80 hover:border-agri-accent/40 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Thumbnail Image */}
                    <div className="relative w-16 h-20 shrink-0 bg-white rounded-xl p-1 border border-agri-border/60 shadow-2xs flex items-center justify-center">
                      <Image
                        src={product.image || '/images/products/bio-npk-consortia.jpg'}
                        alt={product.name}
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1 min-w-0">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wide text-agri-accent">
                        {product.subcategory || product.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-agri-dark group-hover:text-agri-primary transition-colors truncate">
                        {product.name}
                      </h4>
                      <span className="inline-block text-[11px] font-mono font-bold text-agri-muted">
                        Package: {product.netContent}
                      </span>
                    </div>
                  </div>

                  {/* Short Benefit */}
                  <p className="text-xs text-agri-muted line-clamp-2 leading-relaxed mt-3 pt-2 border-t border-agri-border/60">
                    {product.tagline}
                  </p>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-3 mt-1 text-xs font-bold">
                    <span className={isSelected ? 'text-agri-accent' : 'text-agri-muted group-hover:text-agri-dark'}>
                      {isSelected ? 'Currently Viewing' : 'Select Product'}
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-agri-primary hover:text-agri-accent hover:underline flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
