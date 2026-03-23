import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, ChevronDown, X, Syringe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const hoursData = [
  { day: 'Monday',    regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
  { day: 'Tuesday',   regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
  { day: 'Wednesday', regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
  { day: 'Thursday',  regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
  { day: 'Friday',    regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
  { day: 'Saturday',  regular: 'Closed',            injection: null },
  { day: 'Sunday',    regular: 'Closed',            injection: null },
];

const todayIndex = (() => {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
})();

const todayStatus = hoursData[todayIndex].regular === 'Closed' ? 'Closed today' : 'Open today';
const todayHours = hoursData[todayIndex].regular === 'Closed' ? '' : hoursData[todayIndex].regular;

export default function ClinicInfoBar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-center gap-5 w-full">

        <span className="flex items-center gap-1.5 text-[13px] text-charcoal font-medium whitespace-nowrap">
          <MapPin className="w-3 h-3 shrink-0 text-terracotta" />
          221 Jewell Drive, Waco TX
        </span>

        <span className="w-px h-3.5 bg-charcoal/15 shrink-0" />

        <button
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          className="flex items-center gap-1.5 text-[13px] text-charcoal font-medium hover:text-terracotta transition-colors whitespace-nowrap"
        >
          <Clock className="w-3 h-3 shrink-0 text-terracotta" />
          {todayStatus}{todayHours && ` · ${todayHours}`}
          <ChevronDown className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        <div className="flex-1" />

        <span className="w-px h-3.5 bg-charcoal/15 shrink-0" />

        <a
          href="tel:2547533646"
          className="flex items-center gap-1.5 text-[13px] font-medium text-charcoal hover:text-terracotta transition-colors whitespace-nowrap"
        >
          <Phone className="w-3 h-3" />
          (254) 753-3646
        </a>

        <a
          href="#"
          className="bg-terracotta hover:bg-terracotta-hover text-white px-4 py-1.5 rounded-xl text-[12px] font-semibold transition-colors whitespace-nowrap"
        >
          Request Appointment
        </a>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden">
        <div className="flex items-center justify-between py-1">
          <a href="tel:2547533646" className="flex items-center gap-2 text-[15px] font-semibold text-charcoal">
            <Phone className="w-4 h-4 text-terracotta shrink-0" />
            (254) 753-3646
          </a>
          <a href="#" className="bg-terracotta text-white px-4 py-2 rounded-xl text-[12px] font-semibold">
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          className="w-full flex items-center justify-between border-t border-charcoal/10 py-2.5 mt-2 text-left"
        >
          <span className="flex items-center gap-2 text-[13px] text-charcoal font-medium">
            <Clock className="w-3.5 h-3.5 text-terracotta shrink-0" />
            {todayStatus}{todayHours && ` · ${todayHours}`}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-charcoal/50 shrink-0">
            All hours
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </span>
        </button>

        <div className="flex items-center gap-1.5 border-t border-charcoal/10 py-2 text-[13px] text-charcoal font-medium">
          <MapPin className="w-3 h-3 text-terracotta shrink-0" />
          221 Jewell Drive · Waco, TX 76712
        </div>
      </div>

      {/* ── Hours drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl border border-sand/60 z-40"
          >
            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-0.5">Clinic Hours</p>
                  <p className="text-[13px] font-medium text-charcoal">221 Jewell Drive · Waco, TX 76712</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors"
                  aria-label="Close hours"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {hoursData.map(({ day, regular, injection }, idx) => {
                  const isToday = idx === todayIndex;
                  const isClosed = regular === 'Closed';
                  return (
                    <div
                      key={day}
                      className={`rounded-xl p-3 flex flex-col gap-2 ${
                        isToday ? 'bg-charcoal' : isClosed ? 'bg-cream-dark/50 opacity-50' : 'bg-cream-dark'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className={`text-[10px] font-bold uppercase tracking-[0.12em] ${isToday ? 'text-white/55' : 'text-charcoal/45'}`}>
                          {day.slice(0, 3)}
                        </p>
                        {isToday && (
                          <span className="text-[8px] font-semibold uppercase tracking-wide text-terracotta bg-terracotta/15 px-1.5 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      {isClosed ? (
                        <p className="text-[11px] font-medium text-charcoal/35">Closed</p>
                      ) : (
                        <>
                          <div>
                            <p className={`text-[9px] uppercase tracking-wider mb-0.5 ${isToday ? 'text-white/35' : 'text-charcoal/35'}`}>Office</p>
                            <p className={`text-[11px] font-medium leading-snug ${isToday ? 'text-white' : 'text-charcoal'}`}>{regular}</p>
                          </div>
                          {injection && (
                            <div className={`pt-2 border-t ${isToday ? 'border-white/10' : 'border-sand/70'}`}>
                              <p className={`flex items-center gap-1 text-[9px] uppercase tracking-wider mb-0.5 ${isToday ? 'text-terracotta/80' : 'text-terracotta/65'}`}>
                                <Syringe className="w-2.5 h-2.5" /> Injections
                              </p>
                              <p className={`text-[11px] font-medium leading-snug ${isToday ? 'text-white/85' : 'text-charcoal/75'}`}>{injection}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
