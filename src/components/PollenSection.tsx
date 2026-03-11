import { motion } from 'motion/react';
import { CalendarDays, CircleHelp, Leaf, Wind, Droplets, Sprout } from 'lucide-react';

export default function PollenSection() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const pollenData = [
    { name: 'Trees', level: 'High', count: '1240', icon: Leaf },
    { name: 'Mold', level: 'Low', count: '32', icon: Droplets },
    { name: 'Grass', level: 'Moderate', count: '185', icon: Wind },
    { name: 'Weeds', level: 'High', count: '760', icon: Sprout },
  ];

  return (
    <section id="pollen" className="relative bg-cream py-28 lg:py-36">
      <div className="px-[25px]">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
            POLLEN COUNT
          </span>
          <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-0">
            <span className="inline-flex items-center justify-center gap-3">
              <span>Ready to head outside?</span>
              <span className="group relative inline-flex items-center">
                <button
                  type="button"
                  className="inline-flex h-6 w-6 items-center justify-center text-charcoal/70 transition-colors hover:text-charcoal focus:text-charcoal"
                  aria-label="The pollen count is a measure of the amount of pollen in the air at a given time. It is typically expressed as the number of grains of pollen per cubic meter of air."
                >
                  <CircleHelp className="h-4 w-4" />
                </button>
                <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-[300px] -translate-x-1/2 rounded-xl bg-charcoal px-4 py-3 text-left text-sm font-sans font-normal leading-relaxed text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                  The pollen count is a measure of the amount of pollen in the air at a given time. It is typically expressed as the number of grains of pollen per cubic meter of air.
                </span>
              </span>
            </span>
          </h2>
        </div>

        {/* Video background block — same width as hero image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[440px] lg:min-h-[560px]">
          <video
            src="/videos/waco_skyline.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute left-6 top-6 z-20 rounded-xl bg-cream px-4 py-3 text-charcoal shadow-sm lg:left-8 lg:top-8">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-charcoal/70">As of...</p>
                <p className="text-sm font-medium">{currentDate}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[440px] lg:min-h-[560px] items-center justify-end px-8 py-12 lg:px-16 lg:py-16">
            <div className="w-full lg:max-w-[760px]">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                  {pollenData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-cream rounded-2xl min-h-[220px] lg:min-h-[240px] p-10 lg:p-12 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform"
                    >
                      <div className="w-[72px] h-[72px] rounded-full bg-cream-dark flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-charcoal" />
                      </div>
                      <h3 className="text-[28px] lg:text-[34px] leading-none font-heading font-medium text-charcoal mb-4">{item.name}</h3>
                      <p className="text-[44px] lg:text-[56px] leading-none font-heading font-semibold text-charcoal mb-3">{item.count}</p>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-charcoal/65 mb-5">grains/m3</p>
                      <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium bg-cream-dark text-charcoal">
                        {item.level}
                      </span>
                    </motion.div>
                  );})}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
