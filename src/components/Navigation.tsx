import { useState, useEffect } from 'react';
import { Menu, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const treatments = [
  { label: 'Immunotherapy (Allergy Shots)', href: '/treatment-immunotherapy.html' },
  { label: 'Asthma Care',                  href: '#' },
  { label: 'Allergy Testing',              href: '#' },
  { label: 'Medication & Infusions',       href: '#' },
  { label: 'Food Allergy Care',            href: '#' },
  { label: 'Virtual Allergy Care',         href: '#' },
  { label: 'Diagnosis & Care Planning',    href: '#' },
];

const resources = [
  { label: 'Blog',                    href: '/blog.html' },
  { label: 'Allergy Education / FAQs', href: '#education' },
];

// Mobile top-level — "Treatments" and "Resources" expand inline
const mobileTopLinks = [
  { label: 'Treatments',     submenu: treatments },
  { label: 'Allergy Seasons', href: '#pollen' },
  { label: 'Resources',      submenu: resources },
  { label: 'New Patients',   href: '#' },
  { label: 'About',          href: '/about.html' },
  { label: 'Patient Portal', href: '#' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md">
        <div className="px-[25px]">
          <div className="flex items-center h-[78px]">

            {/* Logo */}
            <div className="flex-1 flex items-center">
              <img src="/images/icons/aacow_logo.svg" alt="Allergy & Asthma Care of Waco" className="h-10 w-auto cursor-pointer" />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">

              {/* Treatments dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-[16.5px] font-heading font-bold text-charcoal hover:text-terracotta transition-colors py-2 whitespace-nowrap">
                  Treatments <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white rounded-2xl border border-sand/50 overflow-hidden" style={{ width: '320px' }}>
                    {treatments.map((item, i) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`group/item flex items-center justify-between px-5 py-3.5 transition-colors ${
                          i < treatments.length - 1 ? 'border-b border-charcoal/6' : ''
                        } hover:bg-terracotta/5`}
                      >
                        <span className="text-[14.5px] font-medium text-charcoal group-hover/item:text-terracotta transition-colors leading-snug">
                          {item.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-charcoal/25 group-hover/item:text-terracotta group-hover/item:translate-x-0.5 transition-all shrink-0 ml-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#pollen" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-terracotta transition-colors whitespace-nowrap">Allergy Seasons</a>

              {/* Resources dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-[16.5px] font-heading font-bold text-charcoal hover:text-terracotta transition-colors py-2 whitespace-nowrap">
                  Resources <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white rounded-2xl border border-sand/50 overflow-hidden" style={{ width: '280px' }}>
                    {resources.map((item, i) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`group/item flex items-center justify-between px-5 py-3.5 transition-colors ${
                          i < resources.length - 1 ? 'border-b border-charcoal/6' : ''
                        } hover:bg-terracotta/5`}
                      >
                        <span className="text-[14.5px] font-medium text-charcoal group-hover/item:text-terracotta transition-colors">
                          {item.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-charcoal/25 group-hover/item:text-terracotta group-hover/item:translate-x-0.5 transition-all shrink-0 ml-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-terracotta transition-colors whitespace-nowrap">New Patients</a>
              <a href="/about.html" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-terracotta transition-colors whitespace-nowrap">About</a>
              <a href="#" className="text-[16.5px] font-heading font-bold text-charcoal hover:text-terracotta transition-colors whitespace-nowrap">Patient Portal</a>
            </div>

            {/* Desktop CTAs */}
            <div className="flex-1 hidden lg:flex items-center justify-end gap-4">
              <a href="tel:2547533646" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-charcoal hover:text-terracotta transition-colors whitespace-nowrap border border-charcoal/20 hover:border-terracotta/40 rounded-xl px-4 py-2">
                <Phone className="w-3.5 h-3.5" />
                Call Us
              </a>
              <a href="#" className="bg-terracotta hover:bg-terracotta-hover text-white px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-colors whitespace-nowrap">
                Request Appointment
              </a>
            </div>

            {/* Mobile: Book + hamburger */}
            <div className="lg:hidden flex-1 flex items-center justify-end gap-3">
              <a href="#" className="bg-terracotta text-white px-4 py-2 rounded-lg text-[12px] font-semibold">
                Book
              </a>
              <button onClick={() => setIsOpen(true)} className="text-charcoal" aria-label="Open menu">
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
            {/* Top bar */}
            <div className="px-[25px] flex items-center justify-between h-[78px] shrink-0 border-b border-sand/40">
              <img src="/images/icons/aacow_logo.svg" alt="Allergy & Asthma Care of Waco" className="h-10 w-auto" />
              <button
                onClick={closeAll}
                className="w-10 h-10 rounded-full bg-charcoal/8 flex items-center justify-center text-charcoal"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-[25px]">
              {mobileTopLinks.map(({ label, href, submenu }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  {submenu ? (
                    /* Expandable submenu row */
                    <div className="border-b border-charcoal/10">
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === label ? null : label)}
                        className="w-full flex items-center justify-between py-5 text-left"
                      >
                        <span className="text-[34px] font-heading font-semibold text-charcoal leading-none">
                          {label}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-charcoal/40 transition-transform duration-300 ${
                            openSubmenu === label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 flex flex-col gap-0">
                              {submenu.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={closeAll}
                                  className="group/sub flex items-center justify-between py-3 border-t border-charcoal/6 hover:text-terracotta transition-colors"
                                >
                                  <span className="text-[17px] font-medium text-charcoal group-hover/sub:text-terracotta transition-colors">
                                    {sub.label}
                                  </span>
                                  <ArrowRight className="w-4 h-4 text-charcoal/25 group-hover/sub:text-terracotta group-hover/sub:translate-x-0.5 transition-all shrink-0" />
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* Direct link row */
                    <a
                      href={href}
                      onClick={closeAll}
                      className="flex items-center py-5 border-b border-charcoal/10 text-[34px] font-heading font-semibold text-charcoal leading-none hover:text-terracotta transition-colors"
                    >
                      {label}
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Book Appointment */}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + mobileTopLinks.length * 0.05, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={closeAll}
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
              <a href="tel:2547533646" className="inline-flex items-center gap-2 text-[15px] font-medium text-charcoal/60">
                <Phone className="w-4 h-4 shrink-0" />
                (254) 753-3646
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
