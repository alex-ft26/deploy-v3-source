"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { GradientText } from "@/components/animated/GradientText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SpotlightCard } from "@/components/animated/SpotlightCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services({ data }: { data: ProspectData }) {
  const { content, brand } = data;
  const services = content.services || [];

  // Mock service benefits/features for each service
  const getServiceFeatures = (idx: number) => [
    "Comprehensive analysis and consultation",
    "Customized solutions for your needs",
    "Ongoing support and maintenance",
    "Proven results and ROI",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <GradientText
            text="Our Services"
            className="text-5xl lg:text-6xl font-bold mb-6"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive solutions designed to meet your unique needs and exceed expectations
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services - Two Column Alternating Layout */}
      {services.length > 0 && (
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              const features = getServiceFeatures(idx);

              return (
                <ScrollReveal key={idx} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                        style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                      >
                        {service.icon && <span>{service.icon}</span>}
                        <span>Service {idx + 1}</span>
                      </div>

                      <h2 className="text-4xl font-bold mb-6 text-gray-900">
                        {service.name}
                      </h2>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-3">
                            <CheckCircle2
                              className="w-6 h-6 flex-shrink-0 mt-0.5"
                              style={{ color: brand.primary_color }}
                            />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button variant="primary" size="lg">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>

                    {/* Visual Side */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <SpotlightCard>
                        <Card className="border-2 overflow-hidden">
                          <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative">
                            {service.icon && (
                              <div
                                className="absolute inset-0 flex items-center justify-center text-9xl opacity-20"
                                style={{ color: brand.primary_color }}
                              >
                                {service.icon}
                              </div>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                              Service Image
                            </div>
                          </div>
                          <CardContent className="p-8 bg-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm text-gray-500 mb-1">Starting at</div>
                                <div className="text-2xl font-bold text-gray-900">Contact for Quote</div>
                              </div>
                              <Button variant="outline">Get Quote</Button>
                            </div>
                          </CardContent>
                        </Card>
                      </SpotlightCard>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 mt-12">
        <ScrollReveal>
          <Card
            className="border-2 p-12 text-center max-w-4xl mx-auto"
            style={{ background: `linear-gradient(135deg, ${brand.primary_color}15, ${brand.secondary_color}15)` }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Not sure which service is right for you?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg">
                {content.cta_text}
              </Button>
              {content.phone && (
                <Button variant="outline" size="lg">
                  Call {content.phone}
                </Button>
              )}
            </div>
          </Card>
        </ScrollReveal>
      </section>
    </main>
  );
}
