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
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.95fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300 shadow-lg shadow-black/30 backdrop-blur-md">
                About Me
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Founder-led digital experiences with a premium product mindset.
              </h1>
              <p className="max-w-xl text-lg text-slate-300 leading-relaxed">
                I’m Zunnorain Ahmad — a founder, product strategist, and designer who builds luxury digital brands for SaaS, AI, and high-growth startups.
              </p>
              <p className="max-w-xl text-slate-400 leading-relaxed">
                My work blends thoughtful strategy with polished execution, delivering interfaces that feel refined, purposeful, and built to convert.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25">
                  Work With Me <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Say Hello
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="glass-panel rounded-3xl p-5 border-white/10 shadow-xl shadow-slate-950/40">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Experience</p>
                  <p className="mt-4 text-3xl font-bold text-white">5+ yrs</p>
                </div>
                <div className="glass-panel rounded-3xl p-5 border-white/10 shadow-xl shadow-slate-950/40">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Product Focus</p>
                  <p className="mt-4 text-3xl font-bold text-white">SaaS + AI</p>
                </div>
                <div className="glass-panel rounded-3xl p-5 border-white/10 shadow-xl shadow-slate-950/40">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Clients</p>
                  <p className="mt-4 text-3xl font-bold text-white">Founders & Teams</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,23,42,0.5)]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/40">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
                <img
                  src="/profile.png"
                  alt="Portrait of Zunnorain Ahmad"
                  className="relative h-full w-full object-cover"
                />
              </div>

              <div className="absolute -top-6 right-6 glass-panel rounded-3xl px-5 py-4 w-56 border-white/10 shadow-xl shadow-slate-950/30">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Featured Skill</p>
                <p className="mt-3 text-sm font-semibold text-white">Strategic Product Design</p>
              </div>

              <div className="absolute bottom-8 left-6 glass-panel rounded-3xl px-5 py-4 w-52 border-white/10 shadow-xl shadow-slate-950/30">
                <div className="text-3xl font-bold text-white">87</div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Portfolio Score</p>
              </div>

              <div className="absolute bottom-20 right-0 glass-panel rounded-3xl px-4 py-3 w-48 border-white/10 shadow-xl shadow-slate-950/30">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span>Founder-led projects</span>
                </div>
              </div>

              <div className="absolute -left-6 top-28 glass-panel rounded-3xl px-5 py-4 w-48 border-white/10 shadow-xl shadow-slate-950/30">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Achievement</div>
                <p className="mt-3 text-sm font-semibold text-white">Launch-ready brand systems</p>
              </div>
            </motion.div>
          </div>
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
