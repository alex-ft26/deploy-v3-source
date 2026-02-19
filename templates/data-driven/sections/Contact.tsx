"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GradientText } from "@/components/animated/GradientText";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Calendar, MapPin, Phone, Globe } from "lucide-react";

export default function DataDrivenContact({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <ScrollReveal>
          <Badge
            className="mb-6"
            style={{ backgroundColor: `${brand.accent_color}20`, color: brand.accent_color }}
          >
            Get In Touch
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Let's <GradientText text="Connect" />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-xl text-gray-400">
            Have questions? We're here to help you succeed.
          </p>
        </ScrollReveal>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        {/* Contact form */}
        <div className="md:col-span-3">
          <ScrollReveal delay={0.3}>
            <Card
              className="p-8 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="w-full bg-slate-900 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Company
                    </label>
                    <Input
                      placeholder="Acme Inc."
                      className="w-full bg-slate-900 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-900 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    How can we help? *
                  </label>
                  <select className="w-full px-4 py-2 bg-slate-900 border border-gray-700 rounded-lg text-white">
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us more about your needs..."
                    className="w-full bg-slate-900 border-gray-700 text-white"
                    rows={5}
                  />
                </div>

                <Button
                  className="w-full py-4 text-lg font-semibold"
                  style={{ backgroundColor: brand.primary_color }}
                >
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </Card>
          </ScrollReveal>
        </div>

        {/* Sidebar info */}
        <div className="md:col-span-2 space-y-8">
          <ScrollReveal delay={0.5}>
            <Card
              className="p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {content.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: brand.accent_color }} />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">{content.email}</p>
                    </div>
                  </div>
                )}

                {content.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: brand.accent_color }} />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">{content.phone}</p>
                    </div>
                  </div>
                )}

                {content.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: brand.accent_color }} />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white">{content.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <Card
              className="p-6"
              style={{
                background: `linear-gradient(135deg, ${brand.primary_color}20 0%, ${brand.accent_color}15 100%)`,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Calendar className="w-6 h-6 flex-shrink-0" style={{ color: brand.accent_color }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Schedule a Demo</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    See {content.company_name} in action with a personalized walkthrough
                  </p>
                  <button
                    className="w-full py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: brand.primary_color }}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <Card
              className="p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <MessageSquare className="w-6 h-6 flex-shrink-0" style={{ color: brand.accent_color }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise Sales</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Custom solutions for large teams and organizations
                  </p>
                  <button className="w-full py-2 border border-gray-600 rounded-lg hover:bg-white/5 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Social links */}
          {content.social_links && Object.keys(content.social_links).length > 0 && (
            <ScrollReveal delay={0.8}>
              <Card
                className="p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {Object.entries(content.social_links).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="w-10 h-10 rounded-lg bg-slate-900 border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-5 h-5 text-gray-400" />
                    </a>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}
