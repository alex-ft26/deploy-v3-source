"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { GradientText } from "@/components/animated/GradientText";
import { Separator } from "@/components/ui/separator";

export default function LifestyleVisualServices({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  // Group services by category (simple grouping)
  const groupedServices = content.services?.reduce((acc, service) => {
    const category = service.icon || "Services";
    if (!acc[category]) acc[category] = [];
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof content.services>) || {};

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h1 className="text-6xl md:text-7xl font-serif text-center mb-6">
            <GradientText text="Service Menu" />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Curated experiences designed to enhance your well-being
          </p>
        </ScrollReveal>

        {/* Menu-style pricing layout */}
        {Object.keys(groupedServices).length > 0 ? (
          Object.entries(groupedServices).map(([category, services], catIdx) => (
            <div key={catIdx} className="mb-20">
              <ScrollReveal delay={catIdx * 0.1}>
                <h2 className="text-3xl font-serif mb-8" style={{ color: brand.primary_color }}>
                  {category}
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {services.map((service, idx) => (
                  <ScrollReveal key={idx} delay={catIdx * 0.1 + idx * 0.05}>
                    <div className="group">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-serif flex-1">{service.name}</h3>
                        <div className="flex-shrink-0 text-2xl font-light" style={{ color: brand.accent_color }}>
                          From $99
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <ShinyButton
                        className="text-sm"
                        style={{ backgroundColor: brand.primary_color }}
                      >
                        Book This Service
                      </ShinyButton>

                      {idx < services.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))
        ) : (
          content.services?.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="mb-12">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-serif flex-1">{service.name}</h3>
                  <div className="flex-shrink-0 text-2xl font-light" style={{ color: brand.accent_color }}>
                    From $99
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ShinyButton
                  className="text-sm"
                  style={{ backgroundColor: brand.primary_color }}
                >
                  Book This Service
                </ShinyButton>

                {idx < (content.services?.length || 0) - 1 && (
                  <Separator className="mt-8" />
                )}
              </div>
            </ScrollReveal>
          ))
        )}

        {/* Bottom CTA */}
        <ScrollReveal delay={0.5}>
          <div
            className="mt-24 p-12 rounded-3xl text-center"
            style={{ backgroundColor: `${brand.secondary_color}15` }}
          >
            <h3 className="text-3xl font-serif mb-4">Not Sure Which Service?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss your goals and create a personalized plan
            </p>
            <ShinyButton
              className="px-10 py-3"
              style={{ backgroundColor: brand.primary_color }}
            >
              Schedule Consultation
            </ShinyButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
