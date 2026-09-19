import { companyData } from '@/data/company';

export interface NavDropdownItem {
  name: string;
  href: string;
  category?: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const siteConfig = {
  name: companyData.name,
  brandName: `${companyData.brand} (${companyData.brandGujarati})`,
  tagline: companyData.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://swayuragrotech.com',
  ogImage: '/images/brand/og-image.jpg',
  description:
    'Swayur Agrotech LLP — Agricultural Biotechnology company in Gujarat manufacturing KshetraPal biofertilizers, biopesticides, and microbial crop solutions for sustainable soil vitality.',
  navLinks: [
    { name: 'About', href: '/about' },
    {
      name: 'KshetraPal',
      href: '/products',
      dropdown: [
        { name: 'Bio-NPK Consortia', href: '/products/bio-npk-consortia', category: 'Biofertilizer (500 ml)' },
        { name: 'Bio-ZSB', href: '/products/bio-zsb', category: 'Biofertilizer (500 ml)' },
        { name: 'Mycorrhiza', href: '/products/mycorrhiza', category: 'Biofertilizer (500 gm)' },
        { name: 'Trichoderma viride', href: '/products/trichoderma-viride', category: 'Biopesticide (500 ml)' },
        { name: 'Beauveria bassiana', href: '/products/beauveria-bassiana', category: 'Biopesticide (500 ml)' },
        { name: 'Pseudomonas fluorescens', href: '/products/pseudomonas-fluorescens', category: 'Biocontrol (500 ml)' },
      ],
    },
    { name: 'Solutions', href: '/crop-solutions' },
    { name: 'Commitment', href: '/about#commitment' },
    { name: 'Contact', href: '/contact' },
  ],
  dealerCta: {
    name: 'Dealer Inquiry',
    href: '/contact?inquiry=dealer',
  },
  whatsappUrl: `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Swayur Agrotech, I would like to inquire about KshetraPal products and dealership.'
  )}`,
};
