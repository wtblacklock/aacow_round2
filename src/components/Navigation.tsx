import { useState, useEffect } from 'react';
import { Menu, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const treatments = [
  { label: 'Immunotherapy (Allergy Shots)', href: '#' },
  { label: 'Allergy Testing', href: '#' },
  { label: 'Medication & Infusions', href: '#' },
  { label: 'Food Allergy Care', href: '#' },
  { label: 'Virtual Allergy Care', href: '#' },
  { label: 'Diagnosis & Care Planning', href: '#' },
  { label: 'Asthma Care', href: '#', disabled: true },
];

const resources = [
  { label: 'Blog', href: '#' },
  { label: 'Allergy Education / FAQs', href: '#' },
];

const mobileLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Allergy Seasons', href: '#pollen' },
  { label: 'Resources', href: '#education' },
  { label: 'New Patients', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Patient Portal', href: '#' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md">
        <div className="px-[25px]">
          <div className="flex items-center h-[78px]">

            {/* Left: Logo */}
            <div className="flex-1 flex items-center">
              <img src="/images/icons/aacow_logo.svg" alt="Allergy & Asthma Care of Waco" className="h-10 w-auto cursor-pointer" />
            </div>

            {/* Center: Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">

              {/* Treatments dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-[16.5px] font-heading font-bold text-charcoal hover:text-accent transition-colors py-2 whitespace-nowrap">
                  Treatments <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-cream rounded-xl shadow-lg p-3 flex flex-col gap-0.5 w-64">
                    {treatments.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`text-[15px] font-medium px-3 py-2 rounded-lg transition-colors ${
                          item.disabled
                            ? 'text-charcoal/30 cursor-not-allowed pointer-events-none'
                            : 'text-charcoal hover:text-accent hover:bg-accent/5'
                        }`}
                      >
                        {item.label}
                        {item.disabled && <span className="ml-2 text-[10px] tracking-wide uppercase opacity-60">Soon</span>}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">Allergy Seasons</a>

              {/* Resources dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-[16.5px] font-heading font-bold text-charcoal hover:text-accent transition-colors py-2 whitespace-nowrap">
                  Resources <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-cream rounded-xl shadow-lg p-3 flex flex-col gap-0.5 w-56">
                    {resources.map((item) => (
                      <a key={item.label} href={item.href} className="text-[15px] font-medium text-charcoal hover:text-accent hover:bg-accent/5 px-3 py-2 rounded-lg transition-colors">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">New Patients</a>
              <a href="#" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">About</a>
              <a href="#" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">Patient Portal</a>
            </div>

            {/* Right: Desktop CTAs */}
            <div className="flex-1 hidden lg:flex items-center justify-end gap-4">
              <a href="tel:+12545551234" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-charcoal hover:text-accent transition-colors whitespace-nowrap">
                <Phone className="w-3.5 h-3.5" />
                (254) 555-1234
              </a>
              <a href="#" className="bg-terracotta hover:bg-terracotta-hover text-white px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors shadow-sm whitespace-nowrap">
                Request Appointment
              </a>
            </div>

            {/* Mobile: Book CTA + hamburger */}
            <div className="lg:hidden flex-1 flex items-center justify-end gap-3">
              <a href="#" className="bg-terracotta text-white px-4 py-2 rounded-lg text-[12px] font-semibold">
                Book
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="text-charcoal"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col lg:hidden"
          >
            {/* Top bar — mirrors nav bar */}
            <div className="px-[25px] flex items-center justify-between h-[78px] shrink-0 border-b border-sand/40">
              <img src="/images/icons/aacow_logo.svg" alt="Allergy & Asthma Care of Waco" className="h-10 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-charcoal/8 flex items-center justify-center text-charcoal"
                aria-label="Close menu"
              >
                {/* X icon inline */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-[25px]">
              {mobileLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center py-5 border-b border-charcoal/10 text-[34px] font-heading font-semibold text-charcoal leading-none"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + mobileLinks.length * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsOpen(false)}
                className="flex items-center py-5 border-b border-charcoal/10 text-[34px] font-heading font-semibold text-terracotta leading-none"
              >
                Book Appointment
              </motion.a>
            </div>

            {/* Bottom: phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="px-[25px] pb-10 pt-5 shrink-0"
            >
              <a href="tel:2545550199" className="inline-flex items-center gap-2 text-[15px] font-medium text-charcoal/60">
                <Phone className="w-4 h-4 shrink-0" />
                (254) 555-0199
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
