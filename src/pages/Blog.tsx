import { motion } from 'motion/react';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';
import Button from '@/src/components/Button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: "How to Build Relevant Backlinks Without Spam",
    excerpt: "Learn the strategic approach to manual outreach that secures high-authority links while protecting your brand's reputation.",
    category: "Link Building",
    date: "Mar 15, 2026",
    readTime: "6 min read"
  },
  {
    title: "What Makes Outreach Campaigns Actually Work",
    excerpt: "The secret sauce behind high reply rates and successful placements in competitive niches like SaaS and AI.",
    category: "SEO Outreach",
    date: "Mar 02, 2026",
    readTime: "8 min read"
  },
  {
    title: "Link Building for SaaS Brands: What Matters Most",
    excerpt: "Why topical relevance and domain authority are the two pillars of successful SaaS SEO growth in 2026.",
    category: "SaaS SEO",
    date: "Feb 18, 2026",
    readTime: "5 min read"
  },
  {
    title: "Why Relevance Beats Volume in Modern SEO",
    excerpt: "Stop chasing vanity metrics. Discover why one high-relevance link is worth more than a hundred low-quality ones.",
    category: "SEO Strategy",
    date: "Feb 05, 2026",
    readTime: "7 min read"
  }
];

export default function Blog() {
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
            SEO Insights
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Strategic advice on outreach, link building, and organic growth for modern brands.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Link Building", "SEO Outreach", "On-Page SEO", "SaaS SEO", "Content Strategy"].map((cat, i) => (
            <button 
              key={i}
              className="px-6 py-2 rounded-full glass-panel border-white/5 text-sm font-medium hover:bg-brand-primary hover:text-white transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col h-full">
              <div className="space-y-6 flex-grow">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-primary">
                  <div className="flex items-center">
                    <Tag className="w-3 h-3 mr-2" /> {post.category}
                  </div>
                  <div className="flex items-center text-slate-500">
                    <Calendar className="w-3 h-3 mr-2" /> {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white hover:text-brand-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center text-xs text-slate-500 font-medium">
                  <Clock className="w-3 h-3 mr-2" /> {post.readTime}
                </div>
                <button className="text-brand-primary font-bold text-sm flex items-center group">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6">
        <GlassCard className="py-20 text-center space-y-8 border-white/5" hover={false}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get SEO Insights in Your Inbox
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Join 500+ SaaS founders and SEOs who receive my monthly outreach tips.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
            />
            <Button>Subscribe</Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
