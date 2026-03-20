import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

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
          className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center"
        >

          {/* Left — image card with hanging stat badge */}
          <div className="relative">

            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://picsum.photos/seed/shots/800/600?blur=1"
                alt="Immunotherapy treatment"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/35 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/25 group-hover:border-white/60 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Stat badge — own card, hanging off the bottom-right corner */}
            <div className="absolute bottom-6 -right-10 w-52 bg-cream-dark rounded-2xl px-5 py-4 z-10">
              <div className="text-[40px] font-heading font-semibold text-charcoal leading-none mb-1">85%</div>
              <p className="text-[12px] text-charcoal/70 font-light leading-snug">
                of patients report significant symptom reduction after completing immunotherapy
              </p>
            </div>

          </div>

          {/* Right — text content, no background */}
          <div className="flex flex-col justify-center lg:pl-4">
            <span className="text-terracotta text-[11px] font-medium tracking-widest uppercase mb-6 block">
              Featured Treatment
            </span>

            <h2 className="text-[38px] lg:text-[54px] font-heading font-semibold text-charcoal leading-[1.05] mb-6">
              The closest thing to a{' '}
              <em className="font-display italic font-normal text-charcoal/55">cure</em>.
            </h2>

            <p className="text-[17px] text-charcoal/80 font-light leading-relaxed mb-10 max-w-md">
              Immunotherapy doesn't just mask symptoms — it changes how your immune system responds to allergens, providing relief that lasts.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <span className="text-[16px] text-charcoal/80 font-light leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-accent text-white px-7 py-4 rounded-xl text-[14px] font-semibold transition-all hover:-translate-y-0.5 self-start"
            >
              Learn About Immunotherapy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
