import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function RootCause() {
  return (
    <section className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-cream-dark rounded-3xl p-10 lg:p-16 flex flex-col min-h-[480px] lg:min-h-[580px]"
        >
          {/* Eyebrow */}
          <span className="text-[11px] font-semibold tracking-widest uppercase text-charcoal/35 mb-10 block">
            Our Philosophy
          </span>

          {/* Large title */}
          <h2 className="text-[44px] lg:text-[72px] font-heading font-semibold text-charcoal leading-[1.0]">
            Treat the Cause,<br />
            Not Just the Reaction
          </h2>

          {/* Flex spacer */}
          <div className="flex-1 min-h-12" />

          {/* Divider + content */}
          <div className="border-t border-charcoal/10 pt-8 lg:pt-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-10">

              {/* Without us */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/35 mb-5">Without us</p>
                <ul className="space-y-3">
                  {[
                    'Temporary relief only',
                    'Daily medication dependency',
                    'Symptoms return when meds stop',
                    'Potential long-term side effects',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-charcoal/50 font-light">
                      <span className="mt-0.5 text-charcoal/25 shrink-0 text-[18px] leading-none">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With us */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sage mb-5">With us</p>
                <ul className="space-y-3">
                  {[
                    'Long-term, sustainable relief',
                    'Reduces or eliminates daily meds',
                    'Changes how your body responds',
                    'May prevent new allergies from developing',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-charcoal font-light">
                      <span className="mt-0.5 text-sage shrink-0 text-[18px] leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#"
              className="group w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white py-4 rounded-2xl text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors"
            >
              Start Treatment
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
