"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GlowCard } from "@/components/animated/GlowCard";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Award, Users, Wrench, CheckCircle, TrendingUp } from "lucide-react";

export default function About({ data }: { data: ProspectData }) {
  const { brand, content } = data;

  // Company timeline milestones
  const timeline = [
    { year: "1998", title: "Company Founded", description: "Started with a vision to revolutionize industrial services" },
    { year: "2005", title: "Major Expansion", description: "Opened three new facilities and doubled our fleet" },
    { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001 certification for quality management" },
    { year: "2018", title: "Technology Integration", description: "Implemented cutting-edge fleet management systems" },
    { year: "2023", title: "Industry Leader", description: "Recognized as regional leader in industrial solutions" },
  ];

  // Certifications & Safety
  const certifications = [
    { icon: Shield, title: "OSHA Compliant", description: "Full safety compliance & training" },
    { icon: Award, title: "ISO 9001 Certified", description: "Quality management systems" },
    { icon: CheckCircle, title: "Fully Insured", description: "$5M liability coverage" },
    { icon: TrendingUp, title: "Zero Incidents", description: "2 years accident-free operation" },
  ];

  // Equipment/Fleet showcase
  const fleet = [
    { name: "Heavy Equipment", count: "25+", description: "Excavators, loaders, cranes" },
    { name: "Transport Fleet", count: "30+", description: "Flatbeds, box trucks, specialty haulers" },
    { name: "Support Vehicles", count: "15+", description: "Service trucks, utility vehicles" },
    { name: "Specialized Tools", count: "500+", description: "Professional-grade equipment" },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <LetterPullUp
            text="Our Story"
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: brand.primary_color }}
          />
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {content.about_snippet || "Decades of experience delivering industrial excellence with precision and reliability."}
            </p>
          </ScrollReveal>
        </div>

        {/* Company Timeline */}
        <section className="mb-20">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Company History</h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
              style={{ backgroundColor: brand.primary_color + "30" }}
            />

            {timeline.map((milestone, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 0.1}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div className={`flex items-center mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                    <div
                      className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-2"
                      style={{ backgroundColor: brand.accent_color, color: "white" }}
                    >
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block w-2/12 flex justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-4 border-white dark:border-gray-950"
                      style={{ backgroundColor: brand.accent_color }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Separator className="my-16 max-w-6xl mx-auto" />

        {/* Certifications & Safety Record */}
        <section className="mb-20">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-4 text-center">Certifications & Safety</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Your safety and quality assurance are our top priorities
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <Card className="h-full border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        <Icon className="h-8 w-8" style={{ color: brand.accent_color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Equipment/Fleet Showcase */}
        <section className="mb-20 bg-gray-50 dark:bg-gray-900 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <ScrollReveal direction="up">
              <h2 className="text-3xl font-bold mb-4 text-center">Our Fleet & Equipment</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                State-of-the-art equipment maintained to the highest standards
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {fleet.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <div
                    className="p-6 rounded-xl border-2"
                    style={{ borderColor: brand.primary_color + "30" }}
                  >
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: brand.accent_color }}
                    >
                      {item.count}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        {content.team && content.team.length > 0 && (
          <section>
            <ScrollReveal direction="up">
              <h2 className="text-3xl font-bold mb-4 text-center">Leadership Team</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.team.map((member, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                  <GlowCard className="p-6 text-center">
                    {member.image_url && (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                    )}
                    {!member.image_url && (
                      <div
                        className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: brand.primary_color + "20" }}
                      >
                        <Users className="h-16 w-16" style={{ color: brand.primary_color }} />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    {member.role && (
                      <Badge variant="secondary" className="mb-3">
                        {member.role}
                      </Badge>
                    )}
                  </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
