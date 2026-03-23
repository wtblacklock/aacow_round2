import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-28">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        {/* Hours section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <h4 className="font-heading text-lg text-white mb-8">Office Hours</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { day: 'Monday', regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
              { day: 'Tuesday', regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
              { day: 'Wednesday', regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
              { day: 'Thursday', regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
              { day: 'Friday', regular: '8:00 AM – 5:00 PM', injection: '8:00 AM – 4:45 PM' },
              { day: 'Saturday', regular: 'Closed', injection: null },
              { day: 'Sunday', regular: 'Closed', injection: null },
            ].map(({ day, regular, injection }) => (
              <div key={day} className="flex flex-col gap-1.5">
                <p className="text-xs font-medium uppercase tracking-widest text-white/40">{day.slice(0, 3)}</p>
                <div className="flex flex-col gap-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Regular</p>
                    <p className="text-xs font-light text-white/80">{regular}</p>
                  </div>
                  {injection && (
                    <div className="mt-1">
                      <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Injection</p>
                      <p className="text-xs font-light text-white/80">{injection}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-16 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img src="/images/icons/aacow_logo.svg" alt="Allergy & Asthma Care of Waco" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm font-light leading-relaxed mb-8 max-w-xs">
              Providing specialized, compassionate care for allergies and asthma in Central Texas since 1978.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Our Practice</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">New Patients</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-6">Treatments</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Immunotherapy (Shots)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Asthma Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Allergy Testing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Food Allergy Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Virtual Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>221 Jewell Drive<br />Waco, TX 76712</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <a href="tel:2547533646" className="hover:text-accent transition-colors">(254) 753-3646</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <a href="mailto:info@allergywaco.com" className="hover:text-accent transition-colors">info@allergywaco.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/50">
          <p>&copy; {new Date().getFullYear()} Allergy & Asthma Care of Waco. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
