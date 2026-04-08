import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Globe, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, SERVICES, RESULTS_STATS, PLACEMENTS, TESTIMONIALS, FAQS, CERTIFICATIONS } from '@/src/constants';
import Button from '@/src/components/Button';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section - Glassmorphism Dashboard */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />

        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 via-transparent to-indigo-500/3 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border-white/10 text-blue-300 text-sm font-medium backdrop-blur-md"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Premium SEO Growth Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                Scale Your Authority With{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Elite
                </span>{' '}
                SEO Outreach
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-slate-300 max-w-lg leading-relaxed"
              >
                Helping SaaS, AI tools, and B2B brands grow through strategic outreach, high-quality link building, and practical SEO execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="glass-panel border-white/20 hover:border-white/30 text-white hover:bg-white/5">
                    View Services
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-wrap gap-6 pt-8"
              >
                <div className="flex items-center space-x-2 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">White-hat Execution</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">SaaS & AI Focused</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">Growth Driven</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Dashboard Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Analytics Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-panel rounded-3xl p-8 border-white/10 shadow-2xl shadow-blue-500/10 mb-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Domain Authority</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="flex items-end space-x-2 mb-4">
                    <span className="text-4xl font-bold text-white">87</span>
                    <span className="text-green-400 text-sm font-medium mb-1">+12</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[87%]" />
                  </div>
                  <p className="text-slate-400 text-sm">Target: 95+ in 6 months</p>
                </div>
              </motion.div>

              {/* Performance Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="glass-panel rounded-2xl p-6 border-white/5 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-green-400 text-xs font-medium">+24%</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">2.4K</div>
                  <p className="text-slate-400 text-xs">Organic Traffic</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="glass-panel rounded-2xl p-6 border-white/5 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Globe className="w-5 h-5 text-indigo-400" />
                    <span className="text-blue-400 text-xs font-medium">+8</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">156</div>
                  <p className="text-slate-400 text-xs">Backlinks</p>
                </motion.div>
              </div>

              {/* Chart Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="glass-panel rounded-3xl p-8 border-white/10 shadow-xl relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-6">Growth Trajectory</h3>
                  <div className="flex items-end justify-between h-24 mb-4">
                    {[40, 55, 45, 70, 85, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                        className="bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t w-8 relative"
                      >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>6 Months</span>
                    <span className="text-green-400">+127% Growth</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Status Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -right-4 glass-panel rounded-2xl p-4 border-white/5 shadow-lg w-48"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <p className="text-white text-sm font-medium">Campaign Active</p>
                    <p className="text-slate-400 text-xs">3 outreach projects</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="container mx-auto px-6">
        <GlassCard hover={false} className="py-12 border-white/5">
          <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-10">
            Certified At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['Semrush', 'Coursera', 'HubSpot', 'AIChief', 'Ahrefs'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Core Expertise */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Expertise" 
          title="What I Do Best" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, index) => (
            <GlassCard key={service.id} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="ghost">Explore All Services <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>
      </section>

      {/* Results Snapshot */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 -skew-y-3" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading 
            subtitle="Proof" 
            title="Results That Matter" 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESULTS_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-5xl md:text-6xl font-display font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-brand-primary font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </div>
                <p className="text-slate-500 text-sm">
                  {stat.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Placements */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Authority" 
          title="Selected Placements" 
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {PLACEMENTS.slice(0, 18).map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-4 rounded-xl flex items-center justify-center text-center group hover:bg-white/5 transition-all"
            >
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                {domain}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/results">
            <Button variant="outline">View All Wins</Button>
          </Link>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="container mx-auto px-6">
        <GlassCard className="p-0 overflow-hidden border-white/5" hover={false}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 space-y-8">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                Featured Case Study
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                SEO Growth for a SaaS AI Tools Website
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                How we built a high-authority backlink profile and increased organic traffic by 48% in just 6 months.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-white">48%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Traffic Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">70+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Backlinks Built</div>
                </div>
              </div>
              <Link to="/case-studies" className="inline-block">
                <Button>Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative min-h-[300px] flex items-center justify-center p-8">
              <div className="glass-panel p-6 rounded-2xl w-full max-w-md shadow-2xl transform rotate-3">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Performance Snapshot</div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                  <div className="h-24 bg-brand-primary/10 rounded-lg flex items-end p-4 space-x-2">
                    {[40, 60, 45, 70, 85, 65, 90].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="flex-grow bg-brand-primary/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-white/5 rounded" />
                    <div className="h-8 bg-white/5 rounded" />
                    <div className="h-8 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Testimonials" 
          title="What Clients Say" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <GlassCard key={i} className="flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex text-brand-primary">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xl text-slate-300 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>
              <div className="mt-10 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.role} @ {t.company}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 max-w-4xl">
        <SectionHeading 
          subtitle="FAQ" 
          title="Common Questions" 
        />
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <GlassCard key={i} hover={false} className="p-0 overflow-hidden">
              <details className="group">
                <summary className="p-6 flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-bold text-white group-open:text-brand-primary transition-colors">
                    {faq.question}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6">
        <GlassCard className="py-20 text-center space-y-8 brand-gradient relative overflow-hidden border-none" hover={false}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Ready to Scale Your Organic Growth?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Let’s discuss how strategic outreach and high-quality link building can transform your search visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Book a Strategy Call</Button>
              </Link>
              <a href={`mailto:${BRAND.email}`}>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 hover:bg-white/20">
                  Send an Email
                </Button>
              </a>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
