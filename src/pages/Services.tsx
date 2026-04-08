import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';
import Button from '@/src/components/Button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="pb-32 space-y-32">
      {/* Header */}
      <section className="container mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gradient">
            Strategic SEO Services
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Comprehensive SEO outreach and link building solutions designed for high-growth brands and agencies.
          </p>
        </motion.div>
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <GlassCard key={service.id} delay={i * 0.1} className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="w-16 h-16 shrink-0 rounded-2xl brand-gradient flex items-center justify-center shadow-xl shadow-brand-primary/20">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Additional Expertise */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="More" 
          title="Other Specialized Support" 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Link Insertions",
            "Blogger Outreach",
            "Link Prospecting",
            "Internal Linking",
            "Anchor Text Strategy",
            "Schema Markup",
            "Content Writing",
            "SEO Audits"
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.05} className="text-center py-8">
              <span className="text-lg font-bold text-white">{item}</span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <GlassCard className="py-20 text-center space-y-8 border-white/5" hover={false}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Need a Custom SEO Plan?
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Let's build a strategy that aligns with your specific growth goals and budget.
          </p>
          <Button size="lg">Get a Custom Outreach Plan <ArrowRight className="ml-2 w-5 h-5" /></Button>
        </GlassCard>
      </section>
    </div>
  );
}
