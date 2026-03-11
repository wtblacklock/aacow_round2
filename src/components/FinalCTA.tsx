import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-36 bg-cream relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-6 lg:px-[90px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-6 block">Ready for Relief?</span>
          <h2 className="text-5xl lg:text-7xl font-heading font-semibold text-charcoal mb-8 leading-[1.05]">
            Take the First Step Toward Breathing Easier.
          </h2>
          <p className="text-xl text-charcoal font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Schedule your comprehensive evaluation today and discover a personalized path to lasting relief.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-charcoal text-white hover:bg-accent px-10 py-5 rounded-2xl text-lg font-medium transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto">
              Request Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:254-555-0199" className="inline-flex items-center justify-center gap-2 bg-transparent border border-charcoal/30 text-charcoal hover:bg-charcoal/5 px-10 py-5 rounded-2xl text-lg font-medium transition-all w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              (254) 555-0199
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
