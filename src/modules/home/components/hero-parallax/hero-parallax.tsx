"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";
import { HeaderParallax, ItemParallax, type ItemProps } from ".";

type HeroParallaxProps = {
  items: ItemProps[];
};

export function HeroParallax({ items = [] }: HeroParallaxProps) {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [250, 0]),
    springConfig,
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1100, 0]),
    springConfig,
  );

  return (
    <main
      ref={ref}
      className="relative flex min-h-[--view-height] flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeaderParallax />

      <motion.div className="pb-40 opacity-100" style={{ translateY }}>
        <motion.div className="space-x flex min-h-[--view-height] w-full flex-row items-center justify-center space-x-20 py-20">
          {items[0] && <ItemParallax item={items[0]} translate={translateX} />}
        </motion.div>

        <motion.div className="flex min-h-[--view-height] flex-row items-center justify-center space-x-20 bg-black text-foreground">
          {items[1] && (
            <ItemParallax item={items[1]} translate={translateXReverse} />
          )}
        </motion.div>

        <motion.div className="mb-40 flex flex-row-reverse space-x-20 space-x-reverse">
          {items[2] && <ItemParallax item={items[2]} translate={translateX} />}
        </motion.div>
      </motion.div>
    </main>
  );
}
