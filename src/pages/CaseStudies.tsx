import { motion } from 'motion/react';
import { CASE_STUDIES } from '@/src/constants';
import GlassCard from '@/src/components/GlassCard';
import SectionHeading from '@/src/components/SectionHeading';
import Button from '@/src/components/Button';
import { CheckCircle2, TrendingUp, BarChart3, Clock, Settings, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const chartData = [
  { name: 'Month 1', traffic: 1200, links: 5 },
  { name: 'Month 2', traffic: 1450, links: 12 },
  { name: 'Month 3', traffic: 1900, links: 25 },
  { name: 'Month 4', traffic: 2400, links: 40 },
  { name: 'Month 5', traffic: 3100, links: 58 },
  { name: 'Month 6', traffic: 4500, links: 72 },
];

export default function CaseStudies() {
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
            Proven Success
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Detailed breakdowns of how I've helped brands achieve significant organic growth.
          </p>
        </motion.div>
      </section>

      {/* Main Case Study */}
      <section className="container mx-auto px-6">
        {CASE_STUDIES.map((cs) => (
          <div key={cs.id} className="space-y-16">
            <GlassCard className="p-0 overflow-hidden border-white/5" hover={false}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                      {cs.clientType}
                    </div>
                    <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                      <Clock className="w-3 h-3 mr-1" /> {cs.duration}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {cs.title}
                  </h2>
                  <div className="space-y-4">
                    <h4 className="text-brand-primary font-bold uppercase tracking-widest text-xs">The Challenge</h4>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {cs.challenge}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-4">
                    {cs.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="space-y-2">
                        <div className="text-3xl font-bold text-white">{res.split(' ')[0]}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                          {res.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis 
                          dataKey="name" 
                          stroke="rgba(255,255,255,0.3)" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false}
                        />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#0f172a', 
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: '#fff'
                          }} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="traffic" 
                          stroke="#0ea5e9" 
                          fillOpacity={1} 
                          fill="url(#colorTraffic)" 
                          strokeWidth={3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-8 text-center text-slate-500 text-sm italic">
                    * Illustrative growth chart representing organic traffic trends over 6 months.
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard hover={false} className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-brand-primary" /> Strategy & Execution
                </h3>
                <ul className="space-y-4">
                  {cs.strategy.map((s, i) => (
                    <li key={i} className="flex items-start text-slate-400">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-brand-primary shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard hover={false} className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-brand-secondary" /> Key Results
                </h3>
                <ul className="space-y-4">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex items-start text-slate-400">
                      <div className="w-2 h-2 rounded-full bg-brand-secondary mr-4 mt-2 shrink-0" />
                      <span className="text-lg text-white font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {cs.tools.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-slate-400 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <SectionHeading 
          subtitle="Your Turn" 
          title="Ready for Similar Results?" 
        />
        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
          Every client is different, but the goal is always the same: sustainable, high-authority growth.
        </p>
        <Button size="lg">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Button>
      </section>
    </div>
  );
}
