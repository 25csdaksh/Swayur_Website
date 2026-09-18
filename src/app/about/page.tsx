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
} from 'lucide-react';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';

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
    },
    {
      title: 'Targeted Biological Protection',
      quote:
        'KshetraPal biopesticides provide effective biological control against soil-borne pathogens and crop insect pests.',
      badge: 'Biological Control',
    },
    {
      title: 'Sustaining Farmer Livelihoods',
      quote:
        'By reducing dependence on expensive chemical inputs, our biological inputs help farmers lower input costs while improving harvest quality.',
      badge: 'Farmer Value',
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

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-agri-pale text-agri-primary text-xs font-bold uppercase tracking-wider border border-agri-accent/20">
              <FlaskConical className="w-3.5 h-3.5 text-agri-accent" />
              <span>Biotechnology & Microbiology Science</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-agri-dark tracking-tight leading-tight">
              Science, Innovation & Practical Agricultural Solutions
            </h2>

            <div className="prose prose-slate max-w-none text-agri-muted leading-relaxed text-base space-y-4 font-normal">
              <p>
                We are Swayur Agrotech LLP— an agricultural biotechnology company Founded in 2026 in Anand, Gujarat with a singular mission: to restore Indian soil to its natural vitality using the power of beneficial microorganisms.
              </p>

              <p>
                Led by Dr. Mayur Joshi, Ph.D. in Microbiology, with 15+ years of industrial experience, Swayur brings expertise in biofertilizers, biopesticides, organic fertilizers, biostimulants, microbial consortia, fermentation technology, and product development.
              </p>

              <p>
                With experience in India and Saudi Arabia, including solutions for arid and challenging agricultural conditions, our expertise also extends to environmental biotechnology, industrial wastewater treatment, microalgae-based technologies, nutrient recovery, and value-added organic fertilizers.
              </p>

              <p className="font-semibold text-agri-dark">
                At Swayur, we combine science, innovation, and practical agricultural solutions to build a healthier and more sustainable future for farming.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <Badge variant="green">FCO 1985 Standard</Badge>
              <Badge variant="gold">Anand, Gujarat Headquarters</Badge>
              <Badge variant="dark">Beneficial Microorganisms</Badge>
            </div>
          </div>

          {/* Founder & Scientific Expertise Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-agri-pale/90 via-white to-emerald-50/50 border-2 border-agri-accent/30 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-agri-border/60 pb-4">
                <Image
                  src="/images/brand/swayur-agrotech-official-logo.png"
                  alt="Swayur Agrotech Logo"
                  width={300}
                  height={120}
                  priority
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Est. 2026
                </span>
              </div>

              {/* Founder Profile Box */}
              <div className="p-4 rounded-2xl bg-white border border-agri-accent/20 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-agri-accent" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-agri-dark">Dr. Mayur Joshi</h4>
                    <span className="text-xs font-semibold text-agri-primary block">
                      Ph.D. in Microbiology
                    </span>
                  </div>
                </div>
                <p className="text-xs text-agri-muted leading-relaxed">
                  15+ years of industrial leadership across India & Saudi Arabia specializing in microbial formulations for arid & challenging conditions.
                </p>
              </div>

              {/* Core Scientific Domains */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-agri-dark flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5 text-agri-accent" />
                  Areas of Industrial Expertise
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {expertiseAreas.map((exp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-agri-border text-[11px] font-semibold text-agri-dark"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brand Tagline */}
              <div className="pt-2 text-xs text-agri-muted italic border-t border-agri-border/60">
                &ldquo;{companyData.tagline}&rdquo;
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* 3. CORPORATE INFORMATION */}
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionHeading
            badge="Corporate Information"
            title="Legal & Registration Information"
            subtitle="Official corporate parameters, GSTIN, LLPIN, registered address, and regulatory compliance details."
          />

          <div className="overflow-hidden border border-agri-border rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-sm border-collapse">
              <tbody className="divide-y divide-agri-border">
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50 w-1/3 sm:w-1/4">
                    Company Name
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-bold">{companyData.name}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Product Brand
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-dark font-semibold">
                    {companyData.brand} ({companyData.brandGujarati}) — &ldquo;Protector of the Field&rdquo;
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Nature of Business
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-dark font-semibold">
                    {companyData.businessNature}
                  </td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    LLP Identification Number
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-agri-dark font-bold">{companyData.llpin}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    GSTIN
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-agri-dark font-bold">{companyData.gstin}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Registered Office
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-muted font-medium">{companyData.address.full}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Contact Phone / WhatsApp
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-bold">{companyData.phone}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Email Address
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-bold">{companyData.email}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Regulatory Compliance
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-semibold">
                    {companyData.regulatoryCompliance.join(' | ')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      {/* 4. COMMITMENT SECTION (Moved from Home Page) */}
      <section className="bg-gradient-to-b from-white via-agri-pale/30 to-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            badge="OUR COMMITMENT"
            title="Designed for Soil, Crops & Farmers"
            subtitle="How KshetraPal biological inputs deliver value across Indian farming systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {commitmentPillars.map((pillar, idx) => (
              <Card
                key={idx}
                className="flex flex-col justify-between space-y-6 p-8 bg-white border-agri-border hover:border-agri-accent/50 transition-all shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-agri-primary px-3 py-1 rounded-md bg-agri-pale border border-agri-accent/20">
                      {pillar.badge}
                    </span>
                    <Quote className="w-8 h-8 text-agri-accent/30" />
                  </div>
                  <h3 className="text-xl font-bold text-agri-dark">{pillar.title}</h3>
                  <p className="text-sm text-agri-muted leading-relaxed font-normal">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-1 text-amber-500 pt-3 border-t border-agri-border/60">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
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
