import { motion } from 'motion/react';
import { ArrowRight, Stethoscope, Droplets, Wind, Activity, Apple, Video, FileText } from 'lucide-react';
import CardGradientOverlay, { cardMouseHandlers } from './CardGradientOverlay';

const treatments = [
  { title: "Immunotherapy (Allergy Shots)", desc: "Build tolerance and reduce symptoms long-term.", icon: Activity, href: "/treatment-immunotherapy.html" },
  { title: "Asthma Care", desc: "Breathe easier with personalized management plans.", icon: Wind, href: null },
  { title: "Allergy Testing", desc: "Pinpoint exactly what's causing your reactions.", icon: Stethoscope, href: null },
  { title: "Medication & Infusions", desc: "Targeted therapies for severe allergies and asthma.", icon: Droplets, href: null },
  { title: "Food Allergy Care", desc: "Safe testing and guidance for food sensitivities.", icon: Apple, href: null },
  { title: "Virtual Allergy Care", desc: "Expert advice from the comfort of your home.", icon: Video, href: null },
  { title: "Diagnosis & Care Planning", desc: "Comprehensive evaluations to find the root cause.", icon: FileText, href: null },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4 block">Our Services</span>
            <h2 className="text-[52px] lg:text-[80px] font-heading font-semibold text-charcoal mb-6 leading-[1.0]">
              Comprehensive Care for Lasting Relief
            </h2>
            <p className="text-lg text-charcoal font-light leading-relaxed">
              We offer a full spectrum of diagnostic and treatment options tailored to your unique needs, from traditional allergy shots to advanced biologics.
            </p>
          </motion.div>
          <a href="#" className="hidden md:inline-flex group items-center justify-center gap-2 bg-cream-dark hover:bg-sand/50 text-charcoal px-8 py-4 rounded-2xl text-base font-medium transition-all shrink-0">
            View All Treatments
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {treatments.map((treatment, idx) => {
            const Icon = treatment.icon;
            const Tag = treatment.href ? motion.a : motion.div;
            const linkProps = treatment.href ? { href: treatment.href } : {};
            const mouseHandlers = cardMouseHandlers();
            // Keep stagger consistent by row/column so the last card does not lag.
            const row = Math.floor(idx / 2);
            const col = idx % 2;
            const delay = row * 0.16 + col * 0.08;
            return (
              <Tag
                key={idx}
                {...linkProps}
                {...mouseHandlers}
                initial={{ opacity: 0, rotateX: -22 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                style={{ transformOrigin: 'bottom center', transformPerspective: 900 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay, opacity: { duration: 0.2, ease: 'easeOut', delay } }}
                className="group relative overflow-hidden bg-cream-dark rounded-3xl p-10 lg:p-14 flex flex-col min-h-[330px] lg:min-h-[390px] cursor-pointer hover:bg-sand/40 transition-colors duration-300"
              >
                <CardGradientOverlay index={idx} />
                {/* Top: title + oval icon */}
                <div className="flex justify-between items-start gap-6">
                  <h3 className="text-[28px] lg:text-[34px] font-heading font-semibold text-charcoal group-hover:text-terracotta transition-colors duration-300 leading-[1.1]">
                    {treatment.title}
                  </h3>
                  <div className="w-14 h-[80px] rounded-full border border-charcoal/65 group-hover:border-terracotta flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-charcoal/65 group-hover:text-terracotta transition-colors duration-300" strokeWidth={1.25} />
                  </div>
                </div>

                {/* Space */}
                <div className="flex-1" />

                {/* Bottom: desc + explore */}
                <div>
                  <p className="text-[16px] text-charcoal font-light leading-relaxed mb-7">
                    {treatment.desc}
                  </p>
                  <div className="flex items-center text-[14px] font-medium text-charcoal group-hover:text-terracotta transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
