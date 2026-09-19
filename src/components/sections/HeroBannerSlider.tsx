'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';

const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: 'https://facebook.com',
    bg: 'bg-[#1877F2] hover:bg-[#166fe5]',
  },
  {
    name: 'YouTube',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: 'https://youtube.com',
    bg: 'bg-[#FF0000] hover:bg-[#e60000]',
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.677.15-.2.301-.777.979-.953 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.897-.798-1.502-1.784-1.678-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.677-1.633-.928-2.237-.245-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.377s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.151.201 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.722.23 1.379.197 1.898.12.578-.087 1.782-.728 2.033-1.432.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.351zM12.042 21.944C6.559 21.944 2.083 17.469 2.083 12S6.559 2.056 12.042 2.056 22 6.531 22 12c0 5.469-4.476 9.944-9.958 9.944zm0-21.944C5.434 0 0 5.434 0 12c0 2.106.549 4.088 1.509 5.819L0 24l6.355-1.464C8.038 23.473 9.988 24 12.042 24 18.65 24 24 18.566 24 12S18.65 0 12.042 0z" />
      </svg>
    ),
    href: `https://wa.me/91${companyData.phone.replace(/[^0-9]/g, '')}`,
    bg: 'bg-[#25D366] hover:bg-[#20bd5a]',
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: 'https://instagram.com',
    bg: 'bg-[#E1306C] hover:bg-[#c9245c]',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    href: 'https://linkedin.com',
    bg: 'bg-[#0A66C2] hover:bg-[#084e96]',
  },
  {
    name: 'Twitter',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: 'https://twitter.com',
    bg: 'bg-[#1DA1F2] hover:bg-[#0c85d0]',
  },
];

export const HeroBannerSlider: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-agri-pale/40 via-white to-agri-pale/20 py-4 sm:py-6 lg:py-8 border-b border-agri-border/70 select-none">
      <Container>
        <div className="relative max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-agri-border/90 bg-white">
          {/* 1. Left Floating Social Bar */}
          <div className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                aria-label={social.name}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white ${social.bg} shadow-md flex items-center justify-center transition-all duration-200 hover:scale-115 hover:shadow-emerald-500/30 border border-white/40`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* 2. Scaled & Compact Single Hero Banner (Sleek Height) */}
          <div className="relative w-full aspect-[16/9] max-h-[340px] sm:max-h-[400px] md:max-h-[460px] lg:max-h-[500px]">
            <Image
              src="/images/slider/swayur-hero-banner.jpg"
              alt="Swayur Agrotech LLP - Revitalising Soil. Empowering Farmers. Sustaining Life. KshetraPal 6-Product Biological Suite"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover object-center w-full h-full"
            />

            {/* Clickable Overlay Link covering the banner */}
            <Link
              href="/products"
              className="absolute inset-0 z-20 focus:outline-none"
              aria-label="Explore KshetraPal Biological Products"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
