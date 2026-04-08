import { motion } from 'motion/react';
import { PLACEMENTS, RESULTS_STATS } from '@/src/constants';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';
import Button from '@/src/components/Button';
import { TrendingUp, Link as LinkIcon, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Results() {
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
            The Proof is in the Data
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            A transparent look at the growth, authority, and placements I've secured for my clients.
          </p>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESULTS_STATS.map((stat, i) => (
            <GlassCard key={i} className="text-center py-12">
              <div className="text-5xl font-display font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4">{stat.label}</div>
              <p className="text-slate-500 text-sm">{stat.subtext}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Placements" 
          title="Where I've Secured Links" 
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {PLACEMENTS.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="glass-panel p-4 rounded-xl flex items-center justify-center text-center group hover:bg-brand-primary/10 transition-all border-white/5"
            >
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                {domain}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Proof Placeholders */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Evidence" 
          title="Growth Snapshots" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Organic Traffic Growth (SaaS)", metric: "+48%", sub: "6 Months" },
            { title: "Top 10 Keyword Improvements", metric: "+120", sub: "3 Months" },
            { title: "Domain Rating (DR) Increase", metric: "DR 24 → DR 42", sub: "8 Months" },
            { title: "Manual Outreach Reply Rate", metric: "16.4%", sub: "Lifetime Avg" }
          ].map((item, i) => (
            <GlassCard key={i} className="p-0 overflow-hidden border-white/5" hover={false}>
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <div className="flex items-end space-x-4">
                  <div className="text-4xl font-bold text-brand-primary">{item.metric}</div>
                  <div className="text-sm text-slate-500 pb-1 font-bold uppercase tracking-widest">{item.sub}</div>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-brand-primary/10 to-transparent relative flex items-center justify-center">
                <div className="w-full px-8 space-y-4">
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      className="h-full brand-gradient"
                    />
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '45%' }}
                      className="h-full brand-gradient"
                    />
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      className="h-full brand-gradient"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <TrendingUp className="w-32 h-32" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 text-center">
        <SectionHeading 
          subtitle="Scale" 
          title="Ready to See These Numbers for Your Brand?" 
        />
        <Button size="lg">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </section>
    </div>
  );
}
