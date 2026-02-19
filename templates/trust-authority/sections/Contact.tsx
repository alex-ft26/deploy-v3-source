"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SplitText } from "@/components/animated/SplitText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact({ data }: { data: ProspectData }) {
  const { content } = data;

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
              <SplitText text="Get in Touch" />
            </h1>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)]">
                We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <ScrollReveal>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                        Phone
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-[var(--color-foreground)]">
                        Message
                      </label>
                      <Textarea placeholder="How can we help you?" />
                    </div>
                    <Button size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {content.phone && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-foreground)]">Phone</h3>
                      <p className="text-[var(--color-muted-foreground)]">{content.phone}</p>
                    </div>
                  </div>
                )}
                {content.email && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-foreground)]">Email</h3>
                      <p className="text-[var(--color-muted-foreground)]">{content.email}</p>
                    </div>
                  </div>
                )}
                {content.address && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-foreground)]">Address</h3>
                      <p className="text-[var(--color-muted-foreground)]">{content.address}</p>
                    </div>
                  </div>
                )}
                {content.hours && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-foreground)]">Hours</h3>
                      <p className="text-[var(--color-muted-foreground)]">{content.hours}</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
