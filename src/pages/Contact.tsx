import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, Send, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import { BRAND } from '@/src/constants';
import Button from '@/src/components/Button';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';

export default function Contact() {
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
            Let's Talk Growth
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Ready to scale your authority? Fill out the form below or reach out directly.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm currently open for new monthly retainers and strategic outreach projects. Let's discuss how I can support your brand.
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${BRAND.email}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mr-6 group-hover:brand-gradient transition-all">
                  <Mail className="w-6 h-6 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Me</div>
                  <div className="text-lg text-white font-medium">{BRAND.email}</div>
                </div>
              </a>

              <a href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mr-6 group-hover:brand-gradient transition-all">
                  <MessageSquare className="w-6 h-6 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">WhatsApp</div>
                  <div className="text-lg text-white font-medium">{BRAND.whatsapp}</div>
                </div>
              </a>

              <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mr-6 group-hover:brand-gradient transition-all">
                  <Linkedin className="w-6 h-6 text-brand-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">LinkedIn</div>
                  <div className="text-lg text-white font-medium">Zunnorain Ali</div>
                </div>
              </a>
            </div>

            <GlassCard hover={false} className="border-brand-primary/20 bg-brand-primary/5">
              <h4 className="text-white font-bold mb-2 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-brand-primary" /> Global Service
              </h4>
              <p className="text-slate-400 text-sm">
                I work with clients across the US, UK, Canada, and Europe. All meetings are scheduled in your preferred timezone.
              </p>
            </GlassCard>
          </div>

          {/* Form */}
          <GlassCard hover={false} className="p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Inc." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Website URL</label>
                  <input 
                    type="url" 
                    placeholder="https://acme.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Project Goals</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your growth goals..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full py-4 text-lg">
                Send Message <Send className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-center text-slate-500 text-xs">
                I typically respond within 24 hours.
              </p>
            </form>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
