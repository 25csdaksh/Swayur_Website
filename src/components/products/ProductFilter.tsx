'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

interface ProductFilterProps {
  products: Product[];
}

export const ProductFilter: React.FC<ProductFilterProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filterTabs = [
    { label: 'All Products', value: 'All' },
    { label: 'Biofertilizers', value: 'Biofertilizers' },
    { label: 'Biopesticides & Biocontrol', value: 'Biopesticides' },
  ];

  const filteredProducts = products.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Biofertilizers') {
      return (
        p.category.toLowerCase().includes('biofertilizer') ||
        p.id === 'bio-npk-consortia' ||
        p.id === 'bio-zsb' ||
        p.id === 'mycorrhiza'
      );
    }
    if (selectedCategory === 'Biopesticides') {
      return (
        p.category.toLowerCase().includes('biofungicide') ||
        p.category.toLowerCase().includes('bioinsecticide') ||
        p.category.toLowerCase().includes('biopesticide') ||
        p.id === 'trichoderma-viride' ||
        p.id === 'beauveria-bassiana' ||
        p.id === 'pseudomonas-fluorescens'
      );
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center sm:justify-center gap-2 p-1.5 rounded-2xl bg-agri-pale/80 border border-agri-border/60 max-w-xl mx-auto overflow-x-auto no-scrollbar w-full whitespace-nowrap shadow-xs">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.value;
          const count =
            tab.value === 'All'
              ? products.length
              : tab.value === 'Biofertilizers'
              ? products.filter(
                  (p) =>
                    p.category.toLowerCase().includes('biofertilizer') ||
                    p.id === 'bio-npk-consortia' ||
                    p.id === 'bio-zsb' ||
                    p.id === 'mycorrhiza'
                ).length
              : products.filter(
                  (p) =>
                    p.category.toLowerCase().includes('biofungicide') ||
                    p.category.toLowerCase().includes('bioinsecticide') ||
                    p.category.toLowerCase().includes('biopesticide') ||
                    p.id === 'trichoderma-viride' ||
                    p.id === 'beauveria-bassiana' ||
                    p.id === 'pseudomonas-fluorescens'
                ).length;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelectedCategory(tab.value)}
              className={cn(
                'px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer',
                isActive
                  ? 'bg-agri-dark text-white shadow-xs'
                  : 'text-agri-muted hover:text-agri-dark hover:bg-white/60'
              )}
            >
              <span>{tab.label}</span>
              <span
                className={cn(
                  'ml-2 text-[11px] px-2 py-0.5 rounded-full font-extrabold',
                  isActive ? 'bg-agri-accent text-white' : 'bg-agri-border/60 text-agri-muted'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
