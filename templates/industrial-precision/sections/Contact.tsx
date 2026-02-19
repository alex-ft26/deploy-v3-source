"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { GlowCard } from "@/components/animated/GlowCard";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  Calendar,
  DollarSign
} from "lucide-react";

export default function Contact({ data }: { data: ProspectData }) {
  const { brand, content } = data;

  // Office locations (can be multiple)
  const locations = content.address
    ? [{ name: "Main Office", address: content.address }]
    : [
        { name: "Main Office", address: "123 Industrial Blvd, Manufacturing District" },
        { name: "North Facility", address: "456 Commerce Dr, Industrial Park" },
      ];

  // Project types for dropdown simulation
  const projectTypes = [
    "Commercial Construction",
    "Industrial Manufacturing",
    "Equipment Rental",
    "Fleet Services",
    "Custom Fabrication",
    "Emergency Services",
    "Other",
  ];

  // Timeline options
  const timelines = [
    "Immediate (Within 1 week)",
    "Short-term (1-4 weeks)",
    "Mid-term (1-3 months)",
    "Long-term (3+ months)",
    "Flexible",
  ];

  // Budget ranges
  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000+",
    "Prefer to discuss",
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <LetterPullUp
            text="Get in Touch"
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: brand.primary_color }}
          />
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Request a quote or reach out to discuss your project requirements
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* RFQ Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <GlowCard className="p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: brand.primary_color }}>
                  Request for Quote (RFQ)
                </h2>

                <form className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input placeholder="John Smith" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input placeholder="ABC Manufacturing Inc." required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className={`w-full px-4 py-3 border rounded-lg appearance-none bg-white dark:bg-gray-800 focus:ring-2 focus:ring-opacity-50 focus:ring-[var(--color-primary)]`}
                        required
                      >
                        <option value="">Select a project type...</option>
                        {projectTypes.map((type, idx) => (
                          <option key={idx} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Project Timeline
                      </label>
                      <div className="relative">
                        <select
                          className="w-full px-4 py-3 border rounded-lg appearance-none bg-white dark:bg-gray-800"
                        >
                          <option value="">Select timeline...</option>
                          {timelines.map((timeline, idx) => (
                            <option key={idx} value={timeline}>
                              {timeline}
                            </option>
                          ))}
                        </select>
                        <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          className="w-full px-4 py-3 border rounded-lg appearance-none bg-white dark:bg-gray-800"
                        >
                          <option value="">Select budget range...</option>
                          {budgetRanges.map((range, idx) => (
                            <option key={idx} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <DollarSign className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder="Please describe your project requirements, specifications, and any specific needs..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full group"
                    style={{ backgroundColor: brand.accent_color }}
                  >
                    Submit Request for Quote
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    We typically respond to quote requests within 24 hours
                  </p>
                </form>
              </GlowCard>
            </ScrollReveal>
          </div>

          {/* Contact Info & Office Locations - Takes 1 column */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <ScrollReveal direction="right" delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: brand.primary_color }}>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {content.phone && (
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        <Phone className="h-5 w-5" style={{ color: brand.accent_color }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-600 dark:text-gray-400">
                          Phone
                        </p>
                        <a
                          href={`tel:${content.phone}`}
                          className="text-lg font-bold hover:underline"
                          style={{ color: brand.primary_color }}
                        >
                          {content.phone}
                        </a>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          24/7 Emergency Line
                        </Badge>
                      </div>
                    </div>
                  )}

                  {content.email && (
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        <Mail className="h-5 w-5" style={{ color: brand.accent_color }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-600 dark:text-gray-400">
                          Email
                        </p>
                        <a
                          href={`mailto:${content.email}`}
                          className="text-base font-bold hover:underline break-all"
                          style={{ color: brand.primary_color }}
                        >
                          {content.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {content.hours && (
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        <Clock className="h-5 w-5" style={{ color: brand.accent_color }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-600 dark:text-gray-400">
                          Business Hours
                        </p>
                        <p className="text-base font-bold">{content.hours}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Office Locations */}
            <ScrollReveal direction="right" delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: brand.primary_color }}>
                    Office Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {locations.map((location, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: brand.accent_color + "15" }}
                      >
                        {idx === 0 ? (
                          <Building2 className="h-5 w-5" style={{ color: brand.accent_color }} />
                        ) : (
                          <MapPin className="h-5 w-5" style={{ color: brand.accent_color }} />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-sm mb-1">{location.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Quick Response Guarantee */}
            <ScrollReveal direction="right" delay={0.3}>
              <div
                className="p-6 rounded-xl text-center"
                style={{ backgroundColor: brand.accent_color + "10" }}
              >
                <Clock
                  className="h-12 w-12 mx-auto mb-3"
                  style={{ color: brand.accent_color }}
                />
                <h3 className="font-bold text-lg mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All quote requests receive a response within 24 hours. Emergency services available 24/7.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
