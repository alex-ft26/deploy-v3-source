"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { GradientText } from "@/components/animated/GradientText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, DollarSign, Clock, ChevronDown } from "lucide-react";

export default function Services({ data }: { data: ProspectData }) {
  const { content, brand } = data;
  const services = content.services || [];

  // Mock FAQ items for visual accordion
  const faqs = [
    { question: "Do you offer emergency service?", answer: "Yes, we provide 24/7 emergency service." },
    { question: "Are you licensed and insured?", answer: "Absolutely. We are fully licensed, bonded, and insured." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, cash, and checks." },
    { question: "Do you offer warranties?", answer: "Yes, all our work comes with a satisfaction guarantee." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="py-20 lg:py-32"
        style={{ background: `linear-gradient(135deg, ${brand.primary_color}, ${brand.secondary_color})` }}
      >
        <div className="container mx-auto px-6 text-center">
          <GradientText
            text="Our Services"
            className="text-5xl lg:text-6xl font-bold mb-6 text-white"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Professional solutions with upfront pricing and no hidden fees
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a href={`tel:${content.phone || ""}`} className="inline-block">
              <ShinyButton className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Quote
              </ShinyButton>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards with Pricing Hints */}
      {services.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={0.1}>
                <Card className="border-2 overflow-hidden hover:shadow-xl transition-all">
                  <div className="grid lg:grid-cols-3">
                    {/* Service Info */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start gap-4 mb-4">
                        {service.icon && (
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                            style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                          >
                            {service.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 text-gray-900">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-2">
                        {[
                          "Fast, professional service",
                          "Upfront pricing, no surprises",
                          "Satisfaction guaranteed",
                          "Emergency service available",
                        ].map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center gap-3">
                            <CheckCircle2
                              className="w-5 h-5 flex-shrink-0"
                              style={{ color: brand.primary_color }}
                            />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div
                      className="p-8 flex flex-col justify-center"
                      style={{ backgroundColor: `${brand.primary_color}10` }}
                    >
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                          <DollarSign className="w-5 h-5" />
                          <span className="text-sm font-medium">Starting at</span>
                        </div>
                        <div className="text-4xl font-bold mb-1" style={{ color: brand.primary_color }}>
                          $XX
                        </div>
                        <div className="text-sm text-gray-600">
                          Call for exact pricing
                        </div>
                      </div>

                      <a href={`tel:${content.phone || ""}`} className="block mb-3">
                        <Button
                          variant="primary"
                          size="lg"
                          className="w-full font-bold"
                          style={{ backgroundColor: brand.primary_color }}
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          Call Now
                        </Button>
                      </a>

                      <Button variant="outline" size="lg" className="w-full">
                        Request Quote
                      </Button>

                      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Same-day service available</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section - Visual Accordion */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="border-2">
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900 flex-1">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${brand.primary_color}, ${brand.secondary_color})` }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-4 bg-red-600 text-white text-sm px-4 py-2 border-0">
                EMERGENCY SERVICE AVAILABLE
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Need Immediate Service?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We&apos;re available 24/7 for emergency calls. Our team can be at your location fast.
              </p>
              <a href={`tel:${content.phone || ""}`} className="inline-block">
                <ShinyButton className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-xl px-10 py-6 rounded-xl shadow-2xl">
                  <Phone className="mr-2 h-6 w-6" />
                  {content.phone || "(555) 123-4567"}
                </ShinyButton>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
