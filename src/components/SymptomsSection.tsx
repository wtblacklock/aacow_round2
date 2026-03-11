import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const symptoms = [
  { title: "Chronic Cough", desc: "Persistent coughing that won't go away, especially at night or after exercise." },
  { title: "Sneezing & Congestion", desc: "Constant runny nose, sneezing fits, and sinus pressure that disrupts your day." },
  { title: "Itchy, Watery Eyes", desc: "Red, irritated eyes that make it hard to focus or enjoy the outdoors." },
  { title: "Skin Rashes & Hives", desc: "Unexplained itchy patches, eczema flare-ups, or sudden hives." },
  { title: "Shortness of Breath", desc: "Feeling winded easily, wheezing, or chest tightness." },
  { title: "Food Reactions", desc: "Digestive issues, swelling, or discomfort after eating certain foods." },
];

export default function SymptomsSection() {
  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Recognize the Signs</span>
          <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
            Stop Guessing at Your Symptoms
          </h2>
          <p className="text-lg text-charcoal font-light leading-relaxed">
            Allergies and asthma can disguise themselves as endless colds, chronic fatigue, or unexplained skin issues. If you're experiencing any of these, it's time for answers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map((symptom, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-cream-dark rounded-2xl p-10 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-heading text-charcoal mb-4 group-hover:text-accent transition-colors">
                {symptom.title}
              </h3>
              <p className="text-charcoal font-light leading-relaxed mb-8">
                {symptom.desc}
              </p>
              <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
