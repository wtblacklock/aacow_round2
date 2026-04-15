import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    category: "Allergy Seasons",
    title: "Surviving Cedar Fever in Central Texas",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format&q=80",
    excerpt: "Everything you need to know about Mountain Cedar pollen, when it peaks, and how to prepare before the season hits.",
  },
  {
    category: "Asthma Care",
    title: "Is It a Cold or Allergy-Induced Asthma?",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&auto=format&q=80",
    excerpt: "Learn to spot the subtle differences between a lingering winter cold and asthma symptoms triggered by indoor allergens.",
  },
  {
    category: "Treatments",
    title: "What to Expect at Your First Allergy Test",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80",
    excerpt: "Demystifying the skin prick test: how it works, what it feels like, and why it's the gold standard for diagnosis.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 lg:py-36 bg-cream overflow-hidden">

      {/* Header — contained */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px] mb-16 lg:mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-forest mb-4 block">Patient Resources</span>
            <h2 className="text-[52px] lg:text-[80px] font-heading font-semibold text-charcoal mb-6 leading-[1.0]">
              Empowering You With Knowledge
            </h2>
            <p className="text-lg text-charcoal font-light leading-relaxed">
              Stay informed with the latest insights, practical tips, and expert advice from our board-certified allergists.
            </p>
          </motion.div>
          {/* Desktop only */}
          <a href="#" className="hidden lg:inline-flex group items-center justify-center gap-2 bg-cream-dark hover:bg-sand/50 text-charcoal px-8 py-4 rounded-2xl text-base font-medium transition-all shrink-0">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Full-width card grid */}
      <div className="grid md:grid-cols-3 gap-3 px-3">
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotateX: -22 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true, margin: '0px 0px 200px 0px' }}
            style={{ transformOrigin: 'bottom center', transformPerspective: 900 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: idx * 0.2, opacity: { duration: 0.2, ease: 'easeOut', delay: idx * 0.2 } }}
            className="group rounded-2xl overflow-hidden cursor-pointer flex flex-col transition-colors duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-forest">
                {article.category}
              </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs text-charcoal/50 mb-5 font-medium uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </div>
              <h3 className="text-[24px] lg:text-[28px] font-heading font-semibold text-charcoal mb-4 group-hover:text-forest transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-[15px] text-charcoal font-light leading-relaxed mb-8 flex-grow">
                {article.excerpt}
              </p>
              <div className="flex items-center text-[14px] font-medium text-charcoal group-hover:text-forest transition-colors mt-auto">
                Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile-only View All button — below cards */}
      <div className="lg:hidden mt-10 px-3">
        <a href="#" className="group inline-flex w-full items-center justify-center gap-2 bg-cream-dark hover:bg-sand/50 text-charcoal px-8 py-4 rounded-2xl text-base font-medium transition-all">
          View All Articles
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </section>
  );
}
