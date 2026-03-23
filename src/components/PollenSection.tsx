import { motion } from 'motion/react';
import { CalendarDays, CircleHelp, Leaf, Wind, Droplets, Sprout, ArrowRight } from 'lucide-react';

type Level = 'High' | 'Moderate' | 'Low';

const levelStyle: Record<Level, { label: string }> = {
  High:     { label: 'text-terracotta' },
  Moderate: { label: 'text-[#c08830]'  },
  Low:      { label: 'text-sage'       },
};

const TRACK_GRADIENT =
  'linear-gradient(to right, rgba(107,142,90,0.55) 0% 24%, rgba(192,136,48,0.55) 26% 54%, rgba(192,96,68,0.55) 56% 79%, rgba(180,55,40,0.50) 81% 100%)';

const levelPosition: Record<Level, number> = {
  Low:      14,
  Moderate: 40,
  High:     70,
};

// Hex fills for the SVG lens shape
const dotFill: Record<Level, string> = {
  High:     '#c06044',
  Moderate: '#c08830',
  Low:      '#7a9e6e',
};

export default function PollenSection() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const pollenData: {
    name: string;
    level: Level;
    count: string;
    icon: typeof Leaf;
    iconClass?: string;
    context: string;
    localNote?: string;
  }[] = [
    {
      name: 'Trees',
      level: 'High',
      count: '1,240',
      icon: Leaf,
      context: 'Most people with allergies will feel symptoms.',
      localNote: 'Peak cedar season in Waco.',
    },
    {
      name: 'Mold',
      level: 'Low',
      count: '32',
      icon: Droplets,
      context: 'Unlikely to cause symptoms for most.',
    },
    {
      name: 'Grass',
      level: 'Moderate',
      count: '185',
      icon: Wind,
      iconClass: '-rotate-90',
      context: 'Sensitive individuals may notice symptoms.',
      localNote: 'Grass season is beginning.',
    },
    {
      name: 'Weeds',
      level: 'High',
      count: '760',
      icon: Sprout,
      context: 'Symptoms expected for most allergy sufferers.',
    },
  ];

  return (
    <section id="pollen" className="relative bg-cream py-24 lg:py-32">
      <div className="px-[18px] lg:px-[25px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center justify-center gap-1.5 mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-terracotta">
              Pollen Count
            </span>
            <span className="group relative inline-flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center text-terracotta/60 transition-colors hover:text-terracotta"
                aria-label="What is pollen count?"
              >
                <CircleHelp className="h-3 w-3" />
              </button>
              <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-[280px] -translate-x-1/2 rounded-xl bg-charcoal px-4 py-3 text-left text-sm font-sans font-normal leading-relaxed text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                Grains of pollen per cubic meter of air. High counts can trigger symptoms even in mild allergy sufferers.
              </span>
            </span>
          </span>
          <h2 className="text-[48px] lg:text-[72px] font-heading font-semibold text-charcoal mb-0 leading-[1.0]">
            Ready to head outside?
          </h2>
        </motion.div>

        {/* Video background block */}
        <div className="relative rounded-2xl overflow-hidden min-h-[500px] lg:min-h-[580px]">
          <video
            src="/videos/waco_skyline.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          style={{ objectPosition: '25% center' }}
          />

          {/* Date badge — desktop only, absolute top-left */}
          <a
            href="#education"
            className="group hidden lg:block absolute left-7 top-7 z-20 rounded-xl bg-cream/95 backdrop-blur-sm px-3.5 py-2.5 text-charcoal transition-all"
          >
            <div className="flex items-center gap-2.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-terracotta" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-charcoal/60">As of</p>
                <p className="text-sm font-medium leading-tight">{currentDate}</p>
              </div>
            </div>
            {/* Season guide link — revealed naturally as part of the badge */}
            <div className="flex items-center justify-between gap-3 mt-2 pt-2 border-t border-charcoal/10">
              <span className="text-[10px] text-charcoal/50 group-hover:text-terracotta transition-colors font-medium">
                Allergy Season Guide
              </span>
              <ArrowRight className="w-3 h-3 text-charcoal/40 group-hover:text-terracotta group-hover:translate-x-0.5 transition-all" />
            </div>
          </a>

          {/* Pollen cards — each links to the season guide */}
          <div className="relative z-10 flex min-h-[500px] lg:min-h-[580px] items-end lg:items-center justify-end px-5 pt-6 pb-6 lg:px-12 lg:py-14">
            <div className="w-full lg:max-w-[740px] flex flex-col gap-4">

              {/* Date badge — mobile/tablet only, sits above cards in flow */}
              <a
                href="#education"
                className="group lg:hidden self-start rounded-xl bg-cream/95 backdrop-blur-sm px-3.5 py-2.5 text-charcoal transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <CalendarDays className="h-4 w-4 shrink-0 text-terracotta" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-charcoal/60">As of</p>
                    <p className="text-sm font-medium leading-tight">{currentDate}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 mt-2 pt-2 border-t border-charcoal/10">
                  <span className="text-[10px] text-charcoal/50 group-hover:text-terracotta transition-colors font-medium">
                    Allergy Season Guide
                  </span>
                  <ArrowRight className="w-3 h-3 text-charcoal/40 group-hover:text-terracotta group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {pollenData.map((item, index) => {
                  const Icon = item.icon;
                  const styles = levelStyle[item.level];
                  const pos = levelPosition[item.level];

                  return (
                    <motion.a
                      href="#education"
                      key={item.name}
                      initial={{ opacity: 0, rotateX: -22 }}
                      whileInView={{ opacity: 1, rotateX: 0 }}
                      viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                      style={{ transformOrigin: 'bottom center', transformPerspective: 900 }}
                      transition={{
                        type: 'spring',
                        stiffness: 80,
                        damping: 18,
                        delay: index * 0.2,
                        opacity: { duration: 0.2, ease: 'easeOut', delay: index * 0.2 },
                      }}
                      className="group bg-cream/95 backdrop-blur-sm rounded-2xl p-5 lg:p-6 flex flex-col gap-4 hover:bg-cream transition-all duration-300 cursor-pointer"
                    >
                      {/* Title — visible immediately with the card */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[30px] lg:text-[38px] font-heading font-semibold text-charcoal leading-none tracking-tight group-hover:text-terracotta transition-colors duration-300">
                          {item.name}
                        </h3>
                        {/* Icon fades in after card settles */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.3, duration: 0.35, ease: 'easeOut' }}
                        >
                          <Icon className={`w-5 h-5 text-charcoal/35 shrink-0 mt-1 group-hover:text-terracotta/50 transition-colors duration-300 ${item.iconClass ?? ''}`} strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      {/* All data content slides up after the card settles */}
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.35, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-4"
                      >
                        {/* Spectrum track + dot */}
                        <div className="relative pt-5 pb-3">
                          <span
                            className="absolute top-0 text-[8px] font-semibold uppercase tracking-widest text-charcoal/40 -translate-x-1/2"
                            style={{ left: `${pos}%` }}
                          >
                            Today
                          </span>
                          <div className="relative flex items-center h-8">
                            <div
                              className="absolute inset-x-0 h-[3px] rounded-full"
                              style={{ background: TRACK_GRADIENT }}
                            />
                            {/* Lens bulge animates in slightly after the content section */}
                            <motion.svg
                              width="80"
                              height="26"
                              viewBox="0 0 80 26"
                              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                              style={{ left: `${pos}%`, transformOrigin: 'center' }}
                              initial={{ scaleX: 0, opacity: 0 }}
                              whileInView={{ scaleX: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.5, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <path
                                d="M 0,13 C 14,13 26,8 40,1 C 54,8 66,13 80,13 C 66,13 54,18 40,25 C 26,18 14,13 0,13 Z"
                                fill={dotFill[item.level]}
                              />
                            </motion.svg>
                          </div>
                        </div>

                        {/* Level + count */}
                        <div className="flex items-center justify-between">
                          <span className={`text-[11px] font-bold uppercase tracking-[0.14em] ${styles.label}`}>
                            {item.level}
                          </span>
                          <span className="text-[11px] text-charcoal/40 font-mono tabular-nums">
                            {item.count} g/m³
                          </span>
                        </div>

                        {/* Context line + local note */}
                        <div className="border-t border-charcoal/8 pt-3">
                          <p className="text-[12px] text-charcoal font-light leading-snug">
                            {item.context}
                          </p>
                          {item.localNote && (
                            <p className="text-[11px] text-terracotta/65 font-medium mt-1">
                              {item.localNote}
                            </p>
                          )}
                        </div>
                      </motion.div>

                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PollenCast */}
        <motion.div
          initial={{ opacity: 0, rotateX: -22 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'bottom center', transformPerspective: 900 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 18,
            delay: 0.5,
            opacity: { duration: 0.2, ease: 'easeOut', delay: 0.5 },
          }}
          className="mt-5 w-full lg:w-1/2 bg-cream-dark rounded-2xl px-8 py-8 lg:px-12 lg:py-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-5">

            {/* Label + season + link */}
            <div className="shrink-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-terracotta mb-1">PollenCast</p>
              <p className="text-[13px] font-medium text-charcoal leading-snug whitespace-nowrap">
                Spring 2026<br className="hidden lg:block" /><span className="lg:hidden"> · </span>Waco &amp; Central Texas
              </p>
              <a
                href="#education"
                className="group inline-flex items-center gap-1 mt-3 text-[11px] font-medium text-charcoal/45 hover:text-terracotta transition-colors"
              >
                Allergy Season Guide
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Divider */}
            <div className="h-px lg:h-auto lg:w-px bg-charcoal/10 shrink-0 lg:self-stretch" />

            {/* Forecast copy */}
            <p className="text-[15px] lg:text-[16px] text-charcoal font-light leading-relaxed">
              Spring is the fireworks finale of allergy season. Oak, elm, pecan, ash, hackberry, and mulberry all peak between March and May — and grasses are building right behind them. If your symptoms feel like they're coming from every direction, they probably are.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
