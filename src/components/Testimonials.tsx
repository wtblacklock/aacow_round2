import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "After suffering for years with what I thought were just 'bad colds', the team here finally diagnosed my severe dust mite allergy. The immunotherapy has completely changed my life. I can breathe again.",
    author: "Sarah M.",
    location: "Waco, TX",
  },
  {
    quote: "They were so patient with my son's food allergy testing. The doctors took the time to explain everything to us and created a clear, manageable plan. We feel so much more confident now.",
    author: "David L.",
    location: "Woodway, TX",
  },
  {
    quote: "I've been to several specialists over the years, but the care here is unmatched. They don't just rush you out the door; they genuinely want to find the root cause of your asthma.",
    author: "Emily R.",
    location: "Hewitt, TX",
  },
];

export default function Testimonials() {
  return (
    <section className="py-36 bg-cream">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[90px]">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Patient Stories</span>
          <h2 className="text-5xl lg:text-6xl font-heading font-semibold text-charcoal mb-6">
            Real Relief, Real Lives
          </h2>
          <p className="text-lg text-charcoal font-light leading-relaxed">
            Don't just take our word for it. Hear from the families in our community who have found lasting relief.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-cream-dark rounded-2xl p-10 flex flex-col h-full relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-8 left-8" />
              <div className="pt-8 flex-grow">
                <p className="text-lg text-charcoal font-light leading-relaxed italic mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center text-charcoal font-heading text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-charcoal">{testimonial.author}</p>
                  <p className="text-sm text-charcoal font-light">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
