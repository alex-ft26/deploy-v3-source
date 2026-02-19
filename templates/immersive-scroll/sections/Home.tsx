"use client";

import { ProspectData } from "@/lib/prospect-data";
import { SplitText } from "@/components/animated/SplitText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GradientText } from "@/components/animated/GradientText";
import { Marquee } from "@/components/animated/Marquee";
import { DotPattern } from "@/components/animated/DotPattern";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface HomeProps {
  data: ProspectData;
}

export default function Home({ data }: HomeProps) {
  const { brand, content } = data;

  return (
    <div className="overflow-hidden">
      {/* Full-viewport hero with dramatic SplitText */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <DotPattern className="absolute inset-0 opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <SplitText
              text={content.tagline_enhanced || content.tagline}
              className="text-6xl md:text-8xl font-bold leading-tight"
              style={{ color: brand.primary_color }}
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {content.value_prop}
          </p>
          <ShinyButton
            size="lg"
            style={{ backgroundColor: brand.accent_color }}
          >
            {content.cta_text}
            <ArrowRight className="ml-2 w-5 h-5" />
          </ShinyButton>
        </div>
      </section>

      {/* Scroll-triggered service reveals - alternating directions */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-48">
          {content.services.map((service, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              distance={100}
              delay={0.1}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3
                    className="text-5xl md:text-6xl font-bold mb-6"
                    style={{ color: brand.primary_color }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div
                  className="flex-1 aspect-square rounded-3xl"
                  style={{
                    backgroundColor: `${brand.secondary_color}20`,
                    border: `2px solid ${brand.secondary_color}`,
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats section with parallax feel */}
      {content.stats && content.stats.length > 0 && (
        <section className="relative py-32 px-6">
          <DotPattern className="absolute inset-0 opacity-10" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {content.stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div
                      className="text-6xl font-bold mb-2"
                      style={{ color: brand.accent_color }}
                    >
                      <NumberCounter
                        value={parseInt(stat.value.replace(/\D/g, "")) || 0}
                        suffix={stat.value.replace(/\d/g, "")}
                      />
                    </div>
                    <p className="text-gray-600 text-lg">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social proof with Marquee */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-32 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-center mb-4">
              <GradientText text="What Our Clients Say" />
            </h2>
          </div>
          <Marquee className="py-8">
            {content.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="mx-6 p-8 bg-white rounded-2xl shadow-lg max-w-md"
                style={{ borderTop: `4px solid ${brand.accent_color}` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: brand.accent_color }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                )}
              </div>
            ))}
          </Marquee>
        </section>
      )}

      {/* Large CTA section */}
      <section
        className="relative py-48 px-6 text-white"
        style={{ backgroundColor: brand.primary_color }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <GradientText
              text={content.cta_text}
              className="text-white"
            />
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            {content.cta_secondary_text || "Get started today"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
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
        </div>
      </section>
    </div>
  );
}
