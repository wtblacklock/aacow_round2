import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function DoctorReassurance() {
  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/doctor/800/1000?blur=1" 
                alt="Dr. Smith" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-cream-dark p-8 rounded-2xl max-w-[280px] hidden md:block">
              <h4 className="font-heading text-xl text-charcoal mb-2">Dr. Jane Smith, MD</h4>
              <p className="text-sm text-charcoal font-light leading-relaxed">
                Board-Certified Allergist & Immunologist, serving Waco since 2005.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-6 block">A Message From Our Team</span>
            <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-8 leading-tight">
              "You don't have to just live with it."
            </h2>
            
            <div className="space-y-6 text-lg text-charcoal font-light leading-relaxed">
              <p>
                Many patients come to us after years of trying over-the-counter medications, avoiding the outdoors, or simply accepting that they'll always feel a little sick.
              </p>
              <p>
                Our philosophy is different. We believe in finding the root cause of your symptoms and creating a personalized plan to address it. Whether it's seasonal allergies, asthma, or food sensitivities, our goal is to help you reclaim your life.
              </p>
              <p>
                We take the time to listen, test accurately, and explain your options clearly. You deserve to breathe freely and live fully.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
