import { motion } from 'motion/react';
import { Wind, Droplets, Eye, Activity, Heart, Apple } from 'lucide-react';
import { cardMouseHandlers } from './CardGradientOverlay';

const symptoms = [
  { title: "Chronic Cough", desc: "Persistent coughing that won't go away, especially at night or after exercise.", icon: Wind },
  { title: "Sneezing & Congestion", desc: "Constant runny nose, sneezing fits, and sinus pressure that disrupts your day.", icon: Droplets },
  { title: "Itchy, Watery Eyes", desc: "Red, irritated eyes that make it hard to focus or enjoy the outdoors.", icon: Eye },
  { title: "Skin Rashes & Hives", desc: "Unexplained itchy patches, eczema flare-ups, or sudden hives.", icon: Activity },
  { title: "Shortness of Breath", desc: "Feeling winded easily, wheezing, or chest tightness.", icon: Heart },
  { title: "Food Reactions", desc: "Digestive issues, swelling, or discomfort after eating certain foods.", icon: Apple },
];

export default function SymptomsSection() {
  return (
    <section id="symptoms" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-forest mb-4 block">Recognize the Signs</span>
          <h2 className="text-[52px] lg:text-[80px] font-heading font-semibold text-charcoal mb-6 leading-[1.0]">
            Stop Guessing at Your Symptoms
          </h2>
          <p className="text-lg text-charcoal font-light leading-relaxed">
            Allergies and asthma can disguise themselves as endless colds, chronic fatigue, or unexplained skin issues. If you're experiencing any of these, it's time for answers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {symptoms.map((symptom, idx) => {
            const Icon = symptom.icon;
            return (
              <motion.div
                key={idx}
                {...cardMouseHandlers()}
                initial={{ opacity: 0, rotateX: -22 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                style={{ transformOrigin: 'bottom center', transformPerspective: 900 }}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: idx * 0.2, opacity: { duration: 0.2, ease: 'easeOut', delay: idx * 0.2 } }}
                className="group relative overflow-hidden bg-transparent border border-charcoal/15 rounded-3xl p-8 lg:p-10 flex flex-col min-h-[360px] hover:border-charcoal/30 hover:bg-cream-dark/50 transition-all duration-300"
              >
                {/* Top: title + oval icon */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-[30px] lg:text-[34px] font-heading font-semibold text-charcoal group-hover:text-forest transition-colors duration-300 leading-[1.1]">
                    {symptom.title}
                  </h3>
                  <div className="w-14 h-[80px] rounded-full border border-charcoal/65 group-hover:border-forest flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-charcoal/65 group-hover:text-forest transition-colors duration-300" strokeWidth={1.25} />
                  </div>
                </div>

                {/* Space */}
                <div className="flex-1" />

                {/* Bottom: desc + explore */}
                <div>
                  <p className="text-[15px] text-charcoal font-light leading-relaxed">
                    {symptom.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
