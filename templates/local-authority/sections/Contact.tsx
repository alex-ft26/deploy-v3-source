"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { SplitText } from "@/components/animated/SplitText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Calendar, AlertCircle } from "lucide-react";

export default function Contact({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  // Service areas (mock data)
  const serviceAreas = [
    "Downtown",
    "North Side",
    "South Side",
    "East End",
    "West End",
    "Suburbs",
    "County Areas",
    "& Surrounding Communities",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Large Phone */}
      <section
        className="py-20 lg:py-32"
        style={{ background: `linear-gradient(135deg, ${brand.primary_color}, ${brand.secondary_color})` }}
      >
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm font-bold px-4 py-2">
            CONTACT US TODAY
          </Badge>

          <SplitText
            text="Get in Touch"
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          />

          <ScrollReveal delay={0.2}>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fast Response • Professional Service • Fair Pricing
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="inline-flex flex-col items-center gap-4">
              <div className="text-white/80 font-medium">Call us now at</div>
              <a href={`tel:${content.phone || ""}`}>
                <ShinyButton className="bg-red-600 hover:bg-red-700 text-white font-bold text-2xl px-12 py-8 rounded-2xl shadow-2xl">
                  <Phone className="mr-3 h-8 w-8" />
                  {content.phone || "(555) 123-4567"}
                </ShinyButton>
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>24/7 Emergency Service Available</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="container mx-auto px-6 py-12 -mt-8 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                >
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-sm text-gray-600 mb-1">Phone</div>
                <a
                  href={`tel:${content.phone || ""}`}
                  className="font-bold text-gray-900 hover:underline"
                >
                  {content.phone || "(555) 123-4567"}
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-sm text-gray-600 mb-1">Email</div>
                <a
                  href={`mailto:${content.email || "info@example.com"}`}
                  className="font-bold text-gray-900 hover:underline text-sm"
                >
                  {content.email || "info@example.com"}
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-sm text-gray-600 mb-1">Location</div>
                <div className="font-bold text-gray-900 text-sm">
                  {content.address || "Serving Your Area"}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6 text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                >
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-sm text-gray-600 mb-1">Hours</div>
                <div className="font-bold text-gray-900 text-sm">
                  {content.hours || "24/7 Available"}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content - Form & Info */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  Request Service
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card className="border-2 p-6 lg:p-8">
                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Phone *
                        </label>
                        <Input type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <Input placeholder="What service do you need?" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Describe your needs or ask a question..."
                        rows={5}
                      />
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full font-bold"
                      style={{ backgroundColor: brand.primary_color }}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Request Service
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      Or call us directly at{" "}
                      <a
                        href={`tel:${content.phone || ""}`}
                        className="font-bold hover:underline"
                        style={{ color: brand.primary_color }}
                      >
                        {content.phone || "(555) 123-4567"}
                      </a>
                    </p>
                  </form>
                </Card>
              </ScrollReveal>
            </div>

            {/* Service Area & Hours - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hours Prominently Displayed */}
              <ScrollReveal delay={0.2}>
                <Card
                  className="border-2 p-6 text-center"
                  style={{ background: `linear-gradient(135deg, ${brand.primary_color}15, ${brand.secondary_color}15)` }}
                >
                  <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: brand.primary_color }} />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Hours of Operation
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="font-medium">
                      {content.hours || "Monday - Friday: 8AM - 6PM"}
                    </div>
                    <div className="font-medium">
                      Saturday: 9AM - 4PM
                    </div>
                    <div className="font-medium">
                      Sunday: Emergency Only
                    </div>
                  </div>
                  <Badge
                    className="mt-4 text-xs px-3 py-1"
                    style={{ backgroundColor: brand.primary_color, color: 'white' }}
                  >
                    24/7 Emergency Service
                  </Badge>
                </Card>
              </ScrollReveal>

              {/* Service Area */}
              <ScrollReveal delay={0.3}>
                <Card className="border-2 p-6">
                  <MapPin className="w-10 h-10 mb-4" style={{ color: brand.primary_color }} />
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Service Areas
                  </h3>
                  <div className="space-y-2">
                    {serviceAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: brand.primary_color }}
                        />
                        <span className="text-gray-700 text-sm font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Don&apos;t see your area? Call us - we may still be able to help!
                  </p>
                </Card>
              </ScrollReveal>

              {/* Emergency Contact */}
              <ScrollReveal delay={0.4}>
                <Card
                  className="border-2 p-6 text-center"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  <AlertCircle className="w-10 h-10 mx-auto mb-3 text-white" />
                  <h3 className="text-lg font-bold mb-2 text-white">
                    Emergency Service?
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Don&apos;t wait - call us now for immediate assistance
                  </p>
                  <a href={`tel:${content.phone || ""}`}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency Line
                    </Button>
                  </a>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
