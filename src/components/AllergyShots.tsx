import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AllergyShots() {
  const benefits = [
    "Long-term relief from symptoms",
    "Reduces need for daily medications",
    "Can prevent the development of new allergies",
    "May prevent asthma in children with allergic rhinitis",
    "Customized to your specific triggers",
  ];

  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-6 block">Featured Treatment</span>
            <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-8 leading-[1.1]">
              The Closest Thing to a <span className="italic text-accent">Cure</span>.
            </h2>
            
            <p className="text-xl text-charcoal font-light leading-relaxed mb-10">
              Immunotherapy (allergy shots) doesn't just mask your symptoms—it changes how your immune system reacts to allergens, providing lasting relief.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-charcoal font-light">{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-2xl text-base font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Learn About Immunotherapy
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/shots/800/1000?blur=1" 
                alt="Allergy Shots" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-12 -left-12 bg-cream-dark p-8 rounded-2xl max-w-[280px] hidden md:block">
              <div className="text-4xl font-heading text-accent mb-2">85%</div>
              <p className="text-sm text-charcoal font-medium leading-snug">
                Of patients experience significant reduction in symptoms and medication use after completing immunotherapy.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
