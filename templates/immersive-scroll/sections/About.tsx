"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { BlurText } from "@/components/animated/BlurText";
import { Marquee } from "@/components/animated/Marquee";
import { GridPattern } from "@/components/animated/GridPattern";
import { Users, Target, Award, Heart } from "lucide-react";

interface AboutProps {
  data: ProspectData;
}

export default function About({ data }: AboutProps) {
  const { brand, content } = data;

  const brandValues = [
    { icon: Target, title: "Our Mission", description: "Delivering excellence in every interaction" },
    { icon: Users, title: "Our Team", description: "Passionate professionals dedicated to your success" },
    { icon: Award, title: "Our Quality", description: "Uncompromising standards and attention to detail" },
    { icon: Heart, title: "Our Values", description: "Integrity, innovation, and customer-first approach" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Full-width story hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <GridPattern className="absolute inset-0 opacity-10" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h1
              className="text-7xl md:text-8xl font-bold mb-12"
              style={{ color: brand.primary_color }}
            >
              <BlurText text={`About ${content.company_name}`} />
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
              {content.about_snippet}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand story sections */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          <ScrollReveal direction="left">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: brand.primary_color }}
                >
                  Our Story
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded with a vision to transform the industry, {content.company_name} has
                  grown from a small team with big dreams to a trusted partner for businesses
                  across the region. Our journey is defined by innovation, dedication, and an
                  unwavering commitment to excellence.
                </p>
              </div>
              <div
                className="aspect-square rounded-3xl"
                style={{
                  backgroundColor: `${brand.secondary_color}30`,
                  border: `3px solid ${brand.secondary_color}`,
                }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="aspect-square rounded-3xl order-2 md:order-1"
                style={{
                  backgroundColor: `${brand.accent_color}30`,
                  border: `3px solid ${brand.accent_color}`,
                }}
              />
              <div className="order-1 md:order-2">
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: brand.primary_color }}
                >
                  Why Choose Us
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {content.value_prop} We combine industry expertise with cutting-edge
                  solutions to deliver results that exceed expectations. Every project is an
                  opportunity to showcase our commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand values with large typography */}
      <section
        className="py-32 px-6 text-white"
        style={{ backgroundColor: brand.primary_color }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-6xl md:text-7xl font-bold text-center mb-24">
              What Drives Us
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {brandValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <value.icon
                    className="w-16 h-16 mx-auto mb-6"
                    style={{ color: brand.accent_color }}
                  />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-lg opacity-90">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team in horizontal scrolling Marquee */}
      {content.team && content.team.length > 0 && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto mb-16">
            <ScrollReveal>
              <h2
                className="text-6xl font-bold text-center mb-4"
                style={{ color: brand.primary_color }}
              >
                Meet The Team
              </h2>
              <p className="text-xl text-gray-600 text-center">
                The talented people behind {content.company_name}
              </p>
            </ScrollReveal>
          </div>
          <Marquee className="py-8">
            {content.team.map((member, index) => (
              <div key={index} className="mx-6">
                <div
                  className="w-64 h-64 rounded-2xl mb-4"
                  style={{
                    backgroundColor: `${brand.secondary_color}40`,
                    border: `2px solid ${brand.secondary_color}`,
                  }}
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                {member.role && (
                  <p className="text-gray-600">{member.role}</p>
                )}
              </div>
            ))}
          </Marquee>
        </section>
      )}
    </div>
  );
}
