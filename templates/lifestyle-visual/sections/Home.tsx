"use client";

import { ProspectData } from "@/lib/prospect-data";
import { GradientText } from "@/components/animated/GradientText";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { SpotlightCard } from "@/components/animated/SpotlightCard";
import { Marquee } from "@/components/animated/Marquee";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { BlurText } from "@/components/animated/BlurText";
import { Sparkles, Star } from "lucide-react";

export default function LifestyleVisualHome({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  return (
    <div className="min-h-screen">
      {/* Full-height hero */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color}15 0%, ${brand.accent_color}10 100%)`
        }}
      >
        <div className="absolute inset-0 bg-[url('/hero-lifestyle.jpg')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-serif mb-6">
            <GradientText text={content.company_name} />
          </h1>
          <BlurText
            text={content.tagline_enhanced || content.tagline}
            className="text-2xl md:text-3xl font-light mb-8 text-gray-600"
          />
          <ShinyButton
            className="px-12 py-4 text-lg"
            style={{ backgroundColor: brand.primary_color }}
          >
            {content.cta_text || "Book Now"}
          </ShinyButton>
        </div>
      </section>

      {/* Service showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-serif text-center mb-16">Our Services</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services?.slice(0, 6).map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <SpotlightCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6" style={{ color: brand.accent_color }} />
                  <h3 className="text-2xl font-serif">{service.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials marquee */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section
          className="py-24"
          style={{ backgroundColor: `${brand.secondary_color}15` }}
        >
          <h2 className="text-4xl font-serif text-center mb-12">Client Love</h2>
          <Marquee>
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className="mx-6 max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
              </div>
            ))}
          </Marquee>
        </section>
      )}

      {/* Instagram-style gallery */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {[...Array(8)].map((_, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: `${brand.primary_color}20` }}
              >
                {/* Placeholder for images */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Image {idx + 1}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-32 px-6 text-center"
        style={{ backgroundColor: brand.accent_color }}
      >
        <ScrollReveal>
          <h2 className="text-5xl font-serif text-white mb-6">Ready to Transform?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {content.value_prop}
          </p>
          <ShinyButton className="bg-white text-gray-900 px-12 py-4 text-lg">
            Book Your Appointment
          </ShinyButton>
        </ScrollReveal>
      </section>
    </div>
  );
}
