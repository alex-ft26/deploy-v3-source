"use client";

import { ProspectData } from "@/lib/prospect-data";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { TiltCard } from "@/components/animated/TiltCard";
import { SplitText } from "@/components/animated/SplitText";
import { Separator } from "@/components/ui/separator";

export default function LifestyleVisualAbout({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  return (
    <div className="min-h-screen py-24 px-6">
      {/* Hero section with large pull quote */}
      <section className="max-w-5xl mx-auto mb-32">
        <ScrollReveal>
          <h1 className="text-6xl md:text-7xl font-serif mb-8">Our Story</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center py-16">
            <blockquote className="text-4xl md:text-5xl font-serif italic leading-relaxed">
              <SplitText text={`"${content.value_prop}"`} />
            </blockquote>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-xl leading-relaxed text-gray-700">
            {content.about_snippet || `${content.company_name} has been dedicated to bringing exceptional experiences to our clients. Our passion for excellence drives everything we do.`}
          </p>
        </ScrollReveal>
      </section>

      <Separator className="max-w-5xl mx-auto mb-32" />

      {/* Team section with artistic layout */}
      {content.team && content.team.length > 0 && (
        <section className="max-w-7xl mx-auto mb-32">
          <ScrollReveal>
            <h2 className="text-5xl font-serif text-center mb-16">Meet Our Team</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {content.team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <TiltCard>
                  <div
                    className="relative h-96 rounded-2xl overflow-hidden mb-6"
                    style={{ backgroundColor: `${brand.primary_color}20` }}
                  >
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
                  {member.role && <p className="text-gray-600">{member.role}</p>}
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Brand philosophy */}
      <section
        className="py-32 px-6 rounded-3xl max-w-7xl mx-auto"
        style={{ background: `linear-gradient(135deg, ${brand.secondary_color}20 0%, ${brand.accent_color}15 100%)` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-serif mb-8">Our Philosophy</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl leading-relaxed mb-6">
              We believe in the transformative power of {content.tagline?.toLowerCase() || "exceptional service"}.
              Every detail matters, every moment counts.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-xl leading-relaxed">
              Our commitment to excellence means you receive personalized attention and results that exceed expectations.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
