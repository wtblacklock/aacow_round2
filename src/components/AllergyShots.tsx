import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AllergyShots() {
  const benefits = [
    'Long-term relief — not just symptom suppression',
    'Reduces or eliminates daily medication',
    'Can prevent new allergies from developing',
    'May prevent asthma in children with allergic rhinitis',
    'Customized to your specific triggers',
  ];

  return (
    <section id="immunotherapy" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-[1fr_calc(50%+225px)] gap-6 lg:gap-12 items-center"
        >

          {/* Left — text content */}
          <div className="flex flex-col justify-center lg:pr-4">
            <span className="text-forest text-[11px] font-medium tracking-widest uppercase mb-6 block">
              Featured Treatment
            </span>

            <h2 className="text-[38px] lg:text-[54px] font-heading font-semibold text-charcoal leading-[1.05] mb-6">
              The closest thing to a{' '}
              <em className="not-italic font-semibold">cure</em>.
            </h2>

            <p className="text-[17px] text-charcoal font-light leading-relaxed mb-10 max-w-md">
              Immunotherapy doesn't just mask symptoms — it changes how your immune system responds to allergens, providing relief that lasts.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <span className="text-[16px] text-charcoal font-light leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-hover text-white px-7 py-4 rounded-xl text-[14px] font-semibold transition-all hover:-translate-y-0.5 self-start"
            >
              Learn About Immunotherapy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right — image card with hanging stat badge */}
          <div className="relative">

            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ height: 'clamp(389px, 50vw, 865px)' }}>
              <img
                src="/images/treatments/aacow_shot.png"
                alt="Doctor administering immunotherapy treatment"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />
            </div>

            {/* Stat badge — own card, hanging off the bottom-left corner */}
            <div className="absolute bottom-6 left-4 md:-left-10 w-52 bg-cream-dark rounded-2xl px-5 py-4 z-10">
              <div className="text-[40px] font-heading font-semibold text-charcoal leading-none mb-1">85%</div>
              <p className="text-[12px] text-charcoal/70 font-light leading-snug">
                of patients report significant symptom reduction after completing immunotherapy
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
