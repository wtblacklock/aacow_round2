import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md">
      <div className="px-[25px]">
        <div className="flex justify-between items-center h-[78px]">

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img src="/images/icons/aacow_logo.svg" alt="Allergy & Asthma Care of Waco" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 ml-auto mr-6">

            {/* Treatments dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors py-2 whitespace-nowrap">
                Treatments <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-cream rounded-xl p-3 flex flex-col gap-0.5 w-64">
                  {treatments.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`text-[16px] font-medium px-3 py-2 rounded-lg transition-colors ${
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

            <a href="#" className="text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">Allergy Seasons</a>

            {/* Resources dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors py-2 whitespace-nowrap">
                Resources <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-cream rounded-xl p-3 flex flex-col gap-0.5 w-56">
                  {resources.map((item) => (
                    <a key={item.label} href={item.href} className="text-[16px] font-medium text-charcoal hover:text-accent hover:bg-accent/5 px-3 py-2 rounded-lg transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#" className="text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">New Patients</a>
            <a href="#" className="text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">About</a>
            <a href="#" className="text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">Patient Portal</a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+12545551234" className="inline-flex items-center gap-2 text-[18px] font-heading font-bold text-charcoal hover:text-accent transition-colors whitespace-nowrap">
              <Phone className="w-3.5 h-3.5" />
              (254) 555-1234
            </a>
            <a href="#" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-xl text-[13px] font-medium transition-colors shadow-sm whitespace-nowrap">
              Request Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal p-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t soft-border overflow-hidden"
          >
            <div className="px-[25px] py-6 flex flex-col gap-4">
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'treatments' ? null : 'treatments')}
                  className="flex items-center justify-between w-full text-[18px] font-medium text-charcoal py-1"
                >
                  Treatments <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'treatments' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === 'treatments' && (
                  <div className="mt-2 flex flex-col gap-1 pl-4 border-l-2 border-accent/20">
                    {treatments.map((item) => (
                      <a key={item.label} href={item.href} className={`text-[17px] py-1.5 ${item.disabled ? 'text-charcoal/30 pointer-events-none' : 'text-charcoal font-medium'}`}>
                        {item.label}{item.disabled && ' (coming soon)'}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-[18px] font-medium text-charcoal">Allergy Seasons</a>

              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'resources' ? null : 'resources')}
                  className="flex items-center justify-between w-full text-[18px] font-medium text-charcoal py-1"
                >
                  Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === 'resources' && (
                  <div className="mt-2 flex flex-col gap-1 pl-4 border-l-2 border-accent/20">
                    {resources.map((item) => (
                      <a key={item.label} href={item.href} className="text-[17px] font-medium text-charcoal py-1.5">{item.label}</a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-[18px] font-medium text-charcoal">New Patients</a>
              <a href="#" className="text-[18px] font-medium text-charcoal">About</a>
              <a href="#" className="text-[18px] font-medium text-charcoal">Patient Portal</a>

              <div className="pt-4 mt-2 border-t soft-border flex flex-col gap-3">
                <a href="tel:+12545551234" className="inline-flex items-center gap-2 text-[17px] font-medium text-charcoal">
                  <Phone className="w-4 h-4" /> (254) 555-1234
                </a>
                <a href="#" className="bg-accent text-white text-center px-6 py-3.5 rounded-xl text-[14px] font-medium">
                  Request Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
