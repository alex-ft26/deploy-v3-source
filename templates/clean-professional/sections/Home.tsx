"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { BlurText } from "@/components/animated/BlurText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GlowCard } from "@/components/animated/GlowCard";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function Home({ data }: { data: ProspectData }) {
  const { content, brand } = data;
  const services = content.services?.slice(0, 3) || [];
  const stats = content.stats?.slice(0, 4) || [];
  const testimonials = content.testimonials?.slice(0, 2) || [];
  const team = content.team?.slice(0, 3) || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Two Column */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <BlurText
              text={content.tagline_enhanced || content.tagline}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {content.value_prop}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  {content.cta_text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {content.cta_secondary_text && (
                  <Button variant="outline" size="lg">
                    {content.cta_secondary_text}
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} direction="right">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
              {brand.logo_url && (
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <img
                    src={brand.logo_url}
                    alt={content.company_name}
                    className="max-w-full max-h-full object-contain opacity-10"
                  />
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg font-medium">
                Hero Image Placeholder
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      {services.length > 0 && (
        <section className="container mx-auto px-6 py-20 bg-white">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <GlowCard>
                  <Card className="h-full border-2 hover:border-gray-300 transition-all">
                    <CardContent className="p-8">
                      {service.icon && (
                        <div
                          className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-2xl"
                          style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                        >
                          {service.icon}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Team Preview */}
      {team.length > 0 && (
        <section className="container mx-auto px-6 py-20 bg-gray-50">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="overflow-hidden border-2 hover:shadow-xl transition-all">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                        Photo
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Stats Section */}
      {stats.length > 0 && (
        <section
          className="py-20"
          style={{ backgroundColor: `${brand.primary_color}10` }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: brand.primary_color }}>
                      <NumberCounter value={parseInt(stat.value) || 0} />
                      {stat.value.replace(/[0-9]/g, '')}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              What Our Clients Say
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="border-2 p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
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

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(135deg, ${brand.primary_color}, ${brand.secondary_color})` }}
      >
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how we can help you achieve your goals.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              {content.cta_text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
