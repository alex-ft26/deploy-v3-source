"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { BlurText } from "@/components/animated/BlurText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { Marquee } from "@/components/animated/Marquee";
import { BentoGrid, BentoItem } from "@/components/animated/BentoGrid";
import { GridPattern } from "@/components/animated/GridPattern";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Truck, Award, CheckCircle2 } from "lucide-react";

export default function Home({ data }: { data: ProspectData }) {
  const { brand, content } = data;

  // Parse stats for industrial metrics
  const stats = content.stats || [
    { value: 25, label: "Years Experience" },
    { value: 500, label: "Projects Completed" },
    { value: 50, label: "Fleet Vehicles" },
    { value: 98, label: "Client Satisfaction" },
  ];

  // Key capabilities/certifications
  const capabilities = [
    { icon: Shield, label: "OSHA Certified" },
    { icon: Award, label: "ISO 9001" },
    { icon: Truck, label: "24/7 Dispatch" },
    { icon: CheckCircle2, label: "Insured & Bonded" },
  ];

  return (
    <div className="relative">
      {/* Hero Section with GridPattern background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <GridPattern className="absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-950" />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <ScrollReveal direction="up" distance={30}>
            <BlurText
              text={content.tagline_enhanced || content.tagline || "Industrial Excellence. Delivered."}
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ color: brand.primary_color }}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {content.value_prop}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: brand.accent_color }}
                className="group"
              >
                {content.cta_text || "Request a Quote"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {content.cta_secondary_text && (
                <Button variant="outline" size="lg">
                  {content.cta_secondary_text}
                </Button>
              )}
            </div>
          </ScrollReveal>

          {/* Capability Badges Row */}
          <ScrollReveal delay={0.6} direction="up">
            <div className="flex flex-wrap gap-4 justify-center mt-12">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="px-4 py-2 text-sm font-semibold flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" style={{ color: brand.accent_color }} />
                    {cap.label}
                  </Badge>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services in Asymmetric BentoGrid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-center mb-4">Our Capabilities</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Comprehensive solutions for your industrial needs
            </p>
          </ScrollReveal>

          <BentoGrid className="max-w-7xl mx-auto">
            {content.services.slice(0, 6).map((service, idx) => {
              // Create asymmetric layout: first card spans 2 columns, then alternating
              const span = idx === 0 ? "md:col-span-2" : idx % 3 === 1 ? "md:col-span-2" : "";

              return (
                <BentoItem
                  key={idx}
                  className={span}
                  style={{ borderColor: brand.primary_color + "20" }}
                >
                  <div className="p-6 h-full flex flex-col">
                    {service.icon && (
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    )}
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: brand.primary_color }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 flex-grow">
                      {service.description}
                    </p>
                  </div>
                </BentoItem>
              );
            })}
          </BentoGrid>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="text-center">
                  <div
                    className="text-5xl md:text-6xl font-bold mb-2"
                    style={{ color: brand.accent_color }}
                  >
                    <NumberCounter
                      value={Number(stat.value)}
                      suffix={stat.label.includes("%") || stat.label.includes("Satisfaction") ? "%" : "+"}
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">
              Trusted by Industry Leaders
            </h3>
            <Marquee className="py-8">
              {content.testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="mx-8 px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: brand.accent_color }}
      >
        <GridPattern className="absolute inset-0 opacity-10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Request a quote today and experience the difference of working with industry professionals.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
