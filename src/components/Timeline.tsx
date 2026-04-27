import { motion } from 'motion/react';
import { Calendar, Stethoscope, ClipboardList, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "Schedule Your Visit",
    desc: "Book an appointment online or call our Waco office. We offer flexible scheduling to fit your life.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Evaluation",
    desc: "Meet with our board-certified allergists to discuss your medical history, symptoms, and concerns.",
  },
  {
    icon: ClipboardList,
    title: "Targeted Testing",
    desc: "We use advanced, comfortable testing methods to identify your specific triggers accurately.",
  },
  {
    icon: HeartPulse,
    title: "Personalized Care Plan",
    desc: "Receive a tailored treatment strategy designed to provide lasting relief and improve your quality of life.",
  },
];

export default function Timeline() {
  return (
    <section className="py-36 bg-cream relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <span className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4 block">What to Expect</span>
          <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
            Your Journey to Relief
          </h2>
          <p className="text-lg text-charcoal font-light leading-relaxed">
            We've designed our process to be clear, comfortable, and focused entirely on finding the right solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-forest/25" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-sage-tint flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <step.icon className="w-10 h-10 text-forest" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sage-tint flex items-center justify-center text-sm font-heading text-charcoal">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-heading text-charcoal mb-4 group-hover:text-forest transition-colors">
                {step.title}
              </h3>
              <p className="text-charcoal font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
