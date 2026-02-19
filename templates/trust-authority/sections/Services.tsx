"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SplitText } from "@/components/animated/SplitText";
import { GlowCard } from "@/components/animated/GlowCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Services({ data }: { data: ProspectData }) {
  const { content } = data;

  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              What We Offer
            </Badge>
            <h1 className="font-serif text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
              <SplitText text="Our Services" />
            </h1>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)]">
                Comprehensive solutions designed to help you succeed.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {content.services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-[var(--color-muted-foreground)]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-muted)] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)]">
              Ready to Work Together?
            </h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              {content.value_prop}
            </p>
            <div className="mt-8">
              <Button size="lg">
                {content.cta_text} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
