"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { Separator } from "@/components/ui/separator";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  data: ProspectData;
}

export default function Services({ data }: ServicesProps) {
  const { brand, content } = data;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-8">
            <LetterPullUp
              text="Our Services"
              style={{ color: brand.primary_color }}
            />
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            {content.value_prop}
          </p>
        </div>
      </section>

      {/* Each service is a full-width section with alternating bg */}
      {content.services.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-white" : "bg-gray-50";
        const direction = isEven ? "left" : "right";

        return (
          <div key={index}>
            <section className={`py-32 px-6 ${bgColor}`}>
              <div className="max-w-7xl mx-auto">
                <ScrollReveal direction={direction} distance={100}>
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={isEven ? "order-1" : "order-2"}>
                      <h2
                        className="text-6xl md:text-7xl font-bold mb-8"
                        style={{ color: brand.primary_color }}
                      >
                        {service.name}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                          <Check
                            className="w-6 h-6 mt-1 flex-shrink-0"
                            style={{ color: brand.accent_color }}
                          />
                          <span className="text-lg">Expert implementation and support</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check
                            className="w-6 h-6 mt-1 flex-shrink-0"
                            style={{ color: brand.accent_color }}
                          />
                          <span className="text-lg">Tailored to your specific needs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check
                            className="w-6 h-6 mt-1 flex-shrink-0"
                            style={{ color: brand.accent_color }}
                          />
                          <span className="text-lg">Proven results and ROI</span>
                        </li>
                      </ul>
                      <Button
                        size="lg"
                        style={{ backgroundColor: brand.accent_color }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                    <div className={isEven ? "order-2" : "order-1"}>
                      <div
                        className="aspect-square rounded-3xl"
                        style={{
                          backgroundColor: `${brand.secondary_color}30`,
                          border: `4px solid ${brand.secondary_color}`,
                        }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
            {index < content.services.length - 1 && (
              <Separator className="max-w-7xl mx-auto" />
            )}
          </div>
        );
      })}

      {/* CTA section */}
      <section
        className="py-32 px-6 text-white"
        style={{ backgroundColor: brand.primary_color }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-6xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              Let's discuss how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                {content.cta_text}
              </Button>
              {content.phone && (
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
                >
                  Call {content.phone}
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
