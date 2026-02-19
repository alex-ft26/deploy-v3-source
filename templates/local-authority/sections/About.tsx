"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GlowCard } from "@/components/animated/GlowCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Users, Award, Clock, ThumbsUp } from "lucide-react";

export default function About({ data }: { data: ProspectData }) {
  const { content, brand } = data;
  const team = content.team || [];

  // Why choose us - checklist style
  const whyChooseUs = [
    "Licensed, bonded, and fully insured",
    "Experienced, background-checked technicians",
    "Upfront pricing with no hidden fees",
    "Same-day and emergency service available",
    "100% satisfaction guarantee",
    "Locally owned and operated",
    "State-of-the-art equipment",
    "Friendly, professional service",
  ];

  // Certifications/badges
  const certifications = [
    { icon: Shield, title: "Licensed & Insured", color: brand.primary_color },
    { icon: Award, title: "Industry Certified", color: brand.secondary_color },
    { icon: ThumbsUp, title: "BBB A+ Rated", color: brand.accent_color },
    { icon: Clock, title: "24/7 Available", color: brand.primary_color },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="py-20 lg:py-32"
        style={{ background: `linear-gradient(to bottom, ${brand.primary_color}15, transparent)` }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <LetterPullUp
              text={`About ${content.company_name}`}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-gray-700 leading-relaxed">
                {content.about_snippet || `Your trusted local experts for professional service you can count on. We've been serving our community with pride for years.`}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded on the principles of quality workmanship and honest service, {content.company_name} has become a trusted name in our community.
                  </p>
                  <p>
                    Our team of experienced professionals is dedicated to providing exceptional service on every job, whether it&apos;s a routine maintenance call or an emergency situation.
                  </p>
                  <p>
                    We take pride in our work and stand behind it with a satisfaction guarantee. Your trust is important to us, and we work hard to earn it every day.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl relative overflow-hidden shadow-xl">
                {brand.logo_url && (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <img
                      src={brand.logo_url}
                      alt={content.company_name}
                      className="max-w-full max-h-full object-contain opacity-10"
                    />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium text-lg">
                  Company Photo
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Checklist */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We&apos;re committed to providing the best service in the business
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {whyChooseUs.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="border-2 p-5 hover:shadow-lg transition-all bg-white">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: brand.primary_color }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">{item}</span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications/Badges Grid */}
      <section className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Licensed & Certified
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <GlowCard>
                <Card className="border-2 p-8 text-center h-full hover:shadow-xl transition-all">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                  >
                    <cert.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {cert.title}
                  </h3>
                </Card>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team Photos */}
      {team.length > 0 && (
        <section className="container mx-auto px-6 py-20 bg-gray-50">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Meet The Team
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Experienced professionals you can trust
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="overflow-hidden border-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                        Photo
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Community Connection */}
      <section className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <Card
            className="border-2 p-12 text-center max-w-4xl mx-auto"
            style={{ background: `linear-gradient(135deg, ${brand.primary_color}15, ${brand.secondary_color}15)` }}
          >
            <Badge
              className="mb-4 text-sm px-4 py-2"
              style={{ backgroundColor: brand.primary_color, color: 'white' }}
            >
              LOCALLY OWNED
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Proud to Serve Our Community
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              As a local business, we understand the unique needs of our community. We&apos;re your neighbors, and we&apos;re committed to providing the honest, reliable service you deserve.
            </p>
          </Card>
        </ScrollReveal>
      </section>
    </main>
  );
}
