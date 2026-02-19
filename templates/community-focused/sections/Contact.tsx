"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GradientText } from "@/components/animated/GradientText";
import { GlowCard } from "@/components/animated/GlowCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Calendar, Users, Facebook, Instagram, Twitter } from "lucide-react";

interface ContactProps {
  data: ProspectData;
}

export default function Contact({ data }: ContactProps) {
  const { brand, content } = data;

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: content.social_links?.facebook },
    { icon: Instagram, name: "Instagram", url: content.social_links?.instagram },
    { icon: Twitter, name: "Twitter", url: content.social_links?.twitter },
  ].filter(social => social.url);

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
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <GradientText text="Get In Touch" className="text-white" />
            </h1>
            <p className="text-2xl md:text-3xl max-w-3xl mx-auto">
              We'd love to hear from you. Visit us, call us, or send us a message.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location card with map placeholder */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <GlowCard>
                  <Card className="overflow-hidden">
                    <div
                      className="h-64"
                      style={{
                        backgroundColor: `${brand.secondary_color}40`,
                        border: `3px solid ${brand.secondary_color}`,
                      }}
                    />
                    <CardContent className="p-8">
                      <h2
                        className="text-3xl font-bold mb-6"
                        style={{ color: brand.primary_color }}
                      >
                        Visit Our Location
                      </h2>

                      <div className="space-y-6">
                        {content.address && (
                          <div className="flex items-start gap-4">
                            <div
                              className="p-3 rounded-lg flex-shrink-0"
                              style={{ backgroundColor: `${brand.accent_color}20` }}
                            >
                              <MapPin
                                className="w-6 h-6"
                                style={{ color: brand.accent_color }}
                              />
                            </div>
                            <div>
                              <p className="font-semibold mb-1">Address</p>
                              <p className="text-gray-600">{content.address}</p>
                            </div>
                          </div>
                        )}

                        {content.hours && (
                          <div className="flex items-start gap-4">
                            <div
                              className="p-3 rounded-lg flex-shrink-0"
                              style={{ backgroundColor: `${brand.accent_color}20` }}
                            >
                              <Clock
                                className="w-6 h-6"
                                style={{ color: brand.accent_color }}
                              />
                            </div>
                            <div>
                              <p className="font-semibold mb-1">Hours</p>
                              <p className="text-gray-600">{content.hours}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </GlowCard>

                {/* Quick contact info */}
                <div className="grid grid-cols-2 gap-4">
                  {content.phone && (
                    <ScrollReveal delay={0.1}>
                      <Card>
                        <CardContent className="p-6 text-center">
                          <Phone
                            className="w-8 h-8 mx-auto mb-3"
                            style={{ color: brand.accent_color }}
                          />
                          <p className="text-sm text-gray-600 mb-2">Call Us</p>
                          <a
                            href={`tel:${content.phone}`}
                            className="font-semibold hover:underline"
                            style={{ color: brand.primary_color }}
                          >
                            {content.phone}
                          </a>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  )}

                  {content.email && (
                    <ScrollReveal delay={0.15}>
                      <Card>
                        <CardContent className="p-6 text-center">
                          <Mail
                            className="w-8 h-8 mx-auto mb-3"
                            style={{ color: brand.accent_color }}
                          />
                          <p className="text-sm text-gray-600 mb-2">Email</p>
                          <a
                            href={`mailto:${content.email}`}
                            className="font-semibold hover:underline text-sm"
                            style={{ color: brand.primary_color }}
                          >
                            {content.email}
                          </a>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Form for membership inquiry / reservation */}
            <ScrollReveal direction="right" delay={0.2}>
              <GlowCard>
                <Card>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-8">
                      <Users
                        className="w-8 h-8"
                        style={{ color: brand.accent_color }}
                      />
                      <h2
                        className="text-3xl font-bold"
                        style={{ color: brand.primary_color }}
                      >
                        Join Our Community
                      </h2>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            First Name
                          </label>
                          <Input placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Last Name
                          </label>
                          <Input placeholder="Doe" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input type="email" placeholder="john@example.com" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input type="tel" placeholder="(555) 123-4567" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Interested In
                        </label>
                        <select
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                        >
                          <option>Membership</option>
                          <option>Free Trial</option>
                          <option>Class Schedule</option>
                          <option>Private Sessions</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your goals..."
                          rows={4}
                        />
                      </div>

                      <Button
                        size="lg"
                        className="w-full text-lg"
                        style={{ backgroundColor: brand.accent_color }}
                      >
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Phone + social links */}
      {socialLinks.length > 0 && (
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: brand.primary_color }}
              >
                Follow Our Journey
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Stay connected and join our community online
              </p>

              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full transition-all hover:scale-110"
                    style={{
                      backgroundColor: `${brand.accent_color}20`,
                      color: brand.accent_color,
                    }}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-24 px-6 text-white"
        style={{ backgroundColor: brand.primary_color }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">
              Ready to Start?
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              Schedule your free trial or tour today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white"
                style={{ color: brand.primary_color }}
              >
                Book Free Trial
              </Button>
              {content.phone && (
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
                >
                  Call {content.phone}
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
