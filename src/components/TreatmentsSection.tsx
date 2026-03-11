import { motion } from 'motion/react';
import { ArrowRight, Stethoscope, Droplets, Wind, Activity, Apple, Video, FileText } from 'lucide-react';

const treatments = [
  { title: "Immunotherapy (Allergy Shots)", desc: "Build tolerance and reduce symptoms long-term.", icon: Activity },
  { title: "Asthma Care", desc: "Breathe easier with personalized management plans.", icon: Wind },
  { title: "Allergy Testing", desc: "Pinpoint exactly what's causing your reactions.", icon: Stethoscope },
  { title: "Medication & Infusions", desc: "Targeted therapies for severe allergies and asthma.", icon: Droplets },
  { title: "Food Allergy Care", desc: "Safe testing and guidance for food sensitivities.", icon: Apple },
  { title: "Virtual Allergy Care", desc: "Expert advice from the comfort of your home.", icon: Video },
  { title: "Diagnosis & Care Planning", desc: "Comprehensive evaluations to find the root cause.", icon: FileText },
];

export default function TreatmentsSection() {
  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Our Services</span>
            <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
              Comprehensive Care for Lasting Relief
            </h2>
            <p className="text-lg text-charcoal font-light leading-relaxed">
              We offer a full spectrum of diagnostic and treatment options tailored to your unique needs, from traditional allergy shots to advanced biologics.
            </p>
          </div>
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-cream-dark hover:bg-cream text-charcoal px-8 py-4 rounded-2xl text-base font-medium transition-all shrink-0">
            View All Treatments
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {treatments.map((treatment, idx) => {
            const Icon = treatment.icon;
            return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-cream-dark rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-3xl bg-cream-dark flex items-center justify-center mb-8 transition-colors text-charcoal">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading text-charcoal mb-4 group-hover:text-accent transition-colors">
                {treatment.title}
              </h3>
              <p className="text-charcoal font-light leading-relaxed mb-8 flex-grow">
                {treatment.desc}
              </p>
              <div className="flex items-center text-accent font-medium text-sm mt-auto group-hover:translate-x-2 transition-transform">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
}
