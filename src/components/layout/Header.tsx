'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/layout/Container';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-agri-border py-2.5 sm:py-3'
          : 'bg-white/90 backdrop-blur-md lg:bg-white/80 border-b border-agri-border/60 py-3 sm:py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4 w-full">
          {/* 1. Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group focus:outline-none py-0.5">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech LLP Logo"
              width={160}
              height={140}
              priority
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
            />
          </Link>

          {/* 2. Desktop Navigation: About | KshetraPal | Solutions | Commitment | Contact */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href.split('#')[0]);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-bold tracking-tight rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-agri-primary bg-agri-pale font-extrabold'
                      : 'text-agri-text hover:text-agri-primary hover:bg-agri-pale/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Side: Dealer Inquiry CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact?inquiry=dealer"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl bg-agri-primary hover:bg-agri-accent text-white text-xs xl:text-sm font-extrabold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Dealer Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-agri-dark hover:bg-agri-pale focus:outline-none border border-agri-border"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white/98 backdrop-blur-xl z-40 border-t border-agri-border flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-2 pt-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-bold text-agri-dark hover:text-agri-primary hover:bg-agri-pale rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-agri-border space-y-3 pb-8">
            <Link
              href="/contact?inquiry=dealer"
              onClick={() => setMobileMenuOpen(false)}
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
      )}
    </header>
  );
};
