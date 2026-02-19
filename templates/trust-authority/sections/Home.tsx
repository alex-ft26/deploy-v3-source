"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SplitText } from "@/components/animated/SplitText";
import { NumberCounter } from "@/components/animated/NumberCounter";
import { GridPattern } from "@/components/animated/GridPattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, ArrowRight } from "lucide-react";

export function Home({ data }: { data: ProspectData }) {
  const { brand, content } = data;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <GridPattern className="opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              Trusted by thousands
            </Badge>
            <h1 className="font-serif text-4xl font-bold leading-tight text-[var(--color-foreground)] md:text-6xl">
              <SplitText text={content.tagline_enhanced} />
            </h1>
            <ScrollReveal delay={0.3}>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] md:text-xl">
                {content.value_prop}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">
                  {content.cta_text} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {content.cta_secondary_text && (
                  <Button variant="outline" size="lg">
                    {content.cta_secondary_text}
                  </Button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      {content.stats && content.stats.length > 0 && (
        <section className="border-y border-[var(--color-border)] bg-[var(--color-muted)] py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {content.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                <div className="font-serif text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
                  <NumberCounter
                    value={parseInt(stat.value.replace(/[^0-9]/g, "")) || 0}
                    suffix={stat.value.replace(/[0-9,]/g, "")}
                  />
                </div>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Services Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--color-muted-foreground)]">
              Comprehensive solutions tailored to your needs.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.services.slice(0, 6).map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: brand.accent_color + "20" }}
                    >
                      <Shield className="h-5 w-5" style={{ color: brand.accent_color }} />
                    </div>
                    <h3 className="font-semibold text-[var(--color-foreground)]">{service.name}</h3>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="bg-[var(--color-muted)] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <h2 className="text-center font-serif text-3xl font-bold text-[var(--color-foreground)]">
                What Our Clients Say
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex gap-1 text-[var(--color-accent)]">
                        {[...Array(5)].map((_, j) => (
                          <Award key={j} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 text-sm italic text-[var(--color-muted-foreground)]">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Users className="h-4 w-4 text-[var(--color-muted-foreground)]" />
                        <div>
                          <p className="text-sm font-medium text-[var(--color-foreground)]">
                            {t.name}
                          </p>
                          {t.role && (
                            <p className="text-xs text-[var(--color-muted-foreground)]">{t.role}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
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
