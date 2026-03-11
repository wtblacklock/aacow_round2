import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-8 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Hero video */}
        <div className="px-[25px]">
        <div className="relative w-full min-h-[48vh] rounded-2xl overflow-hidden">
          <video
            src="/videos/clinic_front.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#372426]/50 mix-blend-multiply" />

          {/* H1 — top left */}
          <div className="absolute top-[25px] left-[25px] z-10 max-w-xl">
            <h1 className="text-[57px] lg:text-[90px] font-heading font-bold !text-cream leading-[0.95] tracking-normal">
              <span className="block">Waco's Allergy Clinic</span>
            </h1>
          </div>

          {/* Bottom right — tagline + CTA */}
          <div className="absolute bottom-[57px] right-[25px] z-10 text-right flex flex-col items-end gap-4">
            <div>
              <p className="text-[44px] lg:text-[70px] font-heading font-bold !text-cream leading-[0.95]">Breathe Easy</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center bg-cream text-charcoal hover:bg-white px-8 py-4 rounded-2xl text-[16px] font-semibold transition-all shadow-lg hover:-translate-y-0.5">
              Book Appointment
            </a>
          </div>
        </div>
        </div>

        {/* Below image — headline */}
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px] flex flex-col items-center text-center">
          <img
            src="/images/icons/texas_aacow.svg"
            alt="Allergy & Asthma Care of Waco — Texas"
            className="mt-20 mb-8 h-20 w-auto"
          />
          <h2 className="text-[41px] lg:text-[61px] font-heading font-normal text-charcoal leading-[1.05] mb-16 max-w-5xl">
            <strong>For over 45 years</strong>, our board-certified allergists have helped Waco families breathe easier, live more fully, and stop guessing at their symptoms.
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
