import { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'pollen',        label: 'Pollen'        },
  { id: 'symptoms',      label: 'Symptoms'      },
  { id: 'treatments',    label: 'Treatments'    },
  { id: 'immunotherapy', label: 'Immunotherapy' },
  { id: 'education',     label: 'Resources'     },
  { id: 'testimonials',  label: 'Stories'       },
  { id: 'about',         label: 'About'         },
  { id: 'faq',           label: 'FAQ'           },
];

export default function JumpNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Appear once the user has scrolled past the info bar (~220px)
    const onScroll = () => setVisible(window.scrollY > 220);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Active section tracking
    const sectionEls = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (intersecting.length > 0) setActive(intersecting[0].target.id);
      },
      { threshold: 0.15, rootMargin: '-110px 0px -40% 0px' }
    );
    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll the active pill into view within the bar on mobile
  useEffect(() => {
    if (!scrollRef.current || !active) return;
    const link = scrollRef.current.querySelector<HTMLElement>(`[data-id="${active}"]`);
    link?.scrollIntoView({ inline: 'nearest', behavior: 'smooth', block: 'nearest' });
  }, [active]);

  return (
    <div
      className={`fixed left-0 right-0 z-40 bg-white border-b border-sand/70 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-1 pointer-events-none'
      }`}
      style={{ top: '78px' }}
      aria-label="Page sections"
    >
      {/* Desktop: centered */}
      <div className="hidden lg:flex items-center justify-center h-10 gap-1 px-6">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            data-id={id}
            className={`px-4 h-full flex items-center text-[10.5px] font-semibold uppercase tracking-[0.10em] whitespace-nowrap transition-all border-b-2 ${
              active === id
                ? 'text-charcoal border-forest'
                : 'text-charcoal/40 border-transparent hover:text-charcoal/70 hover:border-sand'
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile: horizontally scrollable */}
      <div ref={scrollRef} className="jump-nav-scroll lg:hidden overflow-x-auto px-4">
        <div className="flex items-center h-10 gap-0 min-w-max">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              data-id={id}
              className={`px-3.5 h-full flex items-center text-[10px] font-semibold uppercase tracking-[0.10em] whitespace-nowrap transition-all border-b-2 ${
                active === id
                  ? 'text-charcoal border-forest'
                  : 'text-charcoal/40 border-transparent hover:text-charcoal/70'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
