"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GradientText } from "@/components/animated/GradientText";
import { BentoGrid, BentoItem } from "@/components/animated/BentoGrid";
import { Heart, Target, Award, Users, Zap, Shield } from "lucide-react";

interface AboutProps {
  data: ProspectData;
}

export default function About({ data }: AboutProps) {
  const { brand, content } = data;

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Building lasting relationships and supporting each other's growth",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on helping you achieve your personal goals",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do",
    },
    {
      icon: Users,
      title: "Inclusive",
      description: "Welcoming everyone regardless of experience level",
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Bringing enthusiasm and positivity to every session",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Creating a secure and supportive environment",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="py-32 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color} 0%, ${brand.secondary_color} 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <GradientText
                text={`Our Story`}
                className="text-white"
              />
            </h1>
            <p className="text-2xl md:text-3xl leading-relaxed">
              {content.about_snippet}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Community story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal direction="left">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: brand.primary_color }}
                >
                  Where It All Began
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {content.company_name} was founded with a simple mission: to create a space
                  where everyone feels welcome, supported, and empowered to reach their full
                  potential. What started as a small group of passionate individuals has grown
                  into a thriving community.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Today, we're proud to serve thousands of members who have become like family.
                  Every day, we're inspired by their dedication, progress, and the positive
                  energy they bring to our space.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="aspect-square rounded-3xl"
                style={{
                  backgroundColor: `${brand.secondary_color}40`,
                  border: `3px solid ${brand.secondary_color}`,
                }}
              />
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div
                className="aspect-square rounded-3xl"
                style={{
                  backgroundColor: `${brand.accent_color}30`,
                  border: `3px solid ${brand.accent_color}`,
                }}
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2
                  className="text-5xl font-bold mb-6"
                  style={{ color: brand.primary_color }}
                >
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {content.value_prop} We believe that when you're part of a supportive
                  community, amazing things happen. Our mission is to provide the best
                  experience, expert guidance, and a welcoming environment where you can
                  thrive and achieve your goals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: `${brand.secondary_color}15` }}
      >
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div
                className="w-32 h-32 rounded-full mx-auto mb-6"
                style={{
                  backgroundColor: `${brand.primary_color}40`,
                  border: `4px solid ${brand.primary_color}`,
                }}
              />
              <h3 className="text-3xl font-bold mb-2">From Our Founder</h3>
              <p className="text-gray-600">A personal message</p>
            </div>
            <blockquote className="text-xl text-gray-700 leading-relaxed italic text-center">
              "When I founded {content.company_name}, I envisioned a place where people could
              come together, support one another, and grow. Seeing our community flourish and
              watching members achieve their dreams has been the most rewarding experience of
              my life. Thank you for being part of this incredible journey."
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Values with icon grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-5xl font-bold text-center mb-4"
              style={{ color: brand.primary_color }}
            >
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              The principles that guide everything we do
            </p>
          </ScrollReveal>

          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <BentoItem>
                  <div className="p-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${brand.accent_color}20` }}
                    >
                      <value.icon
                        className="w-8 h-8"
                        style={{ color: brand.accent_color }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </BentoItem>
              </ScrollReveal>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-5xl font-bold text-center mb-4"
              style={{ color: brand.primary_color }}
            >
              Community Moments
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Capturing the energy and joy of our members
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div
                  className="aspect-square rounded-2xl"
                  style={{
                    backgroundColor: `${brand.secondary_color}${30 + index * 5}`,
                    border: `2px solid ${brand.secondary_color}`,
                  }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership/visit stats */}
      {content.stats && content.stats.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2
                className="text-5xl font-bold text-center mb-16"
                style={{ color: brand.primary_color }}
              >
                By The Numbers
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {content.stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div
                      className="text-5xl md:text-6xl font-bold mb-2"
                      style={{ color: brand.accent_color }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-lg text-gray-600">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
