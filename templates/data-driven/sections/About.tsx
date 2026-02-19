"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { TiltCard } from "@/components/animated/TiltCard";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { GradientText } from "@/components/animated/GradientText";
import { GridPattern } from "@/components/animated/GridPattern";
import { Target, Rocket, Users as UsersIcon } from "lucide-react";

export default function DataDrivenAbout({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  const timeline = [
    { year: "2020", title: "Founded", description: "Started with a vision to transform the industry" },
    { year: "2022", title: "Series A", description: "Raised $10M to scale our platform" },
    { year: "2024", title: "Growth", description: "Reached 10,000+ customers worldwide" },
    { year: "2026", title: "Today", description: "Leading innovation in our space" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6">
      {/* Mission section */}
      <section className="max-w-6xl mx-auto mb-32">
        <ScrollReveal>
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Our <GradientText text="Mission" />
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2}>
            <p className="text-2xl leading-relaxed text-gray-300">
              {content.about_snippet || `${content.company_name} is on a mission to revolutionize how businesses operate. We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real results.`}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="relative">
              <GridPattern className="absolute inset-0 opacity-20" />
              <div className="relative p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 flex-shrink-0" style={{ color: brand.accent_color }} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vision</h3>
                    <p className="text-gray-400">Building the future of {content.tagline?.toLowerCase()}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Rocket className="w-8 h-8 flex-shrink-0" style={{ color: brand.accent_color }} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-400">Pushing boundaries with cutting-edge technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <UsersIcon className="w-8 h-8 flex-shrink-0" style={{ color: brand.accent_color }} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                    <p className="text-gray-400">Your success is our success</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto mb-32">
        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center mb-16">Our Journey</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8">
          {timeline.map((milestone, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="relative">
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ color: brand.accent_color }}
                >
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
                {idx < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Key metrics dashboard */}
      <section
        className="py-24 px-8 rounded-3xl max-w-7xl mx-auto mb-32"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color}15 0%, ${brand.accent_color}10 100%)`,
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {(content.stats && content.stats.length > 0 ? content.stats : [
            { value: "99.9%", label: "Uptime" },
            { value: "10K+", label: "Active Users" },
            { value: "150+", label: "Countries" },
          ]).map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-gray-800">
                <div className="text-6xl font-bold mb-3" style={{ color: brand.accent_color }}>
                  {stat.value.match(/\d+/) ? (
                    <NumberCounter
                      value={parseInt(stat.value)}
                      suffix={stat.value.replace(/[0-9]/g, '')}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="text-xl text-gray-400">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team grid */}
      {content.team && content.team.length > 0 && (
        <section className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-center mb-16">
              Meet The <GradientText text="Team" />
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {content.team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <TiltCard>
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
                    <div
                      className="aspect-square"
                      style={{ backgroundColor: `${brand.primary_color}20` }}
                    >
                      {member.image_url ? (
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-600">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      {member.role && <p className="text-gray-400">{member.role}</p>}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
