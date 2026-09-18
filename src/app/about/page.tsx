import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import {
  Microscope,
  Sprout,
  Leaf,
  FlaskConical,
  GraduationCap,
  Globe2,
  Building2,
  MapPin,
  FileText,
  Phone,
  Mail,
  ShieldCheck,
  Quote,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Dna,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: seoData.about.metaTitle,
  description: seoData.about.metaDescription,
};

export default function AboutPage() {
  const commitmentPillars = [
    {
      title: 'Restoring Soil Health',
      quote:
        'Swayur Agrotech biofertilizers activate natural soil microbial communities, restoring nutrient cycling and soil organic matter.',
      badge: 'Soil Microbiome',
      icon: Leaf,
      gradient: 'from-emerald-500/20 to-green-500/5',
      borderColor: 'hover:border-emerald-500/50',
    },
    {
      title: 'Targeted Biological Protection',
      quote:
        'KshetraPal biopesticides provide effective biological control against soil-borne pathogens and crop insect pests.',
      badge: 'Biological Control',
      icon: ShieldCheck,
      gradient: 'from-teal-500/20 to-cyan-500/5',
      borderColor: 'hover:border-teal-500/50',
    },
    {
      title: 'Sustaining Farmer Livelihoods',
      quote:
        'By reducing dependence on expensive chemical inputs, our biological inputs help farmers lower input costs while improving harvest quality.',
      badge: 'Farmer Value',
      icon: Sprout,
      gradient: 'from-amber-500/20 to-emerald-500/5',
      borderColor: 'hover:border-amber-500/50',
    },
  ];

  const expertiseAreas = [
    'Biofertilizers',
    'Biopesticides',
    'Organic Fertilizers',
    'Biostimulants',
    'Microbial Consortia',
    'Fermentation Technology',
    'Product Development',
    'Environmental Biotechnology',
    'Arid Condition Solutions',
    'Nutrient Recovery',
  ];

  const corporateDetails = [
    { label: 'Company Name', value: companyData.name, icon: Building2, highlight: true },
    { label: 'Product Brand', value: `${companyData.brand} (${companyData.brandGujarati}) — "Protector of the Field"`, icon: Sparkles },
    { label: 'Nature of Business', value: companyData.businessNature, icon: FlaskConical, fullWidth: true },
    { label: 'LLPIN', value: companyData.llpin, icon: FileText, mono: true },
    { label: 'GSTIN', value: companyData.gstin, icon: FileText, mono: true },
    { label: 'Registered Office', value: companyData.address.full, icon: MapPin, fullWidth: true },
    { label: 'Contact Phone', value: companyData.phone, icon: Phone },
    { label: 'Email Address', value: companyData.email, icon: Mail },
    { label: 'Regulatory Compliance', value: companyData.regulatoryCompliance.join(' | '), icon: ShieldCheck, fullWidth: true },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Page Header */}
      <PageHeader
        badge="ABOUT SWAYUR AGROTECH"
        title="Who We Are"
        subtitle="Combining science, innovation, and practical agricultural solutions to build a healthier and more sustainable future for farming."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 2. SECTION: WHO WE ARE */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-primary text-xs font-black uppercase tracking-wider border border-agri-accent/30 shadow-2xs">
              <FlaskConical className="w-4 h-4 text-agri-accent" />
              <span>Biotechnology & Microbiology Science</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight leading-tight">
              Science, Innovation & Practical Agricultural Solutions
            </h2>

            <div className="prose prose-slate max-w-none text-agri-muted leading-relaxed text-base space-y-4 font-normal">
              <p className="text-lg text-agri-dark font-medium leading-relaxed">
                We are Swayur Agrotech LLP— an agricultural biotechnology company Founded in 2026 in Anand, Gujarat with a singular mission: to restore Indian soil to its natural vitality using the power of beneficial microorganisms.
              </p>

              <p>
                Led by Dr. Mayur Joshi, Ph.D. in Microbiology, with 15+ years of industrial experience, Swayur brings expertise in biofertilizers, biopesticides, organic fertilizers, biostimulants, microbial consortia, fermentation technology, and product development.
              </p>

              <p>
                With experience in India and Saudi Arabia, including solutions for arid and challenging agricultural conditions, our expertise also extends to environmental biotechnology, industrial wastewater treatment, microalgae-based technologies, nutrient recovery, and value-added organic fertilizers.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border-l-4 border-agri-accent text-agri-dark font-semibold text-base leading-relaxed">
                At Swayur, we combine science, innovation, and practical agricultural solutions to build a healthier and more sustainable future for farming.
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <Badge variant="green" className="py-1 px-3 text-xs">FCO 1985 Standard</Badge>
              <Badge variant="gold" className="py-1 px-3 text-xs">Anand, Gujarat Headquarters</Badge>
              <Badge variant="dark" className="py-1 px-3 text-xs">Beneficial Microorganisms</Badge>
            </div>
          </div>

          {/* Founder & Scientific Expertise Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0F382C] via-[#174E3C] to-[#0A261E] text-white p-6 sm:p-8 shadow-2xl border border-emerald-500/20 space-y-6 overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="p-2 rounded-xl bg-white/95">
                  <Image
                    src="/images/brand/swayur-agrotech-official-logo.png"
                    alt="Swayur Agrotech Logo"
                    width={240}
                    height={90}
                    priority
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  Est. 2026 • Gujarat
                </span>
              </div>

              {/* Founder Profile Box */}
              <div className="relative z-10 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3 shadow-inner">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 border border-emerald-300/30 flex items-center justify-center text-emerald-300 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">Dr. Mayur Joshi</h4>
                    <span className="text-xs font-bold text-emerald-300 block">
                      Ph.D. in Microbiology
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  15+ years of industrial expertise across India & Saudi Arabia specializing in microbial biofertilizers, biopesticides, and resilient crop solutions for arid agro-climatic conditions.
                </p>
              </div>

              {/* Core Scientific Domains */}
              <div className="relative z-10 space-y-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-emerald-400" />
                  Industrial Expertise & Specialization
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {expertiseAreas.map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-slate-200 hover:bg-white/20 transition-colors"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brand Tagline */}
              <div className="relative z-10 pt-2 text-xs text-emerald-200/80 italic font-serif border-t border-white/10">
                &ldquo;{companyData.tagline}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. CORPORATE INFORMATION */}
      <Container>
        <div className="max-w-5xl mx-auto space-y-8">
          <SectionHeading
            badge="Corporate Information"
            title="Legal & Registration Information"
            subtitle="Official corporate parameters, GSTIN, LLPIN, registered address, and regulatory compliance details."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {corporateDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-white border border-agri-border/80 shadow-xs hover:border-agri-accent/40 transition-all ${
                    item.fullWidth ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/20 shrink-0">
                      <Icon className="w-5 h-5 text-agri-accent" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-agri-muted block">
                        {item.label}
                      </span>
                      <div
                        className={`text-sm sm:text-base font-bold text-agri-dark leading-snug break-words ${
                          item.mono ? 'font-mono' : ''
                        } ${item.highlight ? 'text-agri-primary' : ''}`}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* 4. COMMITMENT SECTION (Moved from Home Page) */}
      <section className="bg-gradient-to-b from-white via-agri-pale/40 to-white py-14 sm:py-20 border-y border-agri-border/60">
        <Container>
          <SectionHeading
            badge="OUR COMMITMENT"
            title="Designed for Soil, Crops & Farmers"
            subtitle="How KshetraPal biological inputs deliver value across Indian farming systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {commitmentPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between space-y-6 p-8 bg-white rounded-3xl border border-agri-border shadow-xs hover:shadow-xl ${pillar.borderColor} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-agri-primary px-3 py-1 rounded-xl bg-agri-pale border border-agri-accent/25">
                        <Icon className="w-3.5 h-3.5 text-agri-accent" />
                        {pillar.badge}
                      </span>
                      <Quote className="w-7 h-7 text-agri-accent/30 group-hover:text-agri-accent transition-colors" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-agri-dark tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-agri-muted leading-relaxed font-normal">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-amber-500 pt-4 border-t border-agri-border/60">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2 text-xs font-extrabold text-agri-muted">
                      Proven Field Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. About Page CTA */}
      <CTASection
        title="Building Healthier Soil for a Sustainable Future"
        subtitle="Connect with our agronomy team in Vallabh Vidyanagar, Anand, Gujarat. Get crop recommendations or inquire about dealership opportunities."
      />
    </div>
  );
}
