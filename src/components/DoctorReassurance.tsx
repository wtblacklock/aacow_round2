import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function DoctorReassurance() {
  return (
    <section className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-terracotta mb-6 block">A Message From Our Team</span>
          <h2 className="font-display text-[38px] lg:text-[52px] font-light text-charcoal leading-[1.2] max-w-5xl mx-auto">
            "Your immune system learned to overreact. We can teach it to stop."
          </h2>
        </motion.div>

        {/* Centered video */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md"
          >
            <div className="aspect-[9/16] rounded-2xl overflow-hidden relative group cursor-pointer">
              <video
                src="/videos/aacow_fowler.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-[1.05] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Doctor name card */}
            <div className="absolute bottom-6 -left-10 w-52 bg-cream-dark rounded-2xl px-5 py-4 z-10 hidden md:block">
              <p className="font-heading font-semibold text-charcoal text-[16px] leading-snug mb-1">
                Dustin Lee Fowler, DO
              </p>
              <p className="text-[12px] text-charcoal/70 font-light leading-snug">
                Board-Certified Allergist & Immunologist
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
