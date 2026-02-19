"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { TiltCard } from "@/components/animated/TiltCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, Users, Target, Shield } from "lucide-react";

export default function About({ data }: { data: ProspectData }) {
  const { content, brand } = data;
  const team = content.team || [];

  // Mock company values/pillars
  const values = [
    { icon: Shield, title: "Integrity", description: "We operate with transparency and honesty in everything we do" },
    { icon: Target, title: "Excellence", description: "We strive for the highest standards in our work and service" },
    { icon: Users, title: "Collaboration", description: "We believe in working together to achieve the best results" },
    { icon: Award, title: "Innovation", description: "We continuously improve and adapt to serve you better" },
  ];

  // Mock timeline/milestones
  const milestones = [
    { year: "2010", event: "Company Founded" },
    { year: "2015", event: "Expanded Services" },
    { year: "2020", event: "Achieved Industry Recognition" },
    { year: "2025", event: "Serving 1000+ Clients" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <LetterPullUp
            text="About Us"
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed">
              {content.about_snippet || `${content.company_name} is dedicated to providing exceptional service and expertise. Our team of professionals brings years of experience and a commitment to excellence.`}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Team Showcase */}
      {team.length > 0 && (
        <section className="container mx-auto px-6 py-20 bg-gray-50">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Our Expert Team
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Meet the professionals who make it all possible
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <TiltCard>
                  <Card className="overflow-hidden border-2 h-full hover:shadow-2xl transition-all">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative">
                      {member.image_url ? (
                        <img
                          src={member.image_url}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                          Team Photo
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        {member.name}
                      </h3>
                      <Badge className="mb-3" style={{ backgroundColor: brand.primary_color }}>
                        {member.role}
                      </Badge>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Dedicated to delivering excellence and exceeding client expectations.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Company Timeline */}
      <section className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Journey
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((milestone, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: brand.primary_color }}
                  >
                    {milestone.year}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {milestone.event}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <Card className="border-2 p-8 text-center h-full hover:shadow-lg transition-all">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                >
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose {content.company_name}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Proven track record of success",
              "Experienced and certified professionals",
              "Client-focused approach",
              "Competitive pricing",
              "Timely and reliable service",
              "Comprehensive solutions",
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all">
                  <CheckCircle2
                    className="w-6 h-6 flex-shrink-0"
                    style={{ color: brand.primary_color }}
                  />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
