"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { SplitText } from "@/components/animated/SplitText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { BentoGrid, BentoItem } from "@/components/animated/BentoGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Shield, Award, CheckCircle2, Star, AlertCircle } from "lucide-react";

export default function Home({ data }: { data: ProspectData }) {
  const { content, brand } = data;
  const services = content.services?.slice(0, 6) || [];
  const stats = content.stats || [
    { value: "15+", label: "Years in Business" },
    { value: "5000+", label: "Jobs Completed" },
    { value: "100%", label: "Satisfaction Rate" },
  ];
  const testimonials = content.testimonials?.slice(0, 3) || [];

  // Trust badges for local service businesses
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Award, text: "Certified Professionals" },
    { icon: CheckCircle2, text: "Satisfaction Guaranteed" },
    { icon: Clock, text: "24/7 Emergency Service" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Bold Hero with Emergency CTA */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${brand.primary_color}, ${brand.secondary_color})` }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm font-bold px-4 py-2">
              TRUSTED LOCAL EXPERTS
            </Badge>

            <SplitText
              text={content.tagline_enhanced || content.tagline}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            />

            <ScrollReveal delay={0.2}>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                {content.value_prop}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={`tel:${content.phone || ""}`} className="block">
                  <ShinyButton className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl">
                    <Phone className="mr-2 h-6 w-6" />
                    CALL NOW: {content.phone || "(555) 123-4567"}
                  </ShinyButton>
                </a>
                <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg">
                  {content.cta_secondary_text || "Get Free Quote"}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-2 text-white/90">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Available 24/7 for Emergency Service</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-6 py-12 -mt-8 relative z-20">
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustBadges.map((badge, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                    >
                      <badge.icon className="w-7 h-7" />
                    </div>
                    <span className="font-bold text-sm text-gray-900">
                      {badge.text}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Services Grid with Icons */}
      {services.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional solutions you can trust
            </p>
          </ScrollReveal>

          <BentoGrid className="max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <BentoItem key={idx} className="p-6 hover:shadow-lg transition-all border-2">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                >
                  {service.icon || "🔧"}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  style={{ borderColor: brand.primary_color, color: brand.primary_color }}
                >
                  Learn More
                </Button>
              </BentoItem>
            ))}
          </BentoGrid>
        </section>
      )}

      {/* Stats Section */}
      <section
        className="py-20"
        style={{ backgroundColor: `${brand.primary_color}15` }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="border-2 p-8 text-center bg-white">
                  <div className="text-5xl font-bold mb-2" style={{ color: brand.primary_color }}>
                    <NumberCounter value={parseInt(stat.value) || 0} />
                    {stat.value.replace(/[0-9]/g, '')}
                  </div>
                  <div className="text-gray-600 font-bold uppercase text-sm tracking-wide">
                    {stat.label}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Review Testimonials */}
      {testimonials.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Don&apos;t just take our word for it
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="border-2 p-6 h-full">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-auto">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    {testimonial.role && (
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    )}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Service Area Mention */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Proudly Serving Your Community
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide professional service throughout the local area and surrounding communities. Fast response times, local expertise.
            </p>
            <Badge
              className="text-sm px-4 py-2"
              style={{ backgroundColor: brand.primary_color, color: 'white' }}
            >
              Locally Owned & Operated
            </Badge>
          </div>
        </ScrollReveal>
      </section>

      {/* Bottom CTA with Phone */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${brand.primary_color}, ${brand.secondary_color})` }}
      >
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Need Service Today?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is ready to help. Call now for fast, reliable service.
            </p>
            <a href={`tel:${content.phone || ""}`} className="inline-block">
              <ShinyButton className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-10 py-6 rounded-xl shadow-2xl">
                <Phone className="mr-2 h-6 w-6" />
                {content.phone || "(555) 123-4567"}
              </ShinyButton>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
