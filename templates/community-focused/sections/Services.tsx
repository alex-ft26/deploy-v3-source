"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { TiltCard } from "@/components/animated/TiltCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, DollarSign, ArrowRight } from "lucide-react";

interface ServicesProps {
  data: ProspectData;
}

export default function Services({ data }: ServicesProps) {
  const { brand, content } = data;

  // Mock pricing tiers
  const pricingTiers = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      features: [
        "Access during off-peak hours",
        "Basic amenities",
        "Community events",
        "Mobile app access",
      ],
    },
    {
      name: "Standard",
      price: "$49",
      period: "per month",
      popular: true,
      features: [
        "24/7 unlimited access",
        "All amenities included",
        "Guest privileges",
        "Priority booking",
        "Free workshops",
      ],
    },
    {
      name: "Premium",
      price: "$79",
      period: "per month",
      features: [
        "Everything in Standard",
        "Personal training sessions",
        "Exclusive classes",
        "Nutrition consultation",
        "Premium locker",
      ],
    },
  ];

  // Mock schedule
  const schedule = {
    Monday: ["6:00 AM - Morning Flow", "9:00 AM - Power Session", "5:30 PM - Evening Class"],
    Tuesday: ["6:30 AM - Sunrise Session", "12:00 PM - Lunch Break", "6:00 PM - Night Class"],
    Wednesday: ["6:00 AM - Morning Flow", "9:00 AM - Power Session", "5:30 PM - Evening Class"],
    Thursday: ["6:30 AM - Sunrise Session", "12:00 PM - Lunch Break", "6:00 PM - Night Class"],
    Friday: ["6:00 AM - Morning Flow", "9:00 AM - Power Session", "5:30 PM - Evening Class"],
    Saturday: ["8:00 AM - Weekend Warrior", "10:00 AM - Family Session", "12:00 PM - Open Studio"],
    Sunday: ["9:00 AM - Slow Flow", "11:00 AM - Community Class", "4:00 PM - Recovery"],
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        className="py-32 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color} 0%, ${brand.secondary_color} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <LetterPullUp text="Classes & Programs" className="text-white" />
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            {content.value_prop}
          </p>
        </div>
      </section>

      {/* Classes/menu items in categorized grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-5xl font-bold text-center mb-4"
              style={{ color: brand.primary_color }}
            >
              Our Offerings
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Choose from a variety of options to fit your lifestyle
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <TiltCard>
                  <Card className="h-full">
                    <CardHeader>
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${brand.accent_color}20` }}
                      >
                        <div
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: brand.accent_color }}
                        />
                      </div>
                      <CardTitle
                        className="text-2xl"
                        style={{ color: brand.primary_color }}
                      >
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        style={{ borderColor: brand.accent_color, color: brand.accent_color }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-5xl font-bold text-center mb-4"
              style={{ color: brand.primary_color }}
            >
              Membership Plans
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Choose the plan that works best for you
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative">
                  {tier.popular && (
                    <Badge
                      className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                      style={{ backgroundColor: brand.accent_color }}
                    >
                      Most Popular
                    </Badge>
                  )}
                  <Card
                    className={`h-full ${tier.popular ? 'ring-4 ring-[var(--color-primary)]' : ''}`}
                  >
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl mb-4">{tier.name}</CardTitle>
                      <div className="flex items-baseline justify-center gap-2">
                        <span
                          className="text-5xl font-bold"
                          style={{ color: brand.primary_color }}
                        >
                          {tier.price}
                        </span>
                        <span className="text-gray-600">{tier.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <Check
                              className="w-5 h-5 mt-0.5 flex-shrink-0"
                              style={{ color: brand.accent_color }}
                            />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        style={{
                          backgroundColor: tier.popular ? brand.accent_color : brand.primary_color,
                        }}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule/hours display */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8" style={{ color: brand.accent_color }} />
              <h2
                className="text-5xl font-bold text-center"
                style={{ color: brand.primary_color }}
              >
                Weekly Schedule
              </h2>
            </div>
            <p className="text-xl text-gray-600 text-center mb-16">
              Plan your week with our class schedule
            </p>
          </ScrollReveal>

          <div className="grid gap-4">
            {Object.entries(schedule).map(([day, times], index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: brand.primary_color }}
                        >
                          {day}
                        </h3>
                      </div>
                      <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
                        {times.map((time, tIndex) => (
                          <Badge
                            key={tIndex}
                            variant="outline"
                            className="text-sm py-2 px-4 justify-center"
                            style={{ borderColor: brand.secondary_color }}
                          >
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-white"
        style={{ backgroundColor: brand.primary_color }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <DollarSign className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              Join our community and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white"
                style={{ color: brand.primary_color }}
              >
                {content.cta_text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
              >
                Free Trial
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
