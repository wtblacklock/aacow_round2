import { motion } from 'motion/react';
import { XCircle, CheckCircle } from 'lucide-react';

export default function RootCause() {
  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Our Philosophy</span>
          <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
            Treat the Cause, Not Just the Reaction
          </h2>
          <p className="text-lg text-charcoal font-light leading-relaxed">
            We believe in addressing the underlying immune response that causes your allergies and asthma, rather than simply suppressing the symptoms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Symptom Management (The Old Way) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-cream-dark rounded-2xl p-10 lg:p-14 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-8">
              <XCircle className="w-10 h-10 text-charcoal/40" />
            </div>
            <h3 className="text-2xl font-heading text-charcoal mb-6">Symptom Management</h3>
            <p className="text-charcoal font-light leading-relaxed mb-8">
              Relying solely on over-the-counter medications to temporarily relieve symptoms without addressing the underlying cause.
            </p>
            <ul className="space-y-4 text-left w-full max-w-sm mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-1">✗</span>
                <span className="text-charcoal font-light">Temporary relief</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-1">✗</span>
                <span className="text-charcoal font-light">Daily medication dependency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-1">✗</span>
                <span className="text-charcoal font-light">Symptoms return when medication stops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-charcoal/40 mt-1">✗</span>
                <span className="text-charcoal font-light">Potential side effects from long-term use</span>
              </li>
            </ul>
          </motion.div>

          {/* Root Cause Treatment (Our Approach) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-charcoal rounded-2xl p-10 lg:p-14 flex flex-col items-center text-center text-white"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-heading mb-6">Root Cause Treatment</h3>
            <p className="font-light leading-relaxed mb-8 text-white/90">
              Identifying specific triggers and modifying the immune system's response for lasting, natural relief.
            </p>
            <ul className="space-y-4 text-left w-full max-w-sm mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span className="font-light text-white/90">Long-term, sustainable relief</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span className="font-light text-white/90">Reduces or eliminates need for daily meds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span className="font-light text-white/90">Changes how your body reacts to allergens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span className="font-light text-white/90">May prevent new allergies from developing</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
