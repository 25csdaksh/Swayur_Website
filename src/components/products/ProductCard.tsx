import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, Sprout } from 'lucide-react';
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

  return (
    <div className="flex flex-col justify-between h-full bg-white rounded-3xl border border-agri-border/80 p-5 sm:p-6 shadow-2xs hover:shadow-xl hover:border-agri-accent/60 transition-all duration-300 hover:-translate-y-1">
      <div className="space-y-4 sm:space-y-5">
        {/* Product Image Container */}
        <Link href={`/products/${product.slug}`} className="block focus:outline-none">
          <ProductImage product={product} size="md" />
        </Link>

        {/* Header Badges: Category & Package */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="px-2.5 sm:px-3 py-1 rounded-lg border border-emerald-300 text-emerald-900 bg-emerald-50/80 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
            {product.category}
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg border border-amber-300 text-amber-950 bg-amber-50 font-extrabold text-[10px] sm:text-[11px]">
            <Package className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-700 shrink-0" />
            {packageSize}
          </span>

          <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[#0C382B] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider ml-auto">
            {product.formulation === 'Powder (WP)' ? 'POWDER' : 'LIQUID'}
          </span>
        </div>

        {/* Product Name */}
        <div className="space-y-1 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-agri-muted block">
            KshetraPal Range
          </span>
          <Link href={`/products/${product.slug}`} className="block focus:outline-none group">
            <h3 className="text-xl sm:text-2xl font-extrabold text-agri-dark group-hover:text-agri-primary transition-colors tracking-tight leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-agri-muted leading-relaxed line-clamp-3">
          {shortDescription}
        </p>
      </div>

      {/* Product Card Footer: Package, Dosage & View Details CTA */}
      <div className="pt-5 mt-6 border-t border-slate-100 space-y-4">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-agri-pale/50 border border-agri-border/50">
            <span className="text-slate-500 font-medium block text-[10px] uppercase tracking-wider">
              Package Size
            </span>
            <span className="font-extrabold text-agri-dark text-xs sm:text-sm">{packageSize}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-agri-pale/50 border border-agri-border/50">
            <span className="text-slate-500 font-medium block text-[10px] uppercase tracking-wider">
              Rec. Dosage
            </span>
            <span className="font-extrabold text-agri-dark text-xs sm:text-sm">{product.dosage}</span>
          </div>
        </div>

        {/* View Details CTA */}
        <Link
          href={`/products/${product.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-agri-dark hover:bg-agri-primary text-white font-bold text-xs sm:text-sm transition-colors shadow-xs group"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
