import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "After suffering for years with what I thought were just 'bad colds', the team here finally diagnosed my severe dust mite allergy. The immunotherapy has completely changed my life. I can breathe again.",
    author: "Sarah M.",
    location: "Waco, TX",
    initial: "S",
  },
  {
    quote: "They were so patient with my son's food allergy testing. The doctors took the time to explain everything to us and created a clear, manageable plan. We feel so much more confident now.",
    author: "David L.",
    location: "Woodway, TX",
    initial: "D",
  },
  {
    quote: "I've been to several specialists over the years, but the care here is unmatched. They don't just rush you out the door — they genuinely want to find the root cause of your symptoms.",
    author: "Emily R.",
    location: "Hewitt, TX",
    initial: "E",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-forest mb-4 block">Patient Stories</span>
          <h2 className="text-[52px] lg:text-[80px] font-heading font-semibold text-charcoal leading-[1.0]">
            Real Relief, Real Lives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Quote */}
              <blockquote className="font-display italic text-[22px] lg:text-[28px] text-charcoal leading-[1.55] font-light flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-sand flex items-center justify-center text-charcoal font-heading text-2xl shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-[14px]">{t.author}</p>
                  <p className="text-[12px] text-charcoal/50 font-light">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
