"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SpotlightCard } from "@/components/animated/SpotlightCard";
import { GradientText } from "@/components/animated/GradientText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone } from "lucide-react";

export default function Services({ data }: { data: ProspectData }) {
  const { brand, content } = data;

  // Group services by category for capability matrix
  // In a real app, this would come from data, here we'll simulate grouping
  const serviceCategories = [
    {
      category: "Commercial",
      description: "Enterprise-grade solutions for commercial operations",
      services: content.services.slice(0, Math.ceil(content.services.length / 3)),
    },
    {
      category: "Industrial",
      description: "Heavy-duty capabilities for industrial applications",
      services: content.services.slice(
        Math.ceil(content.services.length / 3),
        Math.ceil((content.services.length * 2) / 3)
      ),
    },
    {
      category: "Specialized",
      description: "Custom solutions for unique requirements",
      services: content.services.slice(Math.ceil((content.services.length * 2) / 3)),
    },
  ].filter(cat => cat.services.length > 0);

  // Service specs/details (simulated - in real app would come from data)
  const getServiceSpecs = (serviceName: string) => {
    return [
      "Industry-leading equipment",
      "Certified professionals",
      "24/7 availability",
      "Competitive pricing",
    ];
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <GradientText
              text="Our Capabilities"
              className="text-5xl md:text-6xl font-bold mb-6"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive industrial solutions backed by decades of experience and cutting-edge equipment
            </p>
          </ScrollReveal>
        </div>

        {/* Capability Matrix by Category */}
        {serviceCategories.map((category, catIdx) => (
          <section key={catIdx} className="mb-20">
            <ScrollReveal direction="up">
              <div className="mb-8">
                <Badge
                  variant="outline"
                  className="mb-3 px-4 py-1 text-base font-semibold"
                  style={{ borderColor: brand.accent_color, color: brand.accent_color }}
                >
                  {category.category}
                </Badge>
                <h2 className="text-3xl font-bold mb-2" style={{ color: brand.primary_color }}>
                  {category.category} Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                  {category.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <SpotlightCard className="h-full p-6 flex flex-col">
                    {/* Service Icon */}
                    {service.icon && (
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                    )}

                    {/* Service Title */}
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: brand.primary_color }}
                    >
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Service Specs */}
                    <div className="mb-4 space-y-2">
                      {getServiceSpecs(service.name).map((spec, specIdx) => (
                        <div key={specIdx} className="flex items-start gap-2 text-sm">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: brand.accent_color }}
                          />
                          <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Request Quote Button */}
                    <Button
                      variant="outline"
                      className="w-full group"
                      style={{ borderColor: brand.accent_color, color: brand.accent_color }}
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA Section */}
        <section className="mt-20 text-center">
          <ScrollReveal direction="up">
            <div
              className="p-12 rounded-2xl"
              style={{ backgroundColor: brand.primary_color + "10" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See What You Need?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                We specialize in custom solutions. Contact us to discuss your specific requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  style={{ backgroundColor: brand.accent_color }}
                  className="group"
                >
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {content.phone && (
                  <Button variant="outline" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Call {content.phone}
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
