import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ClinicInfoBar from './ClinicInfoBar';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Fade the video (no blur) as content scrolls over it
  const videoOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section id="hero" className="relative" ref={heroRef}>

      {/* ── Sticky video — fades as content scrolls over it ── */}
      <div className="sticky top-[78px] z-0 px-[18px] lg:px-[25px] pt-6">
        <div className="relative w-full min-h-[68vh] lg:min-h-[68vh] rounded-2xl overflow-hidden">

          {/* Video + gradient fade together, H1 stays full opacity */}
          <motion.div
            style={{ opacity: videoOpacity }}
            className="absolute inset-0"
          >
            <video
              src="/videos/clinic_front.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
            />
          </motion.div>

          {/* H1 — top left, unaffected by scroll fade */}
          <div className="absolute top-[22px] left-[22px] lg:top-[32px] lg:left-[32px] z-10 max-w-2xl">
            <h1 className="text-[46px] lg:text-[82px] font-bold text-charcoal leading-[1.0]">
              <span className="block font-heading tracking-tight">Waco's Allergy Clinic</span>
            </h1>
          </div>

        </div>
      </div>

      {/* ── Scrolling content — closes over the video ── */}
      {/* Extra top padding ensures Breathe Easy fully covers the video before 45yr content appears */}
      <div className="relative z-10 bg-cream -mt-16 rounded-t-[2.5rem]">

        {/* ── Clinic info bar — left edge aligns with H1 above ── */}
        <div className="px-10 lg:px-[57px] pt-7 lg:pt-9">
          <ClinicInfoBar />
        </div>

        {/* ── Breathe [SVG] Easy. ── */}
        <div className="px-[18px] lg:px-[25px] pt-10 lg:pt-10 pb-10 lg:pb-16">
          <div className="flex items-center justify-center gap-3 lg:gap-5">
            <span
              className="font-display font-semibold text-charcoal leading-none"
              style={{ fontSize: 'clamp(50px, 10.5vw, 182px)' }}
            >
              Breathe
            </span>

            <img
              src="/images/icons/texas_aacow.svg"
              alt="Allergy & Asthma Care of Waco — Texas"
              className="shrink-0"
              style={{ height: 'clamp(57px, 9.75vw, 168px)', width: 'auto', filter: 'brightness(0)' }}
            />

            <span
              className="font-display font-semibold text-charcoal leading-none"
              style={{ fontSize: 'clamp(50px, 10.5vw, 182px)' }}
            >
              Easy.
            </span>
          </div>
        </div>

        {/* ── 45 years statement + CTA ── */}
        <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px] flex flex-col items-center text-center pb-16 lg:pb-20">
          <h2 className="text-[36px] lg:text-[58px] font-heading font-normal text-charcoal leading-[1.06] mb-10 lg:mb-12 max-w-4xl">
            <strong>For over 45 years</strong>, our board-certified allergists
            have helped Waco families breathe easier, live more fully, and stop
            guessing at their symptoms.
          </h2>

          <a
            href="#"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-hover text-white px-7 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[15px] lg:text-[16px] font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Appointment
          </a>
        </div>

      </div>

    </section>
  );
}
