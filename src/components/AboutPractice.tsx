import { motion } from 'motion/react';
import { MapPin, Award, Users, Clock } from 'lucide-react';

export default function AboutPractice() {
  const stats = [
    { icon: Award, label: "Board-Certified", value: "Allergists" },
    { icon: Users, label: "Families Helped", value: "10,000+" },
    { icon: Clock, label: "Years in Waco", value: "45+" },
    { icon: MapPin, label: "Convenient", value: "Location" },
  ];

  return (
    <section className="py-36 bg-cream relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-6 block">Our Legacy</span>
            <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-8 leading-tight">
              Rooted in Waco Since 1978.
            </h2>
            
            <div className="space-y-6 text-lg text-charcoal font-light leading-relaxed">
              <p>
                Allergy & Asthma Care of Waco was founded on a simple principle: to provide the highest standard of specialized care to our local community. We aren't a corporate chain; we're your neighbors.
              </p>
              <p>
                Our board-certified physicians have dedicated their careers to understanding the unique environmental challenges of Central Texas. We know cedar fever, we know local molds, and we know how to treat them effectively.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent mb-2">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-heading text-charcoal">{stat.value}</div>
                  <div className="text-sm text-charcoal font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/clinic-exterior/800/1000?blur=1" 
                alt="AACOW Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-8 -left-8 bg-cream-dark p-8 rounded-2xl max-w-[320px] hidden md:block">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-lg text-charcoal mb-1">Visit Our Clinic</h4>
                  <p className="text-sm text-charcoal font-light leading-relaxed">
                    123 Medical Parkway, Suite 100<br />
                    Waco, TX 76712
                  </p>
                </div>
              </div>
              <a href="#" className="text-accent font-medium text-sm hover:underline">Get Directions &rarr;</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
