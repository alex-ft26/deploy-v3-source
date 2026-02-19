"use client";

import { ProspectData } from "@/lib/prospect-data";
import { BlurText } from "@/components/animated/BlurText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactProps {
  data: ProspectData;
}

export default function Contact({ data }: ContactProps) {
  const { brand, content } = data;

  return (
    <div className="overflow-hidden">
      {/* Dramatic full-width layout */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <BlurText
                text="Let's Connect"
                style={{ color: brand.primary_color }}
              />
            </h1>
            <p className="text-2xl text-gray-600">
              We're here to answer your questions and discuss your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form - centered, minimalist */}
            <ScrollReveal direction="left">
              <Card className="p-8 lg:p-12">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="text-lg py-6"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="text-lg py-6"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="text-lg py-6"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="How can we help you?"
                      rows={6}
                      className="text-lg"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full text-lg py-6"
                    style={{ backgroundColor: brand.accent_color }}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-4xl font-bold mb-8"
                    style={{ color: brand.primary_color }}
                  >
                    Get In Touch
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Whether you have a question about our services, pricing, or anything else,
                    our team is ready to answer all your questions.
                  </p>
                </div>

                <div className="space-y-6">
                  {content.email && (
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${brand.accent_color}20` }}
                      >
                        <Mail
                          className="w-6 h-6"
                          style={{ color: brand.accent_color }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <a
                          href={`mailto:${content.email}`}
                          className="text-lg font-semibold hover:underline"
                          style={{ color: brand.primary_color }}
                        >
                          {content.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {content.phone && (
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${brand.accent_color}20` }}
                      >
                        <Phone
                          className="w-6 h-6"
                          style={{ color: brand.accent_color }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Phone</p>
                        <a
                          href={`tel:${content.phone}`}
                          className="text-lg font-semibold hover:underline"
                          style={{ color: brand.primary_color }}
                        >
                          {content.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {content.address && (
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${brand.accent_color}20` }}
                      >
                        <MapPin
                          className="w-6 h-6"
                          style={{ color: brand.accent_color }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Address</p>
                        <p className="text-lg font-semibold">
                          {content.address}
                        </p>
                      </div>
                    </div>
                  )}

                  {content.hours && (
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${brand.accent_color}20` }}
                      >
                        <Clock
                          className="w-6 h-6"
                          style={{ color: brand.accent_color }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Hours</p>
                        <p className="text-lg font-semibold">
                          {content.hours}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Map placeholder */}
                <div
                  className="w-full h-64 rounded-2xl mt-8"
                  style={{
                    backgroundColor: `${brand.secondary_color}30`,
                    border: `2px solid ${brand.secondary_color}`,
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
