import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, Sprout, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { ProductImage } from '@/components/products/ProductImage';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const packageSize =
    product.netContent || (product.formulation === 'Liquid' ? '500 ml' : '500 gm');

  // Extract concise first complete sentence for short description
  const sentences = product.description.split(/(?<=[a-zA-Z]{3,}\.|\)\.)\s+/);
  const shortDescription = sentences[0] || product.description;

  const isBiofertilizer =
    product.category.toLowerCase().includes('biofertilizer') ||
    product.id === 'bio-npk-consortia' ||
    product.id === 'bio-zsb' ||
    product.id === 'mycorrhiza';

  return (
    <div className="group relative flex flex-col justify-between h-full bg-white rounded-3xl border border-agri-border/90 p-5 sm:p-6 shadow-xs hover:shadow-2xl hover:border-agri-accent/60 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
      {/* Top accent glow line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
          isBiofertilizer
            ? 'from-emerald-500 via-green-400 to-teal-500'
            : 'from-teal-500 via-cyan-400 to-emerald-500'
        } opacity-80 group-hover:opacity-100 transition-opacity`}
      />

      <div className="space-y-4 sm:space-y-5">
        {/* Centralized Product Image Stage */}
        <Link href={`/products/${product.slug}`} className="block focus:outline-none">
          <div className="relative rounded-2xl bg-gradient-to-b from-agri-pale/80 via-white to-emerald-50/40 p-4 border border-agri-border/60 transition-all duration-300 group-hover:border-agri-accent/40 group-hover:shadow-inner">
            <ProductImage product={product} size="md" />
          </div>
        </Link>

        {/* Header Badges: Category, Package, Formulation */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span
            className={`px-2.5 sm:px-3 py-1 rounded-xl text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider border ${
              isBiofertilizer
                ? 'border-emerald-300 text-emerald-900 bg-emerald-50/80'
                : 'border-teal-300 text-teal-900 bg-teal-50/80'
            }`}
          >
            {product.category}
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl border border-amber-300 text-amber-950 bg-amber-50 font-black text-[10px] sm:text-[11px]">
            <Package className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-700 shrink-0" />
            {packageSize}
          </span>

          <span className="px-2.5 sm:px-3 py-1 rounded-xl bg-[#0C382B] text-white font-black text-[10px] sm:text-[11px] uppercase tracking-wider ml-auto">
            {product.formulation === 'Powder (WP)' ? 'POWDER' : 'LIQUID'}
          </span>
        </div>

        {/* Product Name & Brand Eyebrow */}
        <div className="space-y-1 pt-1">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-emerald-700/80 block">
            KshetraPal Range
          </span>
          <Link href={`/products/${product.slug}`} className="block focus:outline-none">
            <h3 className="text-xl sm:text-2xl font-black text-agri-dark group-hover:text-agri-primary transition-colors tracking-tight leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-agri-muted leading-relaxed line-clamp-3 font-normal">
          {shortDescription}
        </p>
      </div>

      {/* Product Card Footer: Package, Dosage & View Details CTA */}
      <div className="pt-5 mt-6 border-t border-slate-100 space-y-4">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-agri-pale/60 border border-agri-border/60">
            <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider">
              Package Size
            </span>
            <span className="font-black text-agri-dark text-xs sm:text-sm">{packageSize}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-agri-pale/60 border border-agri-border/60">
            <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider">
              Rec. Dosage
            </span>
            <span className="font-black text-agri-dark text-xs sm:text-sm">{product.dosage}</span>
          </div>
        </div>

        {/* View Details CTA Button */}
        <Link
          href={`/products/${product.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F382C] hover:bg-[#174E3C] text-white font-black text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg group/btn"
        >
          <span>View Product Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
