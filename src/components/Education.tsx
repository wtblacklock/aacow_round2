import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    category: "Allergy Seasons",
    title: "Surviving Cedar Fever in Central Texas",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/cedar/600/400?blur=1",
    excerpt: "Everything you need to know about Mountain Cedar pollen, when it peaks, and how to prepare before the season hits.",
  },
  {
    category: "Asthma Care",
    title: "Is It a Cold or Allergy-Induced Asthma?",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/asthma/600/400?blur=1",
    excerpt: "Learn to spot the subtle differences between a lingering winter cold and asthma symptoms triggered by indoor allergens.",
  },
  {
    category: "Treatments",
    title: "What to Expect at Your First Allergy Test",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/testing/600/400?blur=1",
    excerpt: "Demystifying the skin prick test: how it works, what it feels like, and why it's the gold standard for diagnosis.",
  },
];

export default function Education() {
  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Patient Resources</span>
            <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
              Empowering You With Knowledge
            </h2>
            <p className="text-lg text-charcoal font-light leading-relaxed">
              Stay informed with the latest insights, practical tips, and expert advice from our board-certified allergists.
            </p>
          </div>
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-cream-dark hover:bg-cream-dark text-charcoal px-8 py-4 rounded-2xl text-base font-medium transition-all shrink-0">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-cream-dark rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase text-accent">
                  {article.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-charcoal mb-4 font-medium uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </div>
                <h3 className="text-xl font-heading text-charcoal mb-4 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-charcoal font-light leading-relaxed mb-8 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-accent font-medium text-sm mt-auto group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
