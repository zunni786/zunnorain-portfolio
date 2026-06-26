import { Link } from 'react-router-dom';
import { Mail, Linkedin, Phone, ArrowUpRight, Facebook, Instagram } from 'lucide-react';
import { BRAND, NAVIGATION } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter">
              ZUNNORAIN ALI
            </Link>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Premium SEO Outreach & Link Building for SaaS, AI tools, and growth-focused B2B brands.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/zunnorainrajpoot7" target="_blank" rel="noreferrer" className="social-icon">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zunnorainrajpoot7/" target="_blank" rel="noreferrer" className="social-icon">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${BRAND.email}`} className="social-icon">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-brand-primary transition-colors flex items-center group">
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-brand-primary transition-colors">SEO Outreach</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Link Building</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Guest Posting</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-primary transition-colors">Keyword Research</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>{BRAND.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>{BRAND.whatsapp}</span>
              </li>
              <li className="pt-4">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Availability</p>
                <p className="text-white text-sm">Open for new retainers</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
