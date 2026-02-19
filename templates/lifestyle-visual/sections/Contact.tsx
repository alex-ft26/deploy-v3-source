"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { LetterPullUp } from "@/components/animated/LetterPullUp";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LifestyleVisualContact({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Minimalist heading */}
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-8xl font-serif mb-6">
            <LetterPullUp text="Book Now" />
          </h1>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-600">
              Reserve your appointment and begin your transformation
            </p>
          </ScrollReveal>
        </div>

        {/* Booking form */}
        <ScrollReveal delay={0.4}>
          <Card className="p-10 mb-16 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="Your phone" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="w-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input type="date" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <Input type="time" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Select a service</option>
                  {content.services?.map((service, idx) => (
                    <option key={idx}>{service.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <Textarea
                  placeholder="Any special requests or questions?"
                  className="w-full"
                  rows={4}
                />
              </div>

              <Button
                className="w-full py-6 text-lg"
                style={{ backgroundColor: brand.primary_color }}
              >
                Confirm Booking
              </Button>
            </form>
          </Card>
        </ScrollReveal>

        {/* Location & Hours */}
        <ScrollReveal delay={0.6}>
          <div className="grid md:grid-cols-2 gap-8">
            {content.address && (
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: brand.accent_color }} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">{content.address}</p>
                </div>
              </div>
            )}

            {content.hours && (
              <div className="flex gap-4">
                <Clock className="w-6 h-6 flex-shrink-0" style={{ color: brand.accent_color }} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-gray-600">{content.hours}</p>
                </div>
              </div>
            )}

            {content.phone && (
              <div className="flex gap-4">
                <Phone className="w-6 h-6 flex-shrink-0" style={{ color: brand.accent_color }} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">{content.phone}</p>
                </div>
              </div>
            )}

            {content.email && (
              <div className="flex gap-4">
                <Mail className="w-6 h-6 flex-shrink-0" style={{ color: brand.accent_color }} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">{content.email}</p>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
