import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do I need a referral to see an allergist?",
    answer: "In most cases, you do not need a referral to schedule an appointment with us. However, some insurance plans (like HMOs) may require one. We recommend checking with your insurance provider, or you can call our office and we'll help you verify your benefits.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer: "Your initial visit will typically last 1-2 hours. It includes a comprehensive medical history review, a physical exam, and often allergy testing (usually skin prick testing). We'll discuss the results with you immediately and formulate a personalized treatment plan.",
  },
  {
    question: "Do allergy shots really work?",
    answer: "Yes. Immunotherapy (allergy shots) is the only treatment that actually changes your immune system's response to allergens. While medications only treat symptoms temporarily, allergy shots can provide long-lasting relief and even prevent the development of new allergies.",
  },
  {
    question: "What age do you start treating children?",
    answer: "We treat patients of all ages, from infants to seniors. For children, we offer specialized pediatric allergy and asthma care, including gentle testing methods and age-appropriate treatment plans.",
  },
  {
    question: "How do I prepare for an allergy test?",
    answer: "You will need to stop taking antihistamines (like Zyrtec, Claritin, Allegra, or Benadryl) 5-7 days before your appointment, as these medications can interfere with the test results. We will provide a detailed list of medications to avoid when you schedule your visit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-36 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-[90px]">
        <div className="text-center mb-24">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Common Questions</span>
          <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-cream-dark rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-heading text-charcoal pr-8">{faq.question}</span>
                <span className="text-accent shrink-0">
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-charcoal font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
