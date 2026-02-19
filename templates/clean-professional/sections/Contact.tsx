"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { BlurText } from "@/components/animated/BlurText";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: content.phone || "(555) 123-4567",
      href: `tel:${content.phone || "5551234567"}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: content.email || "info@example.com",
      href: `mailto:${content.email || "info@example.com"}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: content.address || "123 Main St, City, State 12345",
      href: null,
    },
    {
      icon: Clock,
      label: "Hours",
      value: content.hours || "Mon-Fri: 9AM-5PM",
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <BlurText
            text="Get In Touch"
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Split Layout - Form + Info */}
      <section className="container mx-auto px-6 py-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Side */}
          <ScrollReveal direction="left">
            <Card className="border-2 p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your needs..."
                    rows={6}
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  style={{ backgroundColor: brand.primary_color }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          {/* Info Side */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <Card className="border-2 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${brand.primary_color}20`, color: brand.primary_color }}
                        >
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-lg font-medium text-gray-900 hover:underline"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-lg font-medium text-gray-900">
                              {item.value}
                            </div>
                          )}
                        </div>
                      </div>
                      {idx < contactInfo.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <Card className="border-2 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                    Map Placeholder
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {content.company_name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {content.address || "123 Main St, City, State 12345"}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Social Links */}
            {content.social_links && Object.keys(content.social_links).length > 0 && (
              <ScrollReveal direction="right" delay={0.2}>
                <Card className="border-2 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(content.social_links).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border-2 hover:shadow-md transition-all font-medium capitalize text-sm"
                        style={{ borderColor: brand.primary_color, color: brand.primary_color }}
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
