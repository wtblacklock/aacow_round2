import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import CardGradientOverlay, { cardMouseHandlers } from './CardGradientOverlay';

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
    <section id="faq" className="py-28 lg:py-36 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-[90px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-terracotta mb-4 block">Common Questions</span>
          <h2 className="text-[52px] lg:text-[80px] font-heading font-semibold text-charcoal leading-[1.0]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              {...cardMouseHandlers()}
              className="relative bg-cream-dark rounded-2xl overflow-hidden"
            >
              <CardGradientOverlay index={idx} />
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none group/btn hover:text-terracotta transition-colors"
              >
                <span className="text-[20px] font-heading font-semibold leading-tight text-charcoal group-hover/btn:text-terracotta transition-colors pr-8">{faq.question}</span>
                <span className={`shrink-0 transition-all duration-300 ${openIndex === idx ? 'text-terracotta rotate-45' : 'text-charcoal'}`}>
                  <Plus className="w-5 h-5" />
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className={`min-h-0 overflow-hidden px-8 text-[16px] text-charcoal font-light leading-relaxed transition-[padding-bottom] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${openIndex === idx ? 'pb-7' : 'pb-0'}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
