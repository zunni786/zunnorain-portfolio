import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND, TOOLS, CERTIFICATIONS } from '@/src/constants';
import Button from '@/src/components/Button';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';
import { Award, Calendar, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-32 space-y-32">
      {/* Intro */}
      <section className="container mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
              About Me
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              I'm Zunnorain Ali
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              A specialized SEO Outreach Specialist and Link Builder dedicated to helping SaaS, AI tools, and B2B brands improve their authority and rankings through strategic execution.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I don't believe in "hacks" or overnight dominance. I believe in white-hat outreach, high-quality content, and building relationships that result in long-term organic growth. My approach combines strategic thinking with practical execution to deliver results that high-ticket clients expect.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BRAND.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href={`mailto:${BRAND.email}`}>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" /> Email Me
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-4">
              <div className="w-full h-full rounded-2xl brand-gradient flex items-center justify-center text-white text-9xl font-display font-bold">
                ZA
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Credentials" 
          title="Licenses & Certifications" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {cert.date}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-brand-primary font-medium">{cert.issuer}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-[10px] font-mono text-slate-500">ID: {cert.id}</div>
                <button className="text-xs font-bold text-white flex items-center hover:text-brand-primary transition-colors">
                  Show Credential <ShieldCheck className="w-3 h-3 ml-1" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* My Approach */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Philosophy" 
          title="Why Work With Me" 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Over Volume",
              desc: "I focus on securing links from relevant, high-authority domains that actually move the needle, rather than chasing vanity metrics."
            },
            {
              title: "White-Hat Only",
              desc: "No PBNs, no spam, no shortcuts. My methods are 100% compliant with search engine guidelines to protect your brand's future."
            },
            {
              title: "Strategic Thinking",
              desc: "I don't just build links; I align outreach with your overall SEO strategy, keyword goals, and business objectives."
            }
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Tools Stack */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Stack" 
          title="Tools I Master" 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-6 rounded-2xl flex items-center justify-center text-center group hover:border-brand-primary/30 transition-all"
            >
              <span className="text-lg font-bold text-slate-400 group-hover:text-white transition-colors">
                {tool}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 text-center">
        <SectionHeading 
          subtitle="Connect" 
          title="Let's Build Something Great" 
        />
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          Whether you're a SaaS founder or an SEO manager at an agency, I'm here to support your growth goals with elite outreach.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">Book a Strategy Call</Button>
          <Button variant="ghost" size="lg">View My Results <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </section>
    </div>
  );
}
