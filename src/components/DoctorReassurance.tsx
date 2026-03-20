import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function DoctorReassurance() {
  return (
    <section className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        {/* Centered quote at top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-terracotta mb-6 block">A Message From Our Team</span>
          <h2 className="font-display text-[36px] lg:text-[58px] italic font-normal text-charcoal leading-[1.2]">
            "Your immune system learned to overreact. We can teach it to stop."
          </h2>
        </motion.div>

        {/* Doctor video — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto mb-16 lg:mb-20"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer">
            <img
              src="https://picsum.photos/seed/doctor/800/1000?blur=1"
              alt="Dr. Smith"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-7 h-7 ml-1" fill="currentColor" />
              </div>
            </div>
            {/* Doctor credit */}
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-heading text-lg font-semibold">Dr. Jane Smith, MD</p>
              <p className="text-white/70 text-sm font-light">Board-Certified Allergist & Immunologist</p>
            </div>
          </div>
        </motion.div>

        {/* Supporting text — centered below video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center space-y-5 text-[17px] text-charcoal/70 font-light leading-relaxed"
        >
          <p>
            Many patients come to us after years of trying over-the-counter medications, avoiding the outdoors, or simply accepting that they'll always feel a little sick.
          </p>
          <p>
            Our approach is different. We look for the specific triggers driving your immune response — then address them directly, not just the symptoms they cause.
          </p>
          <p>
            You deserve to breathe freely and live fully. Most of our patients are surprised by how much better they can feel.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
