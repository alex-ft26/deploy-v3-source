"use client";

import type { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { SplitText } from "@/components/animated/SplitText";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export function About({ data }: { data: ProspectData }) {
  const { content } = data;

  return (
    <>
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
              <SplitText text={`About ${content.company_name}`} />
            </h1>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)]">
                {content.about_snippet}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-muted)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)]">
              Our Commitment
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {["Integrity", "Excellence", "Community"].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
                      <span className="text-lg font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{value}</h3>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      We hold ourselves to the highest standards of {value.toLowerCase()} in everything we do.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {content.team && content.team.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold text-[var(--color-foreground)]">
                Our Team
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.team.map((member, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-muted)]">
                        {member.image_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={member.image_url} alt={member.name} className="h-20 w-20 rounded-full object-cover" />
                        ) : (
                          <Users className="h-8 w-8 text-[var(--color-muted-foreground)]" />
                        )}
                      </div>
                      <h3 className="font-semibold text-[var(--color-foreground)]">{member.name}</h3>
                      <p className="text-sm text-[var(--color-muted-foreground)]">{member.role}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
