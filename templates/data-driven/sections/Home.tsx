"use client";

import { ProspectData } from "@/lib/prospect-data";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { GradientText } from "@/components/animated/GradientText";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { BentoGrid, BentoItem } from "@/components/animated/BentoGrid";
import { Marquee } from "@/components/animated/Marquee";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { DotPattern } from "@/components/animated/DotPattern";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { Zap, Shield, TrendingUp, Users, Database, Lock } from "lucide-react";

const iconMap = {
  zap: Zap,
  shield: Shield,
  trending: TrendingUp,
  users: Users,
  database: Database,
  lock: Lock,
};

export default function DataDrivenHome({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Dark hero with floating UI */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <DotPattern className="absolute inset-0 opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-bold mb-4">
                <LetterPullUp text={content.company_name} />
              </h1>
              <div className="text-3xl md:text-4xl font-semibold">
                <GradientText text={content.tagline_enhanced || content.tagline} />
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {content.value_prop}
            </p>

            <div className="flex gap-4">
              <ShinyButton
                className="px-8 py-4"
                style={{ backgroundColor: brand.primary_color }}
              >
                {content.cta_text || "Get Started"}
              </ShinyButton>
              <button className="px-8 py-4 border border-gray-600 rounded-lg hover:bg-white/5 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Floating UI mockup placeholder */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${brand.primary_color}20 0%, ${brand.accent_color}20 100%)`
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Dashboard Preview
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700" />
              <div className="absolute -bottom-6 -left-6 w-40 h-24 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-gray-700" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature bento grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center mb-16">
            <GradientText text="Powerful Features" />
          </h2>
        </ScrollReveal>

        <BentoGrid>
          {content.services?.slice(0, 6).map((service, idx) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Zap;
            return (
              <BentoItem
                key={idx}
                className={idx === 0 || idx === 3 ? "md:col-span-2" : ""}
              >
                <div className="p-8 h-full">
                  <IconComponent
                    className="w-12 h-12 mb-4"
                    style={{ color: brand.accent_color }}
                  />
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </BentoItem>
            );
          })}
        </BentoGrid>
      </section>

      {/* Number stats */}
      {content.stats && content.stats.length > 0 && (
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {content.stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ color: brand.accent_color }}>
                    <NumberCounter
                      value={parseInt(stat.value)}
                      suffix={stat.value.replace(/[0-9]/g, '')}
                    />
                  </div>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Social proof marquee */}
      <section className="py-24 border-y border-gray-800">
        <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wide">
          Trusted by leading companies
        </p>
        <Marquee>
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="mx-8 h-16 w-32 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-500"
            >
              Logo {idx + 1}
            </div>
          ))}
        </Marquee>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-6">
              Ready to <GradientText text="Transform" /> Your Business?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of companies already using {content.company_name}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex gap-4 justify-center">
              <ShinyButton
                className="px-10 py-4 text-lg"
                style={{ backgroundColor: brand.primary_color }}
              >
                Start Free Trial
              </ShinyButton>
              <button className="px-10 py-4 text-lg border border-gray-600 rounded-lg hover:bg-white/5 transition-colors">
                Schedule Demo
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
