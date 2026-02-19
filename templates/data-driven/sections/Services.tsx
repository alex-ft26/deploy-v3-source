"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SpotlightCard } from "@/components/animated/SpotlightCard";
import { GradientText } from "@/components/animated/GradientText";
import { BlurText } from "@/components/animated/BlurText";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, TrendingUp, Database, Lock, Globe } from "lucide-react";

const iconMap = {
  zap: Zap,
  shield: Shield,
  trending: TrendingUp,
  database: Database,
  lock: Lock,
  globe: Globe,
};

export default function DataDrivenServices({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  const integrations = [
    "Stripe", "Salesforce", "HubSpot", "Slack", "Microsoft", "Google",
    "AWS", "Azure", "GitHub", "Jira", "Asana", "Zoom"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-24">
        <ScrollReveal>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <GradientText text="Features & Services" />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <BlurText
            text="Everything you need to scale your business"
            className="text-2xl text-gray-400"
          />
        </ScrollReveal>
      </section>

      {/* Feature comparison-style layout */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services?.map((service, idx) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Zap;

            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <SpotlightCard className="h-full">
                  <div className="bg-slate-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${brand.primary_color}30 0%, ${brand.accent_color}30 100%)`
                      }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: brand.accent_color }} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="space-y-2 border-t border-gray-800 pt-6">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4" style={{ color: brand.accent_color }} />
                        <span>Real-time sync</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4" style={{ color: brand.accent_color }} />
                        <span>Advanced analytics</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4" style={{ color: brand.accent_color }} />
                        <span>24/7 support</span>
                      </div>
                    </div>

                    <button
                      className="mt-6 w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: brand.primary_color }}
                    >
                      Learn More
                    </button>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Integration logos */}
      <section
        className="py-24 px-8 rounded-3xl max-w-7xl mx-auto"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color}10 0%, ${brand.accent_color}05 100%)`,
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-6">
            Seamless <GradientText text="Integrations" />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Connect with the tools you already use
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {integrations.map((integration, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="aspect-square rounded-xl bg-slate-900/50 backdrop-blur-sm border border-gray-800 flex items-center justify-center hover:border-gray-600 transition-colors">
                <span className="text-sm text-gray-400 font-medium">{integration}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center mt-32">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-gray-800 mb-6">
            <Badge variant="secondary" style={{ backgroundColor: brand.accent_color }}>
              New
            </Badge>
            <span className="text-sm text-gray-400">Enterprise features now available</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of companies transforming their business
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex gap-4 justify-center">
            <button
              className="px-10 py-4 text-lg rounded-lg font-semibold"
              style={{ backgroundColor: brand.primary_color }}
            >
              Start Free Trial
            </button>
            <button className="px-10 py-4 text-lg border border-gray-600 rounded-lg hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
