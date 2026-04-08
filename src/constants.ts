import { 
  Search, 
  Link as LinkIcon, 
  FileText, 
  BarChart3, 
  Mail, 
  Target, 
  Globe, 
  Zap, 
  Layers, 
  PenTool, 
  Maximize, 
  Network,
  TrendingUp,
  CheckCircle2,
  Users,
  MessageSquare
} from 'lucide-react';

export const BRAND = {
  name: "Zunnorain Ali",
  title: "SEO Outreach Specialist & Link Builder",
  email: "zunnorainrajpoot7@gmail.com",
  whatsapp: "+92 325 6186169",
  linkedin: "https://www.linkedin.com/in/zunnorain-ali/",
  location: "Pakistan (Serving Global Clients)",
  tagline: "Helping SaaS, AI tools, and B2B brands scale through strategic SEO outreach and high-authority link building.",
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Results', path: '/results' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'seo-outreach',
    title: 'SEO Outreach',
    description: 'Strategic manual outreach to high-authority websites in your niche to secure natural mentions and placements.',
    icon: Mail,
    features: ['Manual prospecting', 'Customized pitch decks', 'Relationship building', 'Niche-relevant targets']
  },
  {
    id: 'link-building',
    title: 'Link Building',
    description: 'High-quality, white-hat link building focused on authority, relevance, and long-term search growth.',
    icon: LinkIcon,
    features: ['DA 50+ placements', 'Contextual backlinks', 'Natural anchor text', 'Spam-free execution']
  },
  {
    id: 'guest-posting',
    title: 'Guest Posting Outreach',
    description: 'Securing guest post opportunities on authoritative blogs to build brand awareness and quality backlinks.',
    icon: FileText,
    features: ['Content placement', 'Authoritative sites', 'Brand mentions', 'Topical relevance']
  },
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    description: 'Identifying high-intent keywords that drive relevant traffic and support your business goals.',
    icon: Search,
    features: ['Competitor gap analysis', 'Search intent mapping', 'Long-tail opportunities', 'Difficulty assessment']
  },
  {
    id: 'content-optimization',
    title: 'Content Optimization',
    description: 'Refining your existing content to improve rankings, user engagement, and search visibility.',
    icon: PenTool,
    features: ['On-page SEO', 'Internal linking', 'Semantic optimization', 'Readability improvements']
  },
  {
    id: 'competitor-research',
    title: 'Competitor Backlink Research',
    description: 'Analyzing competitor link profiles to identify untapped opportunities for your own growth.',
    icon: Target,
    features: ['Link gap analysis', 'Strategy reverse-engineering', 'Opportunity identification', 'Benchmarking']
  }
];

export const RESULTS_STATS = [
  { label: 'Backlinks Built', value: '70+', subtext: 'In 6 months for a single SaaS' },
  { label: 'Organic Traffic Increase', value: '48%', subtext: 'Average growth across clients' },
  { label: 'Reply Rate', value: '16%', subtext: 'On manual outreach campaigns' },
  { label: 'Page 1 Rankings', value: '100+', subtext: 'Keywords moved from page 3+' },
];

export const PLACEMENTS = [
  "ContentStudio.io", "Lenso.ai", "LogoAI.com", "Board Infinity", "Apollo Technical", 
  "Powr.io", "DesignMantic", "Ful.io", "48HoursLogo", "VehicleInfo", "Kochiva", 
  "IotForAll", "LeadsBridge", "BrandCrowd", "Warmy.io", "Payhip", "DesignCrowd", 
  "DesignHill", "Toolify.ai", "EarKick", "KrispCall", "Simpalm", "EngageBay", 
  "WallStreetMojo", "360DegreeCloud"
];

export const CERTIFICATIONS = [
  {
    title: "Technical SEO and AI Search Essentials",
    issuer: "Semrush",
    date: "Feb 2026",
    expiry: "Feb 2027",
    id: "714463",
    skills: ["SEO Audits", "Search Engine Optimization (SEO)"]
  },
  {
    title: "Search Engine Optimization (SEO) with Squarespace",
    issuer: "Coursera",
    date: "Dec 2025",
    id: "1FUVWI2V3BPK",
    skills: ["Search Engine Optimization (SEO)", "Outreach Services", "Off-Page SEO"]
  },
  {
    title: "Advanced Search Engine Optimization",
    issuer: "HubSpot Academy",
    date: "Dec 2025",
    expiry: "Jan 2027",
    id: "79ff58744aa04b46915e61053873cc95",
    skills: ["Off-Page SEO", "On-Page Optimization", "Link Building", "Search Engine Optimization (SEO)"]
  },
  {
    title: "Technical SEO course with Bastian Grimm",
    issuer: "Semrush",
    date: "Dec 2025",
    expiry: "Dec 2026",
    id: "9d61e25968",
    skills: ["Off-Page SEO", "On-Page Optimization", "Link Building", "SEO Audits"]
  },
  {
    title: "AI Vs ML vs Gen AI",
    issuer: "AIChief",
    date: "Dec 2025",
    expiry: "Dec 2026",
    id: "693f0e915397d966360d7b31",
    skills: ["AI Awareness", "Modern SEO"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Salahuddin Umer",
    role: "SEO & Partnership Executive",
    company: "ContentStudio",
    content: "The work was done professionally and meets my expectations. Zunnorain is a reliable partner for SEO outreach."
  },
  {
    name: "Ling",
    role: "Marketing and Sales Manager",
    company: "LogoAI",
    content: "I’m satisfied with the results and overall quality of the work. The link placements were high quality and relevant."
  }
];

export const FAQS = [
  {
    question: "What kind of businesses do you work with?",
    answer: "I specialize in working with SaaS companies, AI tools, SEO agencies, and B2B startups looking for high-quality, white-hat growth."
  },
  {
    question: "Do you offer white-hat link building?",
    answer: "Yes, 100%. I focus on manual outreach and relationship building. No PBNs, no spammy directories, and no black-hat tactics."
  },
  {
    question: "How long does it take to see results?",
    answer: "SEO is a long-term game. While outreach results (placements) can happen within weeks, significant ranking and traffic growth typically takes 3-6 months."
  },
  {
    question: "Do you help with content and on-page SEO too?",
    answer: "Absolutely. I provide content writing, optimization, and on-page SEO support to ensure your site is ready to rank for the links we build."
  }
];

export const TOOLS = [
  "Ahrefs", "Semrush", "Google Search Console", "Google Analytics", 
  "Screaming Frog", "Surfer SEO", "ChatGPT", "Snov.io"
];

export const CASE_STUDIES = [
  {
    id: 'saas-ai-growth',
    title: 'SEO Growth for a SaaS AI Tools Website',
    clientType: 'SaaS AI Tools',
    duration: '6 Months',
    challenge: 'Lower traffic, weak backlink profile, and limited growth momentum in a highly competitive niche.',
    strategy: [
      'Full SEO audit to identify technical and content bottlenecks.',
      'Competitor backlink research to find high-value link gaps.',
      'Strategic manual outreach targeting authoritative tech and AI blogs.',
      'On-page optimization for key landing pages.'
    ],
    results: [
      'Built 70+ high-authority backlinks.',
      '48% increase in organic traffic.',
      'Significant improvement in keyword rankings (Page 3 to Page 1).',
      'Enhanced domain authority and topical relevance.'
    ],
    tools: ['Ahrefs', 'GSC', 'Google Analytics', 'ChatGPT', 'Snov.io']
  }
];
