import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

const testimonials = [
  {
    name: "ANAND KUMAR",
    role: "Charter President",
    quote:
      "Their attention to detail and design thinking is next level. Our conversions improved within weeks.",
  },
  {
    name: "KEERTHIVASAN",
    role: "Event Chairperson",
    quote:
      "Beautiful UI, clean code, and extremely smooth delivery.",
  },
  {
    name: "PRIYADHARSHINI",
    role: "Event Secretary",
    quote:
      "A rare combination of creativity and technical excellence.",
  },
  {
    name: "HARI PRIYA",
    role: "",
    quote:
      "Pixel-perfect execution with great communication throughout.",
  },
];

const SPEED = 60; // px per second (increase to go faster)

const Testimonials: React.FC = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const loopWidth = useRef(0);

  // Measure width of ONE full set of cards
  useEffect(() => {
    if (containerRef.current) {
      loopWidth.current = containerRef.current.scrollWidth / 2;
    }
  }, []);

  // Uniform continuous motion
  useAnimationFrame((_, delta) => {
    if (isDragging.current) return;

    const moveBy = (SPEED * delta) / 1000;
    x.set(x.get() - moveBy);

    // Seamless loop without jumping to start
    if (x.get() <= -loopWidth.current) {
      x.set(x.get() + loopWidth.current);
    }
  });

  return (
    <section className="relative py-24 md:py-32 bg-[#030303] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="mb-12 md:mb-16 max-w-xl">
          <h3 className="text-2xl md:text-5xl font-bold tracking-tight">
            Trusted by ambitious teams
          </h3>
          <p className="text-neutral-400 mt-3 md:mt-4">
            What founders and product leaders say about working with us.
          </p>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />

        {/* Marquee */}
        <motion.div
          ref={containerRef}
          className="flex gap-4 md:gap-8 whitespace-nowrap cursor-grab active:cursor-grabbing will-change-transform"
          style={{ x }}
          drag="x"
          dragMomentum={false}
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={() => {
            isDragging.current = false;
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[260px]
                sm:min-w-[300px]
                md:min-w-[360px]
                max-w-[360px]
                bg-[#0b0b0b]
                border border-white/10
                rounded-2xl
                p-5 md:p-8
                flex flex-col
                overflow-hidden
                whitespace-normal
                break-words
                select-none
              "
            >
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                “{item.quote}”
              </p>

              <div className="mt-auto pt-6">
                <p className="font-semibold text-white text-sm md:text-base">
                  {item.name}
                </p>
                <p className="text-xs md:text-sm text-neutral-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
