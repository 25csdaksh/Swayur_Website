'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, NavLinkItem, NavDropdownItem } from '@/config/site';
import { companyData } from '@/data/company';
import { Badge } from '@/components/ui/Badge';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-agri-border bg-white">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <Image
            src="/images/brand/swayur-agrotech-official-logo.png"
            alt="Swayur Agrotech"
            width={160}
            height={140}
            className="h-11 sm:h-12 w-auto object-contain"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close mobile navigation menu"
          className="p-2 rounded-xl text-agri-dark hover:bg-agri-pale focus:outline-none border border-agri-border"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
        {siteConfig.navLinks.map((link: NavLinkItem) => {
          const isActive = pathname === link.href;

          if (link.dropdown) {
            return (
              <div key={link.name} className="border-b border-agri-border/60 pb-3">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full py-2.5 text-base font-extrabold text-agri-dark text-left"
                >
                  <span className={isActive ? 'text-agri-primary' : ''}>KshetraPal Range (6)</span>
                  <ChevronDown
                    className={`w-5 h-5 text-agri-muted transition-transform ${
                      productsOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="mt-2 pl-3 space-y-2 border-l-2 border-agri-accent/40">
                    <Link
                      href="/products"
                      onClick={onClose}
                      className="block py-1.5 text-xs font-black uppercase tracking-wider text-agri-primary hover:text-agri-accent"
                    >
                      View All Products →
                    </Link>
                    {link.dropdown.map((prod: NavDropdownItem) => (
                      <Link
                        key={prod.href}
                        href={prod.href}
                        onClick={onClose}
                        className={`flex items-center justify-between py-2 text-sm font-bold ${
                          pathname === prod.href
                            ? 'text-agri-primary'
                            : 'text-agri-dark hover:text-agri-primary'
                        }`}
                      >
                        <span>{prod.name}</span>
                        {prod.category && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-agri-pale text-agri-muted">
                            {prod.category}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`block py-3 text-base font-extrabold border-b border-agri-border/60 transition-colors ${
                isActive ? 'text-agri-primary' : 'text-agri-dark hover:text-agri-primary'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Footer / CTA Actions */}
      <div className="p-6 bg-agri-pale/60 border-t border-agri-border space-y-3">
        <Link
          href="/contact?inquiry=dealer"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-agri-primary text-white font-extrabold text-sm shadow-md"
        >
          <span>Dealer Inquiry</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Advisory</span>
        </a>
      </div>
    </div>
  );
};
