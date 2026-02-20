"use client";

import { ProspectData } from "@/lib/prospect-data";
import { GradientText } from "@/components/animated/GradientText";
import { ShinyButton } from "@/components/animated/ShinyButton";
import { SpotlightCard } from "@/components/animated/SpotlightCard";
import { Marquee } from "@/components/animated/Marquee";
import { ScrollReveal } from "@/components/animated/ScrollReveal";
import { BlurText } from "@/components/animated/BlurText";
import { Sparkles, Star, Calendar, Award, ChevronDown, CircleCheckBig } from "lucide-react";

export default function LifestyleVisualHome({ data }: { data: ProspectData }) {
  const { content, brand } = data;

  return (
    <div className="min-h-screen">
      {/* Full-height hero */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brand.primary_color}15 0%, ${brand.accent_color}10 100%)`
        }}
      >
        <div className="absolute inset-0 bg-[url('/hero-lifestyle.jpg')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-serif mb-6">
            <GradientText text={content.company_name} />
          </h1>
          <BlurText
            text={content.tagline_enhanced || content.tagline}
            className="text-2xl md:text-3xl font-light mb-8 text-gray-600"
          />
          <ShinyButton
            className="px-12 py-4 text-lg"
            style={{ backgroundColor: brand.primary_color }}
          >
            {content.cta_text || "TEST DEPLOYMENT ACTIVE"}
          </ShinyButton>
        </div>
      </section>

      {/* Micro-about section */}
      {content.micro_about && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: brand.primary_color }}>
                  {content.micro_about.title}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {content.micro_about.summary}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${content.micro_about.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: `${brand.secondary_color}40`
                }}
              />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Services showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-serif text-center mb-16">Our Services</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services?.slice(0, 6).map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <SpotlightCard className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6" style={{ color: brand.accent_color }} />
                  <h3 className="text-2xl font-serif">{service.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{service.description}</p>
                
                {/* Sub-services if available */}
                {service.sub_services && service.sub_services.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <ul className="space-y-2">
                      {service.sub_services.map((sub, subIdx) => (
                        <li key={subIdx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CircleCheckBig className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brand.accent_color }} />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {data.config?.services_cta_text && (
          <div className="text-center mt-12">
            <button 
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: brand.accent_color, color: 'white' }}
            >
              {data.config.services_cta_text}
            </button>
          </div>
        )}
      </section>

      {/* Stats section */}
      {content.stats && content.stats.length > 0 && (
        <section className="py-16 px-6" style={{ backgroundColor: `${brand.secondary_color}20` }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{ color: brand.primary_color }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Doctor authority section */}
      {content.doctor_authority && (
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2}>
              <div
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url(${content.doctor_authority.photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: `${brand.secondary_color}40`
                }}
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-2" style={{ color: brand.primary_color }}>
                  {content.doctor_authority.name}
                </h2>
                <p className="text-xl mb-6" style={{ color: brand.accent_color }}>
                  {content.doctor_authority.credentials}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {content.doctor_authority.summary}
                </p>
                
                {content.doctor_authority.proof_bullets && (
                  <div className="space-y-4">
                    {content.doctor_authority.proof_bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${brand.accent_color}20` }}
                        >
                          {bullet.icon === 'calendar' && <Calendar className="w-6 h-6" style={{ color: brand.accent_color }} />}
                          {bullet.icon === 'star' && <Star className="w-6 h-6" style={{ color: brand.accent_color }} />}
                          {bullet.icon === 'badge' && <Award className="w-6 h-6" style={{ color: brand.accent_color }} />}
                        </div>
                        <span className="text-lg font-semibold">{bullet.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Testimonials marquee */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section
          className="py-24"
          style={{ backgroundColor: `${brand.secondary_color}15` }}
        >
          <h2 className="text-4xl font-serif text-center mb-12">Client Reviews</h2>
          <Marquee>
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className="mx-6 max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
              </div>
            ))}
          </Marquee>
        </section>
      )}

      {/* FAQs section */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-serif text-center mb-4" style={{ color: brand.primary_color }}>
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-12">Get answers to common questions about our practice</p>
          </ScrollReveal>

          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform" style={{ color: brand.accent_color }} />
                  </button>
                  {/* Note: This is a static FAQ display. For interactive accordion, we'd need state management */}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section
        className="py-32 px-6 text-center"
        style={{ backgroundColor: brand.accent_color }}
      >
        <ScrollReveal>
          <h2 className="text-5xl font-serif text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {content.value_prop}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton className="bg-white text-gray-900 px-12 py-4 text-lg">
              {content.cta_text || "TEST DEPLOYMENT ACTIVE"}
            </ShinyButton>
            {content.cta_secondary_text && (
              <button className="px-12 py-4 text-lg border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all">
                {content.cta_secondary_text}
              </button>
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
// Updated: Fri Feb 20 16:46:06 UTC 2026
