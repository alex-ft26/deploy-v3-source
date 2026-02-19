"use client";

import { ProspectData } from "@/lib/prospect-data";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { TiltCard } from "@/components/animated/TiltCard";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Star, MapPin, Clock, Phone, ArrowRight } from "lucide-react";

interface HomeProps {
  data: ProspectData;
}

export default function Home({ data }: HomeProps) {
  const { brand, content } = data;

  // Mock schedule data for demonstration
  const upcomingClasses = [
    { time: "6:00 AM", name: "Morning Yoga", instructor: "Sarah J." },
    { time: "9:00 AM", name: "Power Hour", instructor: "Mike R." },
    { time: "12:00 PM", name: "Lunch Express", instructor: "Emily T." },
    { time: "5:30 PM", name: "Evening Flow", instructor: "David K." },
    { time: "7:00 PM", name: "Night Sessions", instructor: "Alex M." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Energetic hero with LetterPullUp */}
      <section
        className="relative py-32 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color} 0%, ${brand.secondary_color} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <LetterPullUp
                  text={content.company_name}
                  className="text-white"
                />
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-semibold">
                {content.tagline_enhanced || content.tagline}
              </p>
              <p className="text-xl mb-12 opacity-90">
                {content.value_prop}
              </p>
              <ShinyButton
                size="lg"
                className="text-lg px-8 py-6 bg-white"
                style={{ color: brand.primary_color }}
              >
                {content.cta_text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </ShinyButton>
            </div>
            <div>
              <div
                className="aspect-square rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  border: "3px solid rgba(255,255,255,0.4)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Class/menu schedule preview */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: brand.primary_color }}
              >
                Today's Schedule
              </h2>
              <p className="text-xl text-gray-600">
                Join us for these amazing sessions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses.map((session, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <Card
                  className="overflow-hidden transition-all hover:shadow-lg"
                  style={{ borderTop: `4px solid ${brand.accent_color}` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge
                        variant="default"
                        style={{ backgroundColor: brand.accent_color }}
                      >
                        {session.time}
                      </Badge>
                      <Calendar className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{session.name}</h3>
                    <p className="text-gray-600">with {session.instructor}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community stats with NumberCounter */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: brand.primary_color }}
              >
                Join Our Community
              </h2>
              <p className="text-xl text-gray-600">
                Be part of something bigger
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ color: brand.accent_color }}
                >
                  <NumberCounter value={2500} suffix="+" />
                </div>
                <p className="text-lg text-gray-600">Members</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ color: brand.accent_color }}
                >
                  <NumberCounter value={50} suffix="+" />
                </div>
                <p className="text-lg text-gray-600">Classes Weekly</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ color: brand.accent_color }}
                >
                  <NumberCounter value={10} suffix="+" />
                </div>
                <p className="text-lg text-gray-600">Years Serving</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ color: brand.accent_color }}
                >
                  <NumberCounter value={98} suffix="%" />
                </div>
                <p className="text-lg text-gray-600">Satisfaction</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials with photos */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2
                className="text-5xl font-bold text-center mb-16"
                style={{ color: brand.primary_color }}
              >
                What Our Members Say
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {content.testimonials.slice(0, 3).map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TiltCard>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-16 h-16 rounded-full"
                            style={{
                              backgroundColor: `${brand.secondary_color}60`,
                              border: `2px solid ${brand.secondary_color}`,
                            }}
                          />
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            {testimonial.role && (
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-current"
                              style={{ color: brand.accent_color }}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location info with hours */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2
                  className="text-5xl font-bold mb-8"
                  style={{ color: brand.primary_color }}
                >
                  Visit Us Today
                </h2>
                <div className="space-y-6">
                  {content.address && (
                    <div className="flex items-start gap-4">
                      <MapPin
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        style={{ color: brand.accent_color }}
                      />
                      <div>
                        <p className="font-semibold mb-1">Location</p>
                        <p className="text-gray-600">{content.address}</p>
                      </div>
                    </div>
                  )}
                  {content.hours && (
                    <div className="flex items-start gap-4">
                      <Clock
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        style={{ color: brand.accent_color }}
                      />
                      <div>
                        <p className="font-semibold mb-1">Hours</p>
                        <p className="text-gray-600">{content.hours}</p>
                      </div>
                    </div>
                  )}
                  {content.phone && (
                    <div className="flex items-start gap-4">
                      <Phone
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        style={{ color: brand.accent_color }}
                      />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a
                          href={`tel:${content.phone}`}
                          className="text-gray-600 hover:underline"
                        >
                          {content.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="aspect-video rounded-2xl"
                style={{
                  backgroundColor: `${brand.secondary_color}40`,
                  border: `3px solid ${brand.secondary_color}`,
                }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join/Visit CTA */}
      <section
        className="py-24 px-6 text-white"
        style={{ backgroundColor: brand.primary_color }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Users className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Join?
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              {content.cta_secondary_text || "Become a member today and start your journey"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShinyButton
                size="lg"
                className="text-lg px-8 py-6 bg-white"
                style={{ color: brand.primary_color }}
              >
                Join Now
              </ShinyButton>
              <ShinyButton
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
              >
                Free Trial
              </ShinyButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
